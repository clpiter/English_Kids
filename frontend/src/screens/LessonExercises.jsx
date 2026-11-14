import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import TapText from '../components/TapText'
import WordSheet from '../components/WordSheet'
import { buildLexicon } from '../utils/reading'
import { speak, speakEn } from '../utils/speech'
import { playWin } from '../utils/sounds'

// "Activity from lesson" (/book/:lesson/exercises): the questions and activities given after the lesson
// in the textbook. Every English line can be tapped word by word (spoken) or long-pressed (word dialog),
// and the Hindi translation can be shown under each line.
//
// A lesson's `exercises` is a list of sections:
//   { type, title: [en, hi], passage?: [en, hi], items }  (texts are [English, Hindi] pairs)
//   tf    items: { q, a: true|false }                      true / false
//   mcq   items: { q, options: [[en, hi]...], a: index }    choose the right answer
//   fill  items: { q: 'text with ___', a: 'answer' }       options: section `bank`, else all answers
//   qa    items: { q, a: [en, hi] }                        answer shown on request
//   match pairs: [[[en, hi], [en, hi]]...]                  tap left, then the right partner
//   pick  options: [[en, hi]...], answers: [indexes]       choose all the right ones
//   task  items: { q, a?: [en, hi] }                       an open activity, with an example if given
//   (`passage` is read aloud with 🔊, for the listening exercises)

const shuffle = (list, seed) => {
  const out = [...list]
  let s = seed
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function Line({ pair, ctx, tapSpeaks = true, className = '' }) {
  if (!pair) return null
  const [en, hi] = Array.isArray(pair) ? pair : [pair, '']
  return (
    <span className={`ex-line ${className}`}>
      <TapText text={en} lex={ctx.lex} onPick={ctx.pick} tapSpeaks={tapSpeaks} />
      {ctx.showHi && hi && (
        <span className="ex-hi" lang="hi">
          {hi}
        </span>
      )}
    </span>
  )
}

// one answer button: a tap answers (and speaks it), a long press on a word opens the word dialog
function Choice({ pair, ctx, state, onChoose, disabled }) {
  const en = Array.isArray(pair) ? pair[0] : pair
  return (
    <button
      className={`ex-choice ${state || ''}`}
      disabled={disabled}
      onClick={() => {
        speakEn(en)
        onChoose()
      }}
    >
      <Line pair={pair} ctx={ctx} tapSpeaks={false} />
    </button>
  )
}

function useAnswers(onScore) {
  const [answers, setAnswers] = useState({})
  const answer = (key, value, right) => {
    if (answers[key] !== undefined) return
    setAnswers((a) => ({ ...a, [key]: value }))
    onScore(key, right)
  }
  return [answers, answer]
}

function TrueFalse({ section, ctx, sid }) {
  const [answers, answer] = useAnswers(ctx.score)
  const { t } = useT()
  return section.items.map((it, i) => {
    const key = `${sid}-${i}`
    const got = answers[key]
    return (
      <div key={key} className="ex-item">
        <span className="ex-num">{i + 1}.</span>
        <div className="ex-body">
          <Line pair={it.q} ctx={ctx} />
          <div className="ex-choices row">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                className={`ex-choice small ${got === undefined ? '' : v === it.a ? 'right' : got === v ? 'wrong' : ''}`}
                disabled={got !== undefined}
                onClick={() => answer(key, v, v === it.a)}
              >
                {v ? '✅' : '❌'} {t(v ? 'exTrue' : 'exFalse')}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  })
}

function Choose({ section, ctx, sid }) {
  const [answers, answer] = useAnswers(ctx.score)
  return section.items.map((it, i) => {
    const key = `${sid}-${i}`
    const got = answers[key]
    return (
      <div key={key} className="ex-item">
        <span className="ex-num">{i + 1}.</span>
        <div className="ex-body">
          <Line pair={it.q} ctx={ctx} />
          <div className="ex-choices">
            {it.options.map((o, n) => (
              <Choice
                key={n}
                pair={o}
                ctx={ctx}
                disabled={got !== undefined}
                state={got === undefined ? '' : n === it.a ? 'right' : got === n ? 'wrong' : ''}
                onChoose={() => answer(key, n, n === it.a)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  })
}

function Fill({ section, ctx, sid }) {
  const [answers, answer] = useAnswers(ctx.score)
  const bank = useMemo(
    () => shuffle([...new Set(section.bank || section.items.map((it) => it.a))], sid.length * 7 + section.items.length),
    [section, sid],
  )
  return (
    <>
      {section.items.map((it, i) => {
        const key = `${sid}-${i}`
        const got = answers[key]
        const [en, hi] = Array.isArray(it.q) ? it.q : [it.q, '']
        const filled = got === undefined ? '_____' : `[ ${it.a} ]`
        const own = it.options || bank
        return (
          <div key={key} className="ex-item">
            <span className="ex-num">{i + 1}.</span>
            <div className="ex-body">
              <Line pair={[en.replace(/_{2,}/, filled), hi]} ctx={ctx} />
              {got !== undefined && got !== it.a && <span className="ex-wrong-note">✗ {got}</span>}
              <div className="ex-choices row">
                {own.map((w) => (
                  <Choice
                    key={w}
                    pair={w}
                    ctx={ctx}
                    disabled={got !== undefined}
                    state={got === undefined ? '' : w === it.a ? 'right' : got === w ? 'wrong' : ''}
                    onChoose={() => answer(key, w, w === it.a)}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

function Questions({ section, ctx, sid, open = false }) {
  const { t } = useT()
  const [shown, setShown] = useState({})
  return section.items.map((it, i) => {
    const key = `${sid}-${i}`
    const visible = open || shown[key]
    return (
      <div key={key} className="ex-item">
        <span className="ex-num">{i + 1}.</span>
        <div className="ex-body">
          <Line pair={it.q} ctx={ctx} />
          {it.a &&
            (visible ? (
              <div className="ex-answer">
                <button className="icon-btn" onClick={() => speakEn(it.a[0])} aria-label="answer">
                  🔊
                </button>
                <Line pair={it.a} ctx={ctx} />
              </div>
            ) : (
              <button className="btn btn-light ex-show" onClick={() => setShown((s) => ({ ...s, [key]: true }))}>
                💡 {t(section.type === 'task' ? 'exShowExample' : 'exShowAnswer')}
              </button>
            ))}
        </div>
      </div>
    )
  })
}

function Match({ section, ctx, sid }) {
  const [left, setLeft] = useState(null)
  const [done, setDone] = useState({}) // left index -> true
  const [wrong, setWrong] = useState(null)
  const rights = useMemo(() => shuffle(section.pairs.map((p, i) => i), sid.length * 13 + section.pairs.length), [section, sid])
  const choose = (r) => {
    if (left === null) return
    if (r === left) {
      setDone((d) => ({ ...d, [left]: true }))
      ctx.score(`${sid}-${left}`, !wrong || wrong.left !== left)
      setLeft(null)
      setWrong(null)
      if (Object.keys(done).length + 1 === section.pairs.length) playWin()
    } else {
      setWrong({ left, r })
      ctx.score(`${sid}-${left}`, false)
    }
  }
  return (
    <div className="ex-match">
      <div className="ex-match-col">
        {section.pairs.map((p, i) => (
          <Choice
            key={i}
            pair={p[0]}
            ctx={ctx}
            disabled={done[i]}
            state={done[i] ? 'right' : left === i ? 'picked' : ''}
            onChoose={() => setLeft(i)}
          />
        ))}
      </div>
      <div className="ex-match-col">
        {rights.map((r) => (
          <Choice
            key={r}
            pair={section.pairs[r][1]}
            ctx={ctx}
            disabled={done[r]}
            state={done[r] ? 'right' : wrong?.r === r && wrong.left === left ? 'wrong' : ''}
            onChoose={() => choose(r)}
          />
        ))}
      </div>
    </div>
  )
}

function Pick({ section, ctx, sid }) {
  const { t } = useT()
  const [chosen, setChosen] = useState([])
  const [checked, setChecked] = useState(false)
  const right = new Set(section.answers)
  const check = () => {
    setChecked(true)
    const ok = chosen.length === right.size && chosen.every((n) => right.has(n))
    ctx.score(sid, ok)
    if (ok) playWin()
  }
  return (
    <>
      <div className="ex-choices row">
        {section.options.map((o, n) => (
          <Choice
            key={n}
            pair={o}
            ctx={ctx}
            disabled={checked}
            state={checked ? (right.has(n) ? 'right' : chosen.includes(n) ? 'wrong' : '') : chosen.includes(n) ? 'picked' : ''}
            onChoose={() => setChosen((c) => (c.includes(n) ? c.filter((x) => x !== n) : [...c, n]))}
          />
        ))}
      </div>
      {!checked && (
        <button className="btn btn-primary ex-check" disabled={!chosen.length} onClick={check}>
          ✔️ {t('exCheck')}
        </button>
      )}
    </>
  )
}

const KINDS = {
  tf: { icon: '✅', render: TrueFalse },
  mcq: { icon: '🔘', render: Choose },
  fill: { icon: '✏️', render: Fill },
  qa: { icon: '❓', render: Questions },
  match: { icon: '🔗', render: Match },
  pick: { icon: '☑️', render: Pick },
  task: { icon: '🎨', render: Questions },
}

export default function LessonExercises({ params }) {
  const nav = useNav()
  const { t, bi } = useT()
  const { book, books, list: words, glossary } = useSelector((s) => s.words)
  const lesson = book.lessons.find((l) => l.id === params.lesson)
  const lex = useMemo(() => buildLexicon(words, glossary, undefined, lesson?.words || []), [words, glossary, lesson])
  const [showHi, setShowHi] = useState(false)
  const [picked, setPicked] = useState(null)
  const [scores, setScores] = useState({})
  const score = (key, right) => setScores((s) => (s[key] === undefined ? { ...s, [key]: right } : s))
  const ctx = { lex, pick: setPicked, showHi, score }

  if (!lesson) {
    return (
      <section className="screen narrow">
        <BackButton screen="book" />
        <p className="center muted">{t('notEnough')}</p>
      </section>
    )
  }
  const sections = lesson.exercises || []
  const bookInfo = books.find((b) => b.id === lesson.bookId)
  const values = Object.values(scores)
  const right = values.filter(Boolean).length

  return (
    <section className="screen narrow">
      <BackButton screen="book" params={{ lesson: lesson.id }} />
      <div className="card ex-head">
        <h1>📝 {t('exTitle')}</h1>
        <p className="muted">
          {bookInfo && <>{bi(bookInfo.shortHi, bookInfo.short)} · </>}
          {bi(lesson.titleHi, lesson.title)}
        </p>
        <p className="muted ex-tip">{t('exTip')}</p>
        <div className="ex-tools">
          <button className={`btn ${showHi ? 'btn-primary' : 'btn-light'}`} onClick={() => setShowHi((v) => !v)}>
            अ {t(showHi ? 'exHideHindi' : 'exShowHindi')}
          </button>
          {values.length > 0 && (
            <span className="ex-score">
              ✅ {right} / {values.length}
            </span>
          )}
        </div>
      </div>

      {sections.length === 0 && <p className="center muted">{t('exNone')}</p>}
      {sections.map((s, n) => {
        const kind = KINDS[s.type] || KINDS.task
        const Render = kind.render
        const sid = `s${n}`
        return (
          <div key={sid} className="card ex-section">
            <h3 className="ex-title">
              <span className="ex-kind">{kind.icon}</span>
              <span>
                {n + 1}. <Line pair={s.title} ctx={ctx} />
              </span>
            </h3>
            {s.passage && (
              <div className="ex-passage">
                <button
                  className="btn btn-sound"
                  onClick={() => speak([{ text: s.passage[0], lang: 'en-IN', rate: 0.85 }])}
                >
                  🔊 {t('exListen')}
                </button>
                <details>
                  <summary>{t('exReadPassage')}</summary>
                  <p className="ex-passage-text">
                    <Line pair={s.passage} ctx={ctx} />
                  </p>
                </details>
              </div>
            )}
            <Render section={s} ctx={ctx} sid={sid} />
          </div>
        )
      })}

      {sections.length > 0 && (
        <button className="btn btn-primary big" onClick={() => nav(go({ screen: 'book', params: { lesson: lesson.id } }))}>
          📖 {t('exBackToLesson')}
        </button>
      )}

      {picked && <WordSheet text={picked.text} entry={picked.entry} lesson={lesson.id} onClose={() => setPicked(null)} />}
    </section>
  )
}

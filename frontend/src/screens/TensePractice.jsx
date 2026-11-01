import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { saveGrammar } from '../store/profileSlice'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import ProgressBar from '../components/ProgressBar'
import Sparkles from '../components/Sparkles'
import Confetti from '../components/Confetti'
import WordImage from '../components/WordImage'
import { TENSES, TIMES, tenseById } from '../data/tenses'
import { QUIZ_KINDS, activityFor } from '../data/tenseActivities'
import { sameAnswer, sentence, verbForm, verbPhrase, wrongPhrases, wrongSentence } from '../utils/tense'
import { playCorrect, playWin, playWrong } from '../utils/sounds'
import { speak, speakEn } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

const shuffle = (list) => {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const pickOne = (list) => list[Math.floor(Math.random() * list.length)]

// other tenses for wrong options: the same time (past / present / future) first, they are the tricky ones
function otherTenses(tense, n) {
  const same = shuffle(TENSES.filter((x) => x.id !== tense.id && x.time === tense.time))
  const rest = shuffle(TENSES.filter((x) => x.time !== tense.time))
  return [...same, ...rest].slice(0, n)
}

// 4 options: the right text + the first different wrong texts
function optionsOf(right, wrongs) {
  const out = [right]
  for (const text of wrongs) {
    if (!out.includes(text)) out.push(text)
    if (out.length === 4) break
  }
  return shuffle(out).map((text) => ({ text, correct: text === right }))
}
const fromOtherTenses = (right, make, tense) => optionsOf(right, otherTenses(tense, 11).map(make))

// people for the action-word games
const PEOPLE = [
  { s: 'I', p: 'i', hi: 'मैं' },
  { s: 'You', p: 'pl', hi: 'तुम' },
  { s: 'He', p: '3', hi: 'वह (लड़का)' },
  { s: 'She', p: '3', hi: 'वह (लड़की)' },
  { s: 'We', p: 'pl', hi: 'हम' },
  { s: 'They', p: 'pl', hi: 'वे' },
  { s: 'Ravi', p: '3', hi: 'रवि' },
  { s: 'The children', p: 'pl', hi: 'बच्चे' },
]
const FORM_NAMES = {
  v2: { en: 'Past form (V2)', hi: 'भूतकाल रूप (V2)', note: 'yesterday …' },
  v3: { en: 'Past participle (V3)', hi: 'तीसरा रूप (V3)', note: 'has / have …' },
  ing: { en: '-ing form', hi: '-ing रूप', note: 'is / are …' },
  s: { en: 'He / she form', hi: 'he / she वाला रूप', note: 'he / she / it …' },
}

// questions made from the action words list (word = an "verbs" word with photo and Hindi)
function makeVerbQuestion(kind, tense, word) {
  const v = word.en
  if (kind === 'verbform') {
    const which = pickOne(Object.keys(FORM_NAMES))
    const { right, wrong } = verbForm(v, which)
    return {
      kind,
      tense,
      word,
      form: FORM_NAMES[which],
      answer: `${v} → ${right}`,
      options: optionsOf(right, shuffle(wrong)),
    }
  }
  // verbtense: person + verb + tense -> the right verb words
  const who = pickOne(PEOPLE)
  const ex = { s: who.s, p: who.p, v, rest: '' }
  const right = verbPhrase(tense.id, who.p, v)
  return {
    kind,
    tense,
    ex,
    word,
    who,
    answer: sentence(ex, tense.id),
    options: optionsOf(right, [...shuffle(wrongPhrases(tense.id, who.p, v)), ...otherTenses(tense, 11).map((o) => verbPhrase(o.id, who.p, v))]),
  }
}

function makeQuestion(kind, tense, ex, mix) {
  const aff = sentence(ex, tense.id)
  const vp = verbPhrase(tense.id, ex.p, ex.v)
  const base = { kind, tense, ex, answer: aff }
  switch (kind) {
    case 'fill':
      return { ...base, prompt: aff.replace(` ${vp} `, ' ____ '), hi: ex.hi, options: fromOtherTenses(vp, (o) => verbPhrase(o.id, ex.p, ex.v), tense) }
    case 'type':
      return { ...base, prompt: aff.replace(` ${vp} `, ` ____ (${ex.v}) `), hi: ex.hi, right: vp }
    case 'hindi':
      return { ...base, prompt: ex.hi, options: fromOtherTenses(aff, (o) => sentence(ex, o.id), tense) }
    case 'listen':
      return { ...base, options: fromOtherTenses(aff, (o) => sentence(ex, o.id), tense) }
    case 'neg': {
      const right = sentence(ex, tense.id, 'neg')
      return { ...base, prompt: aff, answer: right, options: fromOtherTenses(right, (o) => sentence(ex, o.id, 'neg'), tense) }
    }
    case 'q': {
      const right = sentence(ex, tense.id, 'q')
      return { ...base, prompt: aff, answer: right, options: fromOtherTenses(right, (o) => sentence(ex, o.id, 'q'), tense) }
    }
    case 'truefalse': {
      const isRight = Math.random() < 0.5
      const shown = isRight ? aff : wrongSentence(ex, tense.id)
      return {
        ...base,
        prompt: shown,
        hi: ex.hi,
        options: [
          { text: '✅ Right · सही', correct: isRight },
          { text: '❌ Wrong · ग़लत', correct: !isRight },
        ],
      }
    }
    case 'mistake': {
      const wrongs = wrongPhrases(tense.id, ex.p, ex.v)
      const shownWrong = pickOne(wrongs)
      return {
        ...base,
        prompt: `${ex.s} ${shownWrong}${ex.rest ? ` ${ex.rest}` : ''}.`,
        hi: ex.hi,
        options: optionsOf(vp, [...shuffle(wrongs.filter((w) => w !== shownWrong)), ...otherTenses(tense, 11).map((o) => verbPhrase(o.id, ex.p, ex.v))]),
      }
    }
    case 'which':
      return { ...base, prompt: aff, hi: ex.hi, options: fromOtherTenses(tense.en, (o) => o.en, tense) }
    case 'time': {
      const right = TIMES.find((x) => x.id === tense.time)
      return { ...base, prompt: aff, hi: ex.hi, options: TIMES.map((x) => ({ text: `${x.icon} ${x.en} · ${x.hi}`, correct: x === right })) }
    }
    case 'match': {
      // 4 pairs: English sentence <-> Hindi, from this tense (or several tenses in the mixed version)
      const pool = mix ? shuffle(TENSES).slice(0, 4).map((x) => ({ tense: x, ex: pickOne(x.examples) })) : shuffle(tense.examples).slice(0, 4).map((e) => ({ tense, ex: e }))
      const pairs = pool.map((p, i) => ({ id: i, en: sentence(p.ex, p.tense.id), hi: p.ex.hi }))
      return { ...base, pairs, right: shuffle(pairs.map((p) => p.id)), answer: pairs.map((p) => p.en).join(' ') }
    }
    default: {
      // order: put the words in the right order
      const words = aff.replace(/\.$/, '').split(' ')
      return { ...base, kind: 'order', prompt: ex.hi, words, tiles: shuffle(words.map((w, i) => ({ w, i }))) }
    }
  }
}

function buildQuiz(tenseId, mode, verbs = []) {
  const mix = tenseId === 'mix'
  const activity = activityFor(mode)
  const count = activity.id === 'match' ? 3 : mix ? 10 : 8
  const kinds = activity.kinds ? Array.from({ length: count }, () => activity.kinds[0]) : QUIZ_KINDS[mix ? 'mix' : 'single']
  const single = tenseById(tenseId)
  if (!mix && !single) return []
  const exs = single ? shuffle(single.examples) : []
  const verbDeck = shuffle(verbs)
  return kinds.map((kind, i) => {
    const tense = mix ? pickOne(TENSES) : single
    if ((kind === 'verbtense' || kind === 'verbform') && verbDeck.length) return makeVerbQuestion(kind, tense, verbDeck[i % verbDeck.length])
    if (kind === 'verbtense' || kind === 'verbform') kind = 'fill' // word list not loaded yet
    const ex = mix ? pickOne(tense.examples) : exs[i % exs.length]
    return makeQuestion(kind, tense, ex, mix)
  })
}

const PROMPTS = {
  fill: 'tenseQFill',
  type: 'tenseQType',
  hindi: 'tenseQHindi',
  listen: 'tenseQListen',
  neg: 'tenseQNeg',
  q: 'tenseQQuestion',
  truefalse: 'tenseQTrue',
  mistake: 'tenseQMistake',
  which: 'tenseQWhich',
  time: 'tenseQTime',
  match: 'tenseQMatch',
  verbtense: 'tenseQVerb',
  verbform: 'tenseQForm',
  order: 'tenseQOrder',
}

// One tense activity (/tense/:tense/practice?mode=fill) for one tense or for all ("mix")
export default function TensePractice({ params, profile }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.tensePractice)
  const tenseId = params.tense
  const activity = activityFor(params.mode)
  const wordList = useSelector((s) => s.words.list)
  const verbs = useMemo(() => wordList.filter((w) => w.category === 'verbs'), [wordList])
  const [round, setRound] = useState(0)
  const [questions, setQuestions] = useState(() => buildQuiz(tenseId, activity.id, verbs))
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({}) // index -> { correct, chosen }
  // per-question working state (word order tiles, typed text, matched pairs)
  const [picked, setPicked] = useState([])
  const [shake, setShake] = useState(null)
  const [slip, setSlip] = useState(false) // a wrong step inside a multi-step question
  const [typed, setTyped] = useState('')
  const [selected, setSelected] = useState(null) // match: chosen English sentence id
  const [matched, setMatched] = useState([])

  const q = questions[index]
  const answer = answers[index]
  const score = Object.values(answers).filter((a) => a.correct).length
  const finished = Object.keys(answers).length === questions.length

  // "Listen & choose": play the sentence when the question appears
  useEffect(() => {
    if (q?.kind === 'listen' && !answers[index]) speakEn(q.answer)
  }, [q, index, answers])

  const record = (correct, chosen) => {
    const next = { ...answers, [index]: { correct, chosen } }
    setAnswers(next)
    if (correct) playCorrect()
    else playWrong()
    if (q.kind !== 'match') speak([{ text: q.answer, lang: 'en-IN' }])
    if (Object.keys(next).length === questions.length) {
      const got = Object.values(next).filter((a) => a.correct).length
      setTimeout(playWin, 900)
      dispatch(saveGrammar({ id: profile._id, key: `tense-${tenseId}`, correct: got, total: questions.length }))
    }
  }

  const wrongStep = (id) => {
    setShake(id)
    setSlip(true)
    playWrong()
    setTimeout(() => setShake(null), 450)
  }

  const tapTile = (tile) => {
    if (answer || picked.includes(tile.i)) return
    if (tile.w !== q.words[picked.length]) return wrongStep(tile.i)
    const placed = [...picked, tile.i]
    setPicked(placed)
    if (placed.length === q.words.length) record(!slip, q.answer)
  }

  const tapHindi = (id) => {
    if (answer || selected === null || matched.includes(id)) return
    if (id !== selected) {
      setSelected(null)
      return wrongStep(`hi${id}`)
    }
    const done = [...matched, id]
    setMatched(done)
    setSelected(null)
    speakEn(q.pairs[id].en)
    if (done.length === q.pairs.length) record(!slip, 'matched')
  }

  const checkTyped = (e) => {
    e.preventDefault()
    if (answer || !typed.trim()) return
    record(sameAnswer(typed, q.right), typed.trim())
  }

  const goTo = (i) => {
    setIndex(i)
    setPicked(answers[i] ? questions[i]?.words?.map((_, k) => k) || [] : [])
    setMatched(answers[i] ? questions[i]?.pairs?.map((p) => p.id) || [] : [])
    setSlip(false)
    setTyped('')
    setSelected(null)
  }

  const again = () => {
    setQuestions(buildQuiz(tenseId, activity.id, verbs))
    setRound(round + 1)
    setAnswers({})
    goTo(0)
  }

  const backScreen = tenseId === 'mix' ? { screen: 'tenses' } : { screen: 'tense', params: { tense: tenseId } }
  const single = tenseById(tenseId)
  const where = tenseId === 'mix' ? t('tenseAllTenses') : bi(single?.hi || '', single?.en || '')

  if (finished && index === questions.length) {
    const good = score / questions.length >= 0.7
    return (
      <section className="screen narrow">
        {good && <Confetti />}
        <div className="card result-card center">
          <div className="result-face">{good ? '🏆' : '💪'}</div>
          <h1>
            {activity.icon} {bi(activity.hi, activity.en)}
          </h1>
          <p className="muted">{where}</p>
          <p className="result-score">
            ⭐ {score}/{questions.length}
          </p>
          <p>{t(good ? 'tenseGood' : 'tenseTryMore')}</p>
          <div className="lessons-actions">
            <button className="btn btn-primary" onClick={again}>
              🔁 {t('playAgain')}
            </button>
            <button className="btn btn-light" onClick={() => nav(go(backScreen))}>
              🎮 {t('tenseOtherGames')}
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (!q) return <p className="center muted">{t('notEnough')}</p>

  const showEnglishPrompt = ['fill', 'type', 'neg', 'q', 'truefalse', 'mistake', 'which', 'time'].includes(q.kind)

  return (
    <section className="screen narrow" key={round}>
      <div className="activity-top">
        <BackButton {...backScreen} />
        <h2 className="activity-title" style={{ '--c': activity.color }}>
          <span>{activity.icon}</span> {bi(activity.hi, activity.en)}
        </h2>
      </div>
      <p className="muted center">⏰ {where}</p>
      <div className="quiz">
        <div className="quiz-progress">
          <span>
            {index + 1}/{questions.length}
          </span>
          <ProgressBar value={Object.keys(answers).length} max={questions.length} color="#66bb6a" />
          <span>⭐ {score}</span>
        </div>

        <p className="quiz-question">{t(PROMPTS[q.kind])}</p>

        {(q.kind === 'verbtense' || q.kind === 'verbform') && (
          <div className="quiz-prompt pop-in verb-prompt" key={`v${index}`}>
            <WordImage word={q.word} size="lg" />
            <button className="prompt-text en clickable" onClick={() => speak([{ text: q.word.en, lang: 'en-IN' }, { text: q.word.hi, lang: 'hi-IN' }])}>
              {q.word.en} <span className="small-speaker">🔊</span>
            </button>
            <div className="muted" lang="hi">
              {q.word.hi}
            </div>
            {q.kind === 'verbtense' ? (
              <div className="verb-task">
                <span className="chip on">
                  {q.who.s} <small>{q.who.hi}</small>
                </span>
                <span>+</span>
                <span className="chip">{q.word.en}</span>
                <span>→</span>
                <span className="chip tense-chip">{bi(q.tense.hi, q.tense.en)}</span>
              </div>
            ) : (
              <div className="verb-task">
                <span className="chip tense-chip">{bi(q.form.hi, q.form.en)}</span>
                <span className="muted">{q.form.note}</span>
              </div>
            )}
          </div>
        )}

        {q.kind !== 'match' && q.kind !== 'verbtense' && q.kind !== 'verbform' && (
          <div className="quiz-prompt pop-in tense-prompt" key={index}>
            {q.kind === 'listen' && (
              <div className="listen-buttons">
                <button className="btn btn-sound big" onClick={() => speakEn(q.answer)}>
                  🔊 {t('tenseHearAgain')}
                </button>
                <button className="btn btn-sound" onClick={() => speak([{ text: q.answer, lang: 'en-IN', rate: 0.55 }])}>
                  🐢 {t('sayItSlowly')}
                </button>
              </div>
            )}
            {(q.kind === 'hindi' || q.kind === 'order') && <div className="prompt-text hi">{q.prompt}</div>}
            {showEnglishPrompt && (
              <button className="prompt-text en clickable" onClick={() => speakEn(q.prompt.replace(/____( \([a-z]+\))?/, '...'))}>
                {q.prompt} <span className="small-speaker">🔊</span>
              </button>
            )}
            {q.hi && <div className="muted">{q.hi}</div>}
          </div>
        )}

        {q.kind === 'order' && (
          <>
            <div className="order-line">
              {picked.map((ti) => (
                <span key={ti} className="slot filled pop-in">
                  {q.tiles.find((x) => x.i === ti).w}
                </span>
              ))}
              {!answer && <span className="slot ghost">…</span>}
            </div>
            <div className="tiles">
              {q.tiles.map((tile) => (
                <button
                  key={tile.i}
                  className={`tile word-tile ${picked.includes(tile.i) ? 'used' : ''} ${shake === tile.i ? 'shake wrong' : ''}`}
                  onClick={() => tapTile(tile)}
                  disabled={picked.includes(tile.i) || !!answer}
                >
                  {tile.w}
                </button>
              ))}
            </div>
          </>
        )}

        {q.kind === 'type' && (
          <form className="type-answer" onSubmit={checkTyped}>
            <input
              className="text-input"
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder={t('tenseTypeHint')}
              disabled={!!answer}
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
            />
            {!answer && (
              <button className="btn btn-primary" disabled={!typed.trim()}>
                ✔ {t('tenseCheck')}
              </button>
            )}
          </form>
        )}

        {q.kind === 'match' && (
          <div className="match-board pop-in" key={index}>
            <div className="match-col">
              {q.pairs.map((p) => (
                <button
                  key={p.id}
                  className={`option match-item ${matched.includes(p.id) ? 'right' : selected === p.id ? 'selected' : ''}`}
                  onClick={() => !answer && !matched.includes(p.id) && (setSelected(p.id), speakEn(p.en))}
                  disabled={matched.includes(p.id)}
                >
                  {p.en}
                </button>
              ))}
            </div>
            <div className="match-col">
              {q.right.map((id) => (
                <button
                  key={id}
                  className={`option match-item hi ${matched.includes(id) ? 'right' : ''} ${shake === `hi${id}` ? 'wrong shake' : ''}`}
                  onClick={() => tapHindi(id)}
                  disabled={matched.includes(id)}
                >
                  {q.pairs[id].hi}
                </button>
              ))}
            </div>
          </div>
        )}

        {q.options && (
          <div className={`options tense-options ${q.options.length < 4 ? 'few' : ''}`}>
            {q.options.map((opt) => (
              <button
                key={opt.text}
                className={`option ${answer ? (opt.correct ? 'right' : opt.text === answer.chosen ? 'wrong shake' : 'faded') : ''}`}
                onClick={() => !answer && record(opt.correct, opt.text)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        )}

        {answer && (
          <div className={`feedback pop-in ${answer.correct ? 'good' : 'bad'}`}>
            {answer.correct && <Sparkles />}
            <span className="feedback-title">{answer.correct ? <>🎉 {t('correct')}</> : <>🤔 {t('wrong')}</>}</span>
            {q.kind !== 'match' && (
              <button className="feedback-word" onClick={() => speakEn(q.answer)}>
                {q.answer} 🔊
              </button>
            )}
            {q.kind !== 'match' && q.ex?.hi && (
              <span className="tense-hi" lang="hi">
                {q.ex.hi}
              </span>
            )}
            {q.kind === 'verbform' ? (
              <span className="muted">
                {q.word.en} → {verbForm(q.word.en, 'v2').right} → {verbForm(q.word.en, 'v3').right} · {verbForm(q.word.en, 'ing').right}
              </span>
            ) : (
              <span className="muted">
                {bi(q.tense.hi, q.tense.en)} · {q.tense.structure.aff}
              </span>
            )}
            <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
              {index + 1 < questions.length ? <>{t('next')} ▶</> : <>🏁 {t('tenseSeeScore')}</>}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

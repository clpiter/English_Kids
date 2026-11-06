import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { go, useNav } from '../nav'
import { saveGrammar } from '../store/profileSlice'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import ProgressBar from '../components/ProgressBar'
import Sparkles from '../components/Sparkles'
import Confetti from '../components/Confetti'
import { STRUCTURES, structureById } from '../data/structures'
import { PREP_QUIZ, STRUCTURE_QUIZ, prepActivity, structureActivity } from '../data/structureActivities'
import { PREPOSITIONS, prepById, prepWrongKeys } from '../data/prepositions'
import { keyOf, sentenceOf, wrongKeys } from '../utils/grammar'

// the two kinds of grammar items these games work with
const SETS = {
  structure: {
    items: STRUCTURES,
    byId: structureById,
    key: keyOf,
    wrongs: (st, ex) => shuffle(wrongKeys(st, ex)),
    activity: structureActivity,
    quiz: STRUCTURE_QUIZ,
    param: 'structure',
    lesson: 'structure',
    prefix: 'gram',
    icon: '🧱',
    allLabel: 'gramAllStructures',
  },
  prep: {
    items: PREPOSITIONS,
    byId: prepById,
    key: (p) => p.word,
    // the usual mix-ups first (in random order), then other prepositions
    wrongs: (p) => {
      const list = prepWrongKeys(p)
      return [...shuffle(list.slice(0, 3)), ...list.slice(3)]
    },
    activity: prepActivity,
    quiz: PREP_QUIZ,
    param: 'prep',
    lesson: 'preposition',
    prefix: 'prep',
    icon: '🧲',
    allLabel: 'prepAll',
    prompts: { fill: 'prepQFill', type: 'prepQType', mistake: 'prepQMistake', which: 'prepQWhich' },
  },
}
import { sameAnswer } from '../utils/tense'
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

function optionsOf(right, wrongs) {
  const out = [right]
  for (const text of wrongs) {
    if (!out.includes(text)) out.push(text)
    if (out.length === 4) break
  }
  return shuffle(out).map((text) => ({ text, correct: text === right }))
}

function makeQuestion(set, kind, st, ex, mix) {
  const key = set.key(st, ex)
  const right = sentenceOf(st, ex, key)
  const wrongs = set.wrongs(st, ex)
  const base = { kind, st, ex, answer: right }
  switch (kind) {
    case 'fill':
      return { ...base, prompt: sentenceOf(st, ex, '____'), hi: ex.hi, options: optionsOf(key, wrongs) }
    case 'type':
      return { ...base, prompt: sentenceOf(st, ex, ex.v ? `____ (${ex.v})` : '____'), hi: ex.hi, right: key }
    case 'hindi':
      return { ...base, prompt: ex.hi, options: optionsOf(right, wrongs.map((w) => sentenceOf(st, ex, w))) }
    case 'listen':
      return { ...base, options: optionsOf(right, wrongs.map((w) => sentenceOf(st, ex, w))) }
    case 'truefalse': {
      const isRight = Math.random() < 0.5
      return {
        ...base,
        prompt: isRight ? right : sentenceOf(st, ex, wrongs[0]),
        hi: ex.hi,
        options: [
          { text: '✅ Right · सही', correct: isRight },
          { text: '❌ Wrong · ग़लत', correct: !isRight },
        ],
      }
    }
    case 'mistake':
      return { ...base, prompt: sentenceOf(st, ex, wrongs[0]), hi: ex.hi, options: optionsOf(key, wrongs.slice(1).concat(wrongs[0])) }
    case 'which': {
      const others = shuffle(set.items.filter((x) => x.id !== st.id)).map((x) => x.formula)
      return { ...base, prompt: right, hi: ex.hi, options: optionsOf(st.formula, others) }
    }
    case 'meaning': {
      // preposition -> its Hindi meaning
      const others = shuffle(set.items.filter((x) => x.id !== st.id)).map((x) => x.hi)
      return { ...base, prompt: st.word, answer: `${st.word} = ${st.hi}`, options: optionsOf(st.hi, others) }
    }
    case 'match': {
      const pool = mix ? shuffle(set.items).slice(0, 4).map((x) => ({ st: x, ex: pickOne(x.examples) })) : shuffle(st.examples).slice(0, 4).map((e) => ({ st, ex: e }))
      const pairs = pool.map((p, i) => ({ id: i, en: sentenceOf(p.st, p.ex, set.key(p.st, p.ex)), hi: p.ex.hi }))
      return { ...base, pairs, right: shuffle(pairs.map((p) => p.id)) }
    }
    default: {
      const words = right.replace(/\.$/, '').split(' ')
      return { ...base, kind: 'order', prompt: ex.hi, words, tiles: shuffle(words.map((w, i) => ({ w, i }))) }
    }
  }
}

function buildQuiz(set, id, mode) {
  const mix = id === 'mix'
  const activity = set.activity(mode)
  const single = set.byId(id)
  if (!mix && !single) return []
  const count = activity.id === 'match' ? 3 : mix ? 10 : 8
  const kinds = activity.kinds ? Array.from({ length: count }, () => activity.kinds[0]) : set.quiz[mix ? 'mix' : 'single']
  const exs = single ? shuffle(single.examples) : []
  return kinds.map((kind, i) => {
    const st = mix ? pickOne(set.items) : single
    return makeQuestion(set, kind, st, mix ? pickOne(st.examples) : exs[i % exs.length], mix)
  })
}

const PROMPTS = {
  fill: 'gramQFill',
  type: 'gramQType',
  hindi: 'tenseQHindi',
  listen: 'tenseQListen',
  truefalse: 'tenseQTrue',
  mistake: 'gramQMistake',
  which: 'gramQWhich',
  meaning: 'prepQMeaning',
  match: 'tenseQMatch',
  order: 'tenseQOrder',
}

// One game for a sentence structure (/grammar/:structure/practice?mode=fill) or all of them ("mix")
// One game for a structure or a preposition (kind = 'structure' | 'prep'); id "mix" = all of them
export default function StructurePractice({ params, profile, kind = 'structure' }) {
  const set = SETS[kind]
  const dispatch = useDispatch()
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.tensePractice)
  const id = params[set.param]
  const activity = set.activity(params.mode)
  const [round, setRound] = useState(0)
  const [questions, setQuestions] = useState(() => buildQuiz(set, id, activity.id))
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [picked, setPicked] = useState([])
  const [shake, setShake] = useState(null)
  const [slip, setSlip] = useState(false)
  const [typed, setTyped] = useState('')
  const [selected, setSelected] = useState(null)
  const [matched, setMatched] = useState([])

  const q = questions[index]
  const answer = answers[index]
  const score = Object.values(answers).filter((a) => a.correct).length
  const finished = Object.keys(answers).length === questions.length

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
      dispatch(saveGrammar({ id: profile._id, key: `${set.prefix}-${id}`, correct: got, total: questions.length }))
    }
  }

  const wrongStep = (key) => {
    setShake(key)
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

  const tapHindi = (pid) => {
    if (answer || selected === null || matched.includes(pid)) return
    if (pid !== selected) {
      setSelected(null)
      return wrongStep(`hi${pid}`)
    }
    const done = [...matched, pid]
    setMatched(done)
    setSelected(null)
    speakEn(q.pairs[pid].en)
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
    setQuestions(buildQuiz(set, id, activity.id))
    setRound(round + 1)
    setAnswers({})
    goTo(0)
  }

  const single = set.byId(id)
  const backScreen = id === 'mix' ? { screen: 'grammar' } : { screen: set.lesson, params: { [set.param]: id } }
  const where = id === 'mix' ? t(set.allLabel) : single ? (single.word ? `${single.word} = ${single.hi}` : single.formula) : ''

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
          <p>{t(good ? 'gramGood' : 'tenseTryMore')}</p>
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
  const englishPrompt = ['fill', 'type', 'truefalse', 'mistake', 'which', 'meaning'].includes(q.kind)

  return (
    <section className="screen narrow" key={round}>
      <div className="activity-top">
        <BackButton {...backScreen} />
        <h2 className="activity-title" style={{ '--c': activity.color }}>
          <span>{activity.icon}</span> {bi(activity.hi, activity.en)}
        </h2>
      </div>
      <p className="muted center">{set.icon} {where}</p>
      <div className="quiz">
        <div className="quiz-progress">
          <span>
            {index + 1}/{questions.length}
          </span>
          <ProgressBar value={Object.keys(answers).length} max={questions.length} color="#66bb6a" />
          <span>⭐ {score}</span>
        </div>

        <p className="quiz-question">{t(set.prompts?.[q.kind] || PROMPTS[q.kind])}</p>

        {q.kind !== 'match' && (
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
            {englishPrompt && (
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
              placeholder={t('gramTypeHint')}
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
              {q.right.map((pid) => (
                <button
                  key={pid}
                  className={`option match-item hi ${matched.includes(pid) ? 'right' : ''} ${shake === `hi${pid}` ? 'wrong shake' : ''}`}
                  onClick={() => tapHindi(pid)}
                  disabled={matched.includes(pid)}
                >
                  {q.pairs[pid].hi}
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
            <span className="muted">
              {set.icon} {q.st.word ? `${q.st.word} = ${q.st.hi}` : q.st.formula}
            </span>
            <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
              {index + 1 < questions.length ? <>{t('next')} ▶</> : <>🏁 {t('tenseSeeScore')}</>}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

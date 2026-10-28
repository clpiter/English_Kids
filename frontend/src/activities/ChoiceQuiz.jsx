import { useEffect, useRef, useState } from 'react'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import Instruction from '../components/Instruction'
import WordImage from '../components/WordImage'
import GameNav from '../components/GameNav'
import HintButton from '../components/HintButton'
import Sparkles from '../components/Sparkles'
import { buildQuestion, buildQuestions } from '../utils/questions'
import { playCorrect, playWrong } from '../utils/sounds'
import { speak, speakEn, speakWord } from '../utils/speech'
import { useHint } from '../utils/useHint'
import { VOICE } from '../utils/voice'

const PROMPT_KEY = {
  picture: 'qPicture',
  listen: 'qListen',
  hindi: 'qHindi',
  meaning: 'qMeaning',
  yesno: 'qYesNo',
  missing: 'qMissing',
}

const cleanHi = (text) => text.replace(/\(.*?\)/g, '')

// Multiple-choice games: picture, listen, hindi, meaning, yesno, missing.
// - ◀ ▶ move between questions (answered ones show their answer)
// - a wrong word is asked once more at the end ("try again") to help remember it
// - hints appear when the kid takes a while (see useHint)
export default function ChoiceQuiz({ mode, pool, all, profile, onFinish }) {
  const { t } = useT()
  const [questions, setQuestions] = useState(() => buildQuestions(mode, pool, all, profile))
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({}) // question index -> { id, correct, hinted }
  const timer = useRef(null)
  const finished = useRef(false)
  const q = questions[index]
  const answer = answers[index]
  const answered = !!answer
  const [hint, moreHint] = useHint(index, !!q && !answered)

  // Hindi instruction on the first question, then the English word for listening games
  useEffect(() => {
    if (!q) return
    const parts = []
    if (index === 0 && !answered) parts.push({ text: VOICE[mode], lang: 'hi-IN' })
    if (!answered && (mode === 'listen' || mode === 'meaning')) parts.push({ text: q.word.en, lang: 'en-IN' })
    if (parts.length) speak(parts)
    // only when a question is shown, not after answering it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, mode, index])

  // Spoken hints
  useEffect(() => {
    if (!q || answered || hint === 0) return
    if (hint === 1) {
      if (mode === 'listen' || mode === 'meaning' || mode === 'missing') speakEn(q.word.en)
      else if (mode === 'yesno') speak([{ text: `${q.shown.en}`, lang: 'en-IN' }, { text: cleanHi(q.shown.hi), lang: 'hi-IN' }])
      else speak([{ text: 'संकेत: पहला अक्षर है', lang: 'hi-IN' }, { text: q.word.en[0].toUpperCase(), lang: 'en-IN' }])
    } else {
      speak([{ text: 'एक गलत जवाब हटा दिया', lang: 'hi-IN' }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hint])

  useEffect(() => () => clearTimeout(timer.current), [])

  if (!q) return <p className="center muted">{t('notEnough')}</p>

  // What the kid picked, in words (saved with the mistake)
  const chosenText = (opt) => {
    if (mode === 'listen') return all.find((w) => w.key === opt.id)?.en || ''
    if (mode === 'yesno') return `${q.shown.en}: ${opt.id}`
    return opt.label
  }

  const results = (allAnswers, qs) =>
    qs
      .map((question, i) => {
        const a = allAnswers[i]
        if (!a) return null
        return {
          key: question.word.key,
          correct: a.correct,
          ...(a.correct ? {} : { chosen: a.chosen }),
          ...(a.hinted ? { hinted: true } : {}),
          ...(question.retry ? { retry: true } : {}),
        }
      })
      .filter(Boolean)

  const goTo = (i) => {
    clearTimeout(timer.current)
    setIndex(Math.max(0, Math.min(questions.length - 1, i)))
  }

  const choose = (opt) => {
    if (answered) return
    const next = { ...answers, [index]: { id: opt.id, correct: opt.correct, chosen: chosenText(opt), hinted: hint > 0 } }
    setAnswers(next)

    // ask a wrong word again at the end of the game, once
    let qs = questions
    if (!opt.correct && !q.retry) {
      qs = [...questions, { ...buildQuestion(mode, q.word, pool, all), retry: true }]
      setQuestions(qs)
    }

    if (opt.correct) playCorrect()
    else playWrong()
    setTimeout(() => speakWord(q.word), 350)

    timer.current = setTimeout(
      () => {
        // next unanswered question after this one (or before it, if the kid skipped some)
        const order = [...qs.keys()].slice(index + 1).concat([...qs.keys()].slice(0, index))
        const nextIndex = order.find((i) => !next[i])
        if (nextIndex === undefined) {
          if (!finished.current) {
            finished.current = true
            onFinish(results(next, qs))
          }
        } else {
          setIndex(nextIndex)
        }
      },
      opt.correct ? 2200 : 3200,
    )
  }

  // hint levels 2 and 3 take away wrong options
  const wrongOptions = q.options.filter((o) => !o.correct)
  const eliminated = new Set(answered ? [] : wrongOptions.slice(0, Math.max(0, hint - 1)).map((o) => o.id))

  const optionClass = (opt) => {
    if (eliminated.has(opt.id)) return 'eliminated'
    if (!answered) return ''
    if (opt.correct) return 'right'
    if (opt.id === answer.id) return 'wrong shake'
    return 'faded'
  }

  const optionLabel = (opt) => {
    if (mode === 'yesno') return opt.id === 'yes' ? <>✅ {t('yes')}</> : <>❌ {t('no')}</>
    if (mode === 'listen') return <WordImage word={all.find((w) => w.key === opt.id)} size="fill" />
    return opt.label
  }

  const score = Object.entries(answers).filter(([i, a]) => a.correct && !questions[i]?.retry).length
  const mainCount = questions.filter((x) => !x.retry).length
  const showLetterHint = hint >= 1 && !answered && (mode === 'picture' || mode === 'hindi')

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>
          {index + 1}/{questions.length}
        </span>
        <ProgressBar value={Object.keys(answers).length} max={questions.length} color="#66bb6a" />
        <span>
          ⭐ {score}/{mainCount}
        </span>
      </div>

      <div className="quiz-head">
        <Instruction voice={VOICE[mode]}>{t(PROMPT_KEY[mode])}</Instruction>
        {!answered && <HintButton level={hint} onClick={moreHint} glowing={hint > 0} />}
      </div>

      <div className={`quiz-prompt pop-in ${q.retry ? 'retry' : ''}`} key={index}>
        {q.retry && <span className="retry-badge">🔁 {t('tryAgainBadge')}</span>}

        {mode === 'picture' && <WordImage word={q.word} size="lg" />}

        {mode === 'listen' && (
          <button className="prompt-speaker" onClick={() => speakEn(q.word.en)} title="Play">
            🔊
            <small>{t('tapToHear')}</small>
          </button>
        )}

        {mode === 'hindi' && <div className="prompt-text hi">{q.word.hi}</div>}

        {mode === 'meaning' && (
          <button className="prompt-text en clickable" onClick={() => speakEn(q.word.en)}>
            {q.word.en} <span className="small-speaker">🔊</span>
          </button>
        )}

        {mode === 'yesno' && (
          <>
            <WordImage word={q.word} size="lg" />
            <button className="prompt-text en clickable" onClick={() => speakEn(q.shown.en)}>
              {q.shown.en} <span className="small-speaker">🔊</span>
            </button>
            {hint >= 1 && !answered && <div className="hint-note">💡 {q.shown.en} = {q.shown.hi}</div>}
          </>
        )}

        {mode === 'missing' && (
          <>
            <WordImage word={q.word} size="lg" />
            <div className="letter-row" aria-label={answered ? q.word.en : undefined}>
              {[...q.word.en.toLowerCase()].map((ch, i) =>
                i === q.missingIndex ? (
                  <span key={i} className={`letter-box ${answered ? 'filled' : 'empty'}`}>
                    {answered ? ch : ''}
                  </span>
                ) : (
                  <span key={i} className="letter-box given">
                    {ch}
                  </span>
                ),
              )}
            </div>
            <div className="muted">{q.word.hi}</div>
          </>
        )}

        {showLetterHint && (
          <div className="hint-note">
            💡 {t('hintFirstLetter')}: <b>{q.word.en[0].toUpperCase()}</b>
          </div>
        )}
      </div>

      <div className={`options ${mode === 'listen' ? 'emoji-options' : ''} ${mode === 'yesno' ? 'two' : ''}`}>
        {q.options.map((opt) => (
          <button
            key={opt.id}
            className={`option ${optionClass(opt)} ${mode === 'meaning' ? 'hi' : ''}`}
            onClick={() => choose(opt)}
            disabled={answered || eliminated.has(opt.id)}
          >
            {optionLabel(opt)}
          </button>
        ))}
      </div>

      {answered && (
        <div className={`feedback pop-in ${answer.correct ? 'good' : 'bad'}`}>
          {answer.correct && <Sparkles />}
          <span className="feedback-title">{answer.correct ? <>🎉 {t('correct')}</> : <>🤔 {t('wrong')}</>}</span>
          <button className="feedback-word" onClick={() => speakWord(q.word)}>
            <WordImage word={q.word} size="xs" />
            <b>{q.word.en}</b> = {q.word.hi} 🔊
          </button>
        </div>
      )}

      <GameNav
        index={index}
        count={questions.length}
        states={questions.map((_, i) => (answers[i] ? (answers[i].correct ? 'right' : 'wrong') : undefined))}
        onGo={goTo}
      />
    </div>
  )
}

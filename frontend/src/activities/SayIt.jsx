import { useEffect, useRef, useState } from 'react'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import GameNav from '../components/GameNav'
import HintButton from '../components/HintButton'
import Instruction from '../components/Instruction'
import WordImage from '../components/WordImage'
import { pickTargets } from '../utils/questions'
import { playCorrect, playWrong } from '../utils/sounds'
import { speak, speakEn, speakWord } from '../utils/speech'
import { useHint } from '../utils/useHint'
import { VOICE } from '../utils/voice'
import { micAllowedHere, micErrorKind, normWord, readAlongSupported, sameWord } from '../utils/useReadAlong'

const ROUNDS = 8
const TRIES = 3
const Recognition = typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null
const canListen = readAlongSupported && micAllowedHere

// did any of the heard alternatives contain the word (every word, for "spinning top")?
function heardIt(alternatives, target) {
  const want = target.split(/\s+/).map(normWord).filter(Boolean)
  return alternatives.some((alt) => {
    const said = alt.split(/\s+/).map(normWord).filter(Boolean)
    return want.every((w) => said.some((s) => sameWord(s, w)))
  })
}

// One word: look, listen, then say it into the mic
function Round({ word, retry, result, onDone }) {
  const { t } = useT()
  const [listening, setListening] = useState(false)
  const [tries, setTries] = useState(0)
  const [heard, setHeard] = useState('')
  const [error, setError] = useState(null)
  const done = !!result
  const rec = useRef(null)
  const lastHeard = useRef('')
  // hint 1: hear it again, hint 2: "say it like" in Devanagari
  const [hint, moreHint] = useHint(word.key, !done && !listening, 2)

  useEffect(() => {
    if (!result) speakEn(word.en)
  }, [word, result])

  useEffect(() => {
    if (hint === 1 && !done) speakEn(word.en)
  }, [hint, done, word])

  useEffect(() => () => rec.current?.abort?.(), [])

  const finish = (correct) => {
    if (correct) {
      playCorrect()
      speak([
        { text: 'शाबाश!', lang: 'hi-IN' },
        { text: word.en, lang: 'en-IN' },
      ])
    } else speakWord(word)
    onDone({ correct, tries: correct ? tries : tries + 1, chosen: lastHeard.current, hinted: hint > 0 })
  }

  const wrong = (what) => {
    const n = tries + 1
    playWrong()
    setTries(n)
    setHeard(what)
    if (n >= TRIES) {
      finish(false) // counts this last try too (tries + 1)
    } else {
      setTimeout(() => speak([{ text: 'फिर से सुनो', lang: 'hi-IN' }, { text: word.en, lang: 'en-IN', rate: 0.7 }]), 500)
    }
  }

  const listen = () => {
    if (listening || done) return
    setError(null)
    setHeard('')
    window.speechSynthesis?.cancel()
    const r = new Recognition()
    r.lang = 'en-IN'
    r.continuous = false
    r.interimResults = false
    r.maxAlternatives = 5
    let gotResult = false
    let failed = false
    r.onresult = (e) => {
      gotResult = true
      const alts = [...e.results[0]].map((a) => a.transcript)
      lastHeard.current = alts[0] || ''
      if (heardIt(alts, word.en)) {
        setHeard(alts[0])
        finish(true)
      } else wrong(alts[0])
    }
    r.onerror = (e) => {
      if (e.error === 'no-speech') return
      if (e.error !== 'aborted') {
        failed = true
        setError(micErrorKind(e.error))
      }
    }
    // nothing heard: show "try again" without counting a try
    r.onend = () => {
      setListening(false)
      if (!gotResult && !failed) setHeard('…')
    }
    rec.current = r
    setListening(true)
    try {
      r.start()
    } catch {
      setListening(false)
    }
  }

  return (
    <>
      <div className={`quiz-prompt pop-in ${retry ? 'retry' : ''}`}>
        {retry && <span className="retry-badge">🔁 {t('tryAgainBadge')}</span>}
        <WordImage word={word} size="lg" />
        <button className="prompt-text en clickable sayit-word" onClick={() => speakEn(word.en)}>
          {word.en} <span className="small-speaker">🔊</span>
        </button>
        {(hint >= 2 || done) && word.say && (
          <div className="flash-say">
            {t('sayItLike')}: <b>{word.say}</b>
          </div>
        )}
        {word.hi && <div className="muted">{word.hi}</div>}
        {!done && <HintButton level={hint} max={2} onClick={moreHint} glowing={hint > 0} />}
      </div>

      {!done && (
        <div className="sayit-controls">
          <button className="btn btn-sound" onClick={() => speakEn(word.en)}>
            🔊 {t('english')}
          </button>
          <button className="btn btn-sound" onClick={() => speak([{ text: word.en, lang: 'en-IN', rate: 0.45 }])}>
            🐢 {t('sayItSlowly')}
          </button>
          {canListen ? (
            <button className={`btn big ${listening ? 'btn-mic-on' : 'btn-mic'}`} onClick={listen} disabled={listening}>
              🎤 {listening ? t('listeningNow') : t('sayNow')}
            </button>
          ) : (
            <div className="self-check">
              <span>{t('selfCheck')}</span>
              <button className="btn btn-mic" onClick={() => finish(true)}>
                ✅ {t('saidRight')}
              </button>
              <button className="btn btn-light" onClick={() => wrong('')}>
                🔁 {t('saidWrong')}
              </button>
            </div>
          )}
        </div>
      )}

      {!done && heard && (
        <div className="feedback bad pop-in">
          <span className="feedback-title">
            🤔 {t('sayAgain')} ({tries}/{TRIES})
          </span>
          {heard !== '…' && (
            <span>
              {t('youSaid')}: <b>{heard}</b>
            </span>
          )}
        </div>
      )}
      {error === 'https' && <p className="error-text">{t('micHttps')}</p>}
      {error === 'network' && <p className="error-text">{t('micNetwork')}</p>}
      {error === 'mic' && <p className="error-text">{t('micBlocked')}</p>}
      {error === 'nomic' && <p className="error-text">{t('micNone')}</p>}

      {done && (
        <div className={`feedback pop-in ${result.correct ? 'good' : 'bad'}`}>
          <span className="feedback-title">{result.correct ? <>🎉 {t('correct')}</> : <>🤔 {t('wrong')}</>}</span>
          <button className="feedback-word" onClick={() => speakWord(word)}>
            <b>{word.en}</b> {word.hi && <>= {word.hi}</>} 🔊
          </button>
        </div>
      )}
    </>
  )
}

// "Say the word": pronunciation practice with the mic (book: words the kid could not read aloud)
export default function SayIt({ pool, profile, onFinish }) {
  const { t } = useT()
  const [rounds, setRounds] = useState(() => pickTargets(pool, Math.min(ROUNDS, pool.length), profile).map((word) => ({ word })))
  const [index, setIndex] = useState(0)
  const [results, setResults] = useState({})
  const timer = useRef(null)
  const finished = useRef(false)

  useEffect(() => {
    speak([{ text: VOICE.sayit, lang: 'hi-IN' }])
    return () => clearTimeout(timer.current)
  }, [])

  if (!rounds.length) return <p className="center muted">{t('notEnough')}</p>

  const goTo = (i) => {
    clearTimeout(timer.current)
    setIndex(Math.max(0, Math.min(rounds.length - 1, i)))
  }

  const roundDone = ({ correct, tries, chosen, hinted }) => {
    const round = rounds[index]
    const result = {
      key: round.word.key,
      correct,
      ...(tries ? { tries, chosen } : {}),
      ...(hinted ? { hinted: true } : {}),
      ...(round.retry ? { retry: true } : {}),
    }
    const next = { ...results, [index]: result }
    setResults(next)
    let all = rounds
    if (!correct && !round.retry) {
      all = [...rounds, { word: round.word, retry: true }]
      setRounds(all)
    }
    timer.current = setTimeout(() => {
      const nextIndex = [...all.keys()].find((i) => !next[i])
      if (nextIndex === undefined) {
        if (!finished.current) {
          finished.current = true
          onFinish(all.map((_, i) => next[i]).filter(Boolean))
        }
      } else setIndex(nextIndex)
    }, 2400)
  }

  const round = rounds[index]
  const score = Object.entries(results).filter(([i, r]) => r.correct && !rounds[i]?.retry).length

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>
          {index + 1}/{rounds.length}
        </span>
        <ProgressBar value={Object.keys(results).length} max={rounds.length} color="#e91e63" />
        <span>⭐ {score}</span>
      </div>
      <Instruction voice={VOICE.sayit}>{t('qSayIt')}</Instruction>
      <Round key={`${index}-${round.word.key}`} word={round.word} retry={round.retry} result={results[index]} onDone={roundDone} />
      <GameNav
        index={index}
        count={rounds.length}
        states={rounds.map((_, i) => (results[i] ? (results[i].correct ? 'right' : 'wrong') : undefined))}
        onGo={goTo}
      />
    </div>
  )
}

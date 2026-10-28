import { useEffect, useRef, useState } from 'react'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import GameNav from '../components/GameNav'
import HintButton from '../components/HintButton'
import Sparkles from '../components/Sparkles'
import { isSpellable, pickTargets, shuffle } from '../utils/questions'
import { playCorrect, playWrong } from '../utils/sounds'
import { speak, speakEn, speakWord } from '../utils/speech'
import { useHint } from '../utils/useHint'
import { VOICE } from '../utils/voice'
import Instruction from '../components/Instruction'
import WordImage from '../components/WordImage'

const ROUNDS = 6

function makeTiles(word) {
  const letters = [...word.en.toLowerCase()]
  let tiles = letters.map((ch, i) => ({ id: i, ch }))
  // Avoid showing the word already in order
  for (let tries = 0; tries < 5; tries++) {
    tiles = shuffle(tiles)
    if (tiles.map((x) => x.ch).join('') !== letters.join('')) break
  }
  return tiles
}

// One word. `result` is set when the word was already finished (shown complete, read-only).
function Round({ word, intro, retry, result, onDone }) {
  const { t } = useT()
  const [tiles] = useState(() => makeTiles(word))
  const [used, setUsed] = useState([])
  const [shakeId, setShakeId] = useState(null)
  const wrongLetters = useRef([]) // letters tapped in the wrong place
  const letters = word.en.toLowerCase()
  const done = !!result || used.length === letters.length
  // hint 1: the next right letter glows; hint 2: faint letters show in the empty boxes
  const [hint, moreHint] = useHint(word.key, !done, 2)

  useEffect(() => {
    if (result) return
    speak([
      { text: intro, lang: 'hi-IN' },
      { text: word.en, lang: 'en-IN' },
    ])
  }, [word, intro, result])

  useEffect(() => {
    if (hint > 0 && !done) speakEn(word.en)
  }, [hint, done, word])

  const nextTile = tiles.find((tile) => !used.includes(tile.id) && tile.ch === letters[used.length])

  const tap = (tile) => {
    if (done || used.includes(tile.id)) return
    if (tile.ch === letters[used.length]) {
      const next = [...used, tile.id]
      setUsed(next)
      if (next.length === letters.length) {
        playCorrect()
        speakWord(word)
        onDone({ wrong: wrongLetters.current, hinted: hint > 0 })
      }
    } else {
      wrongLetters.current.push(tile.ch)
      playWrong()
      setShakeId(tile.id)
      setTimeout(() => setShakeId(null), 500)
    }
  }

  const filled = result ? letters.length : used.length

  return (
    <>
      <div className={`quiz-prompt pop-in ${retry ? 'retry' : ''}`}>
        {retry && <span className="retry-badge">🔁 {t('tryAgainBadge')}</span>}
        <button className="clickable" onClick={() => speakEn(word.en)} title={t('tapToHear')}>
          <WordImage word={word} size="lg" />
        </button>
        <div className="prompt-text hi small">{word.hi}</div>
        {!done && <HintButton level={hint} max={2} onClick={moreHint} glowing={hint > 0} />}
      </div>

      <div className="slots">
        {[...letters].map((ch, i) => (
          <span key={i} className={`slot ${i < filled ? 'filled pop-in' : ''} ${i >= filled && hint >= 2 ? 'ghost' : ''}`}>
            {i < filled || hint >= 2 ? ch : ''}
          </span>
        ))}
      </div>

      {!result && (
        <div className="tiles">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              className={`tile ${used.includes(tile.id) ? 'used' : ''} ${shakeId === tile.id ? 'shake wrong' : ''} ${
                hint >= 1 && !done && tile === nextTile ? 'hint-glow' : ''
              }`}
              onClick={() => tap(tile)}
              disabled={used.includes(tile.id)}
            >
              {tile.ch}
            </button>
          ))}
        </div>
      )}

      {done && (
        <div className={`feedback pop-in ${result && !result.correct ? 'bad' : 'good'}`}>
          {!(result && !result.correct) && <Sparkles />}
          <span className="feedback-title">
            {result && !result.correct ? <>🤔 {t('wrongLetters')}: {result.chosen}</> : <>🎉 {t('correct')}</>}
          </span>
          <button className="feedback-word" onClick={() => speakWord(word)}>
            <b>{word.en}</b> = {word.hi} 🔊
          </button>
        </div>
      )}
    </>
  )
}

// Spell the word by tapping scrambled letters
export default function WordBuilder({ pool, profile, onFinish }) {
  const { t } = useT()
  const [rounds, setRounds] = useState(() => {
    const spellable = pool.filter(isSpellable)
    return pickTargets(spellable, Math.min(ROUNDS, spellable.length), profile).map((word) => ({ word }))
  })
  const [index, setIndex] = useState(0)
  const [results, setResults] = useState({}) // round index -> result
  const timer = useRef(null)
  const finished = useRef(false)

  useEffect(() => () => clearTimeout(timer.current), [])

  if (!rounds.length) return <p className="center muted">{t('notEnough')}</p>

  const goTo = (i) => {
    clearTimeout(timer.current)
    setIndex(Math.max(0, Math.min(rounds.length - 1, i)))
  }

  const roundDone = ({ wrong, hinted }) => {
    const round = rounds[index]
    const correct = wrong.length === 0
    const result = {
      key: round.word.key,
      correct,
      ...(correct ? {} : { tries: wrong.length, chosen: wrong.join(', ') }),
      ...(hinted ? { hinted: true } : {}),
      ...(round.retry ? { retry: true } : {}),
    }
    const next = { ...results, [index]: result }
    setResults(next)

    // spell a misspelled word once more at the end
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
    }, 2200)
  }

  const round = rounds[index]
  const score = Object.entries(results).filter(([i, r]) => r.correct && !rounds[i]?.retry).length

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>
          {index + 1}/{rounds.length}
        </span>
        <ProgressBar value={Object.keys(results).length} max={rounds.length} color="#ffa726" />
        <span>⭐ {score}</span>
      </div>
      <Instruction voice={VOICE.builder}>{t('qBuilder')}</Instruction>
      <Round
        key={`${index}-${round.word.key}`}
        word={round.word}
        retry={round.retry}
        result={results[index]}
        intro={index === 0 && !results[0] ? VOICE.builder : ''}
        onDone={roundDone}
      />
      <GameNav
        index={index}
        count={rounds.length}
        states={rounds.map((_, i) => (results[i] ? (results[i].correct ? 'right' : 'wrong') : undefined))}
        onGo={goTo}
      />
    </div>
  )
}

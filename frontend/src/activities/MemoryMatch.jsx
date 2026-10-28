import { useEffect, useRef, useState } from 'react'
import { useT } from '../useT'
import GameNav from '../components/GameNav'
import HintButton from '../components/HintButton'
import { pickTargets, shuffle } from '../utils/questions'
import { playCorrect, playWrong } from '../utils/sounds'
import { speakWord } from '../utils/speech'
import { useHint } from '../utils/useHint'
import { VOICE, useAnnounce } from '../utils/voice'
import Instruction from '../components/Instruction'
import WordImage from '../components/WordImage'

const PAIRS = 6
const MIN_PAIRS = 4

function makeBoard(words) {
  const cards = shuffle(
    words.flatMap((w) => [
      { id: `${w.key}|pic`, key: w.key, kind: 'pic', word: w },
      { id: `${w.key}|word`, key: w.key, kind: 'word', word: w },
    ]),
  )
  return { words, cards }
}

// Flip cards to match each picture with its English word. Up to two boards, ◀ ▶ switch between them.
export default function MemoryMatch({ pool, profile, onFinish }) {
  const { t } = useT()
  const [boards] = useState(() => {
    const words = pickTargets(pool, Math.min(PAIRS * 2, pool.length), profile)
    const first = words.slice(0, PAIRS)
    const second = words.slice(PAIRS)
    return second.length >= MIN_PAIRS ? [makeBoard(first), makeBoard(second)] : [makeBoard(first)]
  })
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState([])
  const [matched, setMatched] = useState([]) // word keys, all boards
  const [peek, setPeek] = useState(null) // word key shown by a hint
  const [moves, setMoves] = useState(0)
  const misses = useRef({})
  const hinted = useRef(new Set())
  const wrongWith = useRef({}) // word key -> the word it was last wrongly paired with
  const busy = useRef(false)
  const finished = useRef(false)
  const timers = useRef([])

  const board = boards[index]
  const boardDone = board.words.every((w) => matched.includes(w.key))
  // hint timer restarts after every match
  const [hint, moreHint] = useHint(`${index}-${matched.length}`, !boardDone, 1)

  useAnnounce(VOICE.memory)

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms))
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  // hint: show one unmatched pair for a moment
  useEffect(() => {
    if (hint < 1 || boardDone) return
    const w = board.words.find((x) => !matched.includes(x.key))
    if (!w) return
    hinted.current.add(w.key)
    const show = setTimeout(() => setPeek(w.key), 0)
    const hide = setTimeout(() => setPeek(null), 1500)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hint])

  const goTo = (i) => {
    setOpen([])
    busy.current = false
    setIndex(Math.max(0, Math.min(boards.length - 1, i)))
  }

  const finish = (allMatched) => {
    if (finished.current) return
    finished.current = true
    const words = boards.flatMap((b) => b.words).filter((w) => allMatched.includes(w.key))
    onFinish(
      words.map((w) => {
        // a couple of wrong flips is normal exploring; more than that counts as a mistake
        const n = misses.current[w.key] || 0
        const extra = hinted.current.has(w.key) ? { hinted: true } : {}
        return n <= 2
          ? { key: w.key, correct: true, ...extra }
          : { key: w.key, correct: false, tries: n, chosen: wrongWith.current[w.key], ...extra }
      }),
    )
  }

  const flip = (card) => {
    if (busy.current || open.includes(card.id) || matched.includes(card.key)) return
    const next = [...open, card.id]
    setOpen(next)
    if (next.length < 2) return

    setMoves((m) => m + 1)
    const [a, b] = next.map((id) => board.cards.find((c) => c.id === id))
    if (a.key === b.key) {
      playCorrect()
      speakWord(a.word)
      const done = [...matched, a.key]
      setMatched(done)
      setOpen([])
      const allDone = boards.every((bd) => bd.words.every((w) => done.includes(w.key)))
      if (allDone) later(() => finish(done), 2000)
      else if (board.words.every((w) => done.includes(w.key))) {
        // this board is finished: go to the next unfinished one
        const nextBoard = boards.findIndex((bd) => !bd.words.every((w) => done.includes(w.key)))
        later(() => goTo(nextBoard), 1800)
      }
    } else {
      playWrong()
      misses.current[a.key] = (misses.current[a.key] || 0) + 1
      misses.current[b.key] = (misses.current[b.key] || 0) + 1
      wrongWith.current[a.key] = b.word.en
      wrongWith.current[b.key] = a.word.en
      busy.current = true
      later(() => {
        setOpen([])
        busy.current = false
      }, 1000)
    }
  }

  const totalPairs = boards.reduce((n, b) => n + b.words.length, 0)

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>
          {t('moves')}: {moves}
        </span>
        {boards.length > 1 && (
          <span>
            {t('round')} {index + 1}/{boards.length}
          </span>
        )}
        <span>
          ✅ {matched.length}/{totalPairs}
        </span>
      </div>
      <div className="quiz-head">
        <Instruction voice={VOICE.memory}>{t('qMemory')}</Instruction>
        {!boardDone && <HintButton level={hint} max={1} onClick={moreHint} glowing={hint > 0} />}
      </div>

      <div className="memory-grid" key={index}>
        {board.cards.map((card) => {
          const isMatched = matched.includes(card.key)
          const isOpen = isMatched || open.includes(card.id) || peek === card.key
          return (
            <button
              key={card.id}
              className={`memory-card ${isOpen ? 'open' : ''} ${isMatched ? 'matched' : ''} ${peek === card.key ? 'peek' : ''}`}
              onClick={() => flip(card)}
            >
              <span className="memory-inner">
                <span className="memory-front">🦉</span>
                <span className={`memory-back ${card.kind}`}>
                  {card.kind === 'pic' ? <WordImage word={card.word} size="fill" /> : card.word.en}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {boards.length > 1 && (
        <GameNav
          index={index}
          count={boards.length}
          states={boards.map((b) => (b.words.every((w) => matched.includes(w.key)) ? 'right' : undefined))}
          onGo={goTo}
        />
      )}
    </div>
  )
}

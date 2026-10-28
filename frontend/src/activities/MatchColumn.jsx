import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useT } from '../useT'
import GameNav from '../components/GameNav'
import HintButton from '../components/HintButton'
import Instruction from '../components/Instruction'
import WordImage from '../components/WordImage'
import { pickTargets, shuffle } from '../utils/questions'
import { playCorrect, playWrong } from '../utils/sounds'
import { speakEn, speakWord } from '../utils/speech'
import { useHint } from '../utils/useHint'
import { VOICE, useAnnounce } from '../utils/voice'

const PER_ROUND = 4
const MAX_WORDS = 12
const LINE_COLORS = ['#ef5350', '#42a5f5', '#66bb6a', '#ffa726', '#ab47bc', '#26a69a']

const makeRound = (words, extra = {}) => ({ words, right: shuffle(words), ...extra })

// Column A: picture + English word. Column B: Hindi meanings (shuffled).
// Tap one on each side to join them with a line.
export default function MatchColumn({ pool, profile, onFinish }) {
  const { t } = useT()
  const [rounds, setRounds] = useState(() => {
    // whole rounds of PER_ROUND words (or everything, if there are fewer)
    const n = Math.min(MAX_WORDS, Math.floor(pool.length / PER_ROUND) * PER_ROUND || pool.length)
    const words = pickTargets(pool, n, profile)
    const out = []
    for (let i = 0; i + PER_ROUND <= words.length; i += PER_ROUND) out.push(makeRound(words.slice(i, i + PER_ROUND)))
    if (out.length === 0) out.push(makeRound(words))
    return out
  })
  const [index, setIndex] = useState(0)
  const [matched, setMatched] = useState({}) // round index -> [word keys]
  const [selected, setSelected] = useState(null) // { side: 'left' | 'right', key }
  const [shake, setShake] = useState(null)
  const [lines, setLines] = useState([])
  const tries = useRef({}) // word key -> wrong tries
  const retryTries = useRef({}) // same, in the "try again" round
  const chosen = useRef({}) // word key -> Hindi it was wrongly joined with
  const hinted = useRef(new Set())
  const finished = useRef(false)
  const boxRef = useRef(null)
  const itemRefs = useRef({})
  const timers = useRef([])

  useAnnounce(VOICE.match)
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const round = rounds[index]
  const done = useMemo(() => matched[index] || [], [matched, index])
  const roundDone = done.length === round.words.length
  const [hint, moreHint] = useHint(`${index}-${done.length}`, !roundDone, 1)
  const hintWord = hint >= 1 && !roundDone ? round.words.find((w) => !done.includes(w.key)) : null
  useEffect(() => {
    if (hintWord) hinted.current.add(hintWord.key)
  }, [hintWord])

  // draw lines between matched pairs
  useLayoutEffect(() => {
    const measure = () => {
      const box = boxRef.current?.getBoundingClientRect()
      if (!box) return
      setLines(
        done
          .map((key, i) => {
            const a = itemRefs.current[`L-${key}`]?.getBoundingClientRect()
            const b = itemRefs.current[`R-${key}`]?.getBoundingClientRect()
            if (!a || !b) return null
            return {
              key,
              color: LINE_COLORS[round.words.findIndex((w) => w.key === key) % LINE_COLORS.length] || LINE_COLORS[i % LINE_COLORS.length],
              x1: a.right - box.left,
              y1: a.top + a.height / 2 - box.top,
              x2: b.left - box.left,
              y2: b.top + b.height / 2 - box.top,
            }
          })
          .filter(Boolean),
      )
    }
    measure()
    window.addEventListener('resize', measure)
    // images may change row heights after loading
    const later = setTimeout(measure, 400)
    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(later)
    }
  }, [done, index, round])

  const finish = (allMatched, allRounds) => {
    if (finished.current) return
    finished.current = true
    const results = []
    allRounds.forEach((r, i) => {
      for (const w of r.words) {
        if (!allMatched[i]?.includes(w.key) || (r.retry && !r.retryKeys.includes(w.key))) continue
        const n = (r.retry ? retryTries : tries).current[w.key] || 0
        results.push({
          key: w.key,
          correct: n === 0,
          ...(n ? { tries: n, chosen: chosen.current[w.key] } : {}),
          ...(hinted.current.has(w.key) ? { hinted: true } : {}),
          ...(r.retry ? { retry: true } : {}),
        })
      }
    })
    onFinish(results)
  }

  const join = (leftKey, rightKey) => {
    setSelected(null)
    if (leftKey === rightKey) {
      playCorrect()
      speakWord(round.words.find((w) => w.key === leftKey))
      const nowDone = [...done, leftKey]
      const next = { ...matched, [index]: nowDone }
      setMatched(next)
      if (nowDone.length < round.words.length) return

      // round finished
      let all = rounds
      const isLastMain = rounds.every((r, i) => r.retry || (next[i] || []).length === r.words.length)
      if (isLastMain && !rounds.some((r) => r.retry)) {
        // one more round with the words that were joined wrongly, to remember them
        const wrongKeys = rounds.flatMap((r) => r.words).filter((w) => tries.current[w.key]).map((w) => w.key)
        if (wrongKeys.length) {
          const wrongWords = rounds.flatMap((r) => r.words).filter((w) => wrongKeys.includes(w.key))
          const fillers = pickTargets(pool.filter((w) => !wrongKeys.includes(w.key)), Math.max(0, 3 - wrongWords.length), profile)
          all = [...rounds, makeRound(shuffle([...wrongWords.slice(0, PER_ROUND), ...fillers]), { retry: true, retryKeys: wrongKeys })]
          setRounds(all)
        }
      }
      const nextIndex = all.findIndex((r, i) => (next[i] || []).length < r.words.length)
      timers.current.push(
        setTimeout(() => {
          if (nextIndex === -1) finish(next, all)
          else setIndex(nextIndex)
        }, 1600),
      )
    } else {
      playWrong()
      const counter = round.retry ? retryTries : tries
      counter.current[leftKey] = (counter.current[leftKey] || 0) + 1
      chosen.current[leftKey] = round.words.find((w) => w.key === rightKey)?.hi || ''
      setShake(`${leftKey}|${rightKey}`)
      timers.current.push(setTimeout(() => setShake(null), 500))
    }
  }

  const tap = (side, key) => {
    if (done.includes(key)) return
    if (side === 'left') speakEn(round.words.find((w) => w.key === key).en)
    if (!selected || selected.side === side) {
      setSelected({ side, key })
      return
    }
    if (side === 'left') join(key, selected.key)
    else join(selected.key, key)
  }

  const goTo = (i) => {
    setSelected(null)
    setIndex(Math.max(0, Math.min(rounds.length - 1, i)))
  }

  const itemClass = (side, key) => {
    const [sl, sr] = (shake || '').split('|')
    return [
      'mc-item',
      done.includes(key) ? 'matched' : '',
      selected?.side === side && selected.key === key ? 'selected' : '',
      (side === 'left' && sl === key) || (side === 'right' && sr === key) ? 'shake wrong' : '',
      hintWord?.key === key ? 'hint-glow' : '',
    ].join(' ')
  }
  const colorOf = (key) => lines.find((l) => l.key === key)?.color

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>
          {t('round')} {index + 1}/{rounds.length}
        </span>
        <span>
          ✅ {done.length}/{round.words.length}
        </span>
      </div>
      <div className="quiz-head">
        <Instruction voice={VOICE.match}>{t('qMatch')}</Instruction>
        {!roundDone && <HintButton level={hint} max={1} onClick={moreHint} glowing={hint > 0} />}
      </div>
      {round.retry && <span className="retry-badge center-badge">🔁 {t('tryAgainBadge')}</span>}

      <div className="match-board" ref={boxRef} key={index}>
        <svg className="match-lines" aria-hidden="true">
          {lines.map((l) => (
            <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.color} strokeWidth="5" strokeLinecap="round" />
          ))}
        </svg>
        <div className="mc-col">
          {round.words.map((w) => (
            <button
              key={w.key}
              ref={(el) => (itemRefs.current[`L-${w.key}`] = el)}
              className={itemClass('left', w.key)}
              style={colorOf(w.key) ? { borderColor: colorOf(w.key) } : undefined}
              onClick={() => tap('left', w.key)}
            >
              <WordImage word={w} size="sm" />
              <b>{w.en}</b>
            </button>
          ))}
        </div>
        <div className="mc-col">
          {round.right.map((w) => (
            <button
              key={w.key}
              ref={(el) => (itemRefs.current[`R-${w.key}`] = el)}
              className={`${itemClass('right', w.key)} mc-hi`}
              style={colorOf(w.key) ? { borderColor: colorOf(w.key) } : undefined}
              onClick={() => tap('right', w.key)}
            >
              {w.hi}
            </button>
          ))}
        </div>
      </div>

      {rounds.length > 1 && (
        <GameNav
          index={index}
          count={rounds.length}
          states={rounds.map((r, i) => ((matched[i] || []).length === r.words.length ? 'right' : undefined))}
          onGo={goTo}
        />
      )}
    </div>
  )
}

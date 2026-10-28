import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Read-along with the browser's speech recognition (Chrome / Edge).
// The kid reads the lesson aloud; every word they say is marked as read, in order.

const Recognition = typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null
export const readAlongSupported = !!Recognition
// browsers only give the microphone to https pages (or localhost)
export const micAllowedHere = typeof window === 'undefined' || window.isSecureContext !== false

const NUMBER_WORDS = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 100: 'hundred',
}
const LOOK_AHEAD = 6 // words the kid (or the recogniser) may skip and still continue
const RESYNC = 25 // how far ahead to look when two spoken words in a row match there
const SMALL = 3 // words this short (a, the, and) are often not transcribed: count them when skipped

export const normWord = (w) => w.toLowerCase().replace(/[^a-z']/g, '').replace(/'/g, '')
const stem = (w) => w.replace(/(ing|ed|es|s)$/, '')

function editDistance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i])
  for (let j = 1; j <= b.length; j++) d[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
  }
  return d[a.length][b.length]
}

// rough "sounds like" key: c/k/q, s/z, ph/f, w/v... and no vowels after the first letter
function soundKey(w) {
  const s = w
    .replace(/ph/g, 'f')
    .replace(/ck|q|c(?=[aou])|c$/g, 'k')
    .replace(/c/g, 's')
    .replace(/z/g, 's')
    .replace(/v/g, 'w')
    .replace(/gh/g, '')
    .replace(/(.)\1+/g, '$1')
  return s[0] + s.slice(1).replace(/[aeiouyh]/g, '')
}

// Kids' pronunciation and the recogniser are not perfect: allow small differences
export function sameWord(spoken, expected) {
  if (!spoken || !expected) return false
  if (spoken === expected || stem(spoken) === stem(expected)) return true
  // short words (a, the, they) only count when said exactly: "the" must not match "they"
  if (expected.length < 4 || spoken.length < 4) return false
  const key = soundKey(expected)
  if (key.length >= 2 && soundKey(spoken) === key) return true
  if (expected.length >= 4 && editDistance(spoken, expected) <= 1) return true
  if (expected.length >= 7 && editDistance(spoken, expected) <= 2) return true
  return false
}

export function spokenWords(transcript) {
  return transcript
    .split(/\s+/)
    .flatMap((w) => (NUMBER_WORDS[w] ? [NUMBER_WORDS[w]] : w.split('-')))
    .map(normWord)
    .filter(Boolean)
}

// Android Chrome repeats earlier text inside later results: keep only the longest version
function joinResults(results) {
  const texts = []
  for (let i = 0; i < results.length; i++) texts.push(results[i][0].transcript.trim().toLowerCase())
  return texts.filter((t, i) => !(texts[i + 1] && texts[i + 1].startsWith(t))).join(' ')
}

export function micErrorKind(error) {
  if (error === 'not-allowed' || error === 'service-not-allowed') return micAllowedHere ? 'mic' : 'https'
  if (error === 'network') return 'network'
  if (error === 'audio-capture') return 'nomic'
  return 'other'
}

// tokens: from reading.tokenize(). Returns which tokens are read and controls for the mic.
// onFinish(readCount, total) when the last word is read; onStop(missedTokenIndexes) whenever reading stops.
export function useReadAlong(tokens, { onFinish, onStop } = {}) {
  // the words to read, in order (a phrase token like "ice cream" gives two words)
  const expected = useMemo(() => {
    const out = []
    tokens.forEach((tok, tokenIndex) => {
      if (tok.type !== 'word') return
      for (const w of tok.text.split(/\s+/)) {
        const n = normWord(w)
        if (n) out.push({ tokenIndex, word: n })
      }
    })
    return out
  }, [tokens])

  const [matched, setMatched] = useState(() => new Set()) // indexes into `expected`
  const [pointer, setPointer] = useState(0) // next word to read
  const [listening, setListening] = useState(false)
  const [error, setError] = useState(null)
  const [finished, setFinished] = useState(false)

  const rec = useRef(null)
  const active = useRef(false)
  const base = useRef({ pointer: 0, matched: new Set() }) // state when the current recognition session began
  const latest = useRef({ pointer: 0, matched: new Set() })
  const callbacks = useRef({ onFinish, onStop })
  useEffect(() => {
    callbacks.current = { onFinish, onStop }
  }, [onFinish, onStop])

  // words before the pointer that were not read (skipped / not recognised)
  const missedTokens = useCallback(() => {
    const { pointer: p, matched: m } = latest.current
    const out = new Set()
    for (let k = 0; k < p; k++) if (!m.has(k)) out.add(expected[k].tokenIndex)
    return [...out]
  }, [expected])

  const stop = useCallback(() => {
    const wasActive = active.current
    active.current = false
    setListening(false)
    try {
      rec.current?.stop()
    } catch {
      // already stopped
    }
    if (wasActive) callbacks.current.onStop?.(missedTokens())
  }, [missedTokens])

  // match everything heard in this session, starting where the session began
  const apply = useCallback(
    (words) => {
      let p = base.current.pointer
      const m = new Set(base.current.matched)
      const jump = (k) => {
        // short words skipped on the way were most likely said but not transcribed
        for (let j = p; j < k; j++) if (expected[j].word.length <= SMALL) m.add(j)
        m.add(k)
        p = k + 1
      }
      for (let i = 0; i < words.length; i++) {
        const w = words[i]
        let found = -1
        for (let k = p; k < Math.min(expected.length, p + LOOK_AHEAD + 1); k++) {
          if (sameWord(w, expected[k].word)) {
            found = k
            break
          }
        }
        // the kid went further ahead: follow them when two words in a row match there
        if (found < 0 && words[i + 1]) {
          for (let k = p + LOOK_AHEAD + 1; k < Math.min(expected.length - 1, p + RESYNC); k++) {
            if (sameWord(w, expected[k].word) && sameWord(words[i + 1], expected[k + 1].word)) {
              found = k
              break
            }
          }
        }
        if (found >= 0) jump(found)
      }
      // only short words left at the very end ("...a full pack!" → nothing missing)
      if (p > 0 && p < expected.length && expected.slice(p).every((e) => e.word.length <= SMALL)) jump(expected.length - 1)

      latest.current = { pointer: p, matched: m }
      setPointer(p)
      setMatched(m)
      if (p >= expected.length && expected.length) {
        active.current = false
        setListening(false)
        try {
          rec.current?.stop()
        } catch {
          // already stopped
        }
        setFinished(true)
        callbacks.current.onStop?.(missedTokens())
        callbacks.current.onFinish?.(m.size, expected.length)
      }
    },
    [expected, missedTokens],
  )

  // One recognition session; Chrome ends a session after a pause, so it starts the next one itself
  // until the kid presses stop
  const startSession = useCallback(() => {
    const run = () => {
      const r = new Recognition()
      r.lang = 'en-IN'
      r.continuous = true
      r.interimResults = true
      r.maxAlternatives = 1
      base.current = latest.current
      r.onresult = (e) => apply(spokenWords(joinResults(e.results)))
      r.onerror = (e) => {
        if (e.error === 'no-speech' || e.error === 'aborted') return
        setError(micErrorKind(e.error))
        active.current = false
        setListening(false)
      }
      r.onend = () => {
        if (active.current) setTimeout(() => active.current && run(), 150)
        else setListening(false)
      }
      rec.current = r
      try {
        r.start()
      } catch {
        // start() called twice – ignore
      }
    }
    run()
  }, [apply])

  const start = useCallback(() => {
    if (!Recognition) return
    if (!micAllowedHere) {
      setError('https')
      return
    }
    setError(null)
    setFinished(false)
    if (latest.current.pointer >= expected.length) {
      // read again from the beginning
      latest.current = { pointer: 0, matched: new Set() }
      setPointer(0)
      setMatched(new Set())
    }
    active.current = true
    setListening(true)
    startSession()
  }, [expected.length, startSession])

  const reset = useCallback(() => {
    active.current = false
    setListening(false)
    try {
      rec.current?.stop()
    } catch {
      // already stopped
    }
    latest.current = { pointer: 0, matched: new Set() }
    setPointer(0)
    setMatched(new Set())
    setFinished(false)
  }, [])

  useEffect(
    () => () => {
      active.current = false
      try {
        rec.current?.abort()
      } catch {
        // nothing to stop
      }
    },
    [],
  )

  // token index -> 'read' | 'next'
  const tokenState = useMemo(() => {
    const out = {}
    expected.forEach((e, i) => {
      if (matched.has(i)) out[e.tokenIndex] = 'read'
    })
    if (listening && expected[pointer] && !out[expected[pointer].tokenIndex]) out[expected[pointer].tokenIndex] = 'next'
    return out
  }, [expected, matched, pointer, listening])

  return {
    supported: readAlongSupported,
    listening,
    error,
    finished,
    readCount: matched.size,
    total: expected.length,
    tokenState,
    start,
    stop,
    reset,
  }
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { speakLines, speakTracked } from './speech'

// "Read aloud" (पढ़कर सुनाओ): speaks the lesson and tells which word token is being spoken,
// so it can be highlighted (and goes back to normal when the voice moves on).
export function useReadAloud(tokens) {
  // where each token starts in the text (the tokens joined together are the whole text)
  const starts = useMemo(() => {
    const out = []
    for (let i = 0, pos = 0; i < tokens.length; pos += tokens[i].text.length, i++) out.push(pos)
    return out
  }, [tokens])
  const text = useMemo(() => tokens.map((t) => t.text).join(''), [tokens])

  const [speaking, setSpeaking] = useState(false)
  const [current, setCurrent] = useState(-1) // token index being spoken
  const stopRef = useRef(null)

  const tokenAt = useCallback(
    (charIndex) => {
      // last token starting at or before charIndex, moved forward to a word if it is a gap
      let lo = 0
      let hi = starts.length - 1
      while (lo < hi) {
        const mid = (lo + hi + 1) >> 1
        if (starts[mid] <= charIndex) lo = mid
        else hi = mid - 1
      }
      let i = lo
      while (tokens[i] && tokens[i].type !== 'word') i++
      return tokens[i] ? i : -1
    },
    [starts, tokens],
  )

  const stop = useCallback(() => {
    stopRef.current?.()
    stopRef.current = null
  }, [])

  const start = useCallback(() => {
    stop()
    setSpeaking(true)
    stopRef.current = speakTracked(text, {
      onWord: (charIndex) => setCurrent(tokenAt(charIndex)),
      onEnd: () => {
        setSpeaking(false)
        setCurrent(-1)
      },
    })
  }, [stop, text, tokenAt])

  useEffect(() => () => stopRef.current?.(), [])

  return { speaking, current, start, stop, toggle: speaking ? stop : start }
}

// "Read aloud" in Hindi mode: speaks the Hindi lines and tells which line is being spoken
export function useReadAloudLines(lines) {
  const [speaking, setSpeaking] = useState(false)
  const [current, setCurrent] = useState(-1) // line index being spoken
  const stopRef = useRef(null)

  const stop = useCallback(() => {
    stopRef.current?.()
    stopRef.current = null
  }, [])

  const start = useCallback(() => {
    stop()
    setSpeaking(true)
    stopRef.current = speakLines(lines, {
      onLine: setCurrent,
      onEnd: () => {
        setSpeaking(false)
        setCurrent(-1)
      },
    })
  }, [stop, lines])

  useEffect(() => () => stopRef.current?.(), [])

  return { speaking, current, start, stop }
}

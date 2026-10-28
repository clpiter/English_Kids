import { useEffect, useState } from 'react'

export const HINT_DELAY = 7000 // ms of thinking time before each hint step

// Hint level for the current question: 0 = none, goes up every HINT_DELAY while `active`.
// Pass a new `resetKey` (e.g. the question index) to start again from 0.
export function useHint(resetKey, active, maxLevel = 3) {
  const [state, setState] = useState({ key: resetKey, level: 0 })
  const level = state.key === resetKey ? state.level : 0

  useEffect(() => {
    if (!active || level >= maxLevel) return
    const timer = setTimeout(() => setState({ key: resetKey, level: level + 1 }), HINT_DELAY)
    return () => clearTimeout(timer)
  }, [resetKey, active, level, maxLevel])

  // the 💡 button: next hint now
  const more = () => setState({ key: resetKey, level: Math.min(maxLevel, level + 1) })
  return [level, more]
}

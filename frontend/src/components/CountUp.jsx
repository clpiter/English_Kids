import { useEffect, useRef, useState } from 'react'

// A number that counts up to its new value (stars, words learned...)
export default function CountUp({ value, duration = 700 }) {
  const [shown, setShown] = useState(value)
  const from = useRef(value)

  useEffect(() => {
    const start = from.current
    if (start === value) return
    const t0 = performance.now()
    let frame
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - (1 - p) ** 3
      setShown(Math.round(start + (value - start) * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
      else from.current = value
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, duration])

  return <span className="count-up">{shown}</span>
}

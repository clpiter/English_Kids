// A small burst of stars (right answers, matched pairs)
const N = 10

export default function Sparkles() {
  return (
    <span className="sparkles" aria-hidden="true">
      {Array.from({ length: N }, (_, i) => (
        <span key={i} style={{ '--a': `${(360 / N) * i}deg`, '--d': `${(i % 3) * 60}ms` }}>
          {i % 2 ? '✨' : '⭐'}
        </span>
      ))}
    </span>
  )
}

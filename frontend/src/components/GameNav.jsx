import { useT } from '../useT'

// ◀ Previous · dots · Next ▶ under a game.
// states[i]: 'right' | 'wrong' | undefined (not answered yet)
export default function GameNav({ index, count, states = [], onGo }) {
  const { t } = useT()
  return (
    <div className="game-nav">
      <button className="btn btn-light" onClick={() => onGo(index - 1)} disabled={index === 0}>
        ◀ {t('prev')}
      </button>
      <div className="game-dots" aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            tabIndex={-1}
            className={`game-dot ${states[i] || ''} ${i === index ? 'current' : ''}`}
            onClick={() => onGo(i)}
          />
        ))}
      </div>
      <button className="btn btn-light" onClick={() => onGo(index + 1)} disabled={index >= count - 1}>
        {t('next')} ▶
      </button>
    </div>
  )
}

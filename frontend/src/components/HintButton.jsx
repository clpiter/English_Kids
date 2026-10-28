import { useT } from '../useT'

// 💡 button; glows when a hint is waiting to be used
export default function HintButton({ level, max = 3, onClick, glowing }) {
  const { t } = useT()
  return (
    <button className={`hint-btn ${glowing ? 'glow' : ''}`} onClick={onClick} disabled={level >= max}>
      💡 {t('hint')}
      {level > 0 && <span className="hint-dots">{'•'.repeat(level)}</span>}
    </button>
  )
}

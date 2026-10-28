import { go, useNav } from '../nav'
import { useT } from '../useT'

export default function BackButton({ screen, params }) {
  const nav = useNav()
  const { t } = useT()
  return (
    <button className="back-btn" onClick={() => nav(go({ screen, params }))}>
      <span className="back-arrow">←</span> {t('back')}
    </button>
  )
}

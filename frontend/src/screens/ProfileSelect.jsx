import { useDispatch, useSelector } from 'react-redux'
import { deleteProfile, selectProfile } from '../store/profileSlice'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import { VOICE, useAnnounce } from '../utils/voice'

export default function ProfileSelect() {
  const dispatch = useDispatch()
  const nav = useNav()
  const profiles = useSelector((s) => s.profiles.list)
  const loading = useSelector((s) => s.profiles.status === 'loading' || s.profiles.status === 'idle')
  const { t, ts } = useT()

  useAnnounce(profiles.length ? VOICE.profiles : VOICE.profilesEmpty)

  const choose = (p) => {
    dispatch(selectProfile(p._id))
    nav(go({ screen: 'home' }))
  }

  const remove = (p) => {
    if (window.confirm(ts('deleteConfirm', { name: p.name }))) dispatch(deleteProfile(p._id))
  }

  return (
    <section className="screen">
      <div className="hero">
        <div className="hero-owl bounce">🦉</div>
        <h1>{t('whoIsLearning')}</h1>
        <p className="muted">{t('tagline')}</p>
      </div>

      {profiles.length === 0 && loading && (
        <>
          <p className="center muted">{t('loadingKids')}</p>
          <div className="profile-grid">
            {[0, 1, 2].map((i) => (
              <div key={i} className="profile-card skeleton" />
            ))}
          </div>
        </>
      )}
      {profiles.length === 0 && !loading && <p className="center muted">{t('noKids')}</p>}

      <div className="profile-grid">
        {profiles.map((p) => (
          <div key={p._id} className="profile-card" style={{ '--c': p.color }}>
            <button className="profile-main" onClick={() => choose(p)}>
              <span className="profile-avatar">{p.avatar}</span>
              <span className="profile-name">{p.name}</span>
              <span className="profile-meta">
                ⭐ {p.stars} · 📚 {p.learned.length}
              </span>
            </button>
            <div className="profile-actions">
              <button title={ts('editKid')} onClick={() => nav(go({ screen: 'profileForm', params: { id: p._id } }))}>
                ✏️
              </button>
              <button title={ts('delete')} onClick={() => remove(p)}>
                🗑️
              </button>
            </div>
          </div>
        ))}

        <button className="profile-card add-card" onClick={() => nav(go({ screen: 'profileForm' }))}>
          <span className="profile-avatar">➕</span>
          <span className="profile-name">{t('addKid')}</span>
        </button>
      </div>

      <button className="link-btn" onClick={() => nav(go({ screen: 'credits' }))}>
        📷 {t('credits')}
      </button>
    </section>
  )
}

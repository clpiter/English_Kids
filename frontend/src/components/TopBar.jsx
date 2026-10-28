import { useDispatch, useSelector } from 'react-redux'
import { setLang, toggleTheme } from '../store/uiSlice'
import { go, useNav } from '../nav'
import { selectCurrentProfile, selectProfile } from '../store/profileSlice'
import { useT } from '../useT'

// small screens: one button that goes हिंदी → दोनों → English
const LANG_CYCLE = { hi: 'both', both: 'en', en: 'hi' }
const LANG_SHORT = { hi: 'हिं', both: 'अ·A', en: 'EN' }

const LANG_OPTIONS = [
  { id: 'hi', label: 'हिंदी' },
  { id: 'both', label: 'दोनों · Both' },
  { id: 'en', label: 'English' },
]

export default function TopBar() {
  const dispatch = useDispatch()
  const nav = useNav()
  const { lang, theme } = useSelector((s) => s.ui)
  const profile = useSelector(selectCurrentProfile)
  const { t, ts } = useT()

  return (
    <header className="topbar">
      <button
        className="brand"
        onClick={() => nav(go({ screen: profile ? 'home' : 'profiles' }))}
        title={ts('home')}
      >
        <span className="brand-logo">🦉</span>
        <span className="brand-name">{t('appName')}</span>
      </button>

      <div className="topbar-right">
        <button
          className="theme-btn"
          onClick={() => dispatch(toggleTheme())}
          title={ts(theme === 'dark' ? 'lightMode' : 'darkMode')}
          aria-label={ts(theme === 'dark' ? 'lightMode' : 'darkMode')}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button className="lang-cycle" onClick={() => dispatch(setLang(LANG_CYCLE[lang]))} aria-label="Language">
          {LANG_SHORT[lang]}
        </button>

        <div className="lang-toggle" role="group" aria-label="Language">
          {LANG_OPTIONS.map((o) => (
            <button
              key={o.id}
              className={lang === o.id ? 'active' : ''}
              onClick={() => dispatch(setLang(o.id))}
            >
              {o.label}
            </button>
          ))}
        </div>

        {profile && (
          <div className="kid-chip">
            <span className="kid-chip-avatar" style={{ background: profile.color }}>
              {profile.avatar}
            </span>
            <span className="kid-chip-name">{profile.name}</span>
            <span className="kid-chip-stars">⭐ {profile.stars}</span>
            <button
              className="kid-chip-switch"
              title={ts('switchKid')}
              onClick={() => {
                dispatch(selectProfile(null))
                nav(go({ screen: 'profiles' }))
              }}
            >
              🔄
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

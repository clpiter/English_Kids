import { useDispatch, useSelector } from 'react-redux'
import { setLang, toggleTheme } from '../store/uiSlice'
import { go, useNav } from '../nav'
import { selectCurrentProfile, selectProfile } from '../store/profileSlice'
import { useT } from '../useT'
import CountUp from './CountUp'

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
            <span className="kid-chip-stars" key={profile.stars}>
              ⭐ <CountUp value={profile.stars} />
            </span>
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
        <button className="theme-btn login-btn" onClick={() => nav(go({ screen: 'admin' }))} title={ts('adminLogin')} aria-label={ts('adminLogin')}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <circle cx="12" cy="8" r="4" fill="currentColor" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" />
            <rect x="15" y="13" width="8" height="7" rx="1.5" fill="#ffb300" stroke="var(--card)" strokeWidth="1.2" />
            <path d="M17 13v-1.5a2 2 0 0 1 4 0V13" fill="none" stroke="#ffb300" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </header>
  )
}

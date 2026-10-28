import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { selectCurrentProfile } from '../store/profileSlice'
import { useT } from '../useT'

const TABS = [
  { to: '/home', icon: '🏠', label: 'tabLearn', also: ['/category'] },
  { to: '/book', icon: '📕', label: 'tabBook' },
  { to: '/reading', icon: '📖', label: 'tabRead' },
  { to: '/words', icon: '⭐', label: 'tabWords' },
  { to: '/progress', icon: '📊', label: 'tabProgress' },
]

// Main menu: bottom bar on phones, a row under the top bar on bigger screens
export default function TabBar() {
  const profile = useSelector(selectCurrentProfile)
  const { t } = useT()
  const { pathname } = useLocation()
  if (!profile) return null

  const difficultCount = profile.difficult?.length || 0

  return (
    <nav className="tabbar" aria-label="Menu">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `tab ${isActive || tab.also?.some((p) => pathname.startsWith(p)) ? 'active' : ''}`
          }
        >
          <span className="tab-icon">
            {tab.icon}
            {tab.to === '/words' && difficultCount > 0 && <span className="tab-badge">{difficultCount}</span>}
          </span>
          <span className="tab-label">{t(tab.label)}</span>
        </NavLink>
      ))}
    </nav>
  )
}

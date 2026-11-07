import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { selectCurrentProfile } from '../store/profileSlice'
import { useT } from '../useT'

// `also`: other pages that belong to the tab (the tab stays lit there, and remembers them)
const TABS = [
  { to: '/home', icon: '🏠', label: 'tabLearn', also: ['/category', '/reading'] },
  { to: '/grammar', icon: '📐', label: 'tabGrammar', also: ['/tense', '/preposition'] },
  { to: '/book', icon: '📕', label: 'tabBook' },
  // games with My words run at /category/difficult/... but belong to this tab
  { to: '/words', icon: '⭐', label: 'tabWords', also: ['/category/difficult'] },
  { to: '/progress', icon: '📊', label: 'tabProgress' },
]

// how well a tab matches a page: the length of its longest matching path (0 = not its page)
const match = (tab, pathname) =>
  Math.max(0, ...[tab.to, ...(tab.also || [])].filter((p) => pathname === p || pathname.startsWith(`${p}/`)).map((p) => p.length))

// The last page opened in each tab, per kid, so coming back to a tab opens it again.
// Kept for this browser session; result pages need the game's data, so they are not remembered.
const STORE = 'ek-tab-pages'
let memory = {}
try {
  memory = JSON.parse(sessionStorage.getItem(STORE) || '{}')
} catch {
  memory = {}
}
const remember = (kid, tab, path) => {
  memory[kid] = { ...memory[kid], [tab]: path }
  try {
    sessionStorage.setItem(STORE, JSON.stringify(memory))
  } catch {
    // private mode: still remembered until the page is reloaded
  }
}

// Main menu: bottom bar on phones, a row under the top bar on bigger screens
export default function TabBar() {
  const profile = useSelector(selectCurrentProfile)
  const { t } = useT()
  const { pathname, search } = useLocation()
  const kid = profile?._id
  // the most specific tab wins (/category/difficult is My words, other /category pages are Learn)
  const best = Math.max(...TABS.map((tab) => match(tab, pathname)))
  const current = best > 0 ? TABS.find((tab) => match(tab, pathname) === best) : undefined

  useEffect(() => {
    if (kid && current && !pathname.endsWith('/result')) remember(kid, current.to, pathname + search)
  }, [kid, current, pathname, search])

  if (!profile) return null

  const difficultCount = profile.difficult?.length || 0

  return (
    <nav className="tabbar" aria-label="Menu">
      {TABS.map((tab) => {
        const active = tab === current
        // another tab: open its last page; the tab you are on: back to its main page
        const to = active ? tab.to : memory[kid]?.[tab.to] || tab.to
        return (
          <NavLink key={tab.to} to={to} className={`tab ${active ? 'active' : ''}`}>
            <span className="tab-icon">
              {tab.icon}
              {tab.to === '/words' && difficultCount > 0 && <span className="tab-badge">{difficultCount}</span>}
            </span>
            <span className="tab-label">{t(tab.label)}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

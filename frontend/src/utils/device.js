// This browser's / phone's id, kept in a cookie (and in localStorage as a backup).
// The server shows each device only the kids' profiles made on it.
const NAME = 'ek_device'
const YEARS_5 = 5 * 365 * 24 * 3600

const readCookie = () => document.cookie.match(new RegExp(`(?:^|; )${NAME}=([A-Za-z0-9-]+)`))?.[1] || ''

function writeCookie(id) {
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${NAME}=${id}; Max-Age=${YEARS_5}; Path=/; SameSite=Lax${secure}`
}

function newId() {
  if (crypto.randomUUID) return crypto.randomUUID()
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join('')
}

let cached = ''
export function deviceId() {
  if (cached) return cached
  let id = readCookie()
  if (!id) {
    try {
      id = localStorage.getItem(NAME) || ''
    } catch {
      id = ''
    }
  }
  if (!/^[A-Za-z0-9-]{16,64}$/.test(id)) id = newId()
  writeCookie(id) // also renews it, so it does not expire while the app is used
  try {
    localStorage.setItem(NAME, id)
  } catch {
    // storage blocked: the cookie is enough
  }
  cached = id
  return id
}

// profiles this browser already used before devices existed: the server gives them to this device
export function knownProfileIds() {
  try {
    const list = JSON.parse(localStorage.getItem('ek-profiles') || '[]')
    const ids = list.map((p) => p._id)
    const kid = localStorage.getItem('ek-kid')
    if (kid) ids.push(kid)
    return [...new Set(ids)].filter((id) => /^[a-f0-9]{24}$/.test(id))
  } catch {
    return []
  }
}

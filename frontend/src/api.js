import axios from 'axios'
import { deviceId, knownProfileIds } from './utils/device'

// Where the backend is:
// - on this computer / phone on the same Wi-Fi (localhost, 192.168.x.x): the same server, at /api
// - deployed (e.g. the Render static site): VITE_API_URL from .env.production
const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost'
const isLocal = host === 'localhost' || host === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(host)
const remote = import.meta.env.VITE_API_URL

const api = axios.create({ baseURL: remote && !isLocal ? remote : '/api' })

export const ADMIN_TOKEN = 'ek-admin'

api.interceptors.request.use((config) => {
  config.headers['X-Device-Id'] = deviceId()
  if (config.method === 'get' && config.url === '/profiles') {
    const ids = knownProfileIds()
    if (ids.length) config.headers['X-Claim'] = ids.join(',')
  }
  if (config.url?.startsWith('/admin')) {
    try {
      const token = sessionStorage.getItem(ADMIN_TOKEN)
      if (token) config.headers.Authorization = `Bearer ${token}`
    } catch {
      // storage blocked: the admin has to log in again
    }
  }
  return config
})

export default api

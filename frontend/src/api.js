import axios from 'axios'

// Where the backend is:
// - on this computer / phone on the same Wi-Fi (localhost, 192.168.x.x): the same server, at /api
// - deployed (e.g. the Render static site): VITE_API_URL from .env.production
const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost'
const isLocal = host === 'localhost' || host === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(host)
const remote = import.meta.env.VITE_API_URL

const api = axios.create({ baseURL: remote && !isLocal ? remote : '/api' })

export default api

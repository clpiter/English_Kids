import { createSlice } from '@reduxjs/toolkit'

const LANGS = ['hi', 'en', 'both']

function savedLang() {
  try {
    const lang = localStorage.getItem('ek-lang')
    return LANGS.includes(lang) ? lang : 'both'
  } catch {
    return 'both'
  }
}

// Saved choice, otherwise follow the device setting
function savedTheme() {
  try {
    const theme = localStorage.getItem('ek-theme')
    if (theme === 'light' || theme === 'dark') return theme
  } catch {
    // storage unavailable – fall through
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const uiSlice = createSlice({
  name: 'ui',
  // which screen is shown lives in the URL (see nav.js)
  initialState: {
    lang: savedLang(),
    theme: savedTheme(),
  },
  reducers: {
    setLang(state, action) {
      if (LANGS.includes(action.payload)) state.lang = action.payload
    },
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { setLang, toggleTheme } = uiSlice.actions
export default uiSlice.reducer

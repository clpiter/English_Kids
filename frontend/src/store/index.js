import { configureStore } from '@reduxjs/toolkit'
import ui from './uiSlice'
import words from './wordsSlice'
import profiles from './profileSlice'

export const store = configureStore({
  reducer: { ui, words, profiles },
})

// Apply the colour theme to <html> so the CSS variables switch
const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme
}
applyTheme(store.getState().ui.theme)

// Keep the kids' profiles on this device (shown at once on the next visit)
let lastProfiles = store.getState().profiles.list
store.subscribe(() => {
  const { list } = store.getState().profiles
  if (list === lastProfiles) return
  lastProfiles = list
  try {
    localStorage.setItem('ek-profiles', JSON.stringify(list))
  } catch {
    // storage full or blocked – ignore
  }
})

// Remember the selected kid on this device, so links like /category/animals work after a reload
let lastKid = store.getState().profiles.currentId
store.subscribe(() => {
  const kid = store.getState().profiles.currentId
  if (kid === lastKid) return
  lastKid = kid
  try {
    if (kid) localStorage.setItem('ek-kid', kid)
    else localStorage.removeItem('ek-kid')
  } catch {
    // storage unavailable – ignore
  }
})

// Remember the interface language and theme on this device
let last = { lang: store.getState().ui.lang, theme: store.getState().ui.theme }
store.subscribe(() => {
  const { lang, theme } = store.getState().ui
  if (lang === last.lang && theme === last.theme) return
  if (theme !== last.theme) applyTheme(theme)
  last = { lang, theme }
  try {
    localStorage.setItem('ek-lang', lang)
    localStorage.setItem('ek-theme', theme)
  } catch {
    // storage unavailable (private mode) – ignore
  }
})

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

// All the app's content (words, photos, stories, glossary, the book) comes from one file,
// /data/content.json (built by backend/scripts/build-content.js). It is kept on the device, so after
// the first visit the app opens straight away — even offline — and quietly checks for a newer file.
const STORE_KEY = 'ek-content'

function savedContent() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY))
    return saved?.words?.length ? saved : null
  } catch {
    return null
  }
}

function saveContent(content) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(content))
  } catch {
    // storage full or blocked: the app still works, it just loads again next time
  }
}

async function downloadContent() {
  try {
    // same address as the site: fast, and no need to wake up the backend server
    const res = await fetch('/data/content.json', { cache: 'no-cache' })
    if (res.ok) return await res.json()
  } catch {
    // offline, or file missing (e.g. Vite dev server without a build): try the API
  }
  const [words, book] = await Promise.all([api.get('/words'), api.get('/book')])
  return { version: 'api', ...words.data, books: book.data.books }
}

// Show the saved copy at once (if any), then update it when the file has changed
export const fetchWords = createAsyncThunk('words/fetch', async (_, { dispatch }) => {
  const saved = savedContent()
  if (saved) dispatch(contentLoaded(saved))
  try {
    const fresh = await downloadContent()
    if (!saved || fresh.version !== saved.version || fresh.version === 'api') {
      saveContent(fresh)
      dispatch(contentLoaded(fresh))
    }
  } catch (err) {
    if (!saved) throw err // nothing to show at all
  }
})

// `book.lessons` = the lessons of all books (each knows its `bookId`); `books` = the books themselves
const EMPTY_BOOK = { title: '', titleHi: '', lessons: [] }

const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    categories: [],
    list: [],
    stories: [],
    glossary: {},
    book: EMPTY_BOOK,
    books: [],
    version: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    contentLoaded(state, action) {
      const { version, categories, words, stories, glossary } = action.payload
      // older saved copies had a single `book`
      const books = action.payload.books || (action.payload.book ? [{ id: 'santoor', ...action.payload.book }] : [])
      state.status = 'ready'
      state.error = null
      state.version = version || null
      state.categories = categories
      state.list = words
      state.stories = stories || []
      state.books = books.map(({ lessons, ...info }) => ({ ...info, lessonIds: lessons.map((l) => l.id) }))
      state.book = { ...EMPTY_BOOK, lessons: books.flatMap((b) => b.lessons.map((l) => ({ ...l, bookId: l.bookId || b.id }))) }
      // tapped words in the book are explained from its own word lists too
      const bookGlossary = {}
      for (const lesson of state.book.lessons) {
        for (const [en, hi, say = ''] of lesson.words || []) bookGlossary[en.toLowerCase()] = [hi, say]
      }
      state.glossary = { ...(glossary || {}), ...bookGlossary }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        if (state.status !== 'ready') state.status = 'loading'
        state.error = null
      })
      .addCase(fetchWords.rejected, (state, action) => {
        if (state.status === 'ready') return
        state.status = 'error'
        state.error = action.error.message
      })
  },
})

export const { contentLoaded } = wordsSlice.actions
export default wordsSlice.reducer

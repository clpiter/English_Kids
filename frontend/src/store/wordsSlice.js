import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

export const fetchWords = createAsyncThunk('words/fetch', async () => {
  const [words, book] = await Promise.all([api.get('/words'), api.get('/book')])
  return { ...words.data, book: book.data }
})

const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    categories: [],
    list: [],
    stories: [],
    glossary: {},
    book: { title: '', titleHi: '', lessons: [] },
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        const { categories, words, stories, glossary, book } = action.payload
        state.status = 'ready'
        state.categories = categories
        state.list = words
        state.stories = stories || []
        state.book = book || { title: '', titleHi: '', lessons: [] }
        // tapped words in the book are explained from its own word lists too
        const bookGlossary = {}
        for (const lesson of state.book.lessons) {
          for (const [en, hi, say = ''] of lesson.words || []) bookGlossary[en.toLowerCase()] = [hi, say]
        }
        state.glossary = { ...(glossary || {}), ...bookGlossary }
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  },
})

export default wordsSlice.reducer

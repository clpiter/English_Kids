import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

export const fetchProfiles = createAsyncThunk('profiles/fetch', async () => (await api.get('/profiles')).data)

export const createProfile = createAsyncThunk(
  'profiles/create',
  async (data) => (await api.post('/profiles', data)).data,
)

export const updateProfile = createAsyncThunk(
  'profiles/update',
  async ({ id, ...data }) => (await api.put(`/profiles/${id}`, data)).data,
)

export const deleteProfile = createAsyncThunk('profiles/delete', async (id) => {
  await api.delete(`/profiles/${id}`)
  return id
})

export const markLearned = createAsyncThunk(
  'profiles/learned',
  async ({ id, keys }) => (await api.post(`/profiles/${id}/learned`, { keys })).data,
)

export const submitResults = createAsyncThunk(
  'profiles/results',
  async ({ id, ...body }) => (await api.post(`/profiles/${id}/results`, body)).data.profile,
)

// Mark / unmark difficult words: { id, key, on } or { id, keys: [...], on }
// (key = word key, or "g:<word>" for everyday / book words)
export const setDifficult = createAsyncThunk(
  'profiles/difficult',
  async ({ id, key, keys, on }) => (await api.post(`/profiles/${id}/difficult`, { keys: keys || [key], on })).data,
)

// Words the kid could not read aloud in a lesson -> "Say the word" practice
export const addMissed = createAsyncThunk(
  'profiles/missed',
  async ({ id, keys }) => (await api.post(`/profiles/${id}/missed`, { keys })).data,
)

export const finishLesson = createAsyncThunk(
  'profiles/lesson',
  async ({ id, lesson }) => (await api.post(`/profiles/${id}/lessons`, { id: lesson })).data,
)

// Kids' profiles are kept on the device too: the app shows them at once and keeps working
// while the server is waking up or offline; the server's copy replaces them when it answers.
function savedProfiles() {
  try {
    const list = JSON.parse(localStorage.getItem('ek-profiles'))
    return Array.isArray(list) ? list : null
  } catch {
    return null
  }
}

function savedCurrentId() {
  try {
    return localStorage.getItem('ek-kid')
  } catch {
    return null
  }
}

function upsert(state, action) {
  const profile = action.payload
  const i = state.list.findIndex((p) => p._id === profile._id)
  if (i === -1) state.list.push(profile)
  else state.list[i] = profile
}

const profileSlice = createSlice({
  name: 'profiles',
  initialState: (() => {
    const saved = savedProfiles()
    return { list: saved || [], currentId: savedCurrentId(), status: saved ? 'ready' : 'idle', error: null, offline: false }
  })(),
  reducers: {
    selectProfile(state, action) {
      state.currentId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        if (state.status !== 'ready') state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = 'ready'
        state.offline = false
        state.list = action.payload
        // the remembered kid may have been deleted on another device
        if (!state.list.some((p) => p._id === state.currentId)) state.currentId = null
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        // saved profiles on this device: keep going with them
        if (state.status === 'ready') {
          state.offline = true
          return
        }
        state.status = 'error'
        state.error = action.error.message
      })
      .addCase(createProfile.fulfilled, upsert)
      .addCase(updateProfile.fulfilled, upsert)
      .addCase(markLearned.fulfilled, upsert)
      .addCase(submitResults.fulfilled, upsert)
      .addCase(finishLesson.fulfilled, upsert)
      .addCase(addMissed.pending, (state, action) => {
        const { id, keys } = action.meta.arg
        const p = state.list.find((x) => x._id === id)
        if (p) p.missedWords = [...new Set([...(p.missedWords || []), ...keys])]
      })
      .addCase(addMissed.fulfilled, upsert)
      .addCase(setDifficult.pending, (state, action) => {
        // show the change right away
        const { id, key, keys = [key], on } = action.meta.arg
        const p = state.list.find((x) => x._id === id)
        if (!p) return
        p.difficult = (p.difficult || []).filter((k) => !keys.includes(k))
        if (on !== false) p.difficult.push(...keys)
      })
      .addCase(setDifficult.fulfilled, upsert)
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.list = state.list.filter((p) => p._id !== action.payload)
        if (state.currentId === action.payload) state.currentId = null
      })
  },
})

export const { selectProfile } = profileSlice.actions

export const selectCurrentProfile = (state) =>
  state.profiles.list.find((p) => p._id === state.profiles.currentId) || null

export default profileSlice.reducer

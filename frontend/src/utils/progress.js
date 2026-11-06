// Grammar and book progress of one profile (used by the Progress tab and the admin panel)
import { TENSES } from '../data/tenses'
import { STRUCTURES } from '../data/structures'
import { PREPOSITIONS } from '../data/prepositions'

const scoreOf = (profile, key) => profile.grammarScores?.[key] || null

// [{ id, key, en, hi, group, done, played, best, last }] for tenses and structures, plus totals
export function grammarProgress(profile) {
  const done = new Set(profile.lessonsDone || [])
  const row = (key, item, group) => {
    const s = scoreOf(profile, key)
    return { key, id: item.id, en: item.en, hi: item.hi, formula: item.formula, group, done: done.has(key), played: s?.played || 0, best: s?.best ?? null, last: s?.last ?? null }
  }
  const tenses = TENSES.map((x) => row(`tense-${x.id}`, x, x.time))
  const structures = STRUCTURES.map((x) => row(`gram-${x.id}`, x, x.level))
  const preps = PREPOSITIONS.map((x) => row(`prep-${x.id}`, x, x.group))
  const mix = ['tense-mix', 'gram-mix', 'prep-mix'].map((key) => ({ key, ...(scoreOf(profile, key) || { played: 0, best: null }) }))
  const all = [...tenses, ...structures, ...preps]
  const scored = Object.values(profile.grammarScores || {})
  return {
    tenses,
    structures,
    mix,
    tensesDone: tenses.filter((x) => x.done).length,
    structuresDone: structures.filter((x) => x.done).length,
    preps,
    prepsDone: preps.filter((x) => x.done).length,
    played: scored.reduce((n, s) => n + (s.played || 0), 0),
    correct: scored.reduce((n, s) => n + (s.correct || 0), 0),
    total: scored.reduce((n, s) => n + (s.total || 0), 0),
    started: all.filter((x) => x.played).length,
  }
}

// per book: lessons read, games played on its lessons, best scores, words chosen / not read aloud
export function bookProgress(profile, allLessons, books) {
  const done = new Set(profile.lessonsDone || [])
  const best = profile.bestScores || {}
  const difficult = new Set(profile.difficult || [])
  const missed = new Set(profile.missedWords || [])
  const history = profile.history || []
  return books.map((b) => {
    const lessons = allLessons
      .filter((l) => l.bookId === b.id)
      .map((l) => {
        const cat = `book-${l.id}`
        const scores = Object.entries(best)
          .filter(([k]) => k.endsWith(`:${cat}`))
          .map(([k, v]) => ({ activity: k.split(':')[0], best: v }))
        const words = (l.words || []).map(([en]) => `g:${en.toLowerCase()}`)
        return {
          id: l.id,
          title: l.title,
          titleHi: l.titleHi,
          done: done.has(l.id),
          games: history.filter((h) => h.category === cat).length,
          scores,
          best: scores.length ? Math.max(...scores.map((s) => s.best)) : null,
          myWords: words.filter((k) => difficult.has(k)).length,
          missed: words.filter((k) => missed.has(k)).length,
        }
      })
    return {
      id: b.id,
      short: b.short || b.title,
      shortHi: b.shortHi || b.titleHi,
      title: b.title,
      titleHi: b.titleHi,
      lessons,
      done: lessons.filter((l) => l.done).length,
      total: lessons.length,
      games: lessons.reduce((n, l) => n + l.games, 0),
    }
  })
}

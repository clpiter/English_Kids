import { buildLexicon, difficultKey, tokenize } from './reading'

// Games that work with book words (no pictures needed). Each opens at /book/:lesson/play/:id
export const BOOK_GAMES = ['sayit', 'meaning', 'hindi', 'match', 'builder', 'missing']

export const bookCategory = (lessonId) => `book-${lessonId}`

// A book word as a "word" object the games understand (no photo: `book: true`)
export function bookWord(lesson, en, hi, say = '') {
  return { key: `g:${en.toLowerCase()}`, en: en.toLowerCase(), hi, say, emoji: '', image: '', category: bookCategory(lesson.id), book: true }
}

// Words of a lesson worth practising: its own word list + picture words (word list) found in the text.
// With `everyWord`, also everyday words the kid can tap in the text (is, was, from...).
export function lessonWords(lesson, words, glossary, everyWord = false) {
  const out = new Map()
  for (const [en, hi, say] of lesson.words || []) out.set(`g:${en.toLowerCase()}`, bookWord(lesson, en, hi, say))
  const lex = buildLexicon(words, glossary, undefined, lesson.words || [])
  for (const tok of tokenize(lesson.en, lex)) {
    if (tok.type !== 'word') continue
    const w = tok.entry?.word
    const g = tok.entry?.gloss
    if (!w && !everyWord) continue
    const key = difficultKey(tok.entry, tok.text)
    if (out.has(key)) continue
    // words without a meaning (names, sounds) can still be practised aloud
    out.set(key, w ? { ...w } : g ? bookWord(lesson, g.en, g.hi, g.say) : bookWord(lesson, tok.text, '', ''))
  }
  return [...out.values()]
}

// Words for a book game: the difficult words the kid chose in this lesson (any tapped word),
// or all the lesson's words worth practising
// 'missed' = words the kid could not read aloud in this lesson
export function bookPool(lesson, words, glossary, profile, which = 'mine') {
  if (which === 'all') return lessonWords(lesson, words, glossary)
  const mine = new Set(which === 'missed' ? profile?.missedWords || [] : profile?.difficult || [])
  return lessonWords(lesson, words, glossary, true).filter((w) => mine.has(w.key))
}

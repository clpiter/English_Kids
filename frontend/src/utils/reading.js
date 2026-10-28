import { getPool } from './questions'

// Turns a paragraph into tappable words and finds each word's meaning.

// Word list first from the story's own category, so e.g. "orange" means the fruit in a fruit story.
// `lessonWords` ([en, hi, say] of a book lesson) win over everything, so a word can have the meaning
// it has in that lesson (e.g. "door" in "Chanda mama door ke" = दूर).
export function buildLexicon(words, glossary, preferCategory, lessonWords = []) {
  const vocab = new Map()
  const ordered = [...words.filter((w) => w.category === preferCategory), ...words]
  for (const w of ordered) if (!vocab.has(w.en)) vocab.set(w.en, w)
  const own = Object.fromEntries(lessonWords.map(([en, hi, say = '']) => [en.toLowerCase(), [hi, say]]))
  return { vocab, glossary: { ...glossary, ...own }, own }
}

// Simple English endings: drinks -> drink, carrots -> carrot, flies -> fly, raining -> rain
function candidates(token) {
  const t = token.toLowerCase().replace(/'s$/, '')
  return [
    t,
    t.replace(/ies$/, 'y'),
    t.replace(/s$/, ''),
    t.replace(/es$/, ''),
    t.replace(/ing$/, ''),
    t.replace(/ing$/, 'e'),
    t.replace(/ed$/, ''),
    t.replace(/d$/, ''),
  ]
}

export function lookup(token, lex) {
  for (const c of candidates(token)) {
    if (lex.own?.[c]) return { gloss: { en: c, hi: lex.own[c][0], say: lex.own[c][1] } }
    if (lex.vocab.has(c)) return { word: lex.vocab.get(c) }
    if (lex.glossary[c]) return { gloss: { en: c, hi: lex.glossary[c][0], say: lex.glossary[c][1] } }
  }
  return null
}

// -> [{ type: 'word', text, entry } | { type: 'gap', text }]
export function tokenize(text, lex) {
  // a word may have an apostrophe inside (don't, Badal's) but not at its ends ('Snakes')
  const parts = text.match(/[A-Za-z]+(?:'[A-Za-z]+)*|[^A-Za-z]+/g) || []
  const out = []
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (!/^[A-Za-z]/.test(part)) {
      out.push({ type: 'gap', text: part })
      continue
    }
    // two-word words like "ice cream" (word list) or "one day" (book word lists)
    const next = parts[i + 2]
    const phrase = next && parts[i + 1] === ' ' ? `${part} ${next}`.toLowerCase() : null
    if (phrase && lex.vocab.has(phrase)) {
      out.push({ type: 'word', text: `${part} ${next}`, entry: { word: lex.vocab.get(phrase) } })
      i += 2
      continue
    }
    if (phrase && lex.glossary[phrase]) {
      const [hi, say] = lex.glossary[phrase]
      out.push({ type: 'word', text: `${part} ${next}`, entry: { gloss: { en: phrase, hi, say } } })
      i += 2
      continue
    }
    out.push({ type: 'word', text: part, entry: lookup(part, lex) })
  }
  return out
}

// Stories for a category screen (mix = all, practice / mistakes = categories of those words)
export function storiesFor(stories, words, category, profile) {
  if (category === 'mix') return stories
  if (category === 'practice' || category === 'mistakes' || category === 'difficult') {
    const cats = new Set(getPool(words, category, profile).map((w) => w.category))
    return stories.filter((s) => cats.has(s.category))
  }
  return stories.filter((s) => s.category === category)
}

// Key saved in "My words" for a tapped word: the word list key, or "g:<word>" for everyday words
export function difficultKey(entry, text) {
  if (entry?.word) return entry.word.key
  return `g:${(entry?.gloss?.en || text).toLowerCase()}`
}

// Any saved word key (word list key, or "g:<word>") -> a word object the games understand
export function wordFromKey(key, words, glossary) {
  if (!key.startsWith('g:')) return words.find((w) => w.key === key) || null
  const en = key.slice(2)
  const g = glossary[en]
  return { key, en, hi: g?.[0] || '', say: g?.[1] || '', emoji: '', image: '', category: 'missed', book: true }
}

// "My words" key -> { key, en, hi, say, word? }
export function resolveDifficult(key, words, glossary) {
  if (key.startsWith('g:')) {
    const en = key.slice(2)
    const g = glossary[en]
    return { key, en, hi: g?.[0] || '', say: g?.[1] || '' }
  }
  const word = words.find((w) => w.key === key)
  return word ? { key, en: word.en, hi: word.hi, say: word.say, word } : null
}

// A text split at `sep`, with where each part starts
function withOffsets(text, sep) {
  const out = []
  let start = 0
  for (const part of text.split(sep)) {
    out.push({ start, text: part })
    start += part.length + sep.length
  }
  return out
}

const EN_SENTENCE = /[^.!?]*[.!?]+["'”’)]*\s*|[^.!?]+$/g
const HI_SENTENCE = /[^।?!]*[।?!]+["'”’)]*\s*|[^।?!]+$/g

// Pieces of one paragraph: line by line (poems, letters), else sentence by sentence,
// else the whole paragraph when the English and Hindi don't split into the same number of parts
function matchPieces(en, hi) {
  const enLines = withOffsets(en, '\n')
  const hiLines = hi.split('\n')
  if (enLines.length > 1 && enLines.length === hiLines.length) {
    return enLines.map((l, i) => ({ end: l.start + l.text.trimEnd().length, hi: hiLines[i].trim() }))
  }
  const enSent = [...en.matchAll(EN_SENTENCE)].filter((m) => m[0].trim())
  const hiSent = (hi.match(HI_SENTENCE) || []).filter((s) => s.trim())
  if (enSent.length > 1 && enSent.length === hiSent.length) {
    return enSent.map((m, i) => ({ end: m.index + m[0].trimEnd().length, hi: hiSent[i].trim() }))
  }
  return [{ end: en.trimEnd().length, hi: hi.trim() }]
}

// English text + its Hindi translation -> pieces to show the Hindi under each English line:
// [{ end, hi, paraEnd }], `end` = where that piece ends in the English text
export function pairLines(en, hi) {
  if (!en || !hi) return []
  const enParas = withOffsets(en, '\n\n')
  const hiParas = hi.split('\n\n')
  if (enParas.length !== hiParas.length) return [{ end: en.trimEnd().length, hi: hi.trim(), paraEnd: true }]
  const out = []
  enParas.forEach((p, i) => {
    const pieces = matchPieces(p.text, hiParas[i])
    pieces.forEach((pc, j) => out.push({ end: p.start + pc.end, hi: pc.hi, paraEnd: j === pieces.length - 1 }))
  })
  return out
}

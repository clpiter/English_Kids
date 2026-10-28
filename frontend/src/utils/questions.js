export const ROUNDS = 8

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Words made only of letters (for spelling games)
export const isSpellable = (w) => /^[a-z]{3,9}$/i.test(w.en)

// Words for a category screen / game
export function getPool(words, category, profile) {
  if (category === 'mix') return words
  if (category === 'mistakes') {
    const open = new Set(profile?.openMistakes || [])
    return words.filter((w) => open.has(w.key))
  }
  if (category === 'difficult') {
    const mine = new Set(profile?.difficult || [])
    return words.filter((w) => mine.has(w.key))
  }
  if (category === 'practice') {
    return words.filter((w) => {
      const level = profile?.mastery?.[w.key]
      return level !== undefined && level < 3
    })
  }
  return words.filter((w) => w.category === category)
}

// How much a word needs practice: low = needs it more.
// Words got wrong (and not fixed yet), missed often, or marked difficult come first.
export function needScore(w, profile) {
  const level = profile?.mastery?.[w.key] ?? 0
  const open = profile?.openMistakes?.includes(w.key) ? 2 : 0
  const missed = Math.min(profile?.mistakeCounts?.[w.key] ?? 0, 4) * 0.5
  const difficult = profile?.difficult?.includes(w.key) ? 1 : 0
  return level - open - missed - difficult
}

// Pick n words, preferring the ones the kid finds hardest (with some randomness)
export function pickTargets(pool, n, profile) {
  return shuffle(pool)
    .map((w) => ({ w, score: needScore(w, profile) + Math.random() * 2.5 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, n)
    .map((x) => x.w)
}

// Wrong options: same category first, then the pool, then all words.
// `field` must differ from the answer so no two options look the same.
function distractors(word, pool, all, n, field) {
  const seen = new Set([word[field]])
  const out = []
  const candidates = [
    ...shuffle(pool.filter((w) => w.category === word.category)),
    ...shuffle(pool),
    ...shuffle(all),
  ]
  for (const w of candidates) {
    if (out.length >= n) break
    if (seen.has(w[field]) || (w.emoji && w.emoji === word.emoji)) continue
    seen.add(w[field])
    out.push(w)
  }
  return out
}

function choiceOptions(word, pool, all, field) {
  return shuffle([word, ...distractors(word, pool, all, 3, field)]).map((w) => ({
    id: w.key,
    label: w[field],
    correct: w[field] === word[field],
  }))
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

function missingLetterQuestion(word) {
  const letters = word.en.toLowerCase()
  const index = Math.floor(Math.random() * letters.length)
  const answer = letters[index]
  const wrong = shuffle([...ALPHABET].filter((c) => c !== answer)).slice(0, 3)
  return {
    word,
    missingIndex: index,
    options: shuffle([answer, ...wrong]).map((c) => ({ id: c, label: c, correct: c === answer })),
  }
}

export function buildQuestions(mode, pool, all, profile) {
  const source = mode === 'missing' ? pool.filter(isSpellable) : pool
  const targets = pickTargets(source, Math.min(ROUNDS, source.length), profile)
  return targets.map((word) => buildQuestion(mode, word, pool, all))
}

// One question about `word` (also used to ask a word again after a mistake)
export function buildQuestion(mode, word, pool, all) {
  switch (mode) {
    case 'picture':
    case 'hindi':
      return { word, options: choiceOptions(word, pool, all, 'en') }
    case 'listen':
      return { word, options: choiceOptions(word, pool, all, 'emoji') }
    case 'meaning':
      return { word, options: choiceOptions(word, pool, all, 'hi') }
    case 'yesno': {
      const shown = Math.random() < 0.5 ? word : distractors(word, pool, all, 1, 'en')[0] || word
      const right = shown.en === word.en
      return {
        word,
        shown,
        options: [
          { id: 'yes', label: 'yes', correct: right },
          { id: 'no', label: 'no', correct: !right },
        ],
      }
    }
    case 'missing':
      return missingLetterQuestion(word)
    default:
      throw new Error(`Unknown mode ${mode}`)
  }
}

// Builds English sentences in any tense from { s, p, v, rest } (see data/tenses.js):
// sentence(ex, tenseId, 'aff' | 'neg' | 'q') -> "She plays football every evening."

// irregular verbs: [past (V2), past participle (V3)]
const IRREGULAR = {
  be: ['was', 'been'], build: ['built', 'built'], buy: ['bought', 'bought'], come: ['came', 'come'],
  do: ['did', 'done'], drink: ['drank', 'drunk'], drive: ['drove', 'driven'], eat: ['ate', 'eaten'],
  go: ['went', 'gone'], have: ['had', 'had'], leave: ['left', 'left'], make: ['made', 'made'],
  read: ['read', 'read'], rise: ['rose', 'risen'], run: ['ran', 'run'], see: ['saw', 'seen'],
  sing: ['sang', 'sung'], sleep: ['slept', 'slept'], sow: ['sowed', 'sown'], swim: ['swam', 'swum'],
  teach: ['taught', 'taught'], tell: ['told', 'told'], write: ['wrote', 'written'],
  // the action words list
  bring: ['brought', 'brought'], catch: ['caught', 'caught'], cut: ['cut', 'cut'], draw: ['drew', 'drawn'],
  fall: ['fell', 'fallen'], feed: ['fed', 'fed'], find: ['found', 'found'], fly: ['flew', 'flown'],
  give: ['gave', 'given'], grow: ['grew', 'grown'], hold: ['held', 'held'], keep: ['kept', 'kept'],
  meet: ['met', 'met'], pay: ['paid', 'paid'], put: ['put', 'put'], ride: ['rode', 'ridden'],
  sell: ['sold', 'sold'], show: ['showed', 'shown'], sit: ['sat', 'sat'], speak: ['spoke', 'spoken'],
  stand: ['stood', 'stood'], sweep: ['swept', 'swept'], take: ['took', 'taken'], think: ['thought', 'thought'],
  throw: ['threw', 'thrown'], wake: ['woke', 'woken'], wear: ['wore', 'worn'], win: ['won', 'won'],
  hear: ['heard', 'heard'], begin: ['began', 'begun'],
}
// verbs whose last consonant doubles: swim -> swimming, run -> running
const DOUBLE = new Set(['swim', 'run', 'stop', 'sit', 'get', 'put', 'cut', 'plan', 'clap', 'hug', 'win', 'shop', 'drop', 'jog'])

const isVowel = (c) => 'aeiou'.includes(c)

export function thirdPerson(v) {
  if (v === 'have') return 'has'
  if (v === 'do' || v === 'go') return `${v}es`
  if (/(s|sh|ch|x|z)$/.test(v)) return `${v}es`
  if (/[^aeiou]y$/.test(v)) return `${v.slice(0, -1)}ies`
  return `${v}s`
}

export function pastOf(v) {
  if (IRREGULAR[v]) return IRREGULAR[v][0]
  if (v.endsWith('e')) return `${v}d`
  if (/[^aeiou]y$/.test(v)) return `${v.slice(0, -1)}ied`
  if (DOUBLE.has(v)) return `${v}${v.slice(-1)}ed`
  return `${v}ed`
}

export const participleOf = (v) => (IRREGULAR[v] ? IRREGULAR[v][1] : pastOf(v))

export function ingOf(v) {
  if (DOUBLE.has(v)) return `${v}${v.slice(-1)}ing`
  if (v.endsWith('ie')) return `${v.slice(0, -2)}ying`
  if (v.endsWith('e') && v !== 'be' && !v.endsWith('ee') && !isVowel(v[v.length - 2])) return `${v.slice(0, -1)}ing`
  return `${v}ing`
}

const BE_PRESENT = { i: 'am', 3: 'is', pl: 'are' }
const BE_PAST = { i: 'was', 3: 'was', pl: 'were' }

// The verb part as words: { aux: first helping verb, more: the rest } (aux '' = no helper, e.g. "plays")
function verbParts(tenseId, p, v) {
  const has = p === '3' ? 'has' : 'have'
  switch (tenseId) {
    case 'present-simple':
      return { aux: '', main: p === '3' ? thirdPerson(v) : v, doAux: p === '3' ? 'does' : 'do', base: v }
    case 'present-continuous':
      return { aux: BE_PRESENT[p], more: ingOf(v) }
    case 'present-perfect':
      return { aux: has, more: participleOf(v) }
    case 'present-perfect-continuous':
      return { aux: has, more: `been ${ingOf(v)}` }
    case 'past-simple':
      return { aux: '', main: pastOf(v), doAux: 'did', base: v }
    case 'past-continuous':
      return { aux: BE_PAST[p], more: ingOf(v) }
    case 'past-perfect':
      return { aux: 'had', more: participleOf(v) }
    case 'past-perfect-continuous':
      return { aux: 'had', more: `been ${ingOf(v)}` }
    case 'future-simple':
      return { aux: 'will', more: v }
    case 'future-continuous':
      return { aux: 'will', more: `be ${ingOf(v)}` }
    case 'future-perfect':
      return { aux: 'will', more: `have ${participleOf(v)}` }
    default: // future-perfect-continuous
      return { aux: 'will', more: `have been ${ingOf(v)}` }
  }
}

// The verb words of a sentence, e.g. "has been playing", "does not play"
export function verbPhrase(tenseId, p, v, kind = 'aff') {
  const vp = verbParts(tenseId, p, v)
  if (!vp.aux) return kind === 'neg' ? `${vp.doAux} not ${vp.base}` : vp.main
  return kind === 'neg' ? `${vp.aux} not ${vp.more}` : `${vp.aux} ${vp.more}`
}

// "I" and names keep their capital letter inside a question
const lowerSubject = (s) => (s === 'I' || /^[A-Z][a-z]+$/.test(s) && !['He', 'She', 'It', 'We', 'You', 'They', 'The', 'My'].includes(s.split(' ')[0]) ? s : s[0].toLowerCase() + s.slice(1))

const cap = (t) => t[0].toUpperCase() + t.slice(1)

export function sentence(ex, tenseId, kind = 'aff') {
  const rest = ex.rest ? ` ${ex.rest}` : ''
  if (kind !== 'q') return `${ex.s} ${verbPhrase(tenseId, ex.p, ex.v, kind)}${rest}.`
  const vp = verbParts(tenseId, ex.p, ex.v)
  const subj = lowerSubject(ex.s)
  if (!vp.aux) return `${cap(vp.doAux)} ${subj} ${vp.base}${rest}?`
  return `${cap(vp.aux)} ${subj} ${vp.more}${rest}?`
}

// Common mistakes with a verb in a tense (for "Spot the mistake" / "Right or wrong"):
// e.g. present simple, she: "play", "is plays"; past perfect: "had go", "had went"
export function wrongPhrases(tenseId, p, v) {
  const s3 = thirdPerson(v)
  const v2 = pastOf(v)
  const v3 = participleOf(v)
  const ing = ingOf(v)
  const has = p === '3' ? 'has' : 'have'
  const otherHas = p === '3' ? 'have' : 'has'
  const be = BE_PRESENT[p]
  const otherBe = p === '3' ? 'are' : 'is'
  const was = BE_PAST[p]
  const otherWas = was === 'was' ? 'were' : 'was'
  const list = {
    'present-simple': p === '3' ? [v, `is ${s3}`] : [s3, `${be} ${v}`],
    'present-continuous': [`${otherBe} ${ing}`, `${be} ${v}`, ing],
    'present-perfect': [`${otherHas} ${v3}`, `${has} ${v2}`, `${has} ${v}`],
    'present-perfect-continuous': [`${has} ${ing}`, `${otherHas} been ${ing}`, `${has} been ${v}`],
    'past-simple': [v, `was ${v}`, `did ${v2}`],
    'past-continuous': [`${otherWas} ${ing}`, `${was} ${v}`],
    'past-perfect': [`had ${v}`, `had ${v2}`, `has ${v3}`],
    'past-perfect-continuous': [`had ${ing}`, `had been ${v}`],
    'future-simple': [`will ${s3}`, `will ${v2}`, `will to ${v}`],
    'future-continuous': [`will ${ing}`, `will be ${v}`],
    'future-perfect': [`will has ${v3}`, `will have ${v}`, `will ${v3}`],
    'future-perfect-continuous': [`will have ${ing}`, `will been ${ing}`],
  }[tenseId]
  const right = verbPhrase(tenseId, p, v)
  return [...new Set(list)].filter((x) => x !== right)
}

// a sentence with a wrong verb form
export function wrongSentence(ex, tenseId) {
  const options = wrongPhrases(tenseId, ex.p, ex.v)
  const wrong = options[Math.floor(Math.random() * options.length)]
  return `${ex.s} ${wrong}${ex.rest ? ` ${ex.rest}` : ''}.`
}

// Forms of a verb for "Verb forms": which = 'v2' | 'v3' | 'ing' | 's'.
// Returns the right form and wrong guesses kids often make (bringed, studys, claping...).
export function verbForm(v, which) {
  const naiveEd = v.endsWith('e') ? `${v}d` : `${v}ed`
  const naiveIng = `${v.endsWith('e') && v !== 'see' ? v.slice(0, -1) : v}ing`
  const forms = {
    v2: [pastOf(v), [naiveEd, participleOf(v), v, `${v}s`]],
    v3: [participleOf(v), [pastOf(v), naiveEd, v, ingOf(v)]],
    ing: [ingOf(v), [`${v}ing`, naiveIng, `${v}s`, pastOf(v)]],
    s: [thirdPerson(v), [`${v}s`, `${v}es`, v, ingOf(v)]],
  }
  const [right, guesses] = forms[which]
  return { right, wrong: [...new Set(guesses)].filter((x) => x !== right) }
}

// for "Write the verb": the same answer written with short forms counts too (doesn't, won't, I'm...)
export const sameAnswer = (typed, right) => {
  const norm = (t) =>
    t
      .toLowerCase()
      .replace(/[’`]/g, "'")
      .replace(/\bwon't\b/g, 'will not')
      .replace(/\bcan't\b/g, 'can not')
      .replace(/n't\b/g, ' not')
      .replace(/'m\b/g, ' am')
      .replace(/'re\b/g, ' are')
      .replace(/'ve\b/g, ' have')
      .replace(/'ll\b/g, ' will')
      .replace(/'d\b/g, ' had')
      .replace(/[^a-z' ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  return norm(typed) === norm(right)
}

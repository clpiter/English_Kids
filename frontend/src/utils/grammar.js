// Sentences for the sentence-structure games (data/structures.js):
// keyOf(structure, ex) -> the structure's key words in that sentence ("is", "has to take", "kept on crying")
// wrongKeys(structure, ex) -> common mistakes in their place ("are", "has to took", "kept on cry")
import { ingOf, participleOf, pastOf, thirdPerson } from './tense'

const BE = { i: 'am', 3: 'is', pl: 'are' }
const WAS = { i: 'was', 3: 'was', pl: 'were' }

export function keyOf(st, ex) {
  const v = ex.v
  switch (st.id) {
    case 'this-is':
    case 'that-is':
    case 'be-present':
    case 'there-is':
      return BE[ex.p]
    case 'this-was':
    case 'that-was':
    case 'be-past':
    case 'there-was':
      return WAS[ex.p]
    case 'have':
      return ex.p === '3' ? 'has' : 'have'
    case 'had':
      return 'had'
    case 'can':
      return `can ${v}`
    case 'could':
      return `could ${v}`
    case 'should':
      return `should ${v}`
    case 'used-to':
      return `used to ${v}`
    case 'began-to':
      return `began to ${v}`
    case 'started':
      return `started ${ingOf(v)}`
    case 'kept-on':
      return `kept on ${ingOf(v)}`
    case 'have-to':
      return `${ex.p === '3' ? 'has' : 'have'} to ${v}`
    case 'had-to':
      return `had to ${v}`
    default: // should-have
      return `should have ${participleOf(v)}`
  }
}

export function wrongKeys(st, ex) {
  const v = ex.v
  const s3 = v && thirdPerson(v)
  const v2 = v && pastOf(v)
  const v3 = v && participleOf(v)
  const ing = v && ingOf(v)
  const list = {
    'this-is': ['am', ex.p === '3' ? 'are' : 'is', 'be'],
    'that-is': ['am', ex.p === '3' ? 'are' : 'is', 'be'],
    'be-present': ['am', 'is', 'are', 'be'],
    'there-is': [ex.p === '3' ? 'are' : 'is', 'am', 'be'],
    'this-was': [ex.p === '3' ? 'were' : 'was', 'is', 'be'],
    'that-was': [ex.p === '3' ? 'were' : 'was', 'is', 'be'],
    'be-past': ['was', 'were', 'is', 'be'],
    'there-was': [ex.p === '3' ? 'were' : 'was', 'is', 'be'],
    have: ['have', 'has', 'is', 'haves'],
    had: ['has', 'have', 'haved'],
    can: [`can ${s3}`, `can to ${v}`, `can ${ing}`],
    could: [`could ${v2}`, `could to ${v}`, `could ${ing}`],
    should: [`should to ${v}`, `should ${s3}`, `should ${ing}`],
    'used-to': [`use to ${v}`, `used to ${ing}`, `used ${v}`],
    'began-to': [`began to ${v2}`, `began ${v}`, `began to ${ing}`],
    started: [`started ${v2}`, `started ${v}`, `starting ${ing}`],
    'kept-on': [`kept on ${v}`, `kept ${v2}`, `keep on ${v2}`],
    'have-to': [`${ex.p === '3' ? 'have' : 'has'} to ${v}`, `${ex.p === '3' ? 'has' : 'have'} ${v}`, `${ex.p === '3' ? 'has' : 'have'} to ${v2}`],
    'had-to': [`had to ${v2}`, `has to ${v2}`, `had ${v}`],
    'should-have': [`should have ${v}`, `should has ${v3}`, v2 !== v3 ? `should have ${v2}` : `should ${v3}`],
  }[st.id]
  const right = keyOf(st, ex)
  return [...new Set(list)].filter((x) => x !== right)
}

export const sentenceOf = (st, ex, key = keyOf(st, ex)) => `${ex.a} ${key} ${ex.b}`

import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { STRINGS } from './strings'
import { EnglishFirst } from './englishFirst'

function fill(str, vars) {
  return vars ? str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') : str
}

// Pick the text for the current interface language.
// lang 'both' shows one language big with the other small underneath:
// Hindi first normally, English first inside the book pages.
function pickText(lang, hi, en, englishFirst) {
  if (lang === 'hi') return hi
  if (lang === 'en') return en
  const [main, sub] = englishFirst ? [en, hi] : [hi, en]
  return (
    <span className={`bi ${englishFirst ? 'bi-en' : ''}`}>
      <span className="bi-main">{main}</span>
      <span className="bi-sub">{sub}</span>
    </span>
  )
}

export function useT() {
  const lang = useSelector((s) => s.ui.lang)
  const englishFirst = useContext(EnglishFirst)

  // t() returns a React node, ts() a plain string (for placeholders, alerts...)
  const t = (key, vars) => {
    const s = STRINGS[key]
    if (!s) return key
    return pickText(lang, fill(s.hi, vars), fill(s.en, vars), englishFirst)
  }
  const ts = (key, vars) => {
    const s = STRINGS[key]
    if (!s) return key
    if (lang === 'both') {
      const [a, b] = englishFirst ? [s.en, s.hi] : [s.hi, s.en]
      return `${fill(a, vars)} / ${fill(b, vars)}`
    }
    return fill(s[lang], vars)
  }
  const bi = (hi, en) => pickText(lang, hi, en, englishFirst)

  return { t, ts, bi, lang, englishFirst }
}

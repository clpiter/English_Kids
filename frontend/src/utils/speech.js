// Text-to-speech using the browser's built-in voices.
const synth = typeof window !== 'undefined' ? window.speechSynthesis : null

// Chrome loads voices lazily; touching getVoices() early warms the list up.
const chosen = {} // lang -> best voice (cleared when the voice list changes)
if (synth) {
  synth.getVoices()
  synth.addEventListener?.('voiceschanged', () => {
    for (const k of Object.keys(chosen)) delete chosen[k]
    synth.getVoices()
  })
}

// Prefer an Indian woman's voice: en-IN / hi-IN, female, natural-sounding.
// Known voices: Edge "Neerja" (en-IN) / "Swara" (hi-IN) (Natural), Windows "Heera" (en-IN) / "Kalpana" (hi-IN),
// Android Google en-IN / hi-IN voices.
const FEMALE = /neerja|heera|swara|kalpana|aditi|raveena|priya|veena|lekha|isha|ananya|kajal|female|woman|zira|susan|hazel|samantha|libby|sonia|aria|jenny/i
const MALE = /prabhat|hemant|ravi|madhur|rishi|aarav|kunal|male|man\b|david|mark|george|guy|ryan|daniel/i

function scoreVoice(v, lang) {
  const vl = v.lang.replace('_', '-').toLowerCase()
  const want = lang.toLowerCase()
  let score = 0
  if (vl === want) score += 100
  else if (vl.startsWith(want.slice(0, 2))) score += 40
  else return -1
  if (vl.endsWith('-in')) score += 30 // Indian accent
  if (FEMALE.test(v.name)) score += 25
  if (MALE.test(v.name.replace(/female/i, ''))) score -= 40
  if (/natural|online|neural|google/i.test(v.name)) score += 10
  // Android Google voices: "...-x-...-local/-network"; "#female" in some names
  if (/#female|-x-[a-z]{3}f?#?/i.test(v.voiceURI || '')) score += 5
  return score
}

function voiceFor(lang) {
  if (chosen[lang] !== undefined) return chosen[lang]
  const voices = synth?.getVoices() || []
  if (!voices.length) return null // not loaded yet: try again next time
  let best = null
  let bestScore = -1
  for (const v of voices) {
    const s = scoreVoice(v, lang)
    if (s > bestScore) {
      best = v
      bestScore = s
    }
  }
  chosen[lang] = best
  return best
}

// Name of the voice used for a language (shown in the app so parents know what is speaking)
export const voiceName = (lang) => voiceFor(lang)?.name || ''

const cleanHi = (text) => text.replace(/\(.*?\)/g, '').trim()

// Voices read symbols aloud ("slash", "dash"): turn them into short pauses instead
const forSpeech = (text) =>
  text
    .replace(/\s*[/|]\s*/g, ', ')
    .replace(/\s+[-–—]\s+/g, ', ')
    .replace(/[*_#~^<>[\]{}]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()

// parts: [{ text, lang, rate? }] spoken one after another
export function speak(parts) {
  if (!synth) return
  synth.cancel()
  for (const { text, lang, rate } of parts) {
    const clean = text && forSpeech(text)
    if (!clean) continue
    const u = new SpeechSynthesisUtterance(clean)
    u.lang = lang
    u.rate = rate ?? (lang.startsWith('en') ? 0.8 : 0.9)
    u.pitch = 1.1
    const voice = voiceFor(lang)
    if (voice) u.voice = voice
    synth.speak(u)
  }
}

export const speakEn = (text) => speak([{ text, lang: 'en-IN' }])

// Speak a long English text sentence by sentence (Chrome cuts off very long utterances) and report
// which character is being spoken: onWord(charIndex) for each word, onEnd() when done or stopped.
// Uses the voice's word-boundary events; voices without them (some phones) get a timed estimate.
// Returns a stop() function.
export function speakTracked(text, { onWord, onEnd, lang = 'en-IN', rate = 0.85 } = {}) {
  if (!synth) {
    onEnd?.()
    return () => {}
  }
  synth.cancel()
  // same length as `text`, so character positions stay correct; symbols would be read aloud
  const clean = text.replace(/[/|—–*_#~^<>[\]{}]/g, ' ')
  const sentences = [...clean.matchAll(/[^.!?\n]+[.!?]*["”']?\s*/g)].filter((m) => m[0].trim())
  const timers = []
  let stopped = false
  let gotBoundary = false
  const voice = voiceFor(lang)

  sentences.forEach((m, n) => {
    const start = m.index
    const u = new SpeechSynthesisUtterance(m[0])
    u.lang = lang
    u.rate = rate
    u.pitch = 1.1
    if (voice) u.voice = voice
    u.onboundary = (e) => {
      if (e.name && e.name !== 'word') return
      gotBoundary = true
      timers.forEach(clearTimeout)
      if (!stopped) onWord?.(start + e.charIndex)
    }
    u.onstart = () => {
      if (stopped) return
      onWord?.(start + (m[0].length - m[0].trimStart().length))
      if (gotBoundary) return
      // no boundary events from this voice (yet): estimate ~13 characters per second at rate 1
      const perChar = 1000 / (13 * rate)
      for (const w of m[0].matchAll(/[A-Za-z][A-Za-z']*/g)) {
        timers.push(setTimeout(() => !stopped && !gotBoundary && onWord?.(start + w.index), w.index * perChar))
      }
    }
    if (n === sentences.length - 1) u.onend = () => !stopped && onEnd?.()
    synth.speak(u)
  })
  if (!sentences.length) onEnd?.()

  return () => {
    stopped = true
    timers.forEach(clearTimeout)
    synth.cancel()
    onEnd?.()
  }
}

// Does this device have a voice for the language? (true while the voice list is still loading)
export function hasVoice(lang) {
  const voices = synth?.getVoices() || []
  return !voices.length || voices.some((v) => v.lang.replace('_', '-').toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()))
}

// A Hindi lesson line made ready for a voice: words in brackets are kept (only the brackets go),
// "..." and quote marks become short pauses
const forHindiSpeech = (text) =>
  forSpeech(text.replace(/[()"“”‘’]/g, ' ').replace(/\.{2,}|…/g, ', ')).replace(/^[\s,]+/, '')

// Speak lines one after another (a lesson's Hindi lines); onLine(i) when line i starts.
// Spoken one sentence at a time, the next one only after the previous has finished: more reliable than
// queueing everything (some voices skip or stop), and the highlighted line stays in step. Returns stop().
export function speakLines(lines, { lang = 'hi-IN', rate = 0.9, onLine, onEnd } = {}) {
  const parts = []
  lines.forEach((line, i) => {
    const sentences = (forHindiSpeech(line).match(/[^।?!\n]+[।?!]*/g) || []).map((s) => s.trim()).filter(Boolean)
    for (const s of sentences) {
      const last = parts[parts.length - 1]
      // very short pieces ("अरे!", "वाह!") are joined to the line's previous sentence
      if (last && last.i === i && (s.length < 12 || last.text.length < 12)) last.text += ' ' + s
      else parts.push({ i, text: s })
    }
  })
  if (!synth || !parts.length) {
    onEnd?.()
    return () => {}
  }
  synth.cancel()
  let stopped = false
  let n = 0
  let timer
  const voice = voiceFor(lang)

  const next = () => {
    clearTimeout(timer)
    if (stopped) return
    if (n >= parts.length) {
      stopped = true
      onEnd?.()
      return
    }
    const p = parts[n++]
    let done = false
    const finish = () => {
      if (done) return
      done = true
      next()
    }
    const u = new SpeechSynthesisUtterance(p.text)
    u.lang = lang
    u.rate = rate
    u.pitch = 1.1
    if (voice) u.voice = voice
    u.onend = finish
    u.onerror = finish
    onLine?.(p.i)
    synth.speak(u)
    // some voices never say they have finished: move on after a generous time
    timer = setTimeout(finish, 5000 + p.text.length * 250)
  }
  next()

  return () => {
    if (stopped) return
    stopped = true
    clearTimeout(timer)
    synth.cancel()
    onEnd?.()
  }
}

// Strip the "(...)" helper notes before speaking Hindi, e.g. "एक (1)" -> "एक"
export const speakHi = (text) => speak([{ text: cleanHi(text), lang: 'hi-IN' }])

export const speakWord = (word) =>
  speak([
    { text: word.en, lang: 'en-IN' },
    { text: cleanHi(word.hi), lang: 'hi-IN' },
  ])

// Small happy / oops sounds made with the Web Audio API (no audio files needed).
let ctx = null

function getCtx() {
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return null
    ctx = new AudioCtx()
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

function tone(freq, start, dur, type = 'sine', volume = 0.15) {
  const c = getCtx()
  if (!c) return
  const osc = c.createOscillator()
  const gain = c.createGain()
  const t0 = c.currentTime + start
  osc.type = type
  osc.frequency.value = freq
  gain.gain.setValueAtTime(volume, t0)
  gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur)
  osc.connect(gain).connect(c.destination)
  osc.start(t0)
  osc.stop(t0 + dur)
}

export function playCorrect() {
  tone(660, 0, 0.12)
  tone(880, 0.1, 0.2)
}

export function playWrong() {
  tone(260, 0, 0.18, 'triangle', 0.12)
  tone(200, 0.15, 0.25, 'triangle', 0.12)
}

export function playWin() {
  ;[523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.25))
}

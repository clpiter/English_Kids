import { useRef } from 'react'
import { tokenize } from '../utils/reading'
import { speakEn } from '../utils/speech'

const LONG_PRESS = 500

// English text whose words can be tapped (the word is spoken) or long-pressed (`onPick(token)` opens
// the word dialog), like the lesson text. `lex` comes from buildLexicon().
// `tapSpeaks={false}`: a tap is left to the parent (e.g. an answer button); a long press still opens the dialog.
export default function TapText({ text, lex, onPick, tapSpeaks = true, className = '' }) {
  const press = useRef({ timer: null, long: false })
  if (!text) return null
  const tokens = tokenize(text, lex)

  const start = (tok) => {
    clearTimeout(press.current.timer)
    press.current.long = false
    press.current.timer = setTimeout(() => {
      press.current.long = true
      navigator.vibrate?.(30)
      onPick?.(tok)
    }, LONG_PRESS)
  }
  const end = () => clearTimeout(press.current.timer)
  const click = (e, tok) => {
    // the click that ends a long press only opened the dialog
    if (press.current.long) {
      press.current.long = false
      e.stopPropagation()
      e.preventDefault()
      return
    }
    if (tapSpeaks) {
      e.stopPropagation()
      speakEn(tok.text)
    }
  }

  return (
    <span className={`tap-text ${className}`}>
      {tokens.map((tok, i) =>
        tok.type === 'word' ? (
          <span
            key={i}
            className={`tw ${tok.entry?.word ? 'tw-key' : ''}`}
            onPointerDown={() => start(tok)}
            onPointerUp={end}
            onPointerLeave={end}
            onPointerCancel={end}
            onContextMenu={(e) => e.preventDefault()}
            onClick={(e) => click(e, tok)}
          >
            {tok.text}
          </span>
        ) : (
          <span key={i}>{tok.text}</span>
        ),
      )}
    </span>
  )
}

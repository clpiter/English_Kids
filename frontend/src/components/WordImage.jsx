import { useState } from 'react'
import { useSelector } from 'react-redux'

const COLORS = {
  red: '#e53935',
  blue: '#1e88e5',
  green: '#43a047',
  yellow: '#fdd835',
  orange: '#fb8c00',
  purple: '#8e24aa',
  black: '#212121',
  white: '#fafafa',
  brown: '#6d4c41',
  pink: '#f48fb1',
}

const NUMBERS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 }

// Picture for a word: a real photo, a colour swatch (colours) or counted apples (numbers).
// size: xl (flash card), lg (game prompt), fill (fills its parent), sm (word chip), xs (inline)
export default function WordImage({ word, size = 'lg' }) {
  const applePhoto = useSelector((s) => s.words.list.find((w) => w.key === 'fruits:apple')?.image)
  const [broken, setBroken] = useState(false)
  const cls = `word-img wi-${size}`

  // book words have no picture
  if (!word || word.book) return null

  if (word.category === 'colors' && COLORS[word.en]) {
    return <span className={`${cls} swatch-img`} style={{ background: COLORS[word.en] }} role="img" aria-label={word.en} />
  }

  if (word.category === 'numbers' && NUMBERS[word.en]) {
    const n = NUMBERS[word.en]
    const showApples = applePhoto && !['sm', 'xs'].includes(size)
    return (
      <span className={`${cls} number-img`} role="img" aria-label={`${n} ${word.en}`}>
        <span className="number-digit">{n}</span>
        {showApples && (
          <span className={`number-apples n${n > 5 ? 'big' : 'small'}`}>
            {Array.from({ length: n }, (_, i) => (
              <img key={i} src={applePhoto} alt="" />
            ))}
          </span>
        )}
      </span>
    )
  }

  if (word.image && !broken) {
    // whole photo is shown (never cropped); a blurred copy fills the empty space around it
    return (
      <span className={`${cls} photo`} style={{ '--photo': `url("${word.image}")` }}>
        <img src={word.image} alt={word.en} loading="lazy" draggable="false" onError={() => setBroken(true)} />
      </span>
    )
  }

  // no photo downloaded yet
  return (
    <span className={`${cls} emoji-img`} role="img" aria-label={word.en}>
      {word.emoji}
    </span>
  )
}

import { useSelector } from 'react-redux'
import WordImage from './WordImage'

// Cartoon pictures for the home page tiles (Microsoft Fluent Emoji, see backend/scripts/fetch-cartoons.js)
const CARTOONS = new Set([
  'animals', 'fruits', 'vegetables', 'colors', 'numbers', 'body', 'family', 'verbs',
  'feelings', 'food', 'home', 'school', 'clothes', 'nature', 'transport',
])

// Picture for a category tile: a cartoon (`cartoon`, home page) or the photo of its first word
export default function CategoryCover({ category, icon, cartoon = false }) {
  const words = useSelector((s) => s.words.list)

  if (cartoon && CARTOONS.has(category)) {
    return (
      <span className="cover cover-cartoon">
        <img src={`/images/cartoon/${category}.webp`} alt="" loading="lazy" decoding="async" draggable="false" />
      </span>
    )
  }

  if (category === 'colors') return <span className="cover cover-rainbow" role="img" aria-label="colours" />
  if (category === 'numbers') return <span className="cover cover-numbers">123</span>

  const word = words.find((w) => w.category === category && w.image)
  if (!word) return <span className="cover cover-emoji">{icon}</span>
  return (
    <span className="cover">
      <WordImage word={word} size="fill" />
    </span>
  )
}

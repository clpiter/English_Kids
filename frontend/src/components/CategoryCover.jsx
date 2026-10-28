import { useSelector } from 'react-redux'
import WordImage from './WordImage'

// Picture for a category tile: the photo of its first word
export default function CategoryCover({ category, icon }) {
  const words = useSelector((s) => s.words.list)

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

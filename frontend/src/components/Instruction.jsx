import { speakHi } from '../utils/speech'

// The game's question line; tapping it repeats the Hindi voice instruction
export default function Instruction({ voice, children }) {
  return (
    <button className="quiz-question" onClick={() => speakHi(voice)}>
      {children} <span className="small-speaker">🔊</span>
    </button>
  )
}

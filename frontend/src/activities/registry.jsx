import ChoiceQuiz from './ChoiceQuiz'
import MemoryMatch from './MemoryMatch'
import MatchColumn from './MatchColumn'
import WordBuilder from './WordBuilder'
import SayIt from './SayIt'

// activity id (from the URL) -> the game component that plays it
const choice = (mode) => (props) => <ChoiceQuiz mode={mode} {...props} />

export const GAMES = {
  picture: choice('picture'),
  listen: choice('listen'),
  meaning: choice('meaning'),
  hindi: choice('hindi'),
  yesno: choice('yesno'),
  missing: choice('missing'),
  memory: MemoryMatch,
  match: MatchColumn,
  builder: WordBuilder,
  sayit: SayIt,
}

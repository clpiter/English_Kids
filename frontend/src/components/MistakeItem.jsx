import { useT } from '../useT'
import WordImage from './WordImage'
import { activityById } from '../activities/list'
import { speakWord } from '../utils/speech'

// One mistake: the right word (photo, English = Hindi) and what the kid picked instead
export default function MistakeItem({ word, activity, chosen, count, date }) {
  const { t, bi, lang } = useT()
  const act = activityById(activity)
  const chosenLabel = activity === 'builder' ? 'wrongLetters' : activity === 'memory' ? 'pairedWith' : 'youChose'

  return (
    <button className="mistake" onClick={() => speakWord(word)}>
      <WordImage word={word} size="sm" />
      <span className="mistake-text">
        <span className="mistake-right">
          ✅ <b>{word.en}</b> = {word.hi}
        </span>
        {chosen && (
          <span className="mistake-chosen">
            ❌ {t(chosenLabel)}: <b>{chosen}</b>
          </span>
        )}
        {(act || date) && (
          <small className="muted">
            {act && (
              <>
                {act.icon} {bi(act.hi, act.en)}
              </>
            )}
            {date && ` · ${new Date(date).toLocaleDateString(lang === 'en' ? 'en-IN' : 'hi-IN')}`}
          </small>
        )}
      </span>
      {count > 0 && <span className="mistake-count">{t('times', { n: count })}</span>}
    </button>
  )
}

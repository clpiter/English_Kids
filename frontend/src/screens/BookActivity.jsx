import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { submitResults } from '../store/profileSlice'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { GAMES } from '../activities/registry'
import { activityById } from '../activities/list'
import { BOOK_GAMES, bookCategory, bookPool, lessonWords } from '../utils/book'

// A game with the words of one book lesson: /book/:lesson/play/:activity?words=mine|all
// "mine" = the words the kid chose as difficult in that lesson
export default function BookActivity({ params, profile }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { book, list: words, glossary } = useSelector((s) => s.words)
  const { t, bi } = useT()
  const { lesson: lessonId, activity } = params
  const lesson = book.lessons.find((l) => l.id === lessonId)
  const info = activityById(activity)
  const Game = BOOK_GAMES.includes(activity) ? GAMES[activity] : null

  const [which, setWhich] = useState(['all', 'missed'].includes(params.words) ? params.words : 'mine')
  // freeze the words for this game; wrong options come from the whole book
  const [pool] = useState(() => (lesson ? bookPool(lesson, words, glossary, profile, which) : []))
  const [all] = useState(() => book.lessons.flatMap((l) => lessonWords(l, words, glossary)))
  // "Say the word" works with any number of words; the choice games need 4
  const enough = activity === 'sayit' ? pool.length >= 1 : pool.length >= 4

  const finish = (results) => {
    const category = bookCategory(lessonId)
    if (results.length) dispatch(submitResults({ id: profile._id, activity, category, results }))
    nav(go({ screen: 'bookResult', params: { lesson: lessonId, activity }, state: { results } }))
  }

  return (
    <section className="screen narrow">
      <div className="activity-top">
        <BackButton screen="book" params={{ lesson: lessonId }} />
        {info && (
          <h2 className="activity-title" style={{ '--c': info.color }}>
            <span>{info.icon}</span> {bi(info.hi, info.en)}
          </h2>
        )}
      </div>
      {lesson && <p className="muted center">📕 {bi(lesson.titleHi, lesson.title)}</p>}

      {!lesson || !Game ? (
        <p className="center muted">🤔 {t('notEnough')}</p>
      ) : enough ? (
        <Game key={which} pool={pool} all={all} profile={profile} onFinish={finish} />
      ) : (
        <div className="card center">
          <p>{t('chooseMoreWords', { n: pool.length })}</p>
          {which !== 'all' && (
            <button
              className="btn btn-primary"
              onClick={() => {
                setWhich('all')
                nav(go({ screen: 'bookActivity', params: { lesson: lessonId, activity, words: 'all' } }))
              }}
            >
              📚 {t('useAllWords')}
            </button>
          )}
        </div>
      )}
    </section>
  )
}

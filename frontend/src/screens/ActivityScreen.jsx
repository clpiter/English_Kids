import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { submitResults } from '../store/profileSlice'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { GAMES } from '../activities/registry'
import { activityById } from '../activities/list'
import { getPool } from '../utils/questions'
import { wordFromKey } from '../utils/reading'

export default function ActivityScreen({ params, profile }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { list: words, glossary } = useSelector((s) => s.words)
  const { t, bi } = useT()
  const { activity, category } = params
  const info = activityById(activity)

  // Freeze the word pool for this game so progress updates don't reshuffle it
  const [pool] = useState(() =>
    category === 'missed'
      ? (profile.missedWords || []).map((k) => wordFromKey(k, words, glossary)).filter(Boolean)
      : getPool(words, category, profile),
  )

  const finish = (results) => {
    if (results.length) dispatch(submitResults({ id: profile._id, activity, category, results }))
    nav(go({ screen: 'result', params: { activity, category }, state: { results } }))
  }

  // the game for this URL: /category/:category/play/:activity
  const Game = GAMES[activity]

  return (
    <section className="screen narrow">
      <div className="activity-top">
        <BackButton screen="category" params={{ category }} />
        {info && (
          <h2 className="activity-title" style={{ '--c': info.color }}>
            <span>{info.icon}</span> {bi(info.hi, info.en)}
          </h2>
        )}
      </div>
      {!Game || !info ? (
        <p className="center muted">🤔 {t('notEnough')}</p>
      ) : pool.length ? (
        <Game pool={pool} all={words} profile={profile} onFinish={finish} />
      ) : (
        <p className="center muted">{t('notEnough')}</p>
      )}
    </section>
  )
}

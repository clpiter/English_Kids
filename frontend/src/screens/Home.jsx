import { useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import CategoryCover from '../components/CategoryCover'
import CountUp from '../components/CountUp'
import { getPool } from '../utils/questions'
import { VOICE, useAnnounce } from '../utils/voice'

export default function Home({ profile }) {
  const nav = useNav()
  const { categories, list: words } = useSelector((s) => s.words)
  const { t, bi } = useT()
  useAnnounce(VOICE.home(profile.name))

  const learned = new Set(profile.learned)
  const practiceCount = getPool(words, 'practice', profile).length
  const mistakeCount = getPool(words, 'mistakes', profile).length
  const missedCount = profile.missedWords?.length || 0
  const open = (category) => nav(go({ screen: 'category', params: { category } }))

  return (
    <section className="screen">
      <div className="welcome card" style={{ '--c': profile.color }}>
        <span className="welcome-avatar" style={{ background: profile.color }}>
          {profile.avatar}
        </span>
        <div className="welcome-text">
          <h1>{t('hello', { name: profile.name })}</h1>
          <p className="muted">{t('whatToLearn')}</p>
        </div>
        <div className="stat-row">
          <div className="stat">
            <span className="stat-num">⭐ <CountUp value={profile.stars} /></span>
            <span className="stat-label">{t('stars')}</span>
          </div>
          <div className="stat">
            <span className="stat-num">🔥 {profile.streak}</span>
            <span className="stat-label">{t('streak')}</span>
          </div>
          <div className="stat">
            <span className="stat-num">📚 <CountUp value={learned.size} /></span>
            <span className="stat-label">{t('wordsLearned')}</span>
          </div>
        </div>
        <button className="btn btn-light" onClick={() => nav(go({ screen: 'progress' }))}>
          📊 {t('progress')}
        </button>
      </div>

      <div className="category-grid">
        {categories.map((c) => {
          const catWords = words.filter((w) => w.category === c.id)
          const done = catWords.filter((w) => learned.has(w.key)).length
          return (
            <button key={c.id} className="category-card" style={{ '--c': c.color }} onClick={() => open(c.id)}>
              <CategoryCover category={c.id} icon={c.icon} />
              <span className="category-name">{bi(c.hi, c.en)}</span>
              <ProgressBar value={done} max={catWords.length} color={c.color} />
              <span className="category-count">
                {done}/{catWords.length}
              </span>
            </button>
          )
        })}

        {missedCount > 0 && (
          <button
            className="category-card special"
            style={{ '--c': '#e91e63' }}
            onClick={() => nav(go({ screen: 'activity', params: { category: 'missed', activity: 'sayit' } }))}
          >
            <span className="cover cover-emoji">🎤</span>
            <span className="category-name">{t('practiseReading')}</span>
            <span className="category-count">{missedCount}</span>
          </button>
        )}

        {mistakeCount >= 4 && (
          <button className="category-card special" style={{ '--c': '#e53935' }} onClick={() => open('mistakes')}>
            <span className="cover cover-emoji">🎯</span>
            <span className="category-name">{t('fixMistakes')}</span>
            <span className="category-count">{mistakeCount}</span>
          </button>
        )}

        <button className="category-card special" style={{ '--c': '#7e57c2' }} onClick={() => open('mix')}>
          <span className="cover cover-emoji">🎲</span>
          <span className="category-name">{t('mix')}</span>
        </button>

        {practiceCount >= 4 && (
          <button className="category-card special" style={{ '--c': '#ef6c00' }} onClick={() => open('practice')}>
            <span className="cover cover-emoji">💪</span>
            <span className="category-name">{t('practice')}</span>
            <span className="category-count">{practiceCount}</span>
          </button>
        )}
      </div>
    </section>
  )
}

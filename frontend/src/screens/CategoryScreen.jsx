import { useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import CategoryCover from '../components/CategoryCover'
import WordImage from '../components/WordImage'
import { ACTIVITIES } from '../activities/list'
import { getPool, isSpellable } from '../utils/questions'
import { categoryInfo } from '../utils/categories'
import { storiesFor } from '../utils/reading'
import { speakWord } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

// Minimum words each game needs to be playable
function canPlay(activity, pool) {
  if (activity === 'missing' || activity === 'builder') return pool.filter(isSpellable).length >= 3
  return pool.length >= 4
}

function starsFor(percent) {
  if (percent === undefined) return ''
  if (percent >= 90) return '⭐⭐⭐'
  if (percent >= 60) return '⭐⭐'
  return '⭐'
}

export default function CategoryScreen({ params, profile }) {
  const nav = useNav()
  const { categories, list: words, stories } = useSelector((s) => s.words)
  const { t, bi } = useT()
  const { category } = params

  const info = categoryInfo(categories, category)
  const pool = getPool(words, category, profile)
  const storyCount = storiesFor(stories, words, category, profile).length
  useAnnounce(VOICE.category(info.hi))

  return (
    <section className="screen">
      <BackButton screen="home" />

      <div className="category-header" style={{ '--c': info.color }}>
        <span className="category-header-icon">
          <CategoryCover category={category} icon={info.icon} />
        </span>
        <h1>{bi(info.hi, info.en)}</h1>
      </div>

      <button
        className="learn-banner"
        style={{ '--c': info.color }}
        onClick={() => nav(go({ screen: 'learn', params: { category } }))}
      >
        <span className="learn-banner-icon">📖</span>
        <span>
          <span className="learn-banner-title">{t('learnWords')}</span>
          <span className="learn-banner-sub">{t('learnWordsSub')}</span>
        </span>
        <span className="learn-banner-arrow">▶</span>
      </button>

      <h2 className="section-title">🎮 {t('games')}</h2>
      <div className="activity-grid">
        <button
          className="activity-card reading-card"
          style={{ '--c': '#8d6e63' }}
          disabled={storyCount === 0}
          onClick={() => nav(go({ screen: 'reading', params: { category } }))}
        >
          <span className="activity-icon">📖</span>
          <span className="activity-name">{t('readStories')}</span>
          <span className="activity-best">
            {storyCount} {t('readSub')}
          </span>
        </button>
        {ACTIVITIES.map((a) => {
          const playable = canPlay(a.id, pool)
          const best = profile.bestScores?.[`${a.id}:${category}`]
          return (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              disabled={!playable}
              onClick={() => nav(go({ screen: 'activity', params: { activity: a.id, category } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
              <span className="activity-best">{best !== undefined ? `${starsFor(best)} ${best}%` : ' '}</span>
            </button>
          )
        })}
      </div>

      <h2 className="section-title">
        🔤 {t('wordsHere')} ({pool.length})
      </h2>
      <div className="word-chips">
        {pool.map((w) => {
          const level = profile.mastery?.[w.key] ?? 0
          return (
            <button key={w.key} className="word-chip" onClick={() => speakWord(w)} title={w.hi}>
              <WordImage word={w} size="sm" />
              <span className="word-chip-text">
                <b>{w.en}</b>
                <small>{w.hi}</small>
              </span>
              <span className="word-chip-level" aria-label={`level ${level}`}>
                {'●'.repeat(level)}
                <span className="dim">{'●'.repeat(5 - level)}</span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

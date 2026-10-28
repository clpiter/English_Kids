import { useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import CategoryCover from '../components/CategoryCover'
import { categoryInfo } from '../utils/categories'
import { storiesFor } from '../utils/reading'
import { VOICE, useAnnounce } from '../utils/voice'

// The "Read" tab: all reading lessons, grouped by category (/reading, or /reading?category=animals)
export default function ReadingLessons({ params, profile }) {
  const nav = useNav()
  const { categories, list: words, stories } = useSelector((s) => s.words)
  const { t, bi } = useT()
  useAnnounce(VOICE.lessons)

  const filter = params.category
  const list = filter ? storiesFor(stories, words, filter, profile) : stories
  const done = new Set(profile.lessonsDone || [])
  const groups = []
  for (const s of list) {
    let g = groups.find((x) => x.category === s.category)
    if (!g) groups.push((g = { category: s.category, items: [] }))
    g.items.push(s)
  }

  const doneCount = list.filter((s) => done.has(s.id)).length
  const firstNotDone = list.find((s) => !done.has(s.id))

  return (
    <section className="screen">
      <div className="card lessons-head">
        <h1>📖 {t('lessons')}</h1>
        <p className="muted">{t('lessonsIntro')}</p>
        <ProgressBar value={doneCount} max={list.length} color="#8d6e63" />
        <span className="muted">{t('lessonsDoneCount', { n: doneCount, total: list.length })}</span>
        <div className="lessons-actions">
          {firstNotDone && (
            <button
              className="btn btn-primary"
              onClick={() => nav(go({ screen: 'reading', params: { lesson: firstNotDone.id } }))}
            >
              ▶ {t('nextLesson')}
            </button>
          )}
          {filter && (
            <button className="btn btn-light" onClick={() => nav(go({ screen: 'reading' }))}>
              📚 {t('allLessons')}
            </button>
          )}
        </div>
      </div>

      {groups.map((g) => {
        const info = categoryInfo(categories, g.category)
        return (
          <div key={g.category} className="lesson-group">
            <h2 className="section-title lesson-group-title">
              <span className="lesson-cover">
                <CategoryCover category={g.category} icon={info.icon} />
              </span>
              {bi(info.hi, info.en)}
            </h2>
            <div className="lesson-grid">
              {g.items.map((s) => {
                const n = stories.findIndex((x) => x.id === s.id) + 1
                return (
                  <button
                    key={s.id}
                    className={`lesson-card ${done.has(s.id) ? 'done' : ''}`}
                    style={{ '--c': info.color }}
                    onClick={() => nav(go({ screen: 'reading', params: { lesson: s.id } }))}
                  >
                    <span className="lesson-num">
                      {t('lesson')} {n}
                    </span>
                    <span className="lesson-title">{bi(s.titleHi, s.titleEn)}</span>
                    <span className="lesson-preview">{s.en.split('. ')[0]}.</span>
                    {done.has(s.id) && <span className="lesson-done">✅ {t('lessonDone')}</span>}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}

import { useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import { bookPool } from '../utils/book'
import { VOICE, useAnnounce } from '../utils/voice'

// The "Book" (किताब) tab: lessons of the reading book (/book)
export default function BookLessons({ profile }) {
  const nav = useNav()
  const { book, list: words, glossary } = useSelector((s) => s.words)
  const { t, ts, bi } = useT()
  useAnnounce(VOICE.book)

  const done = new Set(profile.lessonsDone || [])
  const lessons = book.lessons
  const doneCount = lessons.filter((l) => done.has(l.id)).length
  const firstNotDone = lessons.find((l) => !done.has(l.id))

  // lessons grouped by the book's units, in order
  const units = []
  for (const l of lessons) {
    let unit = units.find((u) => u.title === (l.unitTitle || ''))
    if (!unit) units.push((unit = { title: l.unitTitle || '', titleHi: l.unitTitleHi || '', lessons: [] }))
    unit.lessons.push(l)
  }

  return (
    <section className="screen">
      <div className="card lessons-head book-head">
        <h1>📕 {bi(book.titleHi, book.title)}</h1>
        <p className="muted">{t('bookIntro')}</p>
        <ProgressBar value={doneCount} max={lessons.length} color="#6d4c41" />
        <span className="muted">{t('lessonsDoneCount', { n: doneCount, total: lessons.length })}</span>
        {firstNotDone && (
          <div className="lessons-actions">
            <button className="btn btn-primary" onClick={() => nav(go({ screen: 'book', params: { lesson: firstNotDone.id } }))}>
              ▶ {t('nextLesson')}
            </button>
          </div>
        )}
      </div>

      {lessons.length === 0 && <p className="center muted">{t('noStories')}</p>}

      {units.map((unit) => (
        <div key={unit.title} className="lesson-group">
          {unit.title && <h2 className="section-title">{bi(unit.titleHi, unit.title)}</h2>}
          <div className="lesson-grid">
            {unit.lessons.map((l) => {
              const n = lessons.indexOf(l) + 1
              const mine = bookPool(l, words, glossary, profile, 'mine').length
              const missed = bookPool(l, words, glossary, profile, 'missed').length
              return (
                <button
                  key={l.id}
                  className={`lesson-card ${done.has(l.id) ? 'done' : ''}`}
                  style={{ '--c': '#6d4c41' }}
                  onClick={() => nav(go({ screen: 'book', params: { lesson: l.id } }))}
                >
                  <span className="lesson-num">
                    {t('chapter')} {n} · {l.type === 'poem' ? `🎵 ${ts('poem')}` : `📖 ${ts('story')}`}
                  </span>
                  <span className="lesson-title">{bi(l.titleHi, l.title)}</span>
                  <span className="lesson-preview">{l.en.split(/(?<=[.!?\n])\s/)[0]}</span>
                  <span className="lesson-meta">
                    {done.has(l.id) && <span className="lesson-done">✅ {t('lessonDone')}</span>}
                    {mine > 0 && <span className="lesson-mine">⭐ {mine}</span>}
                    {missed > 0 && <span className="lesson-missed">🎤 {missed}</span>}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

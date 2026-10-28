import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import WordImage from '../components/WordImage'
import MistakeItem from '../components/MistakeItem'
import { ACTIVITIES, activityById } from '../activities/list'
import { categoryInfo } from '../utils/categories'
import { getPool } from '../utils/questions'
import { wordFromKey } from '../utils/reading'
import { speakWord } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

const TABS = [
  { id: 'overview', icon: '📊', label: 'overview' },
  { id: 'categories', icon: '📚', label: 'byCategory' },
  { id: 'games', icon: '🎮', label: 'byGame' },
  { id: 'mistakes', icon: '🎯', label: 'mistakes' },
]

const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0)

// Progress details with tabs: /progress, /progress/categories, /progress/games, /progress/mistakes
export default function Progress({ params, profile }) {
  const { t, ts } = useT()
  const tab = TABS.some((x) => x.id === params.tab) ? params.tab : 'overview'
  useAnnounce(VOICE.progress)

  return (
    <section className="screen">
      <div className="welcome card">
        <span className="welcome-avatar" style={{ background: profile.color }}>
          {profile.avatar}
        </span>
        <div className="welcome-text">
          <h1>
            {profile.name} · {t('progress')}
          </h1>
        </div>
      </div>

      <nav className="sub-tabs" aria-label={ts('progress')}>
        {TABS.map((x) => (
          <NavLink
            key={x.id}
            to={x.id === 'overview' ? '/progress' : `/progress/${x.id}`}
            end
            className={() => `sub-tab ${tab === x.id ? 'active' : ''}`}
          >
            {x.icon} {t(x.label)}
          </NavLink>
        ))}
      </nav>

      {tab === 'overview' && <Overview profile={profile} />}
      {tab === 'categories' && <Categories profile={profile} startOpen={params.open} />}
      {tab === 'games' && <Games profile={profile} />}
      {tab === 'mistakes' && <Mistakes profile={profile} />}
    </section>
  )
}

function Overview({ profile }) {
  const nav = useNav()
  const { categories, list: words, stories } = useSelector((s) => s.words)
  const { t, bi, lang } = useT()
  const locale = lang === 'en' ? 'en-IN' : 'hi-IN'
  const learned = new Set(profile.learned)
  const stats = Object.values(profile.activityStats || {})
  const played = stats.reduce((n, s) => n + s.played, 0)
  const correct = stats.reduce((n, s) => n + s.correct, 0)
  const total = stats.reduce((n, s) => n + s.total, 0)
  const hints = stats.reduce((n, s) => n + s.hints, 0)
  const weak = getPool(words, 'practice', profile)

  return (
    <>
      <div className="stat-grid">
        <Stat icon="⭐" value={profile.stars} label={t('stars')} />
        <Stat icon="🔥" value={profile.streak} label={t('streak')} />
        <Stat icon="📚" value={`${learned.size}/${words.length}`} label={t('wordsLearned')} />
        <Stat icon="🎮" value={played} label={t('gamesPlayed')} />
        <Stat icon="✅" value={`${pct(correct, total)}%`} label={t('accuracy')} />
        <Stat icon="💡" value={hints} label={t('hintsUsed')} />
        <Stat icon="🎯" value={profile.openMistakes?.length || 0} label={t('mistakes')} />
        <Stat icon="📖" value={`${profile.lessonsDone?.length || 0}/${stories.length}`} label={t('lessonsRead')} />
      </div>

      <div className="progress-layout">
        <div className="card">
          <h3>📚 {t('wordsLearned')}</h3>
          {categories.map((c) => {
            const catWords = words.filter((w) => w.category === c.id)
            const done = catWords.filter((w) => learned.has(w.key)).length
            return (
              <button
                key={c.id}
                className="progress-row clickable-row"
                onClick={() => nav(go({ screen: 'progress', params: { tab: 'categories' }, state: { open: c.id } }))}
              >
                <span className="progress-row-icon">{c.icon}</span>
                <span className="progress-row-name">{bi(c.hi, c.en)}</span>
                <ProgressBar value={done} max={catWords.length} color={c.color} />
                <span className="progress-row-count">
                  {done}/{catWords.length}
                </span>
              </button>
            )
          })}
        </div>

        <div className="stack">
          <div className="card">
            <h3>💪 {t('weakWords')}</h3>
            {weak.length === 0 ? (
              <p className="muted">{t('noWeak')}</p>
            ) : (
              <div className="word-chips">
                {weak.slice(0, 12).map((w) => (
                  <button key={w.key} className="word-chip" onClick={() => speakWord(w)}>
                    <WordImage word={w} size="sm" />
                    <span className="word-chip-text">
                      <b>{w.en}</b>
                      <small>{w.hi}</small>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="card">
            <h3>🕹️ {t('recentGames')}</h3>
            {profile.history.length === 0 && <p className="muted">{t('noGames')}</p>}
            <ul className="history">
              {profile.history.slice(0, 10).map((h, i) => {
                const a = activityById(h.activity)
                const c = categoryInfo(categories, h.category)
                return (
                  <li key={i}>
                    <span className="history-icon">{a?.icon}</span>
                    <span className="history-name">
                      {a && bi(a.hi, a.en)}
                      <small>
                        {c.icon} {lang === 'en' ? c.en : c.hi} · {new Date(h.date).toLocaleDateString(locale)}
                        {h.hints > 0 && ` · 💡${h.hints}`}
                      </small>
                    </span>
                    <span className="history-score">
                      {h.correct}/{h.total} · ⭐{h.stars}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <button className="link-btn" onClick={() => nav(go({ screen: 'credits' }))}>
        📷 {t('credits')}
      </button>
    </>
  )
}

function Stat({ icon, value, label }) {
  return (
    <div className="stat big-stat">
      <span className="stat-num">
        {icon} {value}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

// Every category, opened: each word with its level, mistakes and whether it is in "My words"
function Categories({ profile, startOpen }) {
  const { categories, list: words } = useSelector((s) => s.words)
  const { t, bi } = useT()
  const [open, setOpen] = useState(startOpen || null)
  const learned = new Set(profile.learned)

  return (
    <div className="stack">
      {categories.map((c) => {
        const catWords = words.filter((w) => w.category === c.id)
        const done = catWords.filter((w) => learned.has(w.key)).length
        const avg = catWords.reduce((n, w) => n + (profile.mastery?.[w.key] ?? 0), 0) / catWords.length
        const missed = catWords.reduce((n, w) => n + (profile.mistakeCounts?.[w.key] ?? 0), 0)
        const isOpen = open === c.id
        return (
          <div key={c.id} className="card cat-detail">
            <button className="cat-detail-head" onClick={() => setOpen(isOpen ? null : c.id)} aria-expanded={isOpen}>
              <span className="progress-row-icon">{c.icon}</span>
              <span className="progress-row-name">{bi(c.hi, c.en)}</span>
              <span className="cat-detail-nums">
                📚 {done}/{catWords.length} · {t('level')} {avg.toFixed(1)}/5 · 🎯 {missed}
              </span>
              <span className="cat-detail-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            <ProgressBar value={done} max={catWords.length} color={c.color} />
            {isOpen && (
              <div className="word-table">
                {catWords.map((w) => {
                  const level = profile.mastery?.[w.key] ?? 0
                  const misses = profile.mistakeCounts?.[w.key] ?? 0
                  return (
                    <button key={w.key} className="word-row" onClick={() => speakWord(w)}>
                      <WordImage word={w} size="xs" />
                      <span className="word-row-text">
                        <b>{w.en}</b> <small>{w.hi}</small>
                      </span>
                      <span className="word-chip-level" title={`level ${level}`}>
                        {'●'.repeat(Math.round(level))}
                        <span className="dim">{'●'.repeat(5 - Math.round(level))}</span>
                      </span>
                      <span className="word-row-flags">
                        {!learned.has(w.key) && '🆕'}
                        {misses > 0 && <span className="mistake-count">🎯 {misses}</span>}
                        {profile.openMistakes?.includes(w.key) && ' ❗'}
                        {profile.difficult?.includes(w.key) && ' ⭐'}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Every game: how often played, % correct, hints, mistakes, best score
function Games({ profile }) {
  const { t, bi } = useT()
  return (
    <div className="game-stats">
      {ACTIVITIES.map((a) => {
        const s = profile.activityStats?.[a.id]
        const bests = Object.entries(profile.bestScores || {})
          .filter(([k]) => k.startsWith(`${a.id}:`))
          .map(([, v]) => v)
        const best = bests.length ? Math.max(...bests) : null
        return (
          <div key={a.id} className="card game-stat" style={{ '--c': a.color }}>
            <div className="game-stat-head">
              <span className="activity-icon">{a.icon}</span>
              <b>{bi(a.hi, a.en)}</b>
            </div>
            {!s ? (
              <p className="muted">{t('notPlayed')}</p>
            ) : (
              <>
                <ProgressBar value={s.correct} max={s.total} color={a.color} />
                <div className="game-stat-nums">
                  <span>✅ {pct(s.correct, s.total)}%</span>
                  <span>🎮 {t('timesPlayed', { n: s.played })}</span>
                  <span>💡 {s.hints}</span>
                  <span>🎯 {s.mistakes}</span>
                  {best !== null && (
                    <span>
                      🏆 {t('best')} {best}%
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

function Mistakes({ profile }) {
  const nav = useNav()
  const { list: words, glossary } = useSelector((s) => s.words)
  const { t } = useT()
  const [filter, setFilter] = useState('all')

  // word list words + book / everyday words ("g:<word>")
  const wordByKey = new Map(words.map((w) => [w.key, w]))
  for (const m of profile.mistakes || []) {
    if (!wordByKey.has(m.key) && m.key.startsWith('g:')) wordByKey.set(m.key, wordFromKey(m.key, words, glossary))
  }
  const mostMissed = Object.entries(profile.mistakeCounts || {})
    .filter(([key]) => wordByKey.has(key))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([key, count]) => ({ word: wordByKey.get(key), count }))
  const all = (profile.mistakes || []).filter((m) => wordByKey.has(m.key)).map((m) => ({ ...m, word: wordByKey.get(m.key) }))
  const usedGames = ACTIVITIES.filter((a) => all.some((m) => m.activity === a.id))
  const recent = all.filter((m) => filter === 'all' || m.activity === filter).slice(0, 30)
  const openCount = getPool(words, 'mistakes', profile).length

  if (all.length === 0) return <p className="center muted card">{t('noMistakes')}</p>

  return (
    <div className="progress-layout">
      <div className="card">
        {openCount > 0 && (
          <div className="mistake-fix">
            <span>{t('stillToFix', { n: openCount })}</span>
            {openCount >= 4 && (
              <button className="btn btn-primary" onClick={() => nav(go({ screen: 'category', params: { category: 'mistakes' } }))}>
                🎯 {t('fixMistakes')}
              </button>
            )}
          </div>
        )}
        <h3>{t('mostMissed')}</h3>
        <div className="mistake-list">
          {mostMissed.map(({ word, count }) => (
            <MistakeItem key={word.key} word={word} count={count} />
          ))}
        </div>
      </div>

      <div className="card">
        <h3>{t('recentMistakes')}</h3>
        <div className="chip-row filter-row">
          <button className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            {t('all')}
          </button>
          {usedGames.map((a) => (
            <button key={a.id} className={`chip ${filter === a.id ? 'active' : ''}`} onClick={() => setFilter(a.id)} title={a.en}>
              {a.icon}
            </button>
          ))}
        </div>
        <div className="mistake-list">
          {recent.map((m, i) => (
            <MistakeItem key={i} word={m.word} activity={m.activity} chosen={m.chosen} date={m.date} />
          ))}
        </div>
      </div>
    </div>
  )
}

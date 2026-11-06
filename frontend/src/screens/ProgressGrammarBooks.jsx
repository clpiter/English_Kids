import { useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import ProgressBar from '../components/ProgressBar'
import { LEVELS } from '../data/structures'
import { TIMES } from '../data/tenses'
import { PREP_GROUPS } from '../data/prepositions'
import { bookProgress, grammarProgress } from '../utils/progress'

const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0)

function ScoreRow({ row, label, sub, onOpen }) {
  const { t } = useT()
  return (
    <button className="progress-row" onClick={onOpen}>
      <span className="progress-row-name">
        {row.done ? '✅' : row.played ? '🟡' : '⚪'} <b>{label}</b>
        {sub && <small className="muted"> · {sub}</small>}
      </span>
      <span className="progress-row-meta">
        {row.played ? (
          <>
            🎮 {row.played} · 🏆 {row.best}%
          </>
        ) : (
          <span className="muted">{t('notPlayed')}</span>
        )}
      </span>
    </button>
  )
}

// Progress tab "Grammar": tenses and sentence structures, best scores and games played
export function GrammarProgress({ profile }) {
  const nav = useNav()
  const { t, bi } = useT()
  const g = grammarProgress(profile)

  return (
    <>
      <div className="stat-grid">
        <div className="stat card">
          <span className="stat-num">⏰ {g.tensesDone}/{g.tenses.length}</span>
          <span>{t('progTensesLearned')}</span>
        </div>
        <div className="stat card">
          <span className="stat-num">🧱 {g.structuresDone}/{g.structures.length}</span>
          <span>{t('progStructuresLearned')}</span>
        </div>
        <div className="stat card">
          <span className="stat-num">🧲 {g.prepsDone}/{g.preps.length}</span>
          <span>{t('progPrepsLearned')}</span>
        </div>
        <div className="stat card">
          <span className="stat-num">🎮 {g.played}</span>
          <span>{t('gamesPlayed')}</span>
        </div>
        <div className="stat card">
          <span className="stat-num">✅ {pct(g.correct, g.total)}%</span>
          <span>{t('accuracy')}</span>
        </div>
      </div>
      <p className="muted center">{t('progGrammarHint')}</p>

      <div className="card">
        <h3>⏰ {t('tensesTitle')}</h3>
        <ProgressBar value={g.tensesDone} max={g.tenses.length} color="#ef6c00" />
        {TIMES.map((tm) => (
          <div key={tm.id}>
            <h4 className="progress-sub">
              {tm.icon} {bi(tm.hi, tm.en)}
            </h4>
            {g.tenses
              .filter((r) => r.group === tm.id)
              .map((r) => (
                <ScoreRow key={r.key} row={r} label={r.en} sub={r.hi} onOpen={() => nav(go({ screen: 'tense', params: { tense: r.id } }))} />
              ))}
          </div>
        ))}
      </div>

      <div className="card">
        <h3>🧱 {t('gramStructures')}</h3>
        <ProgressBar value={g.structuresDone} max={g.structures.length} color="#26a69a" />
        {LEVELS.map((lv) => (
          <div key={lv.id}>
            <h4 className="progress-sub">
              {lv.icon} {bi(lv.hi, lv.en)}
            </h4>
            {g.structures
              .filter((r) => r.group === lv.id)
              .map((r) => (
                <ScoreRow key={r.key} row={r} label={r.formula} onOpen={() => nav(go({ screen: 'structure', params: { structure: r.id } }))} />
              ))}
          </div>
        ))}
      </div>

      <div className="card">
        <h3>🧲 {t('prepTitle')}</h3>
        <ProgressBar value={g.prepsDone} max={g.preps.length} color="#00838f" />
        {PREP_GROUPS.map((pg) => (
          <div key={pg.id}>
            <h4 className="progress-sub">
              {pg.icon} {bi(pg.hi, pg.en)}
            </h4>
            {g.preps
              .filter((r) => r.group === pg.id)
              .map((r) => (
                <ScoreRow key={r.key} row={r} label={r.formula} sub={r.hi} onOpen={() => nav(go({ screen: 'preposition', params: { prep: r.id } }))} />
              ))}
          </div>
        ))}
      </div>

      <div className="card">
        <h3>🎮 {t('progMixGames')}</h3>
        {g.mix.map((m) => (
          <p key={m.key}>
            <b>{m.key === 'tense-mix' ? t('tenseMixQuiz') : m.key === 'prep-mix' ? t('prepAllGames') : t('gramAllGames')}:</b>{' '}
            {m.played ? `🎮 ${m.played} · 🏆 ${m.best}%` : <span className="muted">{t('notPlayed')}</span>}
          </p>
        ))}
      </div>
    </>
  )
}

// Progress tab "Books": lessons read in each book, games played and words to practise
export function BookProgress({ profile }) {
  const nav = useNav()
  const { t, bi } = useT()
  const { book, books } = useSelector((s) => s.words)
  const list = bookProgress(profile, book.lessons, books)
  const done = list.reduce((n, b) => n + b.done, 0)
  const total = list.reduce((n, b) => n + b.total, 0)

  return (
    <>
      <div className="stat-grid">
        <div className="stat card">
          <span className="stat-num">📖 {done}/{total}</span>
          <span>{t('lessonsRead')}</span>
        </div>
        <div className="stat card">
          <span className="stat-num">🎮 {list.reduce((n, b) => n + b.games, 0)}</span>
          <span>{t('gamesPlayed')}</span>
        </div>
        <div className="stat card">
          <span className="stat-num">🎤 {profile.missedWords?.length || 0}</span>
          <span>{t('adminMissed')}</span>
        </div>
      </div>

      {list.map((b) => (
        <div key={b.id} className="card">
          <h3>📕 {bi(b.titleHi, b.title)}</h3>
          <ProgressBar value={b.done} max={b.total} color="#6d4c41" />
          <span className="muted">
            {t('lessonsDoneCount', { n: b.done, total: b.total })} · 🎮 {b.games}
          </span>
          <div className="progress-lessons">
            {b.lessons.map((l, i) => (
              <button key={l.id} className="progress-row" onClick={() => nav(go({ screen: 'book', params: { lesson: l.id } }))}>
                <span className="progress-row-name">
                  {l.done ? '✅' : l.games ? '🟡' : '⚪'} {i + 1}. <b>{bi(l.titleHi, l.title)}</b>
                </span>
                <span className="progress-row-meta">
                  {l.games > 0 && <>🎮 {l.games} · 🏆 {l.best}% </>}
                  {l.myWords > 0 && <>⭐ {l.myWords} </>}
                  {l.missed > 0 && <>🎤 {l.missed}</>}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
      <p className="muted center">{t('progBookLegend')}</p>
    </>
  )
}

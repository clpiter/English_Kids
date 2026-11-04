import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import api, { ADMIN_TOKEN } from '../api'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { ACTIVITIES } from '../activities/list'
import { TENSES } from '../data/tenses'
import { STRUCTURES } from '../data/structures'
import { bookProgress, grammarProgress } from '../utils/progress'

const readToken = () => {
  try {
    return sessionStorage.getItem(ADMIN_TOKEN) || ''
  } catch {
    return ''
  }
}
const saveToken = (token) => {
  try {
    if (token) sessionStorage.setItem(ADMIN_TOKEN, token)
    else sessionStorage.removeItem(ADMIN_TOKEN)
  } catch {
    // storage blocked
  }
}

const day = (d) => (d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—')
const when = (d) => (d ? new Date(d).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '—')
const pct = (a, b) => (b ? `${Math.round((a / b) * 100)}%` : '—')

// numbers for the table: games, accuracy, reading
function summary(p, bookLessons) {
  const stats = Object.values(p.activityStats || {})
  const played = stats.reduce((n, s) => n + (s.played || 0), 0)
  const correct = stats.reduce((n, s) => n + (s.correct || 0), 0)
  const total = stats.reduce((n, s) => n + (s.total || 0), 0)
  const done = p.lessonsDone || []
  const books = done.filter((id) => bookLessons.has(id)).length
  const lessons = done.filter((id) => !id.startsWith('tense-') && !id.startsWith('gram-')).length
  const g = grammarProgress(p)
  const last = p.lastPlayed || p.updatedAt
  return { played, correct, total, lessons, books, grammar: g.tensesDone + g.structuresDone, grammarGames: g.played, last }
}

// Admin panel (/admin): log in, then see every kid's reading and activity details
export default function AdminPanel() {
  const { t } = useT()
  const [token, setToken] = useState(readToken)
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [profiles, setProfiles] = useState(null)
  const [openId, setOpenId] = useState(null)
  const [query, setQuery] = useState('')

  const logout = () => {
    saveToken('')
    setToken('')
    setProfiles(null)
  }

  const load = useCallback(async () => {
    setBusy(true)
    setError('')
    try {
      setProfiles((await api.get('/admin/profiles')).data)
    } catch (err) {
      if (err.response?.status === 401) logout()
      setError(err.response?.data?.message || t('adminServerError'))
    } finally {
      setBusy(false)
    }
  }, [t])

  // first load after logging in (state is only set when the answer comes back)
  useEffect(() => {
    if (!token) return
    let live = true
    api
      .get('/admin/profiles')
      .then((res) => live && setProfiles(res.data))
      .catch((err) => {
        if (!live) return
        if (err.response?.status === 401) {
          saveToken('')
          setToken('')
        }
        setError(err.response?.data?.message || 'Could not reach the server.')
      })
    return () => {
      live = false
    }
  }, [token])

  const login = async (e) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const { data } = await api.post('/admin/login', { id: id.trim(), password })
      saveToken(data.token)
      setPassword('')
      setToken(data.token)
    } catch (err) {
      setError(err.response?.data?.message || t('adminServerError'))
    } finally {
      setBusy(false)
    }
  }

  if (!token) {
    return (
      <section className="admin-login-page">
        <div className="admin-login-box">
          <div className="admin-login-side" aria-hidden="true">
            <div className="admin-login-art">🛡️</div>
            <h2>{t('adminTitle')}</h2>
            <p>{t('adminLoginIntro')}</p>
            <ul>
              <li>📖 {t('adminReading')}</li>
              <li>🎮 {t('adminActivities')}</li>
              <li>📐 {t('adminGrammar')}</li>
              <li>📕 {t('adminBooks')}</li>
            </ul>
          </div>

          <form className="admin-login" onSubmit={login} noValidate>
            <div className="admin-lock">🔐</div>
            <h1>{t('adminLogin')}</h1>
            <p className="muted">{t('adminLoginHint')}</p>

            <label className="admin-field">
              <span>{t('adminId')}</span>
              <span className="admin-input">
                <span className="admin-input-icon" aria-hidden="true">👤</span>
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck="false"
                  autoFocus
                  required
                />
              </span>
            </label>

            <label className="admin-field">
              <span>{t('adminPassword')}</span>
              <span className="admin-input">
                <span className="admin-input-icon" aria-hidden="true">🔑</span>
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button type="button" className="admin-eye" onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>
                  {show ? '🙈' : '👁️'}
                </button>
              </span>
            </label>

            {error && (
              <p className="admin-error" role="alert">
                ⚠️ {error}
              </p>
            )}

            <button className="btn btn-primary admin-submit" disabled={busy || !id.trim() || !password}>
              {busy ? <span className="admin-spinner" aria-label="…" /> : <>🔓 {t('adminLoginBtn')}</>}
            </button>
            <BackButton screen="profiles" />
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="screen admin">
      <div className="card admin-head">
        <h1>🛡️ {t('adminTitle')}</h1>
        <div className="admin-actions">
          <button className="btn btn-light" onClick={load} disabled={busy}>
            🔄 {t('adminRefresh')}
          </button>
          <button className="btn btn-light" onClick={logout}>
            🚪 {t('adminLogout')}
          </button>
        </div>
      </div>
      {error && <p className="error-text center">{error}</p>}
      {!profiles ? (
        <p className="center muted">…</p>
      ) : (
        <AdminDashboard
          profiles={profiles}
          openId={openId}
          setOpenId={setOpenId}
          query={query}
          setQuery={setQuery}
          onDeleted={(id) => {
            setProfiles(profiles.filter((p) => p._id !== id))
            setOpenId(null)
          }}
        />
      )}
    </section>
  )
}

function AdminDashboard({ profiles, openId, setOpenId, query, setQuery, onDeleted }) {
  const { t, ts } = useT()
  const bookLessonList = useSelector((s) => s.words.book.lessons)
  const rows = useMemo(() => {
    const ids = new Set(bookLessonList.map((l) => l.id))
    return profiles.map((p) => ({ p, s: summary(p, ids) }))
  }, [profiles, bookLessonList])
  const devices = new Set(profiles.map((p) => p.device || 'old')).size
  const totals = rows.reduce(
    (a, { p, s }) => ({
      stars: a.stars + (p.stars || 0),
      lessons: a.lessons + s.lessons,
      books: a.books + s.books,
      grammar: a.grammar + s.grammar,
      games: a.games + s.played + s.grammarGames,
      words: a.words + (p.learned?.length || 0),
    }),
    { stars: 0, lessons: 0, books: 0, grammar: 0, games: 0, words: 0 },
  )
  const q = query.trim().toLowerCase()
  const shown = rows.filter(({ p }) => !q || p.name.toLowerCase().includes(q) || (p.device || '').includes(q))

  return (
    <>
      <div className="stat-grid admin-stats">
        <div className="stat card"><span className="stat-num">👧 {profiles.length}</span><span>{t('adminKids')}</span></div>
        <div className="stat card"><span className="stat-num">📱 {devices}</span><span>{t('adminDevices')}</span></div>
        <div className="stat card"><span className="stat-num">⭐ {totals.stars}</span><span>{t('adminStars')}</span></div>
        <div className="stat card"><span className="stat-num">📚 {totals.words}</span><span>{t('adminWords')}</span></div>
        <div className="stat card"><span className="stat-num">📖 {totals.lessons}</span><span>{t('adminLessons')}</span></div>
        <div className="stat card"><span className="stat-num">📕 {totals.books}</span><span>{t('progBookLessons')}</span></div>
        <div className="stat card"><span className="stat-num">📐 {totals.grammar}</span><span>{t('adminGrammarLearned')}</span></div>
        <div className="stat card"><span className="stat-num">🎮 {totals.games}</span><span>{t('adminGames')}</span></div>
      </div>

      <input className="text-input search-input" type="search" value={query} placeholder={`🔍 ${ts('adminSearch')}`} onChange={(e) => setQuery(e.target.value)} />

      <div className="card admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>{t('adminKid')}</th>
              <th>{t('adminDevice')}</th>
              <th>⭐</th>
              <th>{t('adminWords')}</th>
              <th>📕 {t('tabBook')}</th>
              <th>📐 {t('tabGrammar')}</th>
              <th>{t('adminGames')}</th>
              <th>{t('adminAccuracy')}</th>
              <th>{t('adminLastActive')}</th>
            </tr>
          </thead>
          <tbody>
            {shown.map(({ p, s }) => (
              <tr key={p._id} className={openId === p._id ? 'open' : ''} onClick={() => setOpenId(openId === p._id ? null : p._id)}>
                <td>
                  <span className="admin-avatar" style={{ background: p.color }}>{p.avatar}</span> <b>{p.name}</b>
                  {p.age ? <small> · {p.age}y</small> : null}
                </td>
                <td><code>{p.device ? p.device.slice(-6) : t('adminOldDevice')}</code></td>
                <td>{p.stars || 0}</td>
                <td>{p.learned?.length || 0}</td>
                <td>{s.books}</td>
                <td>
                  {s.grammar}/{TENSES.length + STRUCTURES.length}{s.grammarGames ? ` · 🎮${s.grammarGames}` : ''}
                </td>
                <td>{s.played}</td>
                <td>{pct(s.correct, s.total)}</td>
                <td>{when(s.last)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {shown.map(({ p }) => p._id === openId && <ProfileDetails key={p._id} profile={p} onDeleted={onDeleted} />)}
    </>
  )
}

function ProfileDetails({ profile: p, onDeleted }) {
  const { t, ts } = useT()
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  const remove = async () => {
    if (!window.confirm(ts('adminDeleteConfirm', { name: p.name }))) return
    setDeleting(true)
    setDeleteError('')
    try {
      await api.delete(`/admin/profiles/${p._id}`)
      onDeleted(p._id)
    } catch (err) {
      setDeleteError(err.response?.data?.message || ts('adminServerError'))
      setDeleting(false)
    }
  }
  const { book, books, stories, list: words, glossary } = useSelector((s) => s.words)

  const lessonName = (id) => {
    if (id.startsWith('gram-')) return { group: `📐 ${t('tabGrammar')}`, title: id.slice(5) }
    if (id.startsWith('tense-')) {
      const x = TENSES.find((tn) => tn.id === id.slice(6))
      return { group: `⏰ ${t('tabTense')}`, title: x ? x.en : id }
    }
    const l = book.lessons.find((x) => x.id === id)
    if (l) return { group: `📕 ${books.find((b) => b.id === l.bookId)?.short || l.bookId}`, title: l.title }
    const st = stories.find((x) => x.id === id)
    return { group: `📖 ${t('adminStories')}`, title: st ? st.titleEn || st.title : id }
  }
  const lessonGroups = {}
  for (const id of p.lessonsDone || []) {
    const { group, title } = lessonName(id)
    ;(lessonGroups[group] ||= []).push(title)
  }

  const wordText = (key) => {
    const w = words.find((x) => x.key === key)
    if (w) return `${w.en} (${w.hi})`
    const en = key.replace(/^g:/, '')
    return glossary[en] ? `${en} (${glossary[en][0]})` : en
  }
  const notes = new Map((p.wordNotes || []).map((n) => [n.key, n]))
  const topMistakes = Object.entries(p.mistakeCounts || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
  const actName = (id) => {
    const a = ACTIVITIES.find((x) => x.id === id)
    return a ? `${a.icon} ${a.en}` : id
  }

  return (
    <div className="admin-details pop-in">
      <div className="card">
        <h2>
          <span className="admin-avatar" style={{ background: p.color }}>{p.avatar}</span> {p.name}
        </h2>
        <p className="muted">
          {t('adminCreated')}: {day(p.createdAt)} · {t('adminLastActive')}: {when(p.lastPlayed || p.updatedAt)} · 🔥 {p.streak || 0} · {t('adminDevice')}: <code>{p.device || t('adminOldDevice')}</code>
        </p>
        <button className="btn btn-danger" onClick={remove} disabled={deleting}>
          🗑️ {deleting ? '…' : t('adminDelete')}
        </button>
        {deleteError && <p className="error-text">{deleteError}</p>}
      </div>

      <div className="card">
        <h3>📖 {t('adminReading')}</h3>
        {Object.keys(lessonGroups).length === 0 && <p className="muted">{t('adminNone')}</p>}
        {Object.entries(lessonGroups).map(([group, titles]) => (
          <p key={group}>
            <b>{group} ({titles.length}):</b> {titles.join(', ')}
          </p>
        ))}
        <p>
          <b>🎤 {t('adminMissed')} ({p.missedWords?.length || 0}):</b> {(p.missedWords || []).map(wordText).join(', ') || '—'}
        </p>
        <p>
          <b>⭐ {t('tabWords')} ({p.difficult?.length || 0}):</b>
        </p>
        <ul className="admin-list">
          {(p.difficult || []).map((k) => {
            const n = notes.get(k)
            return (
              <li key={k}>
                {n?.hi ? `${n.en || k.replace(/^g:/, '')} (${n.hi})` : wordText(k)}
                {n?.sentence && <i> — ✍️ {n.sentence}</i>}
              </li>
            )
          })}
        </ul>
      </div>

      <AdminGrammar profile={p} />
      <AdminBooks profile={p} />

      <div className="card">
        <h3>🎮 {t('adminActivities')}</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>{t('adminActivity')}</th>
              <th>{t('adminGames')}</th>
              <th>{t('adminCorrect')}</th>
              <th>{t('adminAccuracy')}</th>
              <th>💡</th>
              <th>❌</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(p.activityStats || {}).map(([a, s]) => (
              <tr key={a}>
                <td>{actName(a)}</td>
                <td>{s.played}</td>
                <td>
                  {s.correct}/{s.total}
                </td>
                <td>{pct(s.correct, s.total)}</td>
                <td>{s.hints}</td>
                <td>{s.mistakes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!Object.keys(p.activityStats || {}).length && <p className="muted">{t('adminNone')}</p>}

        <h3>🕒 {t('adminRecent')}</h3>
        <ul className="admin-list">
          {(p.history || [])
            .slice(0, 20)
            .map((h, i) => (
              <li key={i}>
                {when(h.date)} · {actName(h.activity)} · {h.category} · {h.correct}/{h.total} · ⭐{h.stars}
                {h.hints ? ` · 💡${h.hints}` : ''}
              </li>
            ))}
        </ul>

        <h3>🎯 {t('adminMistakes')}</h3>
        <p>{topMistakes.map(([k, n]) => `${wordText(k)} ×${n}`).join(', ') || '—'}</p>
      </div>
    </div>
  )
}

// a kid's tense and structure progress (admin details)
function AdminGrammar({ profile }) {
  const { t } = useT()
  const g = grammarProgress(profile)
  const line = (r, name) => (r.played ? `${r.done ? '✅' : '🟡'} ${name}: 🎮${r.played} · 🏆${r.best}% · last ${r.last}%` : null)
  const lines = [...g.tenses.map((r) => line(r, r.en)), ...g.structures.map((r) => line(r, r.formula))].filter(Boolean)
  const mix = g.mix.filter((m) => m.played)
  return (
    <div className="card">
      <h3>📐 {t('adminGrammar')}</h3>
      <p>
        ⏰ {t('progTensesLearned')}: <b>{g.tensesDone}/{g.tenses.length}</b> · 🧱 {t('progStructuresLearned')}:{' '}
        <b>{g.structuresDone}/{g.structures.length}</b> · 🎮 {g.played} · ✅ {g.total ? Math.round((g.correct / g.total) * 100) : 0}%
      </p>
      {lines.length === 0 && mix.length === 0 && <p className="muted">{t('adminNone')}</p>}
      {lines.length > 0 && (
        <ul className="admin-list">
          {lines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      )}
      {mix.length > 0 && (
        <p className="muted">
          {mix.map((m) => `${m.key === 'tense-mix' ? t('tenseMixQuiz') : t('gramAllGames')}: 🎮${m.played} · 🏆${m.best}%`).join(' · ')}
        </p>
      )}
    </div>
  )
}

// a kid's progress in each reading book (admin details)
function AdminBooks({ profile }) {
  const { t } = useT()
  const { book, books } = useSelector((s) => s.words)
  const list = bookProgress(profile, book.lessons, books)
  return (
    <div className="card">
      <h3>📕 {t('adminBooks')}</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>{t('tabBook')}</th>
            <th>{t('lessonsRead')}</th>
            <th>{t('adminGames')}</th>
            <th>{t('adminBookLessons')}</th>
          </tr>
        </thead>
        <tbody>
          {list.map((b) => (
            <tr key={b.id}>
              <td>{b.short}</td>
              <td>
                {b.done}/{b.total}
              </td>
              <td>{b.games}</td>
              <td className="admin-wrap">
                {b.lessons
                  .filter((l) => l.done || l.games || l.myWords || l.missed)
                  .map((l) => `${l.done ? '✅' : '🟡'} ${l.title}${l.best !== null ? ` (🏆${l.best}%)` : ''}${l.missed ? ` 🎤${l.missed}` : ''}`)
                  .join(', ') || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

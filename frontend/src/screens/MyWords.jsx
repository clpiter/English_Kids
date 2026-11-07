import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDifficult } from '../store/profileSlice'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import WordImage from '../components/WordImage'
import { ACTIVITIES } from '../activities/list'
import { BOOK_GAMES } from '../utils/book'
import { getPool, isSpellable } from '../utils/questions'
import { myWordsPool, resolveDifficult } from '../utils/reading'
import { speak, speakEn, speakHi } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

// a word as a whole word inside a lesson's text
const escape = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const inText = (en, text) => new RegExp(`(^|[^a-z])${escape(en)}([^a-z]|$)`, 'i').test(text || '')

// Where a saved word belongs: the lesson it was saved in, else its Learn category (word-list words),
// else the first book / story lesson that has it, else 'other'
function placeOf(w, lessonById, bookLessons, stories) {
  if (w.lesson && lessonById.has(w.lesson)) return w.lesson
  if (w.word?.category) return `cat:${w.word.category}`
  const en = w.en.toLowerCase()
  const found =
    bookLessons.find((l) => (l.words || []).some(([x]) => x.toLowerCase() === en)) ||
    bookLessons.find((l) => inText(en, l.en)) ||
    stories.find((st) => inText(en, st.en))
  return found ? found.id : 'other'
}

// "My words" tab: words the kid chose as difficult, with pronunciation and meaning.
// Search to add any word from the app.
export default function MyWords({ profile }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { list: words, glossary, book, books, stories, categories } = useSelector((s) => s.words)
  const { t, ts, bi } = useT()
  const [query, setQuery] = useState('')
  useAnnounce(VOICE.words)

  // the kid's own meaning and sentence (from the word dialog) win over the app's meaning
  const notes = new Map((profile.wordNotes || []).map((n) => [n.key, n]))
  const mine = (profile.difficult || [])
    .map((k) => {
      const w = resolveDifficult(k, words, glossary)
      const n = notes.get(k)
      if (!w && !n) return null
      return { key: k, en: n?.en || k.replace(/^g:/, ''), ...w, ...(n?.hi ? { hi: n.hi } : {}), sentence: n?.sentence || '', lesson: n?.lesson || '' }
    })
    .filter(Boolean)
  // group the words: each class (book) by lesson, then Learn-tab stories and categories, then the rest
  const lessonById = new Map([...book.lessons, ...stories].map((l) => [l.id, l]))
  const byPlace = new Map()
  for (const w of mine) {
    const place = placeOf(w, lessonById, book.lessons, stories)
    byPlace.set(place, [...(byPlace.get(place) || []), w])
  }
  const filled = (list) => list.filter((x) => x.words?.length)
  const groups = filled(
    [
      ...books.map((b) => ({
        id: b.id,
        icon: '📕',
        title: bi(b.shortHi || b.titleHi, b.short || b.title),
        lessons: filled(
          book.lessons
            .filter((l) => l.bookId === b.id)
            .map((l, i) => ({
              id: l.id,
              title: <>{i + 1}. {bi(l.titleHi, l.title)}</>,
              open: () => nav(go({ screen: 'book', params: { lesson: l.id } })),
              words: byPlace.get(l.id),
            })),
        ),
      })),
      {
        id: 'learn',
        icon: '🏠',
        title: t('myWordsLearn'),
        lessons: filled([
          ...stories.map((st) => ({
            id: st.id,
            title: <>📖 {bi(st.titleHi, st.titleEn)}</>,
            open: () => nav(go({ screen: 'reading', params: { lesson: st.id } })),
            words: byPlace.get(st.id),
          })),
          ...categories.map((c) => ({
            id: `cat:${c.id}`,
            title: <>{c.icon} {bi(c.hi, c.en)}</>,
            open: () => nav(go({ screen: 'category', params: { category: c.id } })),
            words: byPlace.get(`cat:${c.id}`),
          })),
        ]),
      },
      { id: 'other', icon: '✨', title: t('myWordsOther'), lessons: filled([{ id: 'other', words: byPlace.get('other') }]) },
    ].map((g) => ({ ...g, words: g.lessons.flatMap((l) => l.words) })),
  )

  const toggle = (key, on) => dispatch(setDifficult({ id: profile._id, key, on }))
  // games at the bottom: games without pictures use every saved word, picture games only the word-list words
  const withMeaning = myWordsPool(profile, words, glossary)
  const pictureWords = getPool(words, 'difficult', profile)
  const gameWords = (id) => (id === 'sayit' ? mine : BOOK_GAMES.includes(id) ? withMeaning : pictureWords)
  const canPlay = (id) => {
    const list = gameWords(id)
    if (id === 'sayit') return list.length >= 1
    if (id === 'missing' || id === 'builder') return list.filter(isSpellable).length >= 3
    return list.length >= 4
  }
  const playable = ACTIVITIES.some((a) => canPlay(a.id))
  const toGames = () => document.getElementById('my-word-games')?.scrollIntoView({ behavior: 'smooth' })

  // search: word list first, then everyday words
  const q = query.trim().toLowerCase()
  const results = !q
    ? []
    : [
        ...words.filter((w) => w.en.includes(q) || w.hi.includes(q)).map((w) => ({ key: w.key, en: w.en, hi: w.hi, word: w })),
        ...Object.entries(glossary)
          .filter(([en, [hi]]) => en.includes(q) || hi.includes(q))
          .map(([en, [hi]]) => ({ key: `g:${en}`, en, hi })),
      ].slice(0, 12)

  return (
    <section className="screen narrow">
      <div className="card">
        <h1>⭐ {t('myWords')}</h1>
        <p className="muted">{t('myWordsIntro')}</p>
        <input
          className="text-input search-input"
          type="search"
          value={query}
          placeholder={`🔍 ${ts('wordsHere')}...`}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
          <div className="search-results">
            {results.map((r) => {
              const has = profile.difficult?.includes(r.key)
              return (
                <div key={r.key} className="search-row">
                  {r.word && <WordImage word={r.word} size="xs" />}
                  <button className="search-word" onClick={() => speakEn(r.en)}>
                    <b>{r.en}</b> · {r.hi}
                  </button>
                  <button className={`icon-btn ${has ? 'on' : ''}`} onClick={() => toggle(r.key, !has)} aria-label={ts('addDifficult')}>
                    {has ? '✅' : '⭐'}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {mine.length === 0 ? (
        <p className="center muted">{t('noMyWords')}</p>
      ) : (
        <>
          {playable && (
            <button
              className="btn btn-primary big"
              onClick={toGames}
            >
              🎮 {t('practiseMyWords')} ↓
            </button>
          )}
          {groups.map((g) => (
            <section key={g.id} className={`dw-group dw-${g.id}`}>
              <h2 className="dw-group-title">
                {g.icon} {g.title} <span className="dw-count">{g.words.length}</span>
              </h2>
              {g.lessons.map((l) => (
                // lesson name: tap to show / hide the difficult words of that lesson
                <details key={l.id} className="dw-lesson" open={!l.open}>
                  {l.open && (
                    <summary className="dw-lesson-title">
                      <span className="dw-lesson-name">{l.title}</span> <span className="dw-count">{l.words.length}</span>
                    </summary>
                  )}
                  {l.open && (
                    <button className="btn btn-light dw-open" onClick={l.open}>
                      📖 {t('openLesson')}
                    </button>
                  )}
          <div className="dw-list">
            {l.words.map((w) => (
              <div key={w.key} className="dw card">
                {w.word ? <WordImage word={w.word} size="sm" /> : <span className="dw-letter">{w.en[0]}</span>}
                <div className="dw-text">
                  <b className="dw-en">{w.en}</b>
                  {w.say && (
                    <span className="dw-say">
                      {t('sayItLike')}: {w.say}
                    </span>
                  )}
                  {w.hi && <span className="dw-hi">{w.hi}</span>}
                  {w.sentence && (
                    <button className="dw-mine" onClick={() => speakEn(w.sentence)}>
                      ✍️ {w.sentence}
                    </button>
                  )}
                  {w.word?.sentenceEn && <span className="dw-ex">💡 {w.word.sentenceEn}</span>}
                </div>
                <div className="dw-actions">
                  <button className="icon-btn" onClick={() => speakEn(w.en)} aria-label={ts('english')}>
                    🔊
                  </button>
                  <button className="icon-btn" onClick={() => speak([{ text: w.en, lang: 'en-IN', rate: 0.45 }])} aria-label={ts('sayItSlowly')}>
                    🐢
                  </button>
                  {w.hi && (
                    <button className="icon-btn" onClick={() => speakHi(w.hi)} aria-label={ts('hindi')}>
                      अ
                    </button>
                  )}
                  <button className="icon-btn" onClick={() => toggle(w.key, false)} aria-label={ts('remove')}>
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
                </details>
              ))}
            </section>
          ))}

          <div id="my-word-games" className="card my-word-games">
            <h2>🎮 {t('myWordsGames')}</h2>
            <p className="muted">{t('myWordsGamesHint')}</p>
            <div className="activity-grid">
              {ACTIVITIES.map((a) => {
                const best = profile.bestScores?.[`${a.id}:difficult`]
                const ok = canPlay(a.id)
                return (
                  <button
                    key={a.id}
                    className="activity-card"
                    style={{ '--c': a.color }}
                    disabled={!ok}
                    onClick={() => nav(go({ screen: 'activity', params: { activity: a.id, category: 'difficult' } }))}
                  >
                    <span className="activity-icon">{a.icon}</span>
                    <span className="activity-name">{bi(a.hi, a.en)}</span>
                    <span className="activity-best">
                      {ok ? (best !== undefined ? `🏆 ${best}%` : `${gameWords(a.id).length} ${ts('wordsHere')}`) : `🔒 ${ts('myWordsNeedMore')}`}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

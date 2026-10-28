import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDifficult } from '../store/profileSlice'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import WordImage from '../components/WordImage'
import { getPool } from '../utils/questions'
import { resolveDifficult } from '../utils/reading'
import { speak, speakEn, speakHi } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

// "My words" tab: words the kid chose as difficult, with pronunciation and meaning.
// Search to add any word from the app.
export default function MyWords({ profile }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { list: words, glossary } = useSelector((s) => s.words)
  const { t, ts } = useT()
  const [query, setQuery] = useState('')
  useAnnounce(VOICE.words)

  const mine = (profile.difficult || []).map((k) => resolveDifficult(k, words, glossary)).filter(Boolean)
  const toggle = (key, on) => dispatch(setDifficult({ id: profile._id, key, on }))
  const playable = getPool(words, 'difficult', profile).length >= 4

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
              onClick={() => nav(go({ screen: 'category', params: { category: 'difficult' } }))}
            >
              🎮 {t('practiseMyWords')}
            </button>
          )}
          <div className="dw-list">
            {mine.map((w) => (
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
        </>
      )}
    </section>
  )
}

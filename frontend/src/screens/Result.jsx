import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import Confetti from '../components/Confetti'
import MistakeItem from '../components/MistakeItem'
import { playWin } from '../utils/sounds'
import { speak } from '../utils/speech'

export default function Result({ params }) {
  const nav = useNav()
  const { list: words, glossary } = useSelector((s) => s.words)
  const { t } = useT()
  const { activity, category, lesson, results = [] } = params
  // book games come back to their lesson, category games to their category
  const again = lesson ? go({ screen: 'bookActivity', params: { lesson, activity } }) : go({ screen: 'activity', params: { activity, category } })
  const others = lesson ? go({ screen: 'book', params: { lesson } }) : go({ screen: 'category', params: { category } })

  const total = results.length
  const correct = results.filter((r) => r.correct).length
  const percent = total ? Math.round((correct / total) * 100) : 0
  const stars = correct + (percent === 100 ? 3 : 0) // same rule as the server
  // every word with a wrong answer or wrong tries, with what the kid picked
  const mistakes = results
    .filter((r) => !r.correct || r.tries > 0)
    .map((r) => {
      // book words ("g:<word>") are explained from the dictionary
      const g = r.key.startsWith('g:') && glossary[r.key.slice(2)]
      const word = words.find((w) => w.key === r.key) || (g && { key: r.key, en: r.key.slice(2), hi: g[0], say: g[1], book: true })
      return { ...r, word }
    })
    .filter((m) => m.word)

  const level = percent >= 80 ? 'superstar' : percent >= 50 ? 'goodJob' : 'keepTrying'
  const face = { superstar: '🏆', goodJob: '🎉', keepTrying: '💪' }[level]

  useEffect(() => {
    if (!total) return
    if (percent >= 50) playWin()
    const praise = {
      superstar: ['शाबाश! तुम सुपरस्टार हो!', 'Superstar!'],
      goodJob: ['बहुत अच्छे!', 'Good job!'],
      keepTrying: ['कोई बात नहीं, फिर से कोशिश करो!', 'Keep practising!'],
    }[level]
    speak([
      { text: praise[0], lang: 'hi-IN' },
      { text: praise[1], lang: 'en-IN' },
    ])
  }, [level, percent, total])

  // opened without a game (e.g. page reloaded): back to the category
  if (!total) return <Navigate to={lesson ? `/book/${lesson}` : `/category/${category}`} replace />

  return (
    <section className="screen narrow">
      {percent >= 50 && <Confetti />}
      <div className="card result-card pop-in">
        <div className="result-face">{face}</div>
        <h1>{t(level)}</h1>
        <p className="result-score">{t('youGot', { correct, total })}</p>
        <div className="result-stars">⭐ {t('starsEarned', { n: stars })}</div>
      </div>

      {mistakes.length > 0 && (
        <div className="card">
          <h3>🎯 {t('yourMistakes')}</h3>
          <p className="muted">{t('reviseThese')}</p>
          <div className="mistake-list">
            {mistakes.map((m) => (
              <MistakeItem key={m.key} word={m.word} activity={activity} chosen={m.chosen} />
            ))}
          </div>
        </div>
      )}

      <div className="result-buttons">
        <button
          className="btn btn-primary big"
          onClick={() => nav(again)}
        >
          🔁 {t('playAgain')}
        </button>
        <button className="btn btn-light big" onClick={() => nav(others)}>
          🎮 {t('otherGames')}
        </button>
        <button className="btn btn-light big" onClick={() => nav(go({ screen: 'home' }))}>
          🏠 {t('home')}
        </button>
      </div>
    </section>
  )
}

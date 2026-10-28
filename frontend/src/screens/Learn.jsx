import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { go, useNav } from '../nav'
import { markLearned } from '../store/profileSlice'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import ProgressBar from '../components/ProgressBar'
import WordImage from '../components/WordImage'
import { getPool } from '../utils/questions'
import { categoryInfo } from '../utils/categories'
import { speak, speakEn, speakHi } from '../utils/speech'
import { VOICE } from '../utils/voice'

export default function Learn({ params, profile }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { categories, list: words } = useSelector((s) => s.words)
  const { t } = useT()
  const { category } = params
  const info = categoryInfo(categories, category)

  const [pool] = useState(() => getPool(words, category, profile))
  const [index, setIndex] = useState(0)
  const seen = useRef(new Set())
  const word = pool[index]

  // Say the word when the card appears (with the Hindi instruction on the first card)
  useEffect(() => {
    if (!word) return
    seen.current.add(word.key)
    speak([
      { text: index === 0 ? VOICE.learn : '', lang: 'hi-IN' },
      { text: word.en, lang: 'en-IN' },
    ])
  }, [word, index])

  // Save seen words when leaving the screen
  const profileId = profile._id
  useEffect(() => {
    const keys = seen.current
    return () => {
      if (keys.size) dispatch(markLearned({ id: profileId, keys: [...keys] }))
    }
  }, [dispatch, profileId])

  const move = (step) => setIndex((i) => Math.min(pool.length - 1, Math.max(0, i + step)))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(pool.length - 1, i + 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pool.length])

  if (!word) return null
  const isLast = index === pool.length - 1

  return (
    <section className="screen narrow">
      <BackButton screen="category" params={{ category }} />

      <div className="learn-top">
        <span>
          {info.icon} {index + 1} / {pool.length}
        </span>
        <ProgressBar value={index + 1} max={pool.length} color={info.color} />
      </div>

      <div className="flashcard pop-in" key={word.key} style={{ '--c': info.color }}>
        <button className="flash-emoji" onClick={() => speakEn(word.en)} aria-label={word.en}>
          <WordImage word={word} size="xl" />
        </button>
        <div className="flash-en">{word.en}</div>
        <div className="flash-say">
          {t('sayItLike')}: <b>{word.say}</b>
        </div>
        <div className="flash-hi">{word.hi}</div>
        {profile.openMistakes?.includes(word.key) && <div className="mistake-badge">🎯 {t('wrongLastTime')}</div>}

        <div className="flash-sounds">
          <button className="btn btn-sound" onClick={() => speakEn(word.en)}>
            🔊 {t('english')}
          </button>
          <button className="btn btn-sound hi" onClick={() => speakHi(word.hi)}>
            🔊 {t('hindi')}
          </button>
        </div>

        {word.sentenceEn && (
          <button
            className="flash-example"
            onClick={() =>
              speak([
                { text: word.sentenceEn, lang: 'en-IN' },
                { text: word.sentenceHi, lang: 'hi-IN' },
              ])
            }
          >
            <span className="flash-example-label">💡 {t('example')} 🔊</span>
            <span className="flash-example-en">{word.sentenceEn}</span>
            <span className="flash-example-hi">{word.sentenceHi}</span>
          </button>
        )}
      </div>

      <div className="learn-nav">
        <button className="btn btn-light big" onClick={() => move(-1)} disabled={index === 0}>
          ◀ {t('prev')}
        </button>
        {isLast ? (
          <button className="btn btn-primary big" onClick={() => nav(go({ screen: 'category', params: { category } }))}>
            🎮 {t('playGames')}
          </button>
        ) : (
          <button className="btn btn-primary big" onClick={() => move(1)}>
            {t('next')} ▶
          </button>
        )}
      </div>
    </section>
  )
}

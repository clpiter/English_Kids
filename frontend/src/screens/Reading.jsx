import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMissed, finishLesson, markLearned, setDifficult } from '../store/profileSlice'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import WordSheet from '../components/WordSheet'
import WordImage from '../components/WordImage'
import { categoryInfo } from '../utils/categories'
import { buildLexicon, difficultKey, tokenize } from '../utils/reading'
import { BOOK_GAMES, bookPool } from '../utils/book'
import { activityById } from '../activities/list'
import { playWin } from '../utils/sounds'
import { useReadAlong } from '../utils/useReadAlong'
import { useReadAloud } from '../utils/useReadAloud'
import Confetti from '../components/Confetti'
import { speak, speakEn, speakHi } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

const BOOK_INFO = { icon: '📕', color: '#6d4c41' }

// One reading lesson: a story (/reading/:lesson) or a book lesson (/book/:lesson, kind="book").
// Every word can be tapped to hear it and see its meaning.
// "Choose difficult words" mode: tap several words, then see them all with pronunciation and meaning.
// "Read aloud with the mic" mode: words the kid says turn green; at the end: "शाबाश! तुमने बहुत अच्छा पढ़ा!"
export default function Reading({ params, profile, kind = 'stories' }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const { categories, list: words, stories, glossary, book } = useSelector((s) => s.words)
  const isBook = kind === 'book'
  const screen = isBook ? 'book' : 'reading'
  const lessonId = params.lesson
  const list = useMemo(
    () => {
      if (!isBook) return stories
      const bookId = book.lessons.find((l) => l.id === lessonId)?.bookId
      return book.lessons.filter((l) => l.bookId === bookId).map((l) => ({ ...l, titleEn: l.title, category: 'book' }))
    },
    [isBook, book, stories, lessonId],
  )
  const { t, bi } = useT()
  useAnnounce(VOICE.reading)

  const story = list.find((s) => s.id === params.lesson)
  const info = isBook ? BOOK_INFO : categoryInfo(categories, story?.category)
  const position = list.findIndex((s) => s.id === params.lesson)
  const prevLesson = list[position - 1]
  const nextLesson = list[position + 1]
  const practiceMine = story && isBook ? bookPool(book.lessons.find((l) => l.id === lessonId), words, glossary, profile, 'mine').length : 0
  const isDone = profile.lessonsDone?.includes(params.lesson)

  const [showHi, setShowHi] = useState(false)
  const [picked, setPicked] = useState(null)
  const [pickMode, setPickMode] = useState(false)
  const [chosen, setChosen] = useState([]) // token indexes chosen as difficult
  const [showChosen, setShowChosen] = useState(false)
  const [celebrate, setCelebrate] = useState(false)
  const tapped = useRef(new Set())
  const press = useRef({ timer: null, long: false }) // long-press detection on words

  const tokens = useMemo(() => {
    if (!story) return []
    return tokenize(story.en, buildLexicon(words, glossary, story.category, story.words || []))
  }, [story, words, glossary])

  // Lesson finished (read to the end with the mic, or "I read it!"): praise in Hindi + English
  const praise = () => {
    playWin()
    setCelebrate(true)
    setTimeout(
      () =>
        speak([
          { text: 'शाबाश! तुमने बहुत अच्छा पढ़ा!', lang: 'hi-IN' },
          { text: 'Well done! You read very well!', lang: 'en-IN' },
        ]),
      400,
    )
    if (story && !profile.lessonsDone?.includes(story.id)) dispatch(finishLesson({ id: profile._id, lesson: story.id }))
  }
  // words the kid could not read aloud -> saved for "Say the word" practice
  const saveMissed = (tokenIndexes) => {
    const keys = [
      ...new Set(
        tokenIndexes
          .map((i) => tokens[i])
          .filter((tok) => tok && tok.text.length > 1)
          .map((tok) => difficultKey(tok.entry, tok.text)),
      ),
    ]
    if (keys.length) dispatch(addMissed({ id: profile._id, keys }))
  }
  const readAlong = useReadAlong(tokens, { onFinish: praise, onStop: saveMissed })
  const readAloud = useReadAloud(tokens)

  // words of this lesson still waiting in "Say the word" practice
  const missedHere = []
  const missedSet = new Set(profile.missedWords || [])
  for (const tok of tokens) {
    if (tok.type !== 'word') continue
    const key = difficultKey(tok.entry, tok.text)
    if (missedSet.has(key) && !missedHere.some((m) => m.key === key)) missedHere.push({ key, tok })
  }

  // Save tapped words as "seen" when leaving
  const profileId = profile._id
  useEffect(() => {
    const keys = tapped.current
    return () => {
      if (keys.size) dispatch(markLearned({ id: profileId, keys: [...keys] }))
    }
  }, [dispatch, profileId])

  if (!story) {
    return (
      <section className="screen narrow">
        <BackButton screen={screen} />
        <p className="center muted">{t('noStories')}</p>
      </section>
    )
  }

  // Short tap: only the English sound, right away. Long press: the word dialog (meaning, Hindi sound...)
  const LONG_PRESS = 500
  const tap = (token, i) => {
    if (token.entry?.word) tapped.current.add(token.entry.word.key)
    speakEn(token.text)
    if (pickMode) setChosen((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))
  }
  const pressStart = (token) => {
    clearTimeout(press.current.timer)
    press.current.long = false
    press.current.timer = setTimeout(() => {
      press.current.long = true
      if (token.entry?.word) tapped.current.add(token.entry.word.key)
      navigator.vibrate?.(30)
      setPicked(token)
    }, LONG_PRESS)
  }
  const pressEnd = () => clearTimeout(press.current.timer)
  const wordClick = (token, i) => {
    // the click that ends a long press only opened the dialog
    if (press.current.long) {
      press.current.long = false
      return
    }
    tap(token, i)
  }

  // unique chosen words, in reading order
  const chosenWords = []
  for (const i of [...chosen].sort((a, b) => a - b)) {
    const tok = tokens[i]
    const key = difficultKey(tok.entry, tok.text)
    if (!chosenWords.some((c) => c.key === key)) chosenWords.push({ key, tok })
  }

  const saveChosen = () => {
    dispatch(setDifficult({ id: profile._id, keys: chosenWords.map((c) => c.key), on: true }))
    setShowChosen(true)
    // read them out one by one: English, then Hindi
    speak(
      chosenWords.flatMap(({ tok }) => {
        const info = tok.entry?.word || tok.entry?.gloss
        return [
          { text: info?.en || tok.text, lang: 'en-IN' },
          ...(info ? [{ text: info.hi.replace(/\(.*?\)/g, ''), lang: 'hi-IN' }] : []),
        ]
      }),
    )
  }

  const done = () => {
    readAlong.stop()
    praise()
  }

  const goNext = () => {
    if (nextLesson) nav(go({ screen, params: { lesson: nextLesson.id } }))
    else nav(go({ screen }))
  }

  return (
    <section className="screen narrow">
      <BackButton screen={screen} params={isBook ? { book: story.bookId } : { category: story.category }} />

      <div className="reading-head" style={{ '--c': info.color }}>
        <span className="reading-badge">
          {info.icon} {t('lesson')} {position + 1}/{list.length} {isDone && '· ✅'}
        </span>
        <h1>{bi(story.titleHi, story.titleEn)}</h1>
        {story.credit && <p className="muted story-credit">— {story.credit}</p>}
        <p className="muted">👆 {pickMode ? t('pickModeOn') : t('tapWordHint')}</p>
      </div>

      <div className="pick-toggle">
        <button
          className={`btn ${pickMode ? 'btn-primary' : 'btn-light'}`}
          onClick={() => {
            setPickMode(!pickMode)
            setShowChosen(false)
          }}
        >
          ✋ {t('pickMode')}
        </button>
        {pickMode && chosen.length > 0 && (
          <button className="btn btn-sound hi" onClick={saveChosen}>
            ⭐ {t('pickDone')} ({chosenWords.length})
          </button>
        )}
      </div>

      <div className="read-along">
        {readAlong.supported ? (
          <>
            <button
              className={`btn big ${readAlong.listening ? 'btn-mic-on' : 'btn-mic'}`}
              onClick={() => {
                if (readAlong.listening) readAlong.stop()
                else {
                  readAloud.stop()
                  readAlong.start()
                }
              }}
            >
              {readAlong.listening ? <>⏹️ {t('micStop')}</> : <>🎤 {t('micStart')}</>}
            </button>
            {(readAlong.listening || readAlong.readCount > 0) && (
              <div className="read-progress">
                <span className="read-count">
                  ✅ {readAlong.readCount}/{readAlong.total}
                </span>
                <div className="progress">
                  <div className="progress-fill" style={{ width: `${(readAlong.readCount / readAlong.total) * 100}%`, background: 'var(--good)' }} />
                </div>
                {readAlong.listening && <span className="mic-live">🔴 {t('micListening')}</span>}
              </div>
            )}
            {readAlong.listening && <p className="muted read-hint">{t('micHint')}</p>}
            {readAlong.error === 'mic' && <p className="error-text">{t('micBlocked')}</p>}
            {readAlong.error === 'https' && <p className="error-text">{t('micHttps')}</p>}
            {readAlong.error === 'network' && <p className="error-text">{t('micNetwork')}</p>}
            {readAlong.error === 'nomic' && <p className="error-text">{t('micNone')}</p>}
            {readAlong.error === 'other' && <p className="error-text">{t('micError')}</p>}
          </>
        ) : (
          <p className="muted">{t('micUnsupported')}</p>
        )}
      </div>

      <article className={`story card ${pickMode ? 'picking' : ''} ${readAlong.listening ? 'listening' : ''}`} lang="en">
        <div className="story-actions top">
          <button
            className={`btn btn-sound ${readAloud.speaking ? 'speaking' : ''}`}
            onClick={() => {
              if (!readAloud.speaking) readAlong.stop()
              readAloud.toggle()
            }}
          >
            {readAloud.speaking ? <>⏹️ {t('readAloudStop')}</> : <>🔊 {t('readAloud')}</>}
          </button>
          <button
            className="btn btn-sound hi"
            onClick={() => {
              setShowHi(!showHi)
              if (!showHi) speakHi(story.hi)
            }}
          >
            {showHi ? '🙈' : '👀'} {t(showHi ? 'hideHindi' : 'showHindi')}
          </button>
        </div>
        <p className="story-text">
          {tokens.map((tok, i) =>
            tok.type === 'gap' ? (
              <span key={i}>{tok.text}</span>
            ) : (
              <button
                key={i}
                className={`rw ${tok.entry?.word ? 'rw-key' : ''} ${tok.entry ? '' : 'rw-unknown'} ${
                  chosen.includes(i) ? 'rw-chosen' : ''
                } ${readAlong.tokenState[i] === 'read' ? 'rw-read' : ''} ${readAlong.tokenState[i] === 'next' ? 'rw-next' : ''} ${
                  readAloud.current === i ? 'rw-speaking' : ''
                }`}
                onPointerDown={() => pressStart(tok)}
                onPointerUp={pressEnd}
                onPointerLeave={pressEnd}
                onPointerCancel={pressEnd}
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => wordClick(tok, i)}
              >
                {tok.text}
              </button>
            ),
          )}
        </p>

        {showHi && (
          <p className="story-hi pop-in" lang="hi">
            {story.hi}
          </p>
        )}

      </article>

      {showChosen && chosenWords.length > 0 && (
        <div className="card pop-in">
          <h3>⭐ {t('chosenWords')}</h3>
          <div className="dw-list">
            {chosenWords.map(({ key, tok }) => {
              const w = tok.entry?.word
              const g = tok.entry?.gloss
              const en = w?.en || g?.en || tok.text.toLowerCase()
              return (
                <div key={key} className="dw">
                  {w && <WordImage word={w} size="sm" />}
                  <div className="dw-text">
                    <b className="dw-en">{en}</b>
                    {(w?.say || g?.say) && (
                      <span className="dw-say">
                        {t('sayItLike')}: {w?.say || g?.say}
                      </span>
                    )}
                    {(w || g) && <span className="dw-hi">{w?.hi || g?.hi}</span>}
                  </div>
                  <button className="icon-btn" onClick={() => speakEn(en)} aria-label="English">
                    🔊
                  </button>
                </div>
              )
            })}
          </div>
          <button className="link-btn" onClick={() => nav(go({ screen: 'words' }))}>
            ⭐ {t('myWords')} →
          </button>
        </div>
      )}

      {missedHere.length > 0 && !readAlong.listening && (
        <div className="card missed-card pop-in">
          <h3>🎤 {t('missedTitle')}</h3>
          <p className="muted">{t('missedHint')}</p>
          <div className="missed-words">
            {missedHere.map(({ key, tok }) => (
              <button key={key} className="missed-word" onClick={() => speakEn(tok.text)}>
                {tok.text} 🔊
              </button>
            ))}
          </div>
          <button
            className="btn btn-mic big"
            onClick={() =>
              nav(
                isBook
                  ? go({ screen: 'bookActivity', params: { lesson: story.id, activity: 'sayit', words: 'missed' } })
                  : go({ screen: 'activity', params: { category: 'missed', activity: 'sayit' } }),
              )
            }
          >
            🎤 {t('practiseReading')}
          </button>
        </div>
      )}

      {isBook && (
        <div className="card book-practice">
          <h3>🎮 {t('practiseWords')}</h3>
          <p className="muted">{practiceMine >= 4 ? t('practiseMineHint', { n: practiceMine }) : t('practiseAllHint')}</p>
          <div className="activity-grid">
            {BOOK_GAMES.map((id) => {
              const a = activityById(id)
              return (
                <button
                  key={id}
                  className="activity-card"
                  style={{ '--c': a.color }}
                  onClick={() =>
                    nav(go({ screen: 'bookActivity', params: { lesson: story.id, activity: id, words: practiceMine >= 4 ? 'mine' : 'all' } }))
                  }
                >
                  <span className="activity-icon">{a.icon}</span>
                  <span className="activity-name">{bi(a.hi, a.en)}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {celebrate ? (
        <div className="card center celebrate pop-in">
          <Confetti />
          <div className="result-face">🏆</div>
          <h2>{t('readWell')}</h2>
          {readAlong.readCount > 0 && <p className="result-score">{t('wordsReadAloud', { n: readAlong.readCount, total: readAlong.total })}</p>}
          <div className="lessons-actions center-actions">
            <button className="btn btn-primary big" onClick={goNext}>
              {nextLesson ? <>▶ {t('nextLesson')}</> : <>📚 {t('allLessons')}</>}
            </button>
            <button
              className="btn btn-light big"
              onClick={() => {
                setCelebrate(false)
                readAlong.reset()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              🔁 {t('readAgain')}
            </button>
          </div>
        </div>
      ) : (
        <button className="btn btn-primary big done-btn" onClick={done}>
          ✅ {t('finishLesson')}
        </button>
      )}

      <div className="learn-nav">
        <button
          className="btn btn-light big"
          disabled={!prevLesson}
          onClick={() => nav(go({ screen, params: { lesson: prevLesson.id } }))}
        >
          ◀ {t('prev')}
        </button>
        <button
          className="btn btn-light big"
          disabled={!nextLesson}
          onClick={() => nav(go({ screen, params: { lesson: nextLesson.id } }))}
        >
          {t('next')} ▶
        </button>
      </div>

      {picked && <WordSheet text={picked.text} entry={picked.entry} onClose={() => setPicked(null)} />}
    </section>
  )
}

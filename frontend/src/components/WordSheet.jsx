import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveWord, selectCurrentProfile, setDifficult } from '../store/profileSlice'
import { useT } from '../useT'
import WordImage from './WordImage'
import { difficultKey } from '../utils/reading'
import { speak, speakEn, speakHi } from '../utils/speech'

// Bottom sheet that explains a tapped word: picture, pronunciation, Hindi meaning, voice,
// and a form to keep it in "My words" with a meaning and the kid's own sentence
// `silent`: the sound was already played by the tap that opened it
export default function WordSheet({ text, entry, onClose, silent = false }) {
  const dispatch = useDispatch()
  const profile = useSelector(selectCurrentProfile)
  const { t } = useT()
  const word = entry?.word
  const info = word || entry?.gloss
  const en = info?.en || text.toLowerCase()
  const key = difficultKey(entry, text)
  const saved = profile?.difficult?.includes(key)
  const note = profile?.wordNotes?.find((n) => n.key === key)
  const [meaning, setMeaning] = useState(note?.hi || info?.hi || '')
  const [sentence, setSentence] = useState(note?.sentence || '')
  const [justSaved, setJustSaved] = useState(false)
  const changed = !saved || meaning.trim() !== (note?.hi ?? info?.hi ?? '') || sentence.trim() !== (note?.sentence || '')

  const save = () => {
    dispatch(saveWord({ id: profile._id, key, en, hi: meaning.trim(), sentence: sentence.trim() }))
    setJustSaved(true)
  }

  useEffect(() => {
    if (silent) return
    const parts = [{ text: en, lang: 'en-IN' }]
    if (info) parts.push({ text: info.hi.replace(/\(.*?\)/g, ''), lang: 'hi-IN' })
    speak(parts)
  }, [en, info, silent])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet pop-in" role="dialog" aria-label={en} onClick={(e) => e.stopPropagation()}>
        <button className="sheet-close" onClick={onClose} aria-label={t('close')}>
          ✕
        </button>
        {word && <WordImage word={word} size="lg" />}
        <div className="sheet-en">{en}</div>
        {info?.say && (
          <div className="flash-say">
            {t('sayItLike')}: <b>{info.say}</b>
          </div>
        )}
        {info ? <div className="sheet-hi">{info.hi}</div> : <div className="muted">{t('noMeaning')}</div>}
        {note?.sentence && <div className="sheet-sentence">✍️ {note.sentence}</div>}
        <div className="flash-sounds">
          <button className="btn btn-sound" onClick={() => speakEn(en)}>
            🔊 {t('english')}
          </button>
          <button className="btn btn-sound" onClick={() => speak([{ text: en, lang: 'en-IN', rate: 0.45 }])}>
            🐢 {t('sayItSlowly')}
          </button>
          {info && (
            <button className="btn btn-sound hi" onClick={() => speakHi(info.hi)}>
              🔊 {t('hindi')}
            </button>
          )}
        </div>
        {profile && (
          <div className="word-note">
            <h3 className="word-note-title">⭐ {t(saved ? 'inDifficult' : 'addDifficult')}</h3>
            <label className="word-note-label">
              {t('noteMeaning')}
              <input className="text-input" value={meaning} maxLength={200} onChange={(e) => setMeaning(e.target.value)} placeholder={t('noteMeaningHint')} />
            </label>
            <label className="word-note-label">
              {t('noteSentence')}
              <textarea
                className="text-input"
                rows={2}
                value={sentence}
                maxLength={300}
                onChange={(e) => setSentence(e.target.value)}
                placeholder={t('noteSentenceHint', { word: en })}
              />
            </label>
            <div className="word-note-actions">
              <button className="btn btn-primary save-word" onClick={save} disabled={!changed}>
                {justSaved && !changed ? <>✅ {t('noteSaved')}</> : <>💾 {t(saved ? 'noteUpdate' : 'addDifficult')}</>}
              </button>
              {sentence.trim() && (
                <button className="btn btn-sound" onClick={() => speakEn(sentence)}>
                  🔊 {t('noteHear')}
                </button>
              )}
              {saved && (
                <button className="btn btn-light" onClick={() => dispatch(setDifficult({ id: profile._id, key, on: false }))}>
                  ✕ {t('remove')}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

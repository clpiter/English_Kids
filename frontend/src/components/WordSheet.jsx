import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentProfile, setDifficult } from '../store/profileSlice'
import { useT } from '../useT'
import WordImage from './WordImage'
import { difficultKey } from '../utils/reading'
import { speak, speakEn, speakHi } from '../utils/speech'

// Bottom sheet that explains a tapped word: picture, pronunciation, Hindi meaning, voice,
// and a button to keep it in "My words"
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
          <button
            className={`btn ${saved ? 'btn-light' : 'btn-primary'} save-word`}
            onClick={() => dispatch(setDifficult({ id: profile._id, key, on: !saved }))}
          >
            {saved ? <>✅ {t('inDifficult')}</> : <>⭐ {t('addDifficult')}</>}
          </button>
        )}
      </div>
    </div>
  )
}

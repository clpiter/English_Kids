import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProfile, selectProfile, updateProfile } from '../store/profileSlice'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import { VOICE, useAnnounce } from '../utils/voice'

const AVATARS = ['🦁', '🐼', '🐯', '🐰', '🦊', '🐨', '🐸', '🐵', '🦄', '🐧', '🐙', '🦖', '🐶', '🐱', '🐻', '🦋']
const COLORS = ['#ff8a65', '#f06292', '#ba68c8', '#7986cb', '#4fc3f7', '#4db6ac', '#81c784', '#ffd54f']
const AGES = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function ProfileForm({ id }) {
  const dispatch = useDispatch()
  const nav = useNav()
  const existing = useSelector((s) => s.profiles.list.find((p) => p._id === id))
  const { t, ts } = useT()

  const [name, setName] = useState(existing?.name || '')
  const [age, setAge] = useState(existing?.age || 6)
  const [avatar, setAvatar] = useState(existing?.avatar || AVATARS[0])
  const [color, setColor] = useState(existing?.color || COLORS[0])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  useAnnounce(VOICE.profileForm)

  const submit = async (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setSaving(true)
    setError(null)
    try {
      const data = { name: name.trim(), age, avatar, color }
      if (existing) {
        await dispatch(updateProfile({ id, ...data })).unwrap()
        nav(go({ screen: 'profiles' }))
      } else {
        const created = await dispatch(createProfile(data)).unwrap()
        dispatch(selectProfile(created._id))
        nav(go({ screen: 'home' }))
      }
    } catch (err) {
      setError(err.message)
      setSaving(false)
    }
  }

  return (
    <section className="screen narrow">
      <form className="card form" onSubmit={submit}>
        <div className="form-preview" style={{ background: color }}>
          {avatar}
        </div>
        <h2 className="center">{existing ? t('editKid') : t('newKid')}</h2>

        <label className="field-label" htmlFor="kid-name">
          {t('yourName')}
        </label>
        <input
          id="kid-name"
          className="text-input"
          value={name}
          maxLength={30}
          placeholder={ts('namePlaceholder')}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />

        <div className="field-label">{t('age')}</div>
        <div className="chip-row">
          {AGES.map((a) => (
            <button type="button" key={a} className={`chip ${age === a ? 'active' : ''}`} onClick={() => setAge(a)}>
              {a}
            </button>
          ))}
        </div>

        <div className="field-label">{t('pickAvatar')}</div>
        <div className="avatar-grid">
          {AVATARS.map((a) => (
            <button
              type="button"
              key={a}
              className={`avatar-option ${avatar === a ? 'active' : ''}`}
              onClick={() => setAvatar(a)}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="field-label">{t('pickColor')}</div>
        <div className="chip-row">
          {COLORS.map((c) => (
            <button
              type="button"
              key={c}
              aria-label={c}
              className={`swatch ${color === c ? 'active' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>

        {error && <p className="error-text">{error}</p>}

        <div className="form-buttons">
          <button type="button" className="btn btn-light" onClick={() => nav(go({ screen: 'profiles' }))}>
            {t('cancel')}
          </button>
          <button type="submit" className="btn btn-primary" disabled={!name.trim() || saving}>
            {t('save')}
          </button>
        </div>
      </form>
    </section>
  )
}

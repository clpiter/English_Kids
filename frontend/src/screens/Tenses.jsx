import { useState } from 'react'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import { TENSES, TIMES } from '../data/tenses'
import { sentence } from '../utils/tense'
import { TENSE_ACTIVITIES } from '../data/tenseActivities'
import { speakEn } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'
import BackButton from '../components/BackButton'

const SUBJECTS = [
  { s: 'I', p: 'i', hi: 'मैं' },
  { s: 'You', p: 'pl', hi: 'तुम' },
  { s: 'He', p: '3', hi: 'वह (लड़का)' },
  { s: 'She', p: '3', hi: 'वह (लड़की)' },
  { s: 'We', p: 'pl', hi: 'हम' },
  { s: 'They', p: 'pl', hi: 'वे' },
]
const VERBS = [
  ['play', 'खेलना', 'cricket'],
  ['eat', 'खाना', 'an apple'],
  ['go', 'जाना', 'to school'],
  ['read', 'पढ़ना', 'a book'],
  ['write', 'लिखना', 'a letter'],
  ['drink', 'पीना', 'water'],
  ['sing', 'गाना', 'a song'],
  ['watch', 'देखना', 'TV'],
  ['help', 'मदद करना', 'my mother'],
  ['study', 'पढ़ाई करना', 'English'],
]
const ASPECTS = [
  { id: 'simple', en: 'Simple', hi: 'सामान्य' },
  { id: 'continuous', en: 'Continuous', hi: 'अपूर्ण' },
  { id: 'perfect', en: 'Perfect', hi: 'पूर्ण' },
  { id: 'perfect-continuous', en: 'Perfect Continuous', hi: 'पूर्ण अपूर्ण' },
]
const FORMS = [
  { id: 'aff', icon: '✅', key: 'tenseAff' },
  { id: 'neg', icon: '❌', key: 'tenseNeg' },
  { id: 'q', icon: '❓', key: 'tenseQ' },
]

// The "Tenses" (काल) tab: the 12 tenses on a time line, a sentence maker and a mixed quiz (/tense)
export default function Tenses({ profile }) {
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.tenses)
  const done = new Set(profile.lessonsDone || [])

  // sentence maker
  const [subj, setSubj] = useState(3)
  const [verb, setVerb] = useState(0)
  const [time, setTime] = useState('present')
  const [aspect, setAspect] = useState('simple')
  const [form, setForm] = useState('aff')
  const tenseId = `${time}-${aspect}`
  const made = sentence({ ...SUBJECTS[subj], v: VERBS[verb][0], rest: VERBS[verb][2] }, tenseId, form)
  const madeTense = TENSES.find((x) => x.id === tenseId)

  return (
    <section className="screen">
      <BackButton screen="grammar" />
      <div className="card lessons-head tense-head">
        <h1>⏰ {t('tensesTitle')}</h1>
        <p className="muted">{t('tensesIntro')}</p>
        <div className="time-line" aria-hidden="true">
          {TIMES.map((tm) => (
            <span key={tm.id} className="time-dot" style={{ '--c': tm.color }}>
              {tm.icon} {bi(tm.hi, tm.en)}
            </span>
          ))}
        </div>
      </div>

      {TIMES.map((tm) => (
        <div key={tm.id} className="lesson-group">
          <h2 className="section-title">
            {tm.icon} {bi(tm.hi, tm.en)}
          </h2>
          <div className="lesson-grid">
            {TENSES.filter((x) => x.time === tm.id).map((x) => (
              <button
                key={x.id}
                className={`lesson-card tense-card ${done.has(`tense-${x.id}`) ? 'done' : ''}`}
                style={{ '--c': tm.color }}
                onClick={() => nav(go({ screen: 'tense', params: { tense: x.id } }))}
              >
                <span className="lesson-title">{bi(x.hi, x.en)}</span>
                <span className="tense-sign" lang="hi">{x.hindiSign}</span>
                <span className="lesson-preview">{sentence(x.examples[1], x.id)}</span>
                <span className="tense-hi preview-hi" lang="hi">
                  {x.examples[1].hi}
                </span>
                {done.has(`tense-${x.id}`) && (
                  <span className="lesson-meta">
                    <span className="lesson-done">✅ {t('lessonDone')}</span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="card">
        <h2>🎮 {t('tenseMixQuiz')}</h2>
        <p className="muted">{t('tenseMixHint')}</p>
        <div className="activity-grid tense-games">
          {TENSE_ACTIVITIES.map((a) => (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              onClick={() => nav(go({ screen: 'tensePractice', params: { tense: 'mix', mode: a.id } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="card tense-maker">
        <h2>🛠️ {t('tenseMaker')}</h2>
        <p className="muted">{t('tenseMakerIntro')}</p>
        <div className="maker-row">
          {SUBJECTS.map((x, i) => (
            <button key={x.s} className={`chip ${subj === i ? 'on' : ''}`} onClick={() => setSubj(i)}>
              {x.s} <small>{x.hi}</small>
            </button>
          ))}
        </div>
        <div className="maker-row">
          {VERBS.map(([v, hi], i) => (
            <button key={v} className={`chip ${verb === i ? 'on' : ''}`} onClick={() => setVerb(i)}>
              {v} <small>{hi}</small>
            </button>
          ))}
        </div>
        <div className="maker-row">
          {TIMES.map((tm) => (
            <button key={tm.id} className={`chip ${time === tm.id ? 'on' : ''}`} style={{ '--c': tm.color }} onClick={() => setTime(tm.id)}>
              {tm.icon} {bi(tm.hi, tm.en)}
            </button>
          ))}
        </div>
        <div className="maker-row">
          {ASPECTS.map((a) => (
            <button key={a.id} className={`chip ${aspect === a.id ? 'on' : ''}`} onClick={() => setAspect(a.id)}>
              {bi(a.hi, a.en)}
            </button>
          ))}
        </div>
        <div className="maker-row">
          {FORMS.map((f) => (
            <button key={f.id} className={`chip ${form === f.id ? 'on' : ''}`} onClick={() => setForm(f.id)}>
              {f.icon} {t(f.key)}
            </button>
          ))}
        </div>
        <button className="maker-result pop-in" key={made} onClick={() => speakEn(made)}>
          {made} <span className="small-speaker">🔊</span>
        </button>
        {madeTense && <p className="muted center">{bi(madeTense.hi, madeTense.en)} · {madeTense.structure[form]}</p>}
      </div>
    </section>
  )
}

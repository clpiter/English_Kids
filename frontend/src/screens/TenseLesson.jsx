import { useState } from 'react'
import { go, useNav } from '../nav'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { TENSES, TIMES, tenseById } from '../data/tenses'
import { sentence } from '../utils/tense'
import { TENSE_ACTIVITIES } from '../data/tenseActivities'
import { speak, speakEn } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

const FORMS = [
  { id: 'aff', icon: '✅', key: 'tenseAff' },
  { id: 'neg', icon: '❌', key: 'tenseNeg' },
  { id: 'q', icon: '❓', key: 'tenseQ' },
]

// One tense (/tense/:tense): when to use it, its structure, examples with Hindi, then practice
export default function TenseLesson({ params }) {
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.tenseLesson)
  const tense = tenseById(params.tense)
  const [forms, setForms] = useState({}) // example index -> 'aff' | 'neg' | 'q'

  if (!tense) return <p className="center muted">{t('notEnough')}</p>
  const time = TIMES.find((x) => x.id === tense.time)
  const index = TENSES.indexOf(tense)
  const prev = TENSES[index - 1]
  const next = TENSES[index + 1]
  const first = tense.examples[0]

  return (
    <section className="screen narrow">
      <BackButton screen="tenses" />
      <div className="card tense-lesson-head" style={{ '--c': time.color }}>
        <span className="lesson-num">
          {time.icon} {bi(time.hi, time.en)}
        </span>
        <h1>{bi(tense.hi, tense.en)}</h1>
        <p className="tense-use">
          <b>{t('tenseWhen')}:</b> {bi(tense.use.hi, tense.use.en)}
        </p>
        <p className="tense-use" lang="hi">
          <b>{t('tenseHindiSign')}:</b> {tense.hindiSign}
        </p>
      </div>

      <div className="card">
        <h2>🧱 {t('tenseStructure')}</h2>
        <div className="structure-table">
          {FORMS.map((f) => (
            <div key={f.id} className={`structure-row s-${f.id}`}>
              <span className="structure-kind">
                {f.icon} {t(f.key)}
              </span>
              <code className="structure-formula">{tense.structure[f.id]}</code>
              <button className="structure-example" onClick={() => speakEn(sentence(first, tense.id, f.id))}>
                {sentence(first, tense.id, f.id)} 🔊
              </button>
              <span className="tense-hi" lang="hi">
                {f.id === 'aff' ? first.hi : tense.formsHi[f.id]}
              </span>
            </div>
          ))}
        </div>
        <h3>🔑 {t('tenseSignals')}</h3>
        <div className="word-chips">
          {tense.signals.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>📝 {t('tenseExamples')}</h2>
        <p className="muted">{t('tenseExamplesHint')}</p>
        <div className="tense-examples">
          {tense.examples.map((ex, i) => {
            const form = forms[i] || 'aff'
            const en = sentence(ex, tense.id, form)
            return (
              <div key={i} className="tense-example">
                <button
                  className="tense-en"
                  onClick={() => (form === 'aff' ? speak([{ text: en, lang: 'en-IN' }, { text: ex.hi, lang: 'hi-IN' }]) : speakEn(en))}
                >
                  {en} <span className="small-speaker">🔊</span>
                </button>
                {form === 'aff' && (
                  <span className="tense-hi" lang="hi">
                    {ex.hi}
                  </span>
                )}
                <div className="tense-forms">
                  {FORMS.map((f) => (
                    <button
                      key={f.id}
                      className={`chip ${form === f.id ? 'on' : ''}`}
                      onClick={() => {
                        setForms({ ...forms, [i]: f.id })
                        speakEn(sentence(ex, tense.id, f.id))
                      }}
                    >
                      {f.icon} {t(f.key)}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="card">
        <h2>🎮 {t('tensePractice')}</h2>
        <p className="muted">{t('tenseGamesHint')}</p>
        <div className="activity-grid tense-games">
          {TENSE_ACTIVITIES.filter((a) => !a.mixOnly).map((a) => (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              onClick={() => nav(go({ screen: 'tensePractice', params: { tense: tense.id, mode: a.id } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="story-nav">
        {prev ? (
          <button className="btn btn-light" onClick={() => nav(go({ screen: 'tense', params: { tense: prev.id } }))}>
            ◀ {bi(prev.hi, prev.en)}
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button className="btn btn-light" onClick={() => nav(go({ screen: 'tense', params: { tense: next.id } }))}>
            {bi(next.hi, next.en)} ▶
          </button>
        )}
      </div>
    </section>
  )
}

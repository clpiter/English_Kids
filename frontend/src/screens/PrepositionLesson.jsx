import { go, useNav } from '../nav'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { PREPOSITIONS, PREP_GROUPS, prepById } from '../data/prepositions'
import { PREP_ACTIVITIES } from '../data/structureActivities'
import { speak, speakEn } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

// One preposition (/preposition/:prep): meaning, when to use it, 5 examples with Hindi, games
export default function PrepositionLesson({ params }) {
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.tenseLesson)
  const p = prepById(params.prep)
  if (!p) return <p className="center muted">{t('notEnough')}</p>
  const group = PREP_GROUPS.find((g) => g.id === p.group)
  const index = PREPOSITIONS.indexOf(p)
  const prev = PREPOSITIONS[index - 1]
  const next = PREPOSITIONS[index + 1]

  return (
    <section className="screen narrow">
      <BackButton screen="grammar" />
      <div className="card tense-lesson-head prep-head">
        <span className="lesson-num">
          {index + 1}/{PREPOSITIONS.length} · {group.icon} {bi(group.hi, group.en)}
        </span>
        <button className="prep-word" onClick={() => speak([{ text: p.word, lang: 'en-IN' }, { text: p.hi, lang: 'hi-IN' }])}>
          {p.word} <span className="small-speaker">🔊</span>
        </button>
        <div className="prep-meaning" lang="hi">
          {p.hi}
        </div>
        <p className="tense-use">
          <b>{t('tenseWhen')}:</b> {bi(p.use.hi, p.use.en)}
        </p>
        <p className="tense-use">
          ⚠️ <b>{t('prepConfused')}:</b> {p.wrong.join(', ')}
        </p>
      </div>

      <div className="card">
        <h2>📝 {t('tenseExamples')}</h2>
        <p className="muted">{t('gramExamplesHint')}</p>
        <div className="tense-examples">
          {p.examples.map((ex, i) => {
            const en = `${ex.a} ${p.word} ${ex.b}`
            return (
              <div key={i} className="tense-example">
                <button className="tense-en" onClick={() => speak([{ text: en, lang: 'en-IN' }, { text: ex.hi, lang: 'hi-IN' }])}>
                  {ex.a} <mark className="key-part">{p.word}</mark> {ex.b} <span className="small-speaker">🔊</span>
                </button>
                <span className="tense-hi" lang="hi">
                  {ex.hi}
                </span>
              </div>
            )
          })}
        </div>
        <button className="btn btn-sound" onClick={() => speakEn(p.examples.map((ex) => `${ex.a} ${p.word} ${ex.b}`).join(' '))}>
          🔊 {t('readAloud')}
        </button>
      </div>

      <div className="card">
        <h2>🎮 {t('prepGames')}</h2>
        <p className="muted">{t('tenseGamesHint')}</p>
        <div className="activity-grid tense-games">
          {PREP_ACTIVITIES.filter((a) => !a.mixOnly).map((a) => (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              onClick={() => nav(go({ screen: 'prepPractice', params: { prep: p.id, mode: a.id } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="story-nav">
        {prev ? (
          <button className="btn btn-light" onClick={() => nav(go({ screen: 'preposition', params: { prep: prev.id } }))}>
            ◀ {prev.word}
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button className="btn btn-light" onClick={() => nav(go({ screen: 'preposition', params: { prep: next.id } }))}>
            {next.word} ▶
          </button>
        )}
      </div>
    </section>
  )
}

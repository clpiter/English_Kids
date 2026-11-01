import { go, useNav } from '../nav'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { LEVELS, STRUCTURES, structureById } from '../data/structures'
import { STRUCTURE_ACTIVITIES } from '../data/structureActivities'
import { keyOf, sentenceOf } from '../utils/grammar'
import { speak, speakEn } from '../utils/speech'
import { VOICE, useAnnounce } from '../utils/voice'

// One sentence structure (/grammar/:structure): when to use it, the formula, examples with Hindi, games
export default function StructureLesson({ params }) {
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.tenseLesson)
  const st = structureById(params.structure)
  if (!st) return <p className="center muted">{t('notEnough')}</p>
  const level = LEVELS.find((l) => l.id === st.level)
  const index = STRUCTURES.indexOf(st)
  const prev = STRUCTURES[index - 1]
  const next = STRUCTURES[index + 1]
  const first = sentenceOf(st, st.examples[0])

  return (
    <section className="screen narrow">
      <BackButton screen="grammar" />
      <div className="card tense-lesson-head" style={{ '--c': level.color }}>
        <span className="lesson-num">
          {index + 1}/{STRUCTURES.length} · {level.icon} {bi(level.hi, level.en)}
        </span>
        <h1 className="structure-formula-title">{st.formula}</h1>
        <p className="tense-use">
          <b>{t('tenseWhen')}:</b> {bi(st.use.hi, st.use.en)}
        </p>
        <p className="tense-use" lang="hi">
          <b>{t('tenseHindiSign')}:</b> {st.sign}
        </p>
        <p className="tense-use">💡 {bi(st.note.hi, st.note.en)}</p>
      </div>

      <div className="card">
        <h2>🧱 {t('tenseStructure')}</h2>
        <div className="structure-table">
          {[
            ['aff', '✅', 'tenseAff', st.formula, first, st.examples[0].hi],
            ['neg', '❌', 'tenseNeg', st.neg[0], st.neg[1], st.neg[2]],
            ['q', '❓', 'tenseQ', st.q[0], st.q[1], st.q[2]],
          ].map(([kind, icon, label, formula, example, hindi]) => (
            <div key={kind} className={`structure-row s-${kind}`}>
              <span className="structure-kind">
                {icon} {t(label)}
              </span>
              <code className="structure-formula">{formula}</code>
              <button className="structure-example" onClick={() => speakEn(example)}>
                {example} 🔊
              </button>
              <span className="tense-hi" lang="hi">
                {hindi}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>📝 {t('tenseExamples')}</h2>
        <p className="muted">{t('gramExamplesHint')}</p>
        <div className="tense-examples">
          {st.examples.map((ex, i) => {
            const key = keyOf(st, ex)
            const en = sentenceOf(st, ex)
            return (
              <div key={i} className="tense-example">
                <button
                  className="tense-en"
                  onClick={() =>
                    speak([
                      { text: en, lang: 'en-IN' },
                      { text: ex.hi, lang: 'hi-IN' },
                    ])
                  }
                >
                  {ex.a} <mark className="key-part">{key}</mark> {ex.b} <span className="small-speaker">🔊</span>
                </button>
                <span className="tense-hi" lang="hi">
                  {ex.hi}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="card">
        <h2>🎮 {t('gramGames')}</h2>
        <p className="muted">{t('tenseGamesHint')}</p>
        <div className="activity-grid tense-games">
          {STRUCTURE_ACTIVITIES.filter((a) => !a.mixOnly).map((a) => (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              onClick={() => nav(go({ screen: 'structurePractice', params: { structure: st.id, mode: a.id } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="story-nav">
        {prev ? (
          <button className="btn btn-light" onClick={() => nav(go({ screen: 'structure', params: { structure: prev.id } }))}>
            ◀ {prev.formula}
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button className="btn btn-light" onClick={() => nav(go({ screen: 'structure', params: { structure: next.id } }))}>
            {next.formula} ▶
          </button>
        )}
      </div>
    </section>
  )
}

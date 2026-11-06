import { go, useNav } from '../nav'
import { useT } from '../useT'
import { LEVELS, STRUCTURES } from '../data/structures'
import { STRUCTURE_ACTIVITIES } from '../data/structureActivities'
import { TENSES, TIMES } from '../data/tenses'
import { PREPOSITIONS, PREP_GROUPS } from '../data/prepositions'
import { PREP_ACTIVITIES } from '../data/structureActivities'
import { sentenceOf } from '../utils/grammar'
import { sentence } from '../utils/tense'
import { VOICE, useAnnounce } from '../utils/voice'
import { speak } from '../utils/speech'
import { STRINGS } from '../strings'

// the preposition introduction is shown in Hindi only
const hiOnly = (key) => STRINGS[key].hi

// The "Grammar" (व्याकरण) tab (/grammar): the 12 tenses first, then sentence structures from easy to hard
export default function Grammar({ profile }) {
  const nav = useNav()
  const { t, bi } = useT()
  useAnnounce(VOICE.grammar)
  const done = new Set(profile.lessonsDone || [])
  const doneStructures = STRUCTURES.filter((s) => done.has(`gram-${s.id}`)).length
  const doneTenses = TENSES.filter((x) => done.has(`tense-${x.id}`)).length

  return (
    <section className="screen">
      <div className="card lessons-head tense-head">
        <h1>📐 {t('grammarTitle')}</h1>
        <p className="muted">{t('grammarIntro')}</p>
        <span className="muted">
          🧱 {doneStructures}/{STRUCTURES.length} · ⏰ {doneTenses}/{TENSES.length}
        </span>
      </div>

      {/* 1. tenses */}
      <div className="grammar-section gs-tense">
      <h2 className="grammar-part">⏰ {t('tensesTitle')}</h2>
      {TIMES.map((tm) => (
        <div key={tm.id} className="lesson-group">
          <h3 className="section-title">
            {tm.icon} {bi(tm.hi, tm.en)}
          </h3>
          <div className="lesson-grid">
            {TENSES.filter((x) => x.time === tm.id).map((x) => (
              <button
                key={x.id}
                className={`lesson-card tense-card ${done.has(`tense-${x.id}`) ? 'done' : ''}`}
                style={{ '--c': tm.color }}
                onClick={() => nav(go({ screen: 'tense', params: { tense: x.id } }))}
              >
                <span className="lesson-title">{bi(x.hi, x.en)}</span>
                <span className="tense-sign" lang="hi">
                  {x.hindiSign}
                </span>
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
      <button className="card tense-link" onClick={() => nav(go({ screen: 'tenses' }))}>
        <span className="tense-link-icon">🎮</span>
        <span>
          <b>{t('tenseMixQuiz')}</b>
          <span className="muted"> · {t('gramTensesHint')}</span>
        </span>
        <span className="tense-link-arrow">▶</span>
      </button>
      </div>

      {/* 2. sentence structures, easy to hard */}
      <h2 className="grammar-part">🧱 {t('gramStructures')}</h2>
      {LEVELS.map((lv) => {
        const list = STRUCTURES.filter((s) => s.level === lv.id)
        return (
          <div key={lv.id} className={`lesson-group grammar-section gs-${lv.id}`}>
            <h2 className="section-title">
              {lv.icon} {bi(lv.hi, lv.en)}
            </h2>
            <div className="lesson-grid">
              {list.map((s) => {
                const n = STRUCTURES.indexOf(s) + 1
                return (
                  <button
                    key={s.id}
                    className={`lesson-card tense-card ${done.has(`gram-${s.id}`) ? 'done' : ''}`}
                    style={{ '--c': lv.color }}
                    onClick={() => nav(go({ screen: 'structure', params: { structure: s.id } }))}
                  >
                    <span className="lesson-num">
                      {n}. {bi(lv.hi, lv.en)}
                    </span>
                    <span className="lesson-title structure-formula-title">{s.formula}</span>
                    <span className="tense-sign" lang="hi">
                      {s.sign}
                    </span>
                    <span className="lesson-preview">{sentenceOf(s, s.examples[0])}</span>
                    <span className="tense-hi preview-hi" lang="hi">
                      {s.examples[0].hi}
                    </span>
                    {done.has(`gram-${s.id}`) && (
                      <span className="lesson-meta">
                        <span className="lesson-done">✅ {t('lessonDone')}</span>
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="card">
        <h2>🎮 {t('gramAllGames')}</h2>
        <p className="muted">{t('gramAllGamesHint')}</p>
        <div className="activity-grid tense-games">
          {STRUCTURE_ACTIVITIES.map((a) => (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              onClick={() => nav(go({ screen: 'structurePractice', params: { structure: 'mix', mode: a.id } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
            </button>
          ))}
        </div>
      </div>
      {/* 3. prepositions */}
      <div className="grammar-section gs-prep">
        <h2 className="grammar-part">🧲 {t('prepTitle')}</h2>
        <div className="prep-intro">
          <h3 lang="hi">💡 {hiOnly('prepWhatTitle')}</h3>
          <p lang="hi">{hiOnly('prepWhat')}</p>
          <div className="prep-intro-examples">
            {[
              ['📍', 'The cat is', 'under', 'the table.', 'बिल्ली मेज़ के नीचे है।', 'prepWhere'],
              ['🕒', 'We play', 'after', 'school.', 'हम स्कूल के बाद खेलते हैं।', 'prepWhen'],
              ['➡️', 'She went', 'to', 'the market.', 'वह बाज़ार गई।', 'prepWhich'],
              ['🔗', 'I write', 'with', 'a pencil.', 'मैं पेंसिल से लिखता हूँ।', 'prepHow'],
            ].map(([icon, a, word, b, hi, label]) => (
              <button
                key={word}
                className="prep-intro-ex"
                onClick={() => speak([{ text: `${a} ${word} ${b}`, lang: 'en-IN' }, { text: hi, lang: 'hi-IN' }])}
              >
                <span className="prep-intro-label">
                  {icon} {hiOnly(label)}
                </span>
                <span>
                  {a} <mark className="key-part">{word}</mark> {b} 🔊
                </span>
                <span className="tense-hi" lang="hi">
                  {hi}
                </span>
              </button>
            ))}
          </div>
          <p className="prep-intro-tip" lang="hi">✏️ {hiOnly('prepTip')}</p>
        </div>
        <p className="gs-intro">{t('prepIntro')}</p>
        {PREP_GROUPS.map((g) => (
          <div key={g.id} className="lesson-group">
            <h3 className="section-title">
              {g.icon} {bi(g.hi, g.en)}
            </h3>
            <div className="lesson-grid prep-grid">
              {PREPOSITIONS.filter((p) => p.group === g.id).map((p) => (
                <button
                  key={p.id}
                  className={`lesson-card prep-card ${done.has(`prep-${p.id}`) ? 'done' : ''}`}
                  style={{ '--c': '#00838f' }}
                  onClick={() => nav(go({ screen: 'preposition', params: { prep: p.id } }))}
                >
                  <span className="prep-card-word">{p.word}</span>
                  <span className="tense-sign" lang="hi">
                    {p.hi}
                  </span>
                  <span className="lesson-preview">
                    {p.examples[0].a} <b>{p.word}</b> {p.examples[0].b}
                  </span>
                  {done.has(`prep-${p.id}`) && <span className="lesson-done">✅</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
        <h3 className="section-title">🎮 {t('prepAllGames')}</h3>
        <div className="activity-grid tense-games">
          {PREP_ACTIVITIES.map((a) => (
            <button
              key={a.id}
              className="activity-card"
              style={{ '--c': a.color }}
              onClick={() => nav(go({ screen: 'prepPractice', params: { prep: 'mix', mode: a.id } }))}
            >
              <span className="activity-icon">{a.icon}</span>
              <span className="activity-name">{bi(a.hi, a.en)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

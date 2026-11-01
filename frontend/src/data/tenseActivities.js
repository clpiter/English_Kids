// Tense activities. Each opens at /tense/:tense/practice?mode=<id> (tense = an id, or "mix" = all tenses).
// kinds: the question types it uses; mixOnly: needs several tenses (e.g. "which tense is this?")
export const TENSE_ACTIVITIES = [
  { id: 'quiz', icon: '🎯', en: 'Mixed Quiz', hi: 'मिलाजुला अभ्यास', color: '#ef6c00' },
  { id: 'verbtense', icon: '🧠', en: 'Use the Action Word', hi: 'क्रिया का सही रूप', color: '#26a69a', kinds: ['verbtense'] },
  { id: 'fill', icon: '✏️', en: 'Fill the Verb', hi: 'सही क्रिया भरो', color: '#43a047', kinds: ['fill'] },
  { id: 'type', icon: '⌨️', en: 'Write the Verb', hi: 'क्रिया लिखो', color: '#00897b', kinds: ['type'] },
  { id: 'hindi', icon: 'अ', en: 'Hindi to English', hi: 'हिंदी से अंग्रेज़ी', color: '#8e24aa', kinds: ['hindi'] },
  { id: 'listen', icon: '👂', en: 'Listen & Choose', hi: 'सुनो और चुनो', color: '#1e88e5', kinds: ['listen'] },
  { id: 'order', icon: '🧩', en: 'Make the Sentence', hi: 'वाक्य बनाओ', color: '#f4511e', kinds: ['order'] },
  { id: 'neg', icon: '❌', en: 'Make it Negative', hi: 'नकारात्मक बनाओ', color: '#e53935', kinds: ['neg'] },
  { id: 'q', icon: '❓', en: 'Make a Question', hi: 'प्रश्न बनाओ', color: '#3949ab', kinds: ['q'] },
  { id: 'truefalse', icon: '✅', en: 'Right or Wrong?', hi: 'सही या ग़लत?', color: '#5e35b1', kinds: ['truefalse'] },
  { id: 'mistake', icon: '🕵️', en: 'Spot the Mistake', hi: 'ग़लती पकड़ो', color: '#6d4c41', kinds: ['mistake'] },
  { id: 'match', icon: '🔗', en: 'Match the Pairs', hi: 'जोड़ी मिलाओ', color: '#d81b60', kinds: ['match'] },
  { id: 'which', icon: '🔍', en: 'Find the Tense', hi: 'काल पहचानो', color: '#00acc1', kinds: ['which'], mixOnly: true },
  { id: 'verbform', icon: '📸', en: 'Verb Forms V1-V2-V3', hi: 'क्रिया के रूप (V1-V2-V3)', color: '#ab47bc', kinds: ['verbform'], mixOnly: true },
  { id: 'time', icon: '⏱️', en: 'Past, Present or Future?', hi: 'भूत, वर्तमान या भविष्य?', color: '#7cb342', kinds: ['time'], mixOnly: true },
]

export const activityFor = (id) => TENSE_ACTIVITIES.find((a) => a.id === id) || TENSE_ACTIVITIES[0]

// mixed quiz: one of each kind
export const QUIZ_KINDS = {
  single: ['fill', 'verbtense', 'hindi', 'listen', 'truefalse', 'order', 'neg', 'mistake', 'q', 'type', 'match', 'verbtense'],
  mix: ['which', 'verbform', 'time', 'fill', 'verbtense', 'hindi', 'listen', 'truefalse', 'mistake', 'order', 'match', 'verbform'],
}

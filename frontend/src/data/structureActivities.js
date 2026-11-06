// Games for the sentence structures: /grammar/:structure/practice?mode=<id> (structure = an id or "mix")
export const STRUCTURE_ACTIVITIES = [
  { id: 'quiz', icon: '🎯', en: 'Mixed Quiz', hi: 'मिलाजुला अभ्यास', color: '#ef6c00' },
  { id: 'fill', icon: '✏️', en: 'Fill the Gap', hi: 'ख़ाली जगह भरो', color: '#43a047', kinds: ['fill'] },
  { id: 'type', icon: '⌨️', en: 'Write the Missing Words', hi: 'छूटे शब्द लिखो', color: '#00897b', kinds: ['type'] },
  { id: 'hindi', icon: 'अ', en: 'Hindi to English', hi: 'हिंदी से अंग्रेज़ी', color: '#8e24aa', kinds: ['hindi'] },
  { id: 'listen', icon: '👂', en: 'Listen & Choose', hi: 'सुनो और चुनो', color: '#1e88e5', kinds: ['listen'] },
  { id: 'order', icon: '🧩', en: 'Make the Sentence', hi: 'वाक्य बनाओ', color: '#f4511e', kinds: ['order'] },
  { id: 'truefalse', icon: '✅', en: 'Right or Wrong?', hi: 'सही या ग़लत?', color: '#5e35b1', kinds: ['truefalse'] },
  { id: 'mistake', icon: '🕵️', en: 'Spot the Mistake', hi: 'ग़लती पकड़ो', color: '#6d4c41', kinds: ['mistake'] },
  { id: 'match', icon: '🔗', en: 'Match the Pairs', hi: 'जोड़ी मिलाओ', color: '#d81b60', kinds: ['match'] },
  { id: 'which', icon: '🔍', en: 'Find the Structure', hi: 'ढाँचा पहचानो', color: '#00acc1', kinds: ['which'], mixOnly: true },
]

export const structureActivity = (id) => STRUCTURE_ACTIVITIES.find((a) => a.id === id) || STRUCTURE_ACTIVITIES[0]

export const STRUCTURE_QUIZ = {
  single: ['fill', 'hindi', 'listen', 'truefalse', 'order', 'mistake', 'type', 'match', 'fill', 'hindi'],
  mix: ['which', 'fill', 'hindi', 'truefalse', 'mistake', 'listen', 'order', 'which', 'match', 'fill'],
}

// Games for the prepositions: /preposition/:prep/practice?mode=<id> (prep = an id or "mix")
export const PREP_ACTIVITIES = [
  { id: 'quiz', icon: '🎯', en: 'Mixed Quiz', hi: 'मिलाजुला अभ्यास', color: '#ef6c00' },
  { id: 'fill', icon: '✏️', en: 'Fill the Preposition', hi: 'सही पूर्वसर्ग भरो', color: '#43a047', kinds: ['fill'] },
  { id: 'meaning', icon: 'अ', en: 'Hindi Meaning', hi: 'हिंदी मतलब', color: '#8e24aa', kinds: ['meaning'] },
  { id: 'type', icon: '⌨️', en: 'Write the Preposition', hi: 'पूर्वसर्ग लिखो', color: '#00897b', kinds: ['type'] },
  { id: 'hindi', icon: '🔤', en: 'Hindi to English', hi: 'हिंदी से अंग्रेज़ी', color: '#6a1b9a', kinds: ['hindi'] },
  { id: 'listen', icon: '👂', en: 'Listen & Choose', hi: 'सुनो और चुनो', color: '#1e88e5', kinds: ['listen'] },
  { id: 'order', icon: '🧩', en: 'Make the Sentence', hi: 'वाक्य बनाओ', color: '#f4511e', kinds: ['order'] },
  { id: 'truefalse', icon: '✅', en: 'Right or Wrong?', hi: 'सही या ग़लत?', color: '#5e35b1', kinds: ['truefalse'] },
  { id: 'mistake', icon: '🕵️', en: 'Spot the Mistake', hi: 'ग़लती पकड़ो', color: '#6d4c41', kinds: ['mistake'] },
  { id: 'match', icon: '🔗', en: 'Match the Pairs', hi: 'जोड़ी मिलाओ', color: '#d81b60', kinds: ['match'] },
  { id: 'which', icon: '🔍', en: 'Find the Preposition', hi: 'पूर्वसर्ग पहचानो', color: '#00acc1', kinds: ['which'], mixOnly: true },
]

export const prepActivity = (id) => PREP_ACTIVITIES.find((a) => a.id === id) || PREP_ACTIVITIES[0]

export const PREP_QUIZ = {
  single: ['fill', 'meaning', 'hindi', 'listen', 'truefalse', 'order', 'mistake', 'type', 'match', 'fill'],
  mix: ['which', 'fill', 'meaning', 'hindi', 'truefalse', 'mistake', 'listen', 'order', 'match', 'which'],
}

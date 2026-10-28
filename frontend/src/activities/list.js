// Game cards on a category screen. Each id has its own URL: /category/:category/play/:id
// and its component in registry.jsx
export const ACTIVITIES = [
  { id: 'sayit', icon: '🎤', en: 'Say the Word', hi: 'बोलकर बताओ', color: '#e91e63' },
  { id: 'picture', icon: '🖼️', en: 'Picture Quiz', hi: 'चित्र पहचानो', color: '#ff7043' },
  { id: 'listen', icon: '👂', en: 'Listen & Find', hi: 'सुनो और ढूँढो', color: '#42a5f5' },
  { id: 'meaning', icon: '💬', en: 'Word Meaning', hi: 'मतलब बताओ', color: '#66bb6a' },
  { id: 'hindi', icon: 'अ', en: 'Hindi to English', hi: 'हिंदी से अंग्रेज़ी', color: '#ab47bc' },
  { id: 'memory', icon: '🃏', en: 'Memory Match', hi: 'जोड़ी मिलाओ', color: '#ec407a' },
  { id: 'match', icon: '🔗', en: 'Match the Column', hi: 'सही जोड़ी मिलाओ', color: '#8d6e63' },
  { id: 'missing', icon: '🔡', en: 'Missing Letter', hi: 'छूटा अक्षर', color: '#26a69a' },
  { id: 'builder', icon: '🧩', en: 'Word Builder', hi: 'शब्द बनाओ', color: '#ffa726' },
  { id: 'yesno', icon: '✅', en: 'Yes or No', hi: 'सही या ग़लत', color: '#5c6bc0' },
]

export const activityById = (id) => ACTIVITIES.find((a) => a.id === id)

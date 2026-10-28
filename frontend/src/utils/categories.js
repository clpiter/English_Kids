const SPECIAL = {
  mix: { id: 'mix', icon: '🎲', en: 'Mix of all', hi: 'सब मिलाकर', color: '#7e57c2' },
  practice: { id: 'practice', icon: '💪', en: 'Practice', hi: 'अभ्यास', color: '#ef6c00' },
  difficult: { id: 'difficult', icon: '⭐', en: 'My words', hi: 'मेरे शब्द', color: '#f9a825' },
  missed: { id: 'missed', icon: '🎤', en: 'Reading practice', hi: 'पढ़ने का अभ्यास', color: '#e91e63' },
  mistakes: { id: 'mistakes', icon: '🎯', en: 'Fix my mistakes', hi: 'गलतियाँ सुधारो', color: '#e53935' },
}

export function categoryInfo(categories, id) {
  return SPECIAL[id] || categories.find((c) => c.id === id) || { id, icon: '📚', en: id, hi: id, color: '#90a4ae' }
}

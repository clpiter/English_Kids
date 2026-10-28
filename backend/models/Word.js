const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  en: { type: String, required: true },
  hi: { type: String, required: true },
  say: { type: String, default: '' },
  emoji: { type: String, required: true },
  image: { type: String, default: '' }, // real photo, see scripts/fetch-images.js
  category: { type: String, required: true, index: true },
  type: { type: String, enum: ['noun', 'verb', 'adjective', 'number'], default: 'noun' },
  sentenceEn: { type: String, default: '' },
  sentenceHi: { type: String, default: '' },
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model('Word', wordSchema);

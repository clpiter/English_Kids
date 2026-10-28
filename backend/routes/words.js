const express = require('express');
const Word = require('../models/Word');
const { categories, words: wordList } = require('../data/words');
const { stories } = require('../data/stories');
const { glossary } = require('../data/glossary');
const { loadImageCredits } = require('../data/imageCredits');

const router = express.Router();

// GET /api/words -> { categories, words, stories, glossary }
router.get('/', async (req, res) => {
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  const words = await Word.find(filter).sort({ category: 1, order: 1 }).lean();
  res.json({ categories, words, stories, glossary });
});

// GET /api/words/credits -> photo authors and licences
router.get('/credits', (req, res) => {
  const credits = loadImageCredits();
  const list = wordList
    .filter((w) => credits[w.key])
    .map((w) => {
      const c = credits[w.key];
      return { key: w.key, en: w.en, file: c.file, title: c.title, artist: c.artist, license: c.license, licenseUrl: c.licenseUrl, source: c.source };
    });
  res.json(list);
});

module.exports = router;

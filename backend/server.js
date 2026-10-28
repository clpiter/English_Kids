require('dotenv').config({ quiet: true });
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const Word = require('./models/Word');
const { words } = require('./data/words');
const { loadImageCredits } = require('./data/imageCredits');
const { book } = require('./data/book');
const wordsRouter = require('./routes/words');
const profilesRouter = require('./routes/profiles');
const { startHttps } = require('./https');

const PORT = process.env.PORT || 5000;
const HTTPS_PORT = process.env.HTTPS_PORT || 5443;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/english_kids';

const app = express();
app.use(express.json());

app.use('/api/words', wordsRouter);
app.use('/api/profiles', profilesRouter);
app.get('/api/book', (req, res) => res.json(book));

// Serve the built React app (npm run build in /frontend) in production
const dist = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(dist));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
  res.sendFile(path.join(dist, 'index.html'), (err) => err && next());
});

app.use('/api', (req, res) => res.status(404).json({ message: 'Not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const badInput = err.name === 'ValidationError' || err.name === 'CastError';
  const status = err.status || (badInput ? 400 : 500);
  if (status === 500) console.error(err);
  res.status(status).json({ message: err.message });
});

// Keep the words collection in sync with data/words.js (+ photos from data/images.json)
async function seedWords() {
  const images = loadImageCredits();
  await Word.bulkWrite(
    words.map((w) => ({
      updateOne: { filter: { key: w.key }, update: { $set: { ...w, image: images[w.key]?.file || '' } }, upsert: true },
    }))
  );
  await Word.deleteMany({ key: { $nin: words.map((w) => w.key) } });
  console.log(`Words ready: ${words.length}`);
}

async function start() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected');
  await seedWords();
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  // phones need https for the microphone; the app still works without it
  startHttps(app, HTTPS_PORT).catch((err) => console.warn('HTTPS not started:', err.message));
}

start().catch((err) => {
  console.error('Failed to start server:', err.message);
  process.exit(1);
});

require('dotenv').config({ quiet: true });
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const Word = require('./models/Word');
const { words } = require('./data/words');
const { loadImageCredits } = require('./data/imageCredits');
const { books } = require('./data/book');
const wordsRouter = require('./routes/words');
const profilesRouter = require('./routes/profiles');
const { startHttps } = require('./https');

const PORT = process.env.PORT || 5000;
const HTTPS_PORT = process.env.HTTPS_PORT || 5443;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/english_kids';

// Sites allowed to call this API from another address (the deployed frontend).
// CORS_ORIGINS in .env / Render: comma-separated list. Local addresses are always allowed.
const ALLOWED_ORIGINS = (process.env.CORS_ORIGINS || 'https://english-kids-1-frontend.onrender.com')
  .split(',')
  .map((o) => o.trim().replace(/\/$/, ''))
  .filter(Boolean);
const LOCAL_ORIGIN = /^https?:\/\/(localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+)(:\d+)?$/;

const app = express();
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && (ALLOWED_ORIGINS.includes(origin) || LOCAL_ORIGIN.test(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json());

app.use('/api/words', wordsRouter);
app.use('/api/profiles', profilesRouter);
app.get('/api/book', (req, res) => res.json({ books }));

// Serve the built React app (npm run build in /frontend) in production
const dist = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(dist));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
  res.sendFile(path.join(dist, 'index.html'), (err) => {
    if (!err) return;
    // API-only deploy (frontend hosted separately): say so instead of "Cannot GET /"
    if (req.path === '/') return res.json({ ok: true, app: 'English Masti API', try: ['/api/words', '/api/book'] });
    next();
  });
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
  app
    .listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
    .on('error', (err) => {
      // usually another copy of this server is still running
      if (err.code === 'EADDRINUSE') console.error(`Port ${PORT} is already in use: stop the other server (or set PORT in .env) and try again.`);
      else console.error(err);
      process.exit(1);
    });
  // phones on the same Wi-Fi need https for the microphone; hosts like Render already give https
  if (!process.env.RENDER && process.env.DISABLE_LOCAL_HTTPS !== 'true') {
    startHttps(app, HTTPS_PORT).catch((err) => console.warn('HTTPS not started:', err.message));
  }
}

start().catch((err) => {
  console.error('Failed to start server:', err.message);
  process.exit(1);
});

// Admin panel API: login, then read every profile's reading and activity details.
// The admin ID and password come from the environment (backend/.env locally, Render settings online):
//   ADMIN_USER, ADMIN_PASSWORD, ADMIN_SECRET (signs login tokens; any long random text)
const crypto = require('crypto');
const express = require('express');
const Profile = require('../models/Profile');

const router = express.Router();

const TOKEN_HOURS = 12;
// without ADMIN_SECRET, tokens are signed with a key that changes on every restart (log in again)
const SECRET = process.env.ADMIN_SECRET || crypto.randomBytes(32).toString('hex');

const sha = (text) => crypto.createHash('sha256').update(String(text)).digest();
const sameText = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));
const sign = (data) => crypto.createHmac('sha256', SECRET).update(data).digest('base64url');

function makeToken(user) {
  const data = Buffer.from(JSON.stringify({ user, exp: Date.now() + TOKEN_HOURS * 3600 * 1000 })).toString('base64url');
  return `${data}.${sign(data)}`;
}

function readToken(token) {
  const [data, mac] = String(token || '').split('.');
  if (!data || !mac || !sameText(sign(data), mac)) return null;
  try {
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString());
    return payload.exp > Date.now() ? payload : null;
  } catch {
    return null;
  }
}

// a few wrong passwords per address, then wait 15 minutes
const attempts = new Map();
const LIMIT = 8;
const WINDOW_MS = 15 * 60 * 1000;
function tooMany(ip) {
  const now = Date.now();
  const list = (attempts.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  attempts.set(ip, list);
  return list.length >= LIMIT;
}

router.post('/login', (req, res) => {
  const { ADMIN_USER, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_USER || !ADMIN_PASSWORD) {
    return res.status(503).json({ message: 'Admin login is not set up on the server (ADMIN_USER / ADMIN_PASSWORD).' });
  }
  const ip = req.ip;
  if (tooMany(ip)) return res.status(429).json({ message: 'Too many tries. Please wait 15 minutes.' });
  const { id, password } = req.body || {};
  const ok = sameText(id || '', ADMIN_USER) & sameText(password || '', ADMIN_PASSWORD);
  if (!ok) {
    attempts.get(ip).push(Date.now());
    return res.status(401).json({ message: 'Wrong ID or password' });
  }
  attempts.delete(ip);
  res.json({ token: makeToken(ADMIN_USER), hours: TOKEN_HOURS });
});

function requireAdmin(req, res, next) {
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!readToken(token)) return res.status(401).json({ message: 'Please log in again' });
  next();
}

// every profile, newest activity first, with all its reading and activity details
router.get('/profiles', requireAdmin, async (req, res) => {
  const profiles = await Profile.find().sort({ updatedAt: -1 });
  res.json(profiles);
});

// delete any kid's profile (with all its progress)
router.delete('/profiles/:id', requireAdmin, async (req, res) => {
  if (!/^[a-f0-9]{24}$/.test(req.params.id)) return res.status(400).json({ message: 'Bad profile id' });
  const profile = await Profile.findByIdAndDelete(req.params.id);
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json({ ok: true, id: req.params.id, name: profile.name });
});

module.exports = router;

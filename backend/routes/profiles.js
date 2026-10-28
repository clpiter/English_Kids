const express = require('express');
const Profile = require('../models/Profile');

const router = express.Router();

const EDITABLE = ['name', 'avatar', 'color', 'age'];
const MAX_HISTORY = 50;
const MAX_MISTAKES = 150;

function pick(body) {
  const out = {};
  for (const field of EDITABLE) if (body[field] !== undefined) out[field] = body[field];
  return out;
}

async function findProfile(id) {
  const profile = await Profile.findById(id);
  if (!profile) {
    const err = new Error('Profile not found');
    err.status = 404;
    throw err;
  }
  return profile;
}

function updateStreak(profile) {
  const today = new Date();
  const last = profile.lastPlayed;
  if (!last) {
    profile.streak = 1;
  } else {
    const dayMs = 24 * 60 * 60 * 1000;
    const startOf = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const diff = Math.round((startOf(today) - startOf(last)) / dayMs);
    if (diff === 1) profile.streak += 1;
    else if (diff > 1) profile.streak = 1;
  }
  profile.lastPlayed = today;
}

router.get('/', async (req, res) => {
  const profiles = await Profile.find().sort({ createdAt: 1 });
  res.json(profiles);
});

router.post('/', async (req, res) => {
  const profile = await Profile.create(pick(req.body));
  res.status(201).json(profile);
});

router.get('/:id', async (req, res) => {
  res.json(await findProfile(req.params.id));
});

router.put('/:id', async (req, res) => {
  const profile = await findProfile(req.params.id);
  profile.set(pick(req.body));
  await profile.save();
  res.json(profile);
});

router.delete('/:id', async (req, res) => {
  const profile = await findProfile(req.params.id);
  await profile.deleteOne();
  res.json({ ok: true });
});

// Words seen on the "Learn" flash cards
router.post('/:id/learned', async (req, res) => {
  const keys = Array.isArray(req.body.keys) ? req.body.keys.filter((k) => typeof k === 'string') : [];
  const profile = await findProfile(req.params.id);
  profile.learned.addToSet(...keys);
  await profile.save();
  res.json(profile);
});

// Result of one game: { activity, category, results: [{ key, correct, chosen?, tries?, retry?, hinted? }] }
// chosen = what the kid picked instead, tries = wrong tries (spelling / memory / match games),
// retry = a word asked again at the end of the game after a mistake (not counted in the score),
// hinted = the kid needed a hint
router.post('/:id/results', async (req, res) => {
  const { activity, category } = req.body;
  const results = (Array.isArray(req.body.results) ? req.body.results : []).filter((r) => r && typeof r.key === 'string');
  if (!Profile.ACTIVITIES.includes(activity) || !category || results.length === 0) {
    return res.status(400).json({ message: 'activity, category and results are required' });
  }

  const profile = await findProfile(req.params.id);
  let correct = 0;
  let total = 0;
  let hints = 0;
  for (const r of results) {
    const level = profile.mastery.get(r.key) ?? 0;
    // a right answer with a hint helps a little less than one without
    if (r.correct) profile.mastery.set(r.key, Math.min(5, level + (r.hinted ? 0.5 : 1)));
    else profile.mastery.set(r.key, Math.max(0, level - 1));
    profile.learned.addToSet(r.key);
    if (r.hinted) hints += 1;

    if (!r.retry) {
      total += 1;
      if (r.correct) correct += 1;
    }

    // mistake tracking
    const tries = Number.isInteger(r.tries) && r.tries > 0 ? r.tries : r.correct ? 0 : 1;
    if (tries > 0) {
      const chosen = typeof r.chosen === 'string' ? r.chosen.slice(0, 60) : '';
      profile.mistakes.unshift({ key: r.key, activity, category, chosen, tries, retry: !!r.retry });
      profile.mistakeCounts.set(r.key, (profile.mistakeCounts.get(r.key) ?? 0) + 1);
    }
    if (activity === 'sayit' && r.correct) profile.missedWords.pull(r.key); // can read it now
    if (!r.correct) profile.openMistakes.addToSet(r.key);
    else if (tries === 0) profile.openMistakes.pull(r.key); // fixed: answered right
  }
  if (profile.mistakes.length > MAX_MISTAKES) profile.mistakes.splice(MAX_MISTAKES);
  if (total === 0) total = 1; // only retries were sent

  const percent = Math.round((correct / total) * 100);
  const starsEarned = correct + (percent === 100 ? 3 : 0); // bonus for a perfect game
  profile.stars += starsEarned;

  const scoreKey = `${activity}:${category}`;
  if (percent > (profile.bestScores.get(scoreKey) ?? -1)) profile.bestScores.set(scoreKey, percent);

  const stats = profile.activityStats.get(activity) || { played: 0, correct: 0, total: 0, hints: 0, mistakes: 0 };
  profile.activityStats.set(activity, {
    played: stats.played + 1,
    correct: stats.correct + correct,
    total: stats.total + total,
    hints: stats.hints + hints,
    mistakes: stats.mistakes + results.filter((r) => !r.correct || r.tries > 0).length,
  });

  profile.history.unshift({ activity, category, correct, total, stars: starsEarned, hints });
  if (profile.history.length > MAX_HISTORY) profile.history.splice(MAX_HISTORY);

  updateStreak(profile);
  await profile.save();
  res.json({ profile, starsEarned, correct, total });
});

// Mark / unmark difficult words: { key, on } or { keys: [...], on }
// (key = word key, or "g:<word>" for everyday / book words). One atomic update, so several
// words chosen at once never overwrite each other.
router.post('/:id/difficult', async (req, res) => {
  const keys = (Array.isArray(req.body.keys) ? req.body.keys : [req.body.key]).filter(
    (k) => typeof k === 'string' && k && k.length <= 60
  );
  if (!keys.length) return res.status(400).json({ message: 'key is required' });
  const update = req.body.on === false ? { $pullAll: { difficult: keys } } : { $addToSet: { difficult: { $each: keys } } };
  const profile = await Profile.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json(profile);
});

// Words the kid could not read aloud in a lesson: { keys: [...] } -> "Say the word" practice
router.post('/:id/missed', async (req, res) => {
  const keys = (Array.isArray(req.body.keys) ? req.body.keys : []).filter((k) => typeof k === 'string' && k && k.length <= 60);
  if (!keys.length) return res.status(400).json({ message: 'keys are required' });
  const profile = await Profile.findByIdAndUpdate(req.params.id, { $addToSet: { missedWords: { $each: keys } } }, { new: true });
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json(profile);
});

// Reading lesson finished: { id }
router.post('/:id/lessons', async (req, res) => {
  const { id } = req.body;
  if (typeof id !== 'string' || !id) return res.status(400).json({ message: 'id is required' });
  const profile = await findProfile(req.params.id);
  profile.lessonsDone.addToSet(id);
  updateStreak(profile);
  await profile.save();
  res.json(profile);
});

module.exports = router;

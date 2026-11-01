const mongoose = require('mongoose');

const ACTIVITIES = ['picture', 'listen', 'meaning', 'hindi', 'memory', 'match', 'missing', 'builder', 'yesno', 'sayit'];

const historySchema = new mongoose.Schema(
  {
    activity: { type: String, enum: ACTIVITIES, required: true },
    category: { type: String, required: true },
    correct: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    stars: { type: Number, default: 0 },
    hints: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
  },
  { _id: false }
);

const mistakeSchema = new mongoose.Schema(
  {
    key: { type: String, required: true }, // word key
    activity: { type: String, enum: ACTIVITIES, required: true },
    category: { type: String, required: true },
    chosen: { type: String, default: '' }, // what the kid picked / tapped instead
    tries: { type: Number, default: 1 }, // wrong tries on this word in that game
    retry: { type: Boolean, default: false }, // wrong again on the "try again" question
    date: { type: Date, default: Date.now },
  },
  { _id: false }
);

const activityStatsSchema = new mongoose.Schema(
  {
    played: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    hints: { type: Number, default: 0 },
    mistakes: { type: Number, default: 0 },
  },
  { _id: false }
);

// one tense or sentence structure: "tense-present-simple", "gram-can"
const grammarScoreSchema = new mongoose.Schema(
  {
    played: { type: Number, default: 0 },
    best: { type: Number, default: 0 }, // percent
    last: { type: Number, default: 0 }, // percent
    correct: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    date: { type: Date },
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 30 },
    // the browser / phone the profile belongs to (random id kept in a cookie there); '' = made before devices
    device: { type: String, default: '', index: true, maxlength: 64 },
    avatar: { type: String, default: '🦁' },
    color: { type: String, default: '#ff8a65' },
    age: { type: Number, min: 3, max: 25 },
    stars: { type: Number, default: 0 },
    // word keys the kid has seen in "Learn" or practised in a game
    learned: { type: [String], default: [] },
    // word key -> 0..5 (how well the kid knows the word)
    mastery: { type: Map, of: Number, default: {} },
    // `${activity}:${category}` -> best score in percent
    bestScores: { type: Map, of: Number, default: {} },
    history: { type: [historySchema], default: [] },
    // newest first
    mistakes: { type: [mistakeSchema], default: [] },
    // word key -> how many times it was got wrong
    mistakeCounts: { type: Map, of: Number, default: {} },
    // words got wrong and not yet answered correctly since ("Fix my mistakes" deck)
    openMistakes: { type: [String], default: [] },
    // activity -> totals over all games
    activityStats: { type: Map, of: activityStatsSchema, default: {} },
    // words the kid marked as difficult (word key, or "g:<word>" for everyday words)
    difficult: { type: [String], default: [] },
    // what the kid wrote for a saved word: its meaning and their own sentence
    wordNotes: {
      type: [
        {
          _id: false,
          key: { type: String, required: true, maxlength: 60 },
          en: { type: String, maxlength: 60, default: '' },
          hi: { type: String, maxlength: 200, default: '' },
          sentence: { type: String, maxlength: 300, default: '' },
          date: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    // words the kid could not read aloud (read-along); cleared when said right in "Say the word"
    missedWords: { type: [String], default: [] },
    // reading lesson ids finished
    lessonsDone: { type: [String], default: [] },
    // grammar games: key -> scores (key = "tense-<id>", "gram-<id>", or "tense-mix" / "gram-mix")
    grammarScores: { type: Map, of: grammarScoreSchema, default: {} },
    streak: { type: Number, default: 0 },
    lastPlayed: { type: Date },
  },
  { timestamps: true, toJSON: { flattenMaps: true } }
);

profileSchema.statics.ACTIVITIES = ACTIVITIES;

module.exports = mongoose.model('Profile', profileSchema);

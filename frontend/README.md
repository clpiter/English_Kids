# English Masti · अंग्रेज़ी मस्ती

An English-learning app for Hindi-speaking kids, built with MongoDB, Express, React and Node (MERN).
You can switch the interface between **Hindi, English, or both** (Hindi on top, English below),
and between **light and dark mode** with the 🌙 / ☀️ button. Both choices are remembered on the device.

## Features

- **Kid profiles:** several kids can each have their own avatar, colour, age, stars, daily streak and progress.
- **190+ words in 15 categories:** animals, fruits, vegetables, colours, numbers, body parts, family, feelings, food, home, school, clothes, nature, vehicles, and **33 action words (verbs)**.
  Every word has a **real photo**, its Hindi meaning, and a pronunciation guide in Devanagari (e.g. *apple → ऐपल → सेब*).
  Colours are shown as real colour swatches, and numbers as that many apple photos.
  Verbs and some nouns also have example sentences in both languages.
- **Hindi voice guide:** every screen and game says in Hindi what to do. Tap a game's question line to hear it again.
- **Learn mode:** flash cards that speak each word aloud in English and in Hindi.
- **Read & Learn:** 2–3 short stories per category for reading practice. Tap any word to see its photo and
  Hindi meaning and hear it spoken. "Read aloud" reads the whole story, and "Hindi meaning" shows the translation.
- **8 games** that help kids remember words:
  | Game | What the kid does |
  |---|---|
  | चित्र पहचानो · Picture Quiz | Sees a picture and picks the English word |
  | सुनो और ढूँढो · Listen & Find | Hears a word and taps the right picture |
  | मतलब बताओ · Word Meaning | Sees an English word and picks its Hindi meaning |
  | हिंदी से अंग्रेज़ी · Hindi to English | Sees a Hindi word and picks the English word |
  | जोड़ी मिलाओ · Memory Match | Flips cards to match each picture with its word |
  | छूटा अक्षर · Missing Letter | Fills in the missing letter of a word |
  | शब्द बनाओ · Word Builder | Taps scrambled letters to spell a word |
  | सही या ग़लत · Yes or No | Says whether a picture and a word go together |
- **Smart practice:** each word has a mastery level from 0 to 5. Games show weaker words more often, and a "Practise weak words" deck appears once a kid has some.
- **Progress page:** stars, streak, words learned in each category, words to practise, and recent games.

- **Installable app (PWA):** "Install" / "Add to Home screen" in Chrome or Edge. It works offline with the
  last loaded words and photos (saving progress needs the server).
- **Light / dark mode** and a layout that works on phones, tablets and computers.

Speech uses the browser's built-in voices. Chrome or Edge work best; for Hindi speech, the device needs a Hindi (hi-IN) voice installed.

## Run it

You need Node 18+ and MongoDB running locally (or set `MONGO_URI` in `backend/.env`).

```bash
# first time only
cd backend  && npm install
cd frontend && npm install

# development (two terminals)
cd backend  && npm run dev    # API on http://localhost:5000 (adds the words to MongoDB automatically)
cd frontend && npm run dev    # React app on http://localhost:5173

# production: build React, then serve everything from Express
cd frontend && npm run build
cd backend  && npm start      # http://localhost:5000
```

## Project structure

```
backend/
  server.js            Express app; syncs the word list into MongoDB at startup
  data/words.js        All categories and words. Edit this file to add words.
  data/stories.js      Reading paragraphs; data/glossary.js everyday words
  scripts/             fetch-images.js downloads word photos into frontend/public/images
  models/              Word, Profile (stars, mastery, best scores, history, streak)
  routes/              /api/words, /api/profiles (+ /learned, /results)
frontend/src/
  store/               Redux Toolkit slices (ui, words, profiles)
  screens/             Profiles, Home, Category, Learn, Activity, Result, Progress
  activities/          ChoiceQuiz (6 games), MemoryMatch, WordBuilder
  strings.js           All interface text in Hindi and English
  utils/               speech, sounds, question generator
```

To add a word:
1. Add a line to `backend/data/words.js`, e.g. `['parrot', 'तोता', 'पैरट', '🦜']`. The emoji is only used until a photo exists.
2. In `backend/scripts/fetch-images.js`, add where its photo comes from, e.g. `'animals:parrot': 'Parrot'`
   (a Wikipedia article) or `'search:green parrot'` (a Commons search).
3. Run `node scripts/fetch-images.js` in `backend/` and restart the server.

Photos come from Wikimedia Commons under free licences. Their authors are listed on the in-app
"Photo credits" page, and in `backend/data/images.json`.

Reading stories are in `backend/data/stories.js`. Everyday words used in them (is, the, we...) and their
Hindi meanings are in `backend/data/glossary.js`.

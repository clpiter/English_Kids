// Builds frontend/public/data/content.json: everything the app shows that is the same for every kid
// (word list with photos, categories, stories, glossary, the book). The app loads this one file
// (no server needed), keeps it on the device, and shows it straight away on the next visits.
//
//   node scripts/build-content.js        (also runs before every frontend build)
//
// Uses only the files in backend/data, so it works without MongoDB or installed packages.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const data = path.join(__dirname, '..', 'data');
const { categories, words } = require(path.join(data, 'words'));
const { stories } = require(path.join(data, 'stories'));
const { glossary } = require(path.join(data, 'glossary'));
const { book } = require(path.join(data, 'book'));
const { loadImageCredits } = require(path.join(data, 'imageCredits'));

const images = loadImageCredits();
const PUBLIC = path.join(__dirname, '..', '..', 'frontend', 'public');
// small WebP copy made by scripts/make-thumbs.js (used for tiles, chips and cards)
const thumbFor = (file) => {
  if (!file) return '';
  const thumb = file.replace(/^\/images\//, '/images/sm/').replace(/\.\w+$/, '.webp');
  return fs.existsSync(path.join(PUBLIC, thumb)) ? thumb : '';
};
const content = {
  categories,
  // same order and fields as GET /api/words
  words: [...words]
    .sort((a, b) => a.category.localeCompare(b.category) || a.order - b.order)
    .map((w) => ({ ...w, image: images[w.key]?.file || '', thumb: thumbFor(images[w.key]?.file) })),
  stories,
  glossary,
  book,
};
// changes whenever the content changes, so devices know when to update their saved copy
const version = crypto.createHash('sha1').update(JSON.stringify(content)).digest('hex').slice(0, 12);

const out = path.join(__dirname, '..', '..', 'frontend', 'public', 'data', 'content.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ version, ...content }));
console.log(`content.json: version ${version}, ${content.words.length} words, ${content.book.lessons.length} book lessons, ${Math.round(fs.statSync(out).size / 1024)} KB`);

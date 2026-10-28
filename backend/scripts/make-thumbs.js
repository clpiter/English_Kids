// Makes small WebP copies of the word photos for small places (category tiles, word chips,
// memory cards...): frontend/public/images/sm/<category>/<word>.webp (about 10-20 KB each).
// The big photos stay for flash cards and game prompts.
//
//   node scripts/make-thumbs.js            make missing thumbnails
//   node scripts/make-thumbs.js --force    make all again
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES = path.join(__dirname, '..', '..', 'frontend', 'public', 'images');
const OUT = path.join(IMAGES, 'sm');
const WIDTH = 320;

async function main() {
  const force = process.argv.includes('--force');
  let made = 0;
  let before = 0;
  let after = 0;
  for (const category of fs.readdirSync(IMAGES)) {
    const dir = path.join(IMAGES, category);
    if (category === 'sm' || !fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!/\.(jpe?g|png)$/i.test(file)) continue;
      const src = path.join(dir, file);
      const dest = path.join(OUT, category, file.replace(/\.\w+$/, '.webp'));
      if (!force && fs.existsSync(dest)) continue;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await sharp(src).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 68 }).toFile(dest);
      before += fs.statSync(src).size;
      after += fs.statSync(dest).size;
      made++;
    }
  }
  console.log(`${made} thumbnails made` + (made ? ` (${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB)` : ''));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Cartoon pictures for the category tiles on the home page (inside a category the app shows real photos).
// Source: Microsoft Fluent Emoji, 3D style (MIT License) — https://github.com/microsoft/fluentui-emoji
//
//   node scripts/fetch-cartoons.js           download missing pictures
//   node scripts/fetch-cartoons.js --force   download all again
//
// Saves frontend/public/images/cartoon/<category>.webp (256 px).
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BASE = 'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/';
const OUT = path.join(__dirname, '..', '..', 'frontend', 'public', 'images', 'cartoon');

// category -> Fluent Emoji picture (folder / file in the repo)
const CARTOONS = {
  animals: 'Dog face/3D/dog_face_3d.png',
  fruits: 'Red apple/3D/red_apple_3d.png',
  vegetables: 'Carrot/3D/carrot_3d.png',
  colors: 'Artist palette/3D/artist_palette_3d.png',
  numbers: 'Input numbers/3D/input_numbers_3d.png',
  body: 'Eyes/3D/eyes_3d.png',
  // no family picture in this style: put man, woman, girl and boy together
  family: [
    { file: 'Man/Default/3D/man_3d_default.png', size: 150, left: 0, top: 8 },
    { file: 'Woman/Default/3D/woman_3d_default.png', size: 150, left: 106, top: 8 },
    { file: 'Girl/Default/3D/girl_3d_default.png', size: 112, left: 30, top: 140 },
    { file: 'Boy/Default/3D/boy_3d_default.png', size: 112, left: 120, top: 140 },
  ],
  verbs: 'Person running/Default/3D/person_running_3d_default.png',
  feelings: 'Grinning face with big eyes/3D/grinning_face_with_big_eyes_3d.png',
  food: 'Bread/3D/bread_3d.png',
  home: 'House with garden/3D/house_with_garden_3d.png',
  school: 'Pencil/3D/pencil_3d.png',
  clothes: 'T-shirt/3D/t-shirt_3d.png',
  nature: 'Deciduous tree/3D/deciduous_tree_3d.png',
  transport: 'Automobile/3D/automobile_3d.png',
};

async function download(file) {
  const res = await fetch(BASE + file.split('/').map(encodeURIComponent).join('/'));
  if (!res.ok) throw new Error(`${res.status} ${file}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const force = process.argv.includes('--force');
  fs.mkdirSync(OUT, { recursive: true });
  let failed = 0;
  for (const [category, file] of Object.entries(CARTOONS)) {
    const dest = path.join(OUT, `${category}.webp`);
    if (!force && fs.existsSync(dest)) continue;
    try {
      if (Array.isArray(file)) {
        // several pictures placed on one 256 px canvas
        const layers = [];
        for (const part of file) {
          const png = await download(part.file);
          layers.push({ input: await sharp(png).resize(part.size, part.size).png().toBuffer(), left: part.left, top: part.top });
        }
        const canvas = { create: { width: 256, height: 256, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } };
        await sharp(canvas).composite(layers).webp({ quality: 85 }).toFile(dest);
      } else {
        const png = await download(file);
        await sharp(png).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 85 }).toFile(dest);
      }
    } catch (err) {
      console.log(`✗ ${category}: ${err.message}`);
      failed++;
      continue;
    }
    console.log(`✓ ${category} (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
  }
  if (failed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Downloads a real photo for every word from Wikimedia Commons (free licences)
// into frontend/public/images/<category>/<word>.<ext> and writes credits to data/images.json.
//
//   node scripts/fetch-images.js            fetch missing images
//   node scripts/fetch-images.js --force    re-fetch everything
//   node scripts/fetch-images.js --only=animals:dog,food:rice   re-fetch some words
//   node scripts/fetch-images.js --list     only show which file each word would get
//
// SOURCES maps a word key to one of:
//   'Dog'                      a Wikipedia article (its main photo is used)
//   'File:Name.jpg'            a specific Commons file
//   'search:child reading#2'   the 2nd suitable photo from a Commons search
//   'search:qi:child reading'  search only Commons "Quality images" (reviewed real photos)
//
// IMPORTANT: search results are not checked by anyone. Always look at a searched photo before
// keeping it (this is a kids' app), then pin it here as 'File:...' so it can never change.
const fs = require('fs');
const path = require('path');
const { words } = require('../data/words');

const OUT_DIR = path.join(__dirname, '..', '..', 'frontend', 'public', 'images');
const CREDITS_FILE = path.join(__dirname, '..', 'data', 'images.json');
const UA = 'EnglishMastiKidsApp/1.0 (educational, non-commercial)';
const WIDTH = 480;

// colours and numbers are drawn by the app (swatches / counted apples)
const SKIP_CATEGORIES = ['colors', 'numbers'];

const SOURCES = {
  'animals:dog': 'Dog',
  'animals:cat': 'Cat',
  'animals:cow': 'Cattle',
  'animals:lion': 'Lion',
  'animals:tiger': 'Tiger',
  'animals:elephant': 'Elephant',
  'animals:monkey': 'Monkey',
  'animals:horse': 'Horse',
  'animals:fish': 'Fish',
  'animals:bird': 'Bird',
  'animals:rabbit': 'Rabbit',
  'animals:goat': 'Goat',
  'animals:duck': 'Duck',
  'animals:mouse': 'House mouse',
  'animals:frog': 'Frog',

  'fruits:apple': 'Apple',
  'fruits:banana': 'Banana',
  'fruits:mango': 'Mango',
  'fruits:grapes': 'Grape',
  'fruits:orange': 'Orange (fruit)',
  'fruits:watermelon': 'Watermelon',
  'fruits:pineapple': 'Pineapple',
  'fruits:strawberry': 'Strawberry',
  'fruits:cherry': 'Cherry',
  'fruits:pear': 'Pear',
  'fruits:lemon': 'File:Lemon.jpg',
  'fruits:coconut': 'File:Coconut tree 06271.JPG',

  'vegetables:carrot': 'Carrot',
  'vegetables:potato': 'Potato',
  'vegetables:tomato': 'Tomato',
  'vegetables:onion': 'Onion',
  'vegetables:corn': 'File:Yellow Corn on the Cob (35115370841).jpg',
  'vegetables:cucumber': 'Cucumber',
  'vegetables:brinjal': 'Eggplant',
  'vegetables:garlic': 'File:Garlic bulbs and cloves.jpg',
  'vegetables:chilli': 'Chili pepper',
  'vegetables:mushroom': 'File:2016-01 Agaricus bisporus 07.jpg',
  'vegetables:broccoli': 'Broccoli',

  'body:eye': 'Human eye',
  'body:ear': 'Ear',
  'body:nose': 'File:Fort_Ross_Elena_wearing_Traditional_Russian_Costume_(cropped).jpg',
  'body:mouth': 'File:Smiling Woman With Upper Lip Frenulum Piercing.jpg',
  'body:hand': 'Hand',
  'body:foot': 'Foot',
  'body:leg': 'File:North Greenwich - July 2012 - Walking women, one with umbrella.jpg',
  'body:teeth': 'Human tooth',
  'body:tongue': 'File:Child tongue.jpg',
  'body:hair': 'File:Girl with long black hair (ponytail), rear view.jpg',
  'body:face': 'File:Mother-Child face to face.jpg',
  'body:brain': 'File:The Human Brain Model 02.jpg',

  'family:mother': 'File:Mother and child. Gandola Monastery. Lahaul, India. 2004.jpg',
  'family:father': 'Father',
  'family:brother': 'File:Two brothers together in Bihar, India.jpg',
  'family:sister': 'File:Two sisters ride on their bike and baby stroller respectively on a late afternoon.jpg',
  'family:grandfather': 'File:Bratan Bali Indonesia Grandfather-and-grandson-after-Puja-01.jpg',
  'family:grandmother': 'File:Grandmother and granddaughter＿taiwan.jpg',
  'family:baby': 'File:Baby.jpg',
  'family:family': 'File:Obama family portrait in the Green Room.jpg',
  'family:friend': 'File:Iraqi girl smiles.jpg',

  'verbs:run': 'File:Spin the black circle.jpg',
  'verbs:walk': 'Walking',
  'verbs:eat': 'File:Boy eating carrots.jpg',
  'verbs:drink': 'File:Young girl drinks water while sitting at table during family meal in restaurant.jpg',
  'verbs:sleep': 'File:014 Baby cape fur seal sleeping at Cape cross Photo by Giles Laurent.jpg',
  'verbs:jump': 'File:Beautiful girl jumping on rail tracks.jpg',
  'verbs:swim': 'Swimming',
  'verbs:read': 'File:Close-up of child reading a book.jpg',
  'verbs:write': 'File:Child studies and writes in notebook at a table with focus and concentration in a bright indoor setting.jpg',
  'verbs:sing': 'File:2018-11-02 Konzert -The Hellfreaks- in -Ilvers Musikbar- in Erfurt IMG 3414 LR10 by Stepro.jpg',
  'verbs:dance': 'File:The Yoruba Cultural Group Children of Fasta International School - Dancing.jpg',
  'verbs:play': 'File:Children playing football 01.jpg',
  'verbs:cry': 'Crying',
  'verbs:laugh': 'Laughter',
  'verbs:cook': 'File:Cooking a paella.jpg',
  'verbs:wash': 'Hand washing',
  'verbs:bathe': 'File:Bubble bath fun.JPG',
  'verbs:brush': 'Tooth brushing',
  'verbs:sit': 'File:Slut Boy Billy 3.jpg',
  'verbs:stand': 'File:Man playing Brazilian folk music of Recife.jpg',
  'verbs:look': 'File:Girl Looking Through Binoculars (51842300811).jpg',
  'verbs:listen': 'Listening',
  'verbs:talk': 'File:BMW press conference, IAA 2017, Frankfurt (1Y7A1746).jpg',
  'verbs:open': 'File:Huijeongdang Hall interior through open doors at Changdeokgung Palace in Seoul.jpg',
  'verbs:close': 'Lock and key',
  'verbs:give': 'File:Giving a gift.jpg',
  'verbs:climb': 'Climbing',
  'verbs:fly': 'Bird flight',
  'verbs:draw': 'File:Child scribble age 1y10m.jpg',
  'verbs:clap': 'File:Arabic arts festival applause.jpg',
  'verbs:wave': 'Waving',
  'verbs:think': 'File:Contemplating boy in with his hand on his chin while thinking (15557042034).jpg',
  'verbs:love': 'Hug',

  'feelings:happy': 'Happiness',
  'feelings:sad': 'File:Sad feeling of a child.jpg',
  'feelings:angry': 'File:Child\'s Angry Face.jpg',
  'feelings:scared': 'File:Scared Child at Nighttime.jpg',
  'feelings:surprised': 'File:Pretty Girl Shock and Awe.jpg',
  'feelings:sick': 'File:2023 Elektroniczny termometr lekarski.jpg',
  'feelings:hot': 'File:Amanda_Françozo_At_The_Runner_Sports_Fragment.jpg',
  'feelings:cold': 'File:Child holds a snowball while wearing a pink winter jacket during a snow-covered day in a park.jpg',
  'feelings:tired': 'Yawn',

  'food:bread': 'Bread',
  'food:rice': 'File:A bowl of rice.jpg',
  'food:milk': 'Milk',
  'food:egg': 'Egg as food',
  'food:water': 'File:Fasting 4-Fasting-a-glass-of-water-on-an-empty-plate.jpg',
  'food:cake': 'Cake',
  'food:tea': 'Tea',
  'food:honey': 'Honey',
  'food:sweets': 'File:Sweets Mithai in Shops for Diwali and other Festivals of India.jpg',
  'food:biscuit': 'Biscuit',
  'food:pizza': 'Pizza',
  'food:juice': 'Juice',
  'food:ice cream': 'Ice cream',

  'home:house': 'File:Ljungris July 2013.jpg',
  'home:door': 'File:Myeongjeongjeon seen through the wooden Gate Hyehwamun at Changgyeonggung Palace in Seoul.jpg',
  'home:window': 'File:Wooden house (window shutters), Riga.jpg',
  'home:bed': 'File:Canopy bed of Amantaka Suite in Amantaka luxury Resort & Hotel in Luang Prabang Laos.jpg',
  'home:chair': 'File:Santorin (GR), Fira -- 2017 -- 2598.jpg',
  'home:clock': 'File:Pendulum clock by Jacob Kock, antique furniture photography, IMG 0931 edit.jpg',
  'home:key': 'File:Solex 99 30 padlock with keys (DSCF2659).jpg',
  'home:cup': 'File:Cup of black tea.JPG',
  'home:spoon': 'Spoon',
  'home:bucket': 'File:Sand bucket.jpg',
  'home:umbrella': 'File:Beige and brown oil-paper umbrella on the edge of a wooden house in Luang Prabang Laos.jpg',
  'home:phone': 'File:Smartphone display screen.jpg',
  'home:soap': 'Soap',
  'home:bulb': 'File:Glühwendel brennt durch.jpg',

  'school:book': 'File:A warm and inviting setup features an open book surrounded by scattered pages, a vintage camera, a cup of coffee, and a single rose.jpg',
  'school:pencil': 'Pencil',
  'school:pen': 'Pen',
  'school:bag': 'Backpack',
  'school:teacher': 'Teacher',
  'school:school': 'File:AMSOM Building Ahmedabad University Gujarat Jul22 A7C 02063.jpg',
  'school:ruler': 'File:Ruler on table.jpg',
  'school:scissors': 'Scissors',
  'school:computer': 'File:IBM Thinkpad R51.jpg',
  'school:ball': 'Ball',
  'school:bell': 'File:Columbus Simpson, Portable Brass Hand Bell, c. 1936, NGA 20880.jpg',

  'clothes:shirt': 'Shirt',
  'clothes:pants': 'Trousers',
  'clothes:dress': 'File:Dress with circle skirt in the wind - pose 2.jpg',
  'clothes:cap': 'Baseball cap',
  'clothes:shoes': 'File:Professional Sneakers - Sneakers for hostesses, pilots and other professionals. Comfortable sneakers produced in leather inside and outside.jpg',
  'clothes:socks': 'File:Villased sokid, STM 1998.jpg',
  'clothes:glasses': 'Glasses',
  'clothes:gloves': 'File:62-147-BI Gloves, Flight Nurse, Navy Nurse Corp (4711063109).jpg',
  'clothes:scarf': 'File:Knit cap and loop scarf set.jpg',
  'clothes:coat': 'File:Polo Ralph Lauren winter coat jacket.jpg',

  'nature:sun': 'Sun',
  'nature:moon': 'Moon',
  'nature:star': 'File:Starry night at Old Uppsala, Sweden.jpg',
  'nature:cloud': 'File:Colorful clouds and blue sky with water reflection of an island hosting trees at sunrise in Si Phan Don, Laos.jpg',
  'nature:rain': 'Rain',
  'nature:tree': 'Tree',
  'nature:flower': 'Flower',
  'nature:leaf': 'Leaf',
  'nature:mountain': 'Mountain',
  'nature:fire': 'Fire',
  'nature:rainbow': 'Rainbow',
  'nature:sea': 'File:Baltic Sea view from Schmiedeberg hill in Rerik, 2025-06-23.jpg',

  'transport:car': 'File:Maruti Suzuki Swift 4456.JPG',
  'transport:bus': 'Bus',
  'transport:train': 'File:Indian Railways Train in 2025.jpg',
  'transport:bicycle': 'Bicycle',
  'transport:aeroplane': 'Airliner',
  'transport:boat': 'Boat',
  'transport:ship': 'File:White Sea–Baltic Canal. Cruise ship A. S. Popov P7120615 2200.jpg',
  'transport:truck': 'Truck',
  'transport:rocket': 'Rocket',
  'transport:tractor': 'Tractor',
  'transport:helicopter': 'Helicopter',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

async function api(base, params) {
  const body = new URLSearchParams({ format: 'json', formatversion: '2', ...params });
  let status;
  for (let attempt = 0; attempt < 6; attempt++) {
    let retryAfter = 0;
    try {
      const res = await fetch(base, {
        method: 'POST',
        headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (res.ok) return res.json();
      status = res.status;
      retryAfter = Number(res.headers.get('retry-after')) || 0;
    } catch (err) {
      status = err.cause?.code || err.message; // network hiccup – retry
    }
    // be polite when rate limited: wait as long as the server asks
    const wait = Math.max(retryAfter * 1000, 5000 * 2 ** attempt);
    console.warn(`  ...server busy (${status}), waiting ${Math.round(wait / 1000)}s`);
    await sleep(wait);
  }
  throw new Error(`API failed (${status}) for ${params.titles || params.gsrsearch}`);
}

// Wikipedia article -> its main image file name
async function articleImages(titles) {
  const out = {};
  for (let i = 0; i < titles.length; i += 20) {
    const batch = titles.slice(i, i + 20);
    const data = await api('https://en.wikipedia.org/w/api.php', {
      action: 'query',
      prop: 'pageimages',
      piprop: 'name',
      redirects: '1',
      titles: batch.join('|'),
    });
    const resolve = {};
    for (const r of [...(data.query.normalized || []), ...(data.query.redirects || [])]) resolve[r.to] = r.from;
    for (const page of data.query.pages) {
      let title = page.title;
      while (resolve[title]) title = resolve[title];
      if (page.pageimage) out[title] = `File:${page.pageimage}`;
    }
  }
  return out;
}

// Commons file -> thumbnail url + licence info
async function fileInfo(files) {
  const out = {};
  for (let i = 0; i < files.length; i += 20) {
    const batch = files.slice(i, i + 20);
    const data = await api('https://commons.wikimedia.org/w/api.php', {
      action: 'query',
      prop: 'imageinfo',
      iiprop: 'url|mime|extmetadata',
      iiurlwidth: String(WIDTH),
      titles: batch.join('|'),
    });
    const resolve = {};
    for (const r of data.query.normalized || []) resolve[r.to] = r.from;
    for (const page of data.query.pages) {
      const info = page.imageinfo?.[0];
      if (!info) continue;
      const meta = info.extmetadata || {};
      out[resolve[page.title] || page.title] = {
        thumb: info.thumburl,
        mime: info.mime,
        source: info.descriptionurl,
        artist: stripHtml(meta.Artist?.value) || 'Unknown',
        license: stripHtml(meta.LicenseShortName?.value) || 'See source',
        licenseUrl: meta.LicenseUrl?.value || '',
      };
    }
  }
  return out;
}

// Not photos, or not good for small kids
const NOT_A_PHOTO = /drawing|painting|illustrat|diagram|k[öo]hler|sketch|engraving|lithograph|poster|statue|sculpture|_MET_|LACMA|Wellcome|logo|map|chart|icon|cartoon|clipart|emoji|nude|naked/i;

// Commons search "query" or "query#n" -> n-th suitable photo (JPEG, sensible shape).
// "qi:query" searches only Commons "Quality images" (reviewed real photos).
async function searchPhoto(spec) {
  const [rawQuery, nth = '1'] = spec.split('#');
  const quality = rawQuery.startsWith('qi:');
  const query = quality ? rawQuery.slice(3) : rawQuery;
  const data = await api('https://commons.wikimedia.org/w/api.php', {
    action: 'query',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: `filetype:bitmap ${quality ? 'incategory:Quality_images ' : ''}${query}`,
    gsrlimit: '25',
    prop: 'imageinfo',
    iiprop: 'size|mime',
  });
  const pages = (data.query?.pages || []).sort((a, b) => a.index - b.index);
  const good = pages.filter((p) => {
    const info = p.imageinfo?.[0];
    if (!info || info.mime !== 'image/jpeg' || info.width < 500) return false;
    const ratio = info.width / info.height;
    return ratio > 0.6 && ratio < 1.9 && !NOT_A_PHOTO.test(p.title);
  });
  return good[Number(nth) - 1]?.title;
}

async function download(url, dest) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (res.ok) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
        return;
      }
    } catch {
      // network hiccup – retry
    }
    await sleep(3000 * 2 ** attempt);
  }
  throw new Error(`Download failed: ${url}`);
}

async function main() {
  const force = process.argv.includes('--force');
  const only = (process.argv.find((a) => a.startsWith('--only=')) || '').slice('--only='.length).split(',').filter(Boolean);
  const credits = fs.existsSync(CREDITS_FILE) ? JSON.parse(fs.readFileSync(CREDITS_FILE, 'utf8')) : {};
  const todo = words.filter((w) => {
    if (SKIP_CATEGORIES.includes(w.category)) return false;
    if (only.length) return only.includes(w.key);
    return force || !credits[w.key];
  });

  const missing = todo.filter((w) => !SOURCES[w.key]);
  if (missing.length) console.warn('No source for:', missing.map((w) => w.key).join(', '));

  const wanted = todo.filter((w) => SOURCES[w.key]);
  const kindOf = (src) => (src.startsWith('File:') ? 'file' : src.startsWith('search:') ? 'search' : 'article');

  const articles = [...new Set(wanted.map((w) => SOURCES[w.key]).filter((s) => kindOf(s) === 'article'))];
  const fromArticles = await articleImages(articles);
  // search results are cached so re-runs don't hit the API again
  const cacheFile = path.join(__dirname, '.search-cache.json');
  const fromSearch = fs.existsSync(cacheFile) ? JSON.parse(fs.readFileSync(cacheFile, 'utf8')) : {};
  for (const src of new Set(wanted.map((w) => SOURCES[w.key]).filter((s) => kindOf(s) === 'search'))) {
    if (fromSearch[src]) continue;
    fromSearch[src] = await searchPhoto(src.slice('search:'.length));
    fs.writeFileSync(cacheFile, JSON.stringify(fromSearch, null, 2));
    await sleep(3000);
  }
  const fileFor = (w) => {
    const src = SOURCES[w.key];
    return { file: src, search: fromSearch[src], article: fromArticles[src] }[kindOf(src)];
  };

  if (process.argv.includes('--list')) {
    for (const w of wanted) console.log(`${w.key.padEnd(24)} ${fileFor(w) || '(none)'}`);
    return;
  }

  const files = [...new Set(wanted.map(fileFor).filter(Boolean))];
  const infos = await fileInfo(files);

  for (const w of wanted) {
    const file = fileFor(w);
    const info = file && infos[file];
    if (!info || !info.thumb) {
      console.warn(`✗ ${w.key}: no image for "${SOURCES[w.key]}"`);
      continue;
    }
    const ext = path.extname(new URL(info.thumb).pathname).toLowerCase() || '.jpg';
    const rel = `images/${w.category}/${w.en.replace(/\s+/g, '-')}${ext}`;
    await download(info.thumb, path.join(OUT_DIR, '..', rel));
    credits[w.key] = { file: `/${rel}`, title: file.replace(/^File:/, ''), ...info, thumb: undefined };
    console.log(`✓ ${w.key} <- ${file}${info.mime === 'image/jpeg' ? '' : `  (${info.mime})`}`);
    fs.writeFileSync(CREDITS_FILE, JSON.stringify(credits, null, 2) + '\n');
    await sleep(800);
  }

  fs.writeFileSync(CREDITS_FILE, JSON.stringify(credits, null, 2) + '\n');
  console.log(`Saved ${Object.keys(credits).length} image credits to data/images.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'images.json');

// Photo credits written by scripts/fetch-images.js ({} if photos were not downloaded yet)
function loadImageCredits() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch {
    return {};
  }
}

module.exports = { loadImageCredits };

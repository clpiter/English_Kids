// Copies the app's data from the local MongoDB to the database in MONGO_URI (e.g. MongoDB Atlas).
//
//   node scripts/copy-to-atlas.js
//   node scripts/copy-to-atlas.js mongodb://127.0.0.1:27017/english_kids   (other source)
//
// Copies the "words" and "profiles" collections. Documents keep their _id, so running it again
// updates them instead of making copies. Nothing is deleted in the target.
// (The book, stories and glossary are files in data/, not in the database.)
require('dotenv').config({ quiet: true, path: require('path').join(__dirname, '..', '.env') });
const mongoose = require('mongoose');

const SOURCE = process.argv[2] || 'mongodb://127.0.0.1:27017/english_kids';
const TARGET = process.env.MONGO_URI;
const COLLECTIONS = ['words', 'profiles'];

const hidePassword = (uri) => uri.replace(/\/\/([^:/]+):[^@]+@/, '//$1:****@');

async function main() {
  if (!TARGET) throw new Error('MONGO_URI is not set in backend/.env');
  if (TARGET === SOURCE) throw new Error('MONGO_URI points to the same database as the source');

  console.log('From:', hidePassword(SOURCE));
  console.log('To:  ', hidePassword(TARGET));
  const source = await mongoose.createConnection(SOURCE, { serverSelectionTimeoutMS: 10000 }).asPromise();
  const target = await mongoose.createConnection(TARGET, { serverSelectionTimeoutMS: 20000 }).asPromise();

  for (const name of COLLECTIONS) {
    const docs = await source.db.collection(name).find().toArray();
    if (!docs.length) {
      console.log(`${name}: nothing to copy`);
      continue;
    }
    const result = await target.db
      .collection(name)
      .bulkWrite(docs.map((doc) => ({ replaceOne: { filter: { _id: doc._id }, replacement: doc, upsert: true } })));
    console.log(`${name}: ${docs.length} copied (${result.upsertedCount} new, ${result.modifiedCount} updated)`);
  }

  // same unique index the app's Word model uses
  await target.db.collection('words').createIndex({ key: 1 }, { unique: true });
  await target.db.collection('words').createIndex({ category: 1 });

  for (const name of COLLECTIONS) console.log(`Atlas ${name}:`, await target.db.collection(name).countDocuments());
  await source.close();
  await target.close();
}

main().catch((err) => {
  console.error('Copy failed:', err.message);
  process.exit(1);
});

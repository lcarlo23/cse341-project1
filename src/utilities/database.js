import { MongoClient } from 'mongodb';

let db;
let client;

export async function initDb() {
  if (db) {
    console.log('DB already initialized!');
    return;
  }

  client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    db = client.db('cse341');
  } catch (error) {
    console.error(error);
  }
}

export async function getDb() {
  if (!db) {
    throw new Error('Database not initialized');
  }

  return db;
}

export async function closeDb() {
  if (db) {
    await client.close();
    console.log('MongoDB connection closed.');
  }

  process.exit(0);
}

import { MongoClient } from 'mongodb';

let uri;
let client;
let db;
let collection;

export async function initDb() {

    uri = process.env.MONGODB_URI;
    client = new MongoClient(uri);

    try {
        await client.connect();
        db = client.db('cse341');
        collection = db.collection('contacts');
    } catch (error) {
        console.error(error);
    }
}

export async function getDb() {
    if (!db) {
        throw Error("Database not initialized");
    }

    return db;
}

export async function closeDb() {
    await client.close();
    console.log('MongoDB connection closed.');
    process.exit(0);
}
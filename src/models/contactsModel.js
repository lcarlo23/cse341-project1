import { getDb } from '../utilities/database.js';

async function getCollection() {
  const db = await getDb();
  const collection = db.collection('contacts');

  return collection;
}

export async function findAllContacts() {
  const collection = await getCollection();
  const contacts = await collection.find().toArray();

  return contacts;
}

export async function findOneContact(id) {
  const collection = await getCollection();
  const contact = await collection.findOne({ _id: id });

  if (!contact) {
    throw new Error("The contact doesn't exist");
  }

  return contact;
}

export async function insertContact(contact) {
  const collection = await getCollection();
  const result = await collection.insertOne(contact);

  return result;
}

export async function replaceContact(id, contact) {
  const collection = await getCollection();
  const result = await collection.replaceOne({ _id: id }, contact);

  return result;
}

export async function deleteOneContact(id) {
  const collection = await getCollection();
  const result = await collection.deleteOne({ _id: id });

  return result;
}

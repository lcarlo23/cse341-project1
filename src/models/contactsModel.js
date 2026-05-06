export async function getAllContacts(db) {
    const collection = db.collection('contacts');
    const contacts = await collection.find({}).toArray();
    return contacts;
}
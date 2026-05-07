export async function findAllContacts(db) {
    const collection = db.collection('contacts');
    const contacts = await collection.find().toArray();
    return contacts;
}

export async function findOneContact(db, id) {
    const collection = db.collection('contacts');
    const contact = await collection.findOne({ _id: id });
    return contact;
}
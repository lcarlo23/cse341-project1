import { ObjectId } from "mongodb";
import { findAllContacts, findOneContact } from "../models/contactsModel.js";
import { getDb } from "../utilities/database.js";

export async function getAllContacts(req, res) {
  try {
    const db = await getDb();
    const contacts = await findAllContacts(db);

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getContact(req, res) {
  try {
    const id = new ObjectId(req.params.id);
    const db = await getDb();
    const contact = await findOneContact(db, id);

    res.status(200).json(contact);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

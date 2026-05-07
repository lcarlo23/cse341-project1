import { ObjectId } from "mongodb";
import { findAllContacts, findOneContact } from "../models/contactsModel.js";
import { getDb } from "./databaseController.js";

export async function getAllContacts(req, res) {
    try {
        const db = await getDb();
        const contacts = await findAllContacts(db);

        res.json(contacts);
    } catch (error) {
        console.error(error);
    }
}

export async function getContact(req, res) {
    const id = new ObjectId(req.params.id);

    try {
        const db = await getDb();
        const contact = await findOneContact(db, id);

        res.json(contact);
    } catch (error) {
        console.error(error);
    }

}
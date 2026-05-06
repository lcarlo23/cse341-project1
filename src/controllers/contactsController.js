import { ObjectId } from "mongodb";
import { getAllContacts, getSingleContact } from "../models/contactsModel.js";
import { getDb } from "./databaseController.js";

export async function getContactsList(req, res) {
    try {
        const db = await getDb();
        const contacts = await getAllContacts(db);

        res.json(contacts);
    } catch (error) {
        console.error(error);
    }
}

export async function getContact(req, res) {
    const id = new ObjectId(req.params.id);

    try {
        const db = await getDb();
        const contact = await getSingleContact(db, id);

        res.json(contact);
    } catch (error) {
        console.error(error);
    }

}
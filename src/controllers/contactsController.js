import { getAllContacts } from "../models/contactsModel.js";
import { getDb } from "./databaseController.js";

export async function getContacts(req, res) {
    try {
        const db = await getDb();
        const contacts = await getAllContacts(db);

        res.json(contacts);
    } catch (error) {
        console.error(error);
    }
}
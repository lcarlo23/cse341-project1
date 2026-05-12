import { ObjectId } from 'mongodb';
import {
  findAllContacts,
  findOneContact,
  insertContact,
} from '../models/contactsModel.js';

export async function getAllContacts(req, res) {
  try {
    const contacts = await findAllContacts();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getContact(req, res) {
  try {
    const id = new ObjectId(req.params.id);
    const contact = await findOneContact(id);

    res.status(200).json(contact);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

export async function createContact(req, res) {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    await insertContact(contact);

    res.status(204).send();
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

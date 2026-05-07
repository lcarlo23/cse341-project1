import { Router } from "express";
import {
  getContact,
  getAllContacts,
} from "../controllers/contactsController.js";

const router = Router();

router.get("/contacts", getAllContacts);
router.get("/contacts/:id", getContact);

export default router;

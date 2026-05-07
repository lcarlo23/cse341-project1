import { Router } from "express";
import {
  getContact,
  getAllContacts,
} from "../controllers/contactsController.js";

const router = Router();

router.get("/", getAllContacts);
router.get("/:id", getContact);

export default router;

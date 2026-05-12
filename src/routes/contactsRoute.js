import { Router } from 'express';
import {
  getContact,
  getAllContacts,
  createContact,
  updateContact,
} from '../controllers/contactsController.js';

const router = Router();

router.get('/', getAllContacts);
router.get('/:id', getContact);

router.post('/', createContact);

router.put('/:id', updateContact);

// router.delete('/:id', deleteContact);

export default router;

import { Router } from 'express';
import {
  getContact,
  getAllContacts,
  createContact,
} from '../controllers/contactsController.js';

const router = Router();

router.get('/', getAllContacts);
router.get('/:id', getContact);

router.post('/', createContact);

// router.put('/:id', updatecontact);

// router.delete('/:id', deleteContact);

export default router;

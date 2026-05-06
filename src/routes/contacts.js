import { Router } from 'express';
import { getContact, getContactsList } from '../controllers/contactsController.js';

const router = Router();

router.get('/contacts', getContactsList);
router.get('/contacts/:id', getContact);

export default router;
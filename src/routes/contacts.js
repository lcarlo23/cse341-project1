import { Router } from 'express';
import { getContacts } from '../controllers/contactsController.js';

const router = Router();

router.get('/contacts', getContacts);
router.get('/contacts:id', (req, res) => { });

export default router;
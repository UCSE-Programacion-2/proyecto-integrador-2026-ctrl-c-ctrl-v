import { Router } from 'express';

import { addItem, getCart, removeItem } from '../controllers/cartController.js';
import { protect } from '../middlewares/auth.js';

const router = Router();

router.use(protect);

router.get('/', getCart);
router.post('/items', addItem);
router.delete('/items/:productId', removeItem);

export default router;

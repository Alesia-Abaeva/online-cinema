import { Router } from 'express';
import {
  activatePromocode,
  getPersonPromocode,
} from '../controllers/PromocodeController';
import checkAuth from '../middleware/auth.middelware';

export const router = Router();

// api/promocode/
router.post('/', checkAuth, activatePromocode);
// api/promocode/personal
router.get('/personal', checkAuth, getPersonPromocode);

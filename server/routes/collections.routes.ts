import { Router } from 'express';
import { getCollectionsData } from '../controllers/CollectionsController';

export const router = Router();

// api/collection/:collection
router.get('/:collection', getCollectionsData);

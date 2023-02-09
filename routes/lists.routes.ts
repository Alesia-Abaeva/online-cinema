import { Router } from 'express';
import { getListData } from '../controllers/ListsController';


export const router = Router();

// api/lists/:list
router.get('/:list', getListData);

import { Router } from 'express';
import { getSliderData } from '../controllers/SliderController';


export const router = Router();

// api/sliders/:slider
router.get('/:slider', getSliderData);

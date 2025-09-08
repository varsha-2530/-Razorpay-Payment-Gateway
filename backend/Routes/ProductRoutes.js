import express from 'express';
import { getKey, processpayment } from '../controllers/ProductController.js';

const router = express.Router();

router.post('/payment/process', processpayment);
router.get('/getkey', getKey);

export default router;

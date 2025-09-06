import express from 'express';
import { processpayment } from '../controllers/ProductController.js';

const router = express.Router();

router.post('/payment/process', processpayment);

export default router;

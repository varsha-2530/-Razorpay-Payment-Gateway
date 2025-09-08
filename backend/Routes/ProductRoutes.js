import express from 'express';
import { getKey, paymentsuccess, processpayment } from '../controllers/ProductController.js';

const router = express.Router();

router.post('/payment/process', processpayment);
router.get('/getkey', getKey);
router.post('/payment-success', paymentsuccess)

export default router;

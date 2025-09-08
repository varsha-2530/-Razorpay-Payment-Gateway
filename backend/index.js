import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import Razorpay from 'razorpay';
import router from './Routes/ProductRoutes.js';

const app = express();
app.use(express.json());

// console.log("🔐 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// console.log("🔐 RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

// Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Health route
app.get('/', (req, res) => {
  res.send('✅ Razorpay Server is Live');
});
app.use(express.urlencoded({extended:true}))
// Use routes
app.use('/api', router);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

import express from 'express';
import {createOrder,verifyPayment} from "./../controllers/payment.js"

const router = express.Router();

router.post("/checkout", createOrder); // Create Razorpay order
router.post("/payment-verification", verifyPayment); // Verify payment signature

export default router;
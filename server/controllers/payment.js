import { TryCatch } from "../utilities/TryCatch.js";
import Razorpay from "razorpay";
import crypto from "crypto";


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

export const createOrder = TryCatch(async (req, res) =>{
    try {
        const { amount } = req.body;
    
        const options = {
          amount: amount * 100, // Convert to paise
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        };
    
        const order = await razorpay.orders.create(options);
    
        res.json({ success: true, order });
      } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }
});

export const verifyPayment =TryCatch(async (req,res) =>{
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;
    
        // Generate expected signature
        const generated_signature = crypto
          .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
          .update(razorpay_order_id + "|" + razorpay_payment_id)
          .digest("hex");
    
        if (generated_signature === razorpay_signature) {
          // Store successful order details in DB
          await Order.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount,
            status: "paid",
          });
    
          res.json({ success: true, payment_id: razorpay_payment_id });
        } else {
          res.status(400).json({ success: false, message: "Invalid payment signature" });
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }
})
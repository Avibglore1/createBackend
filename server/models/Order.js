import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    razorpay_order_id: { type: String, required: true },
    razorpay_payment_id: { type: String },
    razorpay_signature: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  }, { timestamps: true });

export const Order = mongoose.model('Order', OrderSchema);
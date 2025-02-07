import { Schema, model } from "mongoose";

const orderschema = new Schema({
    name: {
        type: String,
    },
    mobileNo:{
     type: Number
    },
    email: {
         type:String
    },
    address :{
     type:String
    },
    amount: {
        type: Number,
    },
    order_id: {
        type: String,
    },
    razorpay_payment_id: {
        type: String,
        default: null
    },
    razorpay_order_id: {
        type: String,
        default: null
    },
    razorpay_signature: {
        type: String,
        default: null
    },
},
    {
        timestamps: true,
    }
)

const orderModel = model("orderModel", orderschema);
export default orderModel
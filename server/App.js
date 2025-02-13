import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto, { verify } from "crypto";
import cors from "cors";
import OrderModel from "./models/Order.js"; // Ensure correct file path
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import router from "./routes/user.js";
dotenv.config();

const __dirname = path.resolve();
const app = express();
app.use(express.json());



// Enable CORS for frontend communication
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST",
//     allowedHeaders: "Content-Type"
// }));

app.use(cors());
app.use("/", router);


const PORT = process.env.PORT || 5000;

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (e) {
        console.error("❌ DB Connection Error:", e.message);
        process.exit(1); // Stop the server if DB connection fails
    }
};

// Razorpay Configuration
const razorpayInstance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});

// API Route: Payment Checkout
app.post("/api/payment/checkout", async (req, res) => {
    try {
        const { name, mobileNo, email, address, amount } = req.body;

        if (!name || !mobileNo || !email || !address || !amount) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const order = await razorpayInstance.orders.create({
            amount: Number(amount * 100), // Convert to paise
            currency: "INR"
        });

        await OrderModel.create({
            order_id: order.id,
            name,
            mobileNo,
            email,
            address,
            amount
        });

        console.log("✅ Order Created:", order);
        res.json({ success: true, order });

    } catch (e) {
        console.error("❌ Checkout Error:", e.message);
        res.status(500).json({ success: false, message: e.message });
    }
});

// API Route: Payment Verification
app.post("/api/payment/payment-verification", async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

        const body_data = razorpay_order_id + "|" + razorpay_payment_id;
        const expected_signature = crypto.createHmac("sha256", process.env.KEY_SECRET)
            .update(body_data)
            .digest("hex");

        const isValid = expected_signature === razorpay_signature;

        if (isValid) {
            await OrderModel.updateOne(
                { order_id: razorpay_order_id },
                {
                    $set: { razorpay_payment_id, razorpay_order_id, razorpay_signature }
                }
            );

            return res.redirect(`http://localhost:3000/success?payment_id=${razorpay_payment_id}`);
        } else {
            return res.redirect("http://localhost:3000/failed");
        }
    } catch (e) {
        console.error("❌ Payment Verification Error:", e.message);
        res.status(500).json({ success: false, message: e.message });
    }
});

// Payment Get one API
app.get("/api/payment/details/:paymentid", async (req, res) => {
    try {
        const payment = await OrderModel.findOne({ razorpay_payment_id: req.params.paymentid });
        if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });

        res.json(payment);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});



// Payment Receipt API
app.get("/api/payment/receipt/:paymentid", async (req, res) => {
    try {
        const payment = await OrderModel.findOne({ razorpay_payment_id: req.params.paymentid });

        if (!payment) {
            return res.status(404).json({ success: false, message: "Payment not found" });
        }

        // Generate PDF receipt
        const doc = new PDFDocument();
        const filePath = path.join("receipts", `${payment.razorpay_payment_id}.pdf`);
        const fileStream = fs.createWriteStream(filePath);

        doc.pipe(fileStream);
        doc.fontSize(20).text("Payment Receipt", { align: "center" });
        doc.moveDown();
        doc.fontSize(14).text(`Payment ID: ${payment.razorpay_payment_id}`);
        doc.text(`Order ID: ${payment.order_id}`);
        doc.text(`Name: ${payment.name}`);
        doc.text(`Email: ${payment.email}`);
        doc.text(`Mobile: ${payment.mobileNo}`);
        doc.text(`Amount Paid: ₹${payment.amount}`);
        doc.text(`Date: ${new Date(payment.createdAt).toLocaleString()}`);
        doc.end();

        fileStream.on("finish", () => {
            res.download(filePath, "receipt.pdf", (err) => {
                if (err) {
                    console.error("Download error:", err);
                    res.status(500).json({ success: false, message: "Error generating receipt" });
                }
            });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});



// Serve Static Files in Production (React Frontend)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "..", "client", "build")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
//     });
// }

// Start Server
app.listen(PORT, async () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    await connectDB();
});

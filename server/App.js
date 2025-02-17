import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./database/db.js";
import authRoutes from "./routes/user.js";
import paymentRoutes from "./routes/payment.js";

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Global Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Database Connection
connectDb();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Auth Server is working");
});

// Start Server and assign to `server`
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
  // Handle port conflicts properly
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Trying another port...`);
      server.listen(port + 1, () => {
        console.log(`Server running on http://localhost:${port + 1}`);
      });
    } else {
      console.error(error);
    }
  });
  
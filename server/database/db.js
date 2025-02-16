// ./database/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = async () => {
  try {
    // Use process.env to get the MONGO_URI
    const MONGO_URI = process.env.MONGO_URI;

    // Ensure MONGO_URI is defined
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    // Await mongoose connection
    await mongoose.connect(MONGO_URI);
    
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

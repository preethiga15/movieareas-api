import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Log the MONGODB_URI to verify it's being read correctly
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true); // Suppress deprecation warning
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;

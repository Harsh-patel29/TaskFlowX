import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected Successfully!! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit();
  }
};

import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;

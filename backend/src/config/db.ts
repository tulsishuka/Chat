import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log("✅ Mongo Connected");
    console.log("Database:", mongoose.connection.name);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
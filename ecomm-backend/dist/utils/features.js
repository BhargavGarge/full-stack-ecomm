import mongoose from "mongoose";
const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }
        await mongoose.connect(mongoUri, {});
        console.log("MongoDB connected successfully!");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error connecting to MongoDB:", error.message);
        }
        else {
            console.error("Error connecting to MongoDB:", error);
        }
        process.exit(1);
    }
};
export default connectDB;

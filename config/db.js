import mongoose from "mongoose";
let uri = process.env.NODE_ENV === "production" ? process.env.MONGODB_SRV_URI : process.env.MONGODB_STANDARD_URI;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
};

const connectDB = async () => {
    try {
        if (cached.conn) {
            return cached.conn;
        };

        if (!cached.promise) {
            cached.promise = mongoose.connect(uri, { bufferCommands: false });
        };

        cached.conn = await cached.promise;
        console.log("MongoDB connected");
        return cached.conn;
    } catch (error) {
        console.log("MongoDB connection failed ", error.message)
    }
};

export default connectDB;
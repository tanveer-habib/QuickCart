import { NextResponse as res } from "next/server";
import User from "@/models/User.js";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db.js";

export const POST = async (req) => {
    try {
        const { userId } = getAuth(req);
        await connectDB();
        const user = await User.findById(userId);
        const { cartItems } = user;
        return res.json({ success: true, cartItems });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
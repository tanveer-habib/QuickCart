import { NextResponse as res } from "next/server";
import connectDB from "@/config/db.js";
import User from "@/models/User.js";
import { getAuth } from "@clerk/nextjs/server";

export const GET = async (req) => {
    try {
        const { userId } = getAuth(req);
        await connectDB();
        const user = await User.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User Not Found" });
        };
        return res.json({ success: true, user });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
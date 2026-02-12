import { NextResponse as res } from "next/server";
import User from "@/models/User.js";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db.js";

export const POST = async (req) => {
    try {
        const { userId } = getAuth(req);
        const { cartData } = await req.json();
        console.log("Cart Data is ", cartData);
        await connectDB();
        const user = await User.findById(userId);
        user.cartItems = cartData;
        await user.save();
        return res.json({ success: true });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
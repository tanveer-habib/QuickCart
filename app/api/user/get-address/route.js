import { NextResponse as res } from "next/server";
import connectDB from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";

export const GET = async (req) => {
    try {
        const { userId } = getAuth(req);
        await connectDB();
        const addresses = await Address.find({ userId });
        return res.json({ success: true, addresses });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
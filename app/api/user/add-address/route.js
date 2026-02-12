import { NextResponse as res } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import Address from "@/models/Address";

export const POST = async (req) => {
    try {
        const { userId } = getAuth(req);
        const { address } = await req.json();
        await connectDB();
        const newAddress = await Address.create({ ...address, userId });
        return res.json({ success: true, message: "Address Added", newAddress });
    } catch (error) {
        console.log("ERROR MESSAGE is ", error.message)
        return res.json({ success: false, message: error.message });
    };
};
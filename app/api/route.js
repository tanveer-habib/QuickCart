"use server";
import { NextResponse as res } from "next/server";
import connectDB from "@/config/db.js";

export const GET = async (req) => {
    try {
        await connectDB();
        return res.json({ success: true });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
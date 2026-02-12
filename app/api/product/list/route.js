import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse as res } from "next/server";

export const GET = async (req) => {
    try {
        await connectDB();
        const products = await Product.find({});
        return res.json({ success: true, products });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
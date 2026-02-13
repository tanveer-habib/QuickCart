import { NextResponse as res } from "next/server";
import Address from "@/models/Address.js";
import Order from "@/models/Order.js";
import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import Product from "@/models/Product";

export const GET = async (req) => {
    try {
        const { userId } = getAuth(req);
        await connectDB();
        Address.length;
        Product.length;
        const orders = await Order.find({ userId }).populate("address items.product");
        return res.json({ success: true, orders });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse as res } from "next/server";

export const POST = async (req) => {
    try {
        const { userId } = getAuth();
        const { address, items } = await req.json();
        if (!address || items.length === 0) {
            return res.json({ success: false, message: "Invalid data" });
        };

        const amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return acc + product.offerPrice * item.quantity;
        }, 0);

        await inngest.send({
            name: "order/created",
            data: { userId, address, items, amount: amount + Math.floor(amount * 0.02) },
            date: Date.now(),
        });

        const user = await User.findById(userId);
        user.cartItems = {};
        await user.save();
        return res.json({ success: true, message: "Order Placed" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    };
};
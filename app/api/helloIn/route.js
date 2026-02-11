import { NextResponse } from "next/server";
import { inngest } from "@/config/inngest.js"; // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = "force-dynamic";

// Create a simple async Next.js API route handler
export async function GET() {
    // Send your event payload to Inngest
    let res = await inngest.send({
        name: "test/hello.world",
        data: {
            email: "testFromTanVeeRUser@example.com",
        },
    });

    return NextResponse.json({ message: "Event sent!", res });
}
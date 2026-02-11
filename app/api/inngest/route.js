import { serve } from "inngest/next";
import { helloWorld, inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest.js";

console.log("Inngest Root fuction file hitted");
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion,
        helloWorld
    ],
});
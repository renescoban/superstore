import User from "@models/user";
import { connectToDB } from "@utils/db";

export const POST = async (req) =>{
    const {email, password , fullName } = await req.json();

    try {
        await connectToDB();
        const newUser = new User({ email, password , fullName });

        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";



export async function POST(req) {
    try {
        
        const {email} = await req.json()

        if(!email) {
            return NextResponse.json({error : "Email is required"} , {status:400})
        }

        await connectToDB()

        const existingSubscriber = await Subscriber.findOne({email})
        if (existingSubscriber) {
            return NextResponse.json({message:"Email already subscribed"},{status:409})
        }

        const newSubscriber = new Subscriber({email})
        await newSubscriber.save()


        return NextResponse.json({message:"Email saved successfully"},{status:201})


    } catch (error) {
        console.error("Error saving email" , error)
        return NextResponse.json({error:"Internal Server Error"},{status:500})
    }
}
import { NextRequest, NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";
import { connectToDatabase } from "@/app/lib/mongodb";

export async function POST(req: NextRequest): Promise<NextResponse>{
     
    try{
        await connectToDatabase();
        const body = await req.json();
        
        const ticketData  = body.formData;
        const newTicket = new Ticket(ticketData);

        await newTicket.save();
        

        return NextResponse.json({ message: "Ticket created"} , {status: 201})
    }catch(error){
        return NextResponse.json({message: "Error", error}, { status: 500})
    }
}

export async function GET(){
    try {
        await connectToDatabase();
        const tickets = await Ticket.find({});
        
        return NextResponse.json({ success: true, tickets: tickets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
    }
}
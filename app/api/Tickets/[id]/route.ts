import Ticket from "@/app/(models)/Ticket";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
    try{
        const { id } = params;

        // Delete ticket by ID
        const ticket = await Ticket.findOne({_id:id});

        return NextResponse.json({foundTicket: ticket}, {status:200})
    }catch(error){
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

// Add type for DELETE request
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Delete ticket by ID
    const ticket = await Ticket.findByIdAndDelete(id);

    // If ticket is not found
    if (!ticket) {
      return NextResponse.json(
        { message: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Ticket deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

import mongoose, { Schema, Model, models } from "mongoose";

export interface ITicket  {
    title: string;
    description: string;
    category: string;
    priority: number;
    progress: number;
    status: "open" | "closed" | "pending";
    active: boolean;
}


// Define the Ticket interface for TypeScript
//export interface ITicket extends Document 
export interface IDTicket extends Document{ 
    title: string;
    description: string;
    category: string;
    priority: number;
    progress: number;
    status: "open" | "closed" | "pending";
    active: boolean;
}

// Define the Ticket schema
const TicketSchema: Schema = new Schema<IDTicket>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: {type: String, required: true},
        priority: {type: Number, required: true},
        progress: {type: Number, required: true},
        status: { type: String, enum: ["open", "closed", "pending"], required: true },
        active: {type: Boolean, required: true},
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the Ticket model, ensuring it doesn’t get redefined
const Ticket: Model<IDTicket> = models.Ticket || mongoose.model<IDTicket>("Ticket", TicketSchema);
export default Ticket;
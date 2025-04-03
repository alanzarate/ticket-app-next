 
import React from "react";
import TicketCard from "./(components)/TicketCard";
import { IDTicket, ITicket } from "./(models)/Ticket";

//const getTickets  = async () =>
async function getTickets() {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
      method: "GET",
    });
    if(! res.ok ) throw new Error("Failed to fetchTickets");
    console.log("============================")
  
    //const tickets = await res.json();
    const {tickets }= await res.json();
    console.log(tickets);
    return tickets;

  } catch (error) {
    console.log("Failed to get tickets", error);
  }
}

export default async function Dashboard() {
   
  const tickets: IDTicket[] = await getTickets();
  // console.log(tickets);

  

  // const uniqueCategories: string[] = Array.from(
  //   new Set<string>(tickets.map((ticket: IDTicket) => ticket.category))
  // );
  // console.log(uniqueCategories);

  return (
    <div className="p-5">
 
      {/* <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategories, categoryIndex) => {
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategories}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter(
                    (ticket: IDTicket) => ticket.category === uniqueCategories
                  )
                  .map((filteredTicket: IDTicket, _index: number) => (
                    <TicketCard id={_index} key={_index} ticket={filteredTicket} />;
                  ))}
              </div>
            </div>;
          })}
      </div>  */}
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
         {
          tickets.map( (ticket, ticketIndex) => (
            <TicketCard id={ticket._id} key={ticketIndex} ticket={ticket} />
          ))
         }
      </div>
    </div>
  );
}

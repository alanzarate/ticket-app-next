"use client"; // Ensure this is added for client-side

import TicketForm from '@/app/(components)/TicketForm';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Fetch ticket by ID
const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`/api/Tickets/${id}`, {
      cache: "no-store", // Ensure no cache
    });

    if (!res.ok) {
      throw new Error("Failed to get ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = () => {
  const params = useParams();
  const [ticketData, setTicketData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Track the last ID to prevent unnecessary fetch calls
  const [lastId, setLastId] = useState<string | null>(null);

  const EDITMODE: boolean = params.id === "new" ? false : true;

  // Fetch ticket only when ID changes and not on every re-render
  useEffect(() => {
    const fetchTicketData = async () => {
      if (EDITMODE && params.id !== "new" && params.id !== lastId) {
        setLoading(true);
        const updateTicketData = await getTicketById(params.id);
        console.log("------ooo---------")
        console.log(updateTicketData)
        setTicketData(updateTicketData);
        setLoading(false);
        setLastId(params.id); // Update last fetched ID
      }
    };

    fetchTicketData();
  }, [params.id, EDITMODE, lastId]); // Add `lastId` to dependencies to prevent duplicate fetch

  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Show loading state while fetching
      ) : (
        <TicketForm   /> // Pass ticket data to form
      )}
    </div>
  );
};

export default TicketPage;
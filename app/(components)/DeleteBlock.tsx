"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


interface DeleteBlockProps{
  id: string;
}

const DeleteBlock: React.FC<DeleteBlockProps> = ({ id }) => {

  const router = useRouter();

  const deleteTicket = async() => {
    try {
      const res = await fetch(`/api/Tickets/${id}`, {
        method: "DELETE", // Correct HTTP method for deletion
      });

      if (res.ok) {
        console.log("Ticket deleted successfully");
        router.refresh();
      } else {
        console.error("Failed to delete ticket");
      }
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  }
  return (
    <FontAwesomeIcon 
      icon={faX} 
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
      />

    
  )
}

export default DeleteBlock;

// export default function DeleteBlock({id}) : React.FC<DeleteBlockProps> {

//   const deleteTicket = async() => {
//     const res = await fetch(`/api/Tickets/${id}`)
//   }
//   return (
//     <FontAwesomeIcon 
//       icon={faX} 
//       className="text-red-400 hover:cursor-pointer hover:text-red-200"/>

    
//   )
// }

 

 
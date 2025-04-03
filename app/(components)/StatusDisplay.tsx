import React from 'react'

interface StatusDisplayProps{
  status: string;
}




const StatusDisplay: React.FC<StatusDisplayProps>  = ({status}) => {

  function getColor(status: string): string{
   
    switch (status.toLowerCase()){
 
      case "open":
        return "bg-green-200 text-gray-700";
      case "closed":
        return "bg-slate-700";
      default:
        return "bg-yellow-200 text-gray-700";
    }

  }

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold  ${getColor(status)}`}>
       {status}

    </span>
  )
}

export default StatusDisplay



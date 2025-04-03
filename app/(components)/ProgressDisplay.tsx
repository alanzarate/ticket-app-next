import React from 'react'
interface ProgressDisplayProps{
  progress: number;
}

export const ProgressDisplay : React.FC<ProgressDisplayProps> = ({progress}) => {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5'>
        <div 
            className='bg-blue-600 h-2.5 rounded-full' 
            style={{width: progress}} >

        </div>
    </div>
  )
}

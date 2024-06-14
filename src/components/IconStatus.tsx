import React from 'react'
import { IoCheckmarkCircleSharp, IoCloseCircle } from 'react-icons/io5'

interface IconErrorStatusProps{
    status: boolean
}

const IconErrorStatus:React.FC<IconErrorStatusProps> = ({status}) => {
  return (
    <span>
      {status? <IoCloseCircle className='text-red-500 text-xl'/>
      : <IoCheckmarkCircleSharp className='text-green-500 text-xl'/> }
    </span>
  )
}

export {
    IconErrorStatus
}
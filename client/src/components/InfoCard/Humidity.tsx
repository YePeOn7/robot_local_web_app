'use client'
import { useDashboardContext } from '@/app/dashboard/context';
import React, { useEffect, useMemo, useState } from 'react'
import { IoWaterSharp } from 'react-icons/io5';

interface HumidityCardProps {
  className?: string
}

const HumidityCard: React.FC<HumidityCardProps> = ({className}) => {
  const { serverIp } = useDashboardContext();
  const [humidity, setHumidity] = useState<number>(0);

  return (
    <div className={`info-card flex flex-col items-center justify-between p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none ${className}`}>
      <IoWaterSharp className='text-7xl' />
      <h1 className='font-poppins'>Humidity</h1>
      <h1 className='font-poppins text-6xl font-bold'>{humidity.toFixed(1)}</h1>
      <h1 className='font-poppins'>%</h1>
    </div>
  )
}

export default HumidityCard

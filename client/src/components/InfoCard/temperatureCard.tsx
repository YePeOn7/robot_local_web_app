'use client'
import { useDashboardContext } from '@/app/dashboard/context';
import React, { useEffect, useMemo, useState } from 'react'
import { FaTemperatureFull } from 'react-icons/fa6';

interface TempCardProps {
  className?: string
}

const TemperatureCard: React.FC<TempCardProps> = ({className}) => {
  const { serverIp } = useDashboardContext();
  const [yaw, setYaw] = useState<number>(0);

  return (
    <div className={`info-card flex flex-col items-center justify-between p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none ${className}`}>
      <FaTemperatureFull className='text-7xl' />
      <h1 className='font-poppins'>Temperature</h1>
      <h1 className='font-poppins text-6xl font-bold'>{yaw.toFixed(1)}</h1>
      <h1 className='font-poppins'>&deg;C</h1>
    </div>
  )
}

export default TemperatureCard

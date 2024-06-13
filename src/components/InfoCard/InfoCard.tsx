'use client';

import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiBatteryPackAlt } from 'react-icons/gi';

import './style.css'

interface InfoCardProps {
  soc: number,
  voltage: number,
  current: number
}

const BatteryCard: React.FC<InfoCardProps> = ({ soc, voltage, current = 0 }) => {
  return (
    <div className='info-card flex flex-initial w-64 h-44 p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none'>
      <div className="info flex flex-col flex-1 justify-between">
        <div className='flex flex-col'>
          <span className='font-poppins font-light text-xl'>BATTERY</span>
          <span className='text-xl font-bold'>{voltage} V</span>
          <span className='text-xl font-bold'>{current} A</span>
        </div>
        <GiBatteryPackAlt className='text-5xl' />
      </div>
      <div className='radial-bar p-3 flex w-32'>
        <CircularProgressbar value={soc} maxValue={100} text={`${soc}%`} />
      </div>

    </div>
  )
}

export {
  BatteryCard
}
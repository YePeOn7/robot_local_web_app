'use client';

import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiBatteryPackAlt } from 'react-icons/gi';

import './style.css'
import { FaRegCompass } from 'react-icons/fa';
import { ImCompass } from 'react-icons/im';

interface InfoCardProps {
  soc: number,
  voltage: number,
  current: number
}

interface InfoImuProps {
  angle: number
}

const IMUCard: React.FC<InfoImuProps> = ({ angle }) => {
  return (
    <div className='info-card flex flex-1 w-64 h-44 p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none'>
      <div className="info flex flex-col flex-1 justify-between">
        <div className='flex flex-col'>
          <span className='font-poppins font-light text-xl'>IMU</span>
          <span className='text-xl font-bold'>{angle}&deg;</span>
        </div>
        <FaRegCompass className='text-5xl' />
      </div>
      <div className='radial-bar p-3 flex justify-center items-center'>
        <div className='circle-container relative'>
          <svg height="120" width="120" xmlns="http://www.w3.org/2000/svg">
            <circle r="60" cx="60" cy="60" style={{ fill: `var(--primary-color)` }} />
          </svg>
          <div className=''>
            <ImCompass className={`absolute top-1/2 left-1/2 text-[64px]`} style={{transform: `translate(-50%, -50%) rotate(${angle-45}deg)`}}/>
          </div>
        </div>
      </div>

    </div>
  )
}

const BatteryCard: React.FC<InfoCardProps> = ({ soc, voltage, current = 0 }) => {
  return (
    <div className='info-card flex flex-1 w-64 h-44 p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none'>
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
  BatteryCard,
  IMUCard
}
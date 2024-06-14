'use client';

import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiBatteryPackAlt } from 'react-icons/gi';

import './style.css'
import { FaRegCompass } from 'react-icons/fa';
import { ImCompass } from 'react-icons/im';
import { IconErrorStatus } from '../IconStatus';

interface InfoCardProps {
  soc: number,
  voltage: number,
  current: number
}

interface InfoImuProps {
  angle: number
}

interface MotorErrorProps {
  errorCode: number
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
            <ImCompass className={`absolute top-1/2 left-1/2 text-[64px]`} style={{ transform: `translate(-50%, -50%) rotate(${angle - 45}deg)` }} />
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

const MotorErrorCard: React.FC<MotorErrorProps> = ({ errorCode }) => {
  const [error, setError] = useState({
    left: {
      overVoltage: false,
      underVoltage: false,
      eepromError: false,
      overCurrent: false,
      overLoad: false,
      encoderValError: false,
      refVoltageError: false,
      halError: false,
      highTemp: false,
      encoderError: false,
    },
    right: {
      overVoltage: false,
      underVoltage: false,
      eepromError: false,
      overCurrent: false,
      overLoad: false,
      encoderValError: false,
      refVoltageError: false,
      halError: false,
      highTemp: false,
      encoderError: false,
    }
  })

  useEffect(() => {

  }, [errorCode])
  return (
    <div className='motor-error-code flex flex-col p-3 bg-white shadow-xl hover:shadow-none rounded-xl'>
      <h1 className='font-poppins font-semibold text-xl'>MOTOR ERROR STATUS</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>L</th>
            <th>R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Over Voltage</td>
            <td><IconErrorStatus status={error.left.overVoltage} /></td>
            <td><IconErrorStatus status={error.right.overVoltage} /></td>
          </tr>
          <tr>
            <td>Under Voltage</td>
            <td><IconErrorStatus status={error.left.underVoltage} /></td>
            <td><IconErrorStatus status={error.right.underVoltage} /></td>
          </tr>
          <tr>
            <td>EEPROM Error</td>
            <td><IconErrorStatus status={error.left.eepromError} /></td>
            <td><IconErrorStatus status={error.right.eepromError} /></td>
          </tr>
          <tr>
            <td>Over Current</td>
            <td><IconErrorStatus status={error.left.overCurrent} /></td>
            <td><IconErrorStatus status={error.right.overCurrent} /></td>
          </tr>
          <tr>
            <td>Over Load</td>
            <td><IconErrorStatus status={error.left.overLoad} /></td>
            <td><IconErrorStatus status={error.right.overLoad} /></td>
          </tr>
          <tr>
            <td>Enc Val Err</td>
            <td><IconErrorStatus status={error.left.encoderValError} /></td>
            <td><IconErrorStatus status={error.right.encoderValError} /></td>
          </tr>
          <tr>
            <td>Ref Voltage Err</td>
            <td><IconErrorStatus status={error.left.refVoltageError} /></td>
            <td><IconErrorStatus status={error.right.refVoltageError} /></td>
          </tr>
          <tr>
            <td>Hal Error</td>
            <td><IconErrorStatus status={error.left.halError} /></td>
            <td><IconErrorStatus status={error.right.halError} /></td>
          </tr>
          <tr>
            <td>High Temp</td>
            <td><IconErrorStatus status={error.left.highTemp} /></td>
            <td><IconErrorStatus status={error.right.highTemp} /></td>
          </tr>
          <tr>
            <td>Enc Err</td>
            <td><IconErrorStatus status={error.left.encoderError} /></td>
            <td><IconErrorStatus status={error.right.encoderError} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  BatteryCard,
  IMUCard,
  MotorErrorCard
}
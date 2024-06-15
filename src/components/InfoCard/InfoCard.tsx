'use client';

import React, { useEffect, useMemo, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiBatteryPack, GiBatteryPackAlt } from 'react-icons/gi';

import './style.css'
import { FaRegCompass } from 'react-icons/fa';
import { ImCompass } from 'react-icons/im';
import { IconErrorStatus } from '../IconStatus';
import YawTopic from '@/ros_topics/yaw';
import { Button } from "@/components/ui/button"

interface InfoCardProps {
  soc: number,
  voltage: number,
  current: number
  className?: string
}
interface BatteryProps {
  soc: number,
  voltage: number,
  current: number,
  className?: string
}

interface MotorErrorProps {
  errorCode: number
  className?: string
}
interface ImuCardProps {
  className?: string
}

const IMUCard: React.FC = () => {
  const [yaw, setYaw] = useState<number>(0);
  const yawTopic = useMemo(() => new YawTopic(), []);

  useEffect(() => {
    yawTopic.subscribe((msg) => {
      setYaw(msg.data);
    })

    return () => {
      yawTopic.unsubscribe();
    }
  }, [yawTopic])

  return (
    <div className='info-card flex flex-1 w-64 h-60 p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none'>
      <div className="info flex flex-col flex-1 justify-between">
        <div className='flex flex-col'>
          <span className='font-poppins font-light text-xl'>IMU</span>
          <span className='text-xl font-bold'>{yaw.toFixed(2)}&deg;</span>
        </div>
        <FaRegCompass className='text-5xl' />
      </div>
      <div className='radial-bar p-3 flex justify-center items-center'>
        <div className='circle-container relative'>
          <svg height="120" width="120" xmlns="http://www.w3.org/2000/svg">
            <circle r="60" cx="60" cy="60" style={{ fill: `var(--primary-color)` }} />
          </svg>
          <div className=''>
            <ImCompass className={`absolute top-1/2 left-1/2 text-[64px]`} style={{ transform: `translate(-50%, -50%) rotate(${-yaw - 45}deg)` }} />
          </div>
        </div>
      </div>

    </div>
  )
}

const IMUCardV2: React.FC<ImuCardProps> = ({className}) => {
  const [yaw, setYaw] = useState<number>(0);
  const yawTopic = useMemo(() => new YawTopic(), []);

  useEffect(() => {
    yawTopic.subscribe((msg) => {
      setYaw(msg.data);
    })

    return () => {
      yawTopic.unsubscribe();
    }
  }, [yawTopic])

  return (
    <div className={`info-card flex flex-col items-center justify-between p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none ${className}`}>
      <FaRegCompass className='text-7xl' />
      <h1 className='font-poppins'>IMU</h1>
      <h1 className='font-poppins text-6xl font-bold'>{yaw.toFixed(1)}</h1>
      <h1 className='font-poppins'>{'Degree(s)'}</h1>
    </div>
  )
}

const BatteryCard: React.FC<InfoCardProps> = ({ soc, voltage, current = 0 }) => {
  return (
    <div className='info-card flex flex-1 w-64 h-60 p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none'>
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

const BatteryCardV2: React.FC<BatteryProps> = ({ soc, voltage, current = 0, className }) => {
  return (
    <div className={`info-card flex flex-col items-center justify-evenly p-3 gap-2 bg-white shadow-lg rounded-xl hover:shadow-none ${className}`}>
      <GiBatteryPack className='text-6xl' />
      <h1 className='font-poppins'>Battery</h1>
      <div className='flex justify-center items-end'>
        <h1 className='font-poppins text-6xl font-bold'>{voltage}</h1>
        <h1 className='font-poppins text-lg'>%</h1>
      </div>
      <div className='flex w-full justify-between max-w-32'>
        <div className='text-center'>
          <h2 className='text-xs'>Voltage</h2>
          <h1 className='font-poppins font-bold'>{voltage} V</h1>
        </div>
        <div className='text-center'>
          <h2 className='text-xs'>Current</h2>
          <h1 className='font-poppins font-bold'>{current} A</h1>
        </div>
      </div>
    </div>
  )
}

const MotorErrorCard: React.FC<MotorErrorProps> = ({ errorCode, className }) => {
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

  const hexFormat = (value: number) => {
    let hex = value.toString(16);
    return hex.padStart(8, '0');;
  }

  useEffect(() => {
    setError({
      left: {
        overVoltage: !!(errorCode & 1),
        underVoltage: !!(errorCode >> 1 & 1),
        overCurrent: !!(errorCode >> 2 & 1),
        overLoad: !!(errorCode >> 3 & 1),
        encoderValError: !!(errorCode >> 5 & 1),
        refVoltageError: !!(errorCode >> 7 & 1),
        eepromError: !!(errorCode >> 8 & 1),
        halError: !!(errorCode >> 9 & 1),
        highTemp: !!(errorCode >> 10 & 1),
        encoderError: !!(errorCode >> 11 & 1),
      },
      right: {
        overVoltage: !!(errorCode >> 16 & 1),
        underVoltage: !!(errorCode >> 17 & 1),
        overCurrent: !!(errorCode >> 18 & 1),
        overLoad: !!(errorCode >> 19 & 1),
        encoderValError: !!(errorCode >> 21 & 1),
        refVoltageError: !!(errorCode >> 23 & 1),
        eepromError: !!(errorCode >> 24 & 1),
        halError: !!(errorCode >> 25 & 1),
        highTemp: !!(errorCode >> 26 & 1),
        encoderError: !!(errorCode >> 27 & 1),
      }
    })
  }, [errorCode])

  return (
    <div className={`motor-error-code-container flex flex-col gap-3 p-5 bg-white shadow-xl hover:shadow-none rounded-xl ${className}`}>
      <h1 className='font-poppins font-light text-lg text-center'>MOTOR</h1>
      <div className='bg-primary rounded-lg py-3'>
        <h1 className='font-poppins font-bold text-center'>Error Code</h1>
        <h2 className='font-poppins text-center'>{hexFormat(errorCode)}</h2>
      </div>
      <table className='motor-error-code-table'>
        <thead>
          <tr className='text-left '>
            <th>Parameter</th>
            <th className='text-center'>L</th>
            <th className='text-center'>R</th>
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
      <Button>Reset Error Code</Button>
    </div>
  )
}

export {
  BatteryCard,
  BatteryCardV2,
  IMUCard,
  IMUCardV2,
  MotorErrorCard,
}
import React, { FormEventHandler, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import FormUpgradeFirmware from './FormUpgradeFirmware'

const Content: React.FC = () => {
  return (
    <div className='bg-of-content py-7 h-screen bg-primary flex-1 '>
      <div className="content bg-bgColor h-full rounded-l-2xl px-6 py-4 overflow-y-scroll">
        <h1 className="page-title text-2xl font-semibold mb-12 font-poppins">Set Command</h1>
        <div className="flex flex-col gap-3 bg-white rounded-xl pb-5 overflow-hidden">
          <span className='w-full h-10 bg-primary flex items-center pl-5 font-bold'>Upgrade MCU Firmware</span>
          <FormUpgradeFirmware/>
        </div>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Dashboard

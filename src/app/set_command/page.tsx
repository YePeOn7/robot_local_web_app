import React from 'react'
import Sidebar from '@/components/Sidebar'
import { BatteryCardV2, IMUCardV2, MotorErrorCard } from '@/components/InfoCard/InfoCard'
import { SampleAreaChart, SampleChart1, SampleChart2, SampleChart3 } from '@/components/SampleCharts'
import PowerInfoCard from '@/components/PowerInfoCard'

const Content = () => {
  return (
    <div className='bg-of-content py-7 h-screen bg-primary flex-1 '>
      <div className="content bg-bgColor h-full rounded-l-2xl px-6 py-4 overflow-y-scroll">
        <h1 className="page-title text-2xl font-semibold mb-12 font-poppins">Set Command</h1>
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

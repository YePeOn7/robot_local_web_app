import React from 'react'
import Sidebar from '@/components/Sidebar'
import { BatteryCard, IMUCard } from '@/components/InfoCard/InfoCard'
import { SampleChart1, SampleChart2, SampleChart3 } from '@/components/SampleCharts'

const Content = () => {
  return (
    <div className='py-7 h-screen bg-primary flex-1 '>
      <div className="content bg-bgColor h-full rounded-l-2xl px-6 py-4 overflow-y-scroll">
        <h1 className="text-2xl font-semibold mb-12 font-poppins"> Dashboard</h1>
        <SampleChart1/>
        <SampleChart2/>
        <SampleChart3/>
        <div className='flex gap-3'>
          <BatteryCard soc={82} voltage={51.2} current={1.2}/>
          <IMUCard angle={0}/>
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

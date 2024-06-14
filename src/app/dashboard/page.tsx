import React from 'react'
import Sidebar from '@/components/Sidebar'
import { BatteryCard, IMUCard, MotorErrorCard } from '@/components/InfoCard/InfoCard'
import { SampleAreaChart, SampleChart1, SampleChart2, SampleChart3 } from '@/components/SampleCharts'
import { IconErrorStatus } from '@/components/IconStatus'

const Content = () => {
  return (
    <div className='py-7 h-screen bg-primary flex-1 '>
      <div className="content bg-bgColor h-full rounded-l-2xl px-6 py-4 overflow-y-scroll">
        <h1 className="text-2xl font-semibold mb-12 font-poppins"> Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <SampleChart1 />
          <SampleChart2 />
          <SampleChart3 />
          <SampleAreaChart />
        </div>
        <div className='flex gap-3'>
          <BatteryCard soc={82} voltage={51.2} current={1.2} />
          <IMUCard angle={0} />
        </div>
        <MotorErrorCard errorCode={1}/>
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

import React from 'react'
import Sidebar from '@/components/Sidebar'
import SampleCharts from '@/components/SampleCharts'
import { BatteryCard } from '@/components/InfoCard/InfoCard'

const Content = () => {
  return (
    <div className='py-7 h-screen bg-primary flex-1 '>
      <div className="content bg-bgColor h-full rounded-l-2xl px-6 py-4 overflow-y-scroll">
        <h1 className="text-2xl font-semibold mb-12 font-poppins"> Dashboard</h1>
        {/* <SampleCharts/> */}
        <div className='flex gap-3'>
          <BatteryCard soc={82} voltage={51.2} />
          <BatteryCard soc={82} voltage={51.2} />
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

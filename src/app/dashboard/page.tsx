import React from 'react'
import Sidebar from '@/components/Sidebar'

const HomePage = () => {
  return (
    <div className='p-7 bg-bgColor flex-1'>
      <h1 className="text-2xl font-semibold"> Home Page</h1>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <HomePage/>
    </div>
  )
}

export default Dashboard

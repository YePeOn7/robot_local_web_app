import React from 'react'
import Sidebar from '@/components/Sidebar'

const Content = () => {
  return (
    <div className='py-7  bg-primary flex-1'>
      <div className="content bg-bgColor h-full rounded-l-2xl px-4 py-2">
        <h1 className="text-2xl font-semibold"> Home Page</h1>
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

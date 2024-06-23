import React from 'react'
import Sidebar from '@/components/Sidebar'
import { getServerIPAddress } from '@/serverAction/getIp';
import ContentContainer from './content';

const Dashboard = async () => {
  const ip = await getServerIPAddress();
  console.log("Here the IP ---", ip);
  return (
    <div className='flex'>
      <Sidebar />
      <ContentContainer ip={ip}/>
    </div>
  )
}

export default Dashboard

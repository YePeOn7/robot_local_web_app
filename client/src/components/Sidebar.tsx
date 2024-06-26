'use client'

import Image from 'next/image'
import React, { useState } from 'react'
// import logo from '/logoFull.png'
import Link from 'next/link'
import { RiDashboardFill } from 'react-icons/ri'
import { FaChevronLeft } from 'react-icons/fa'
import { AiOutlineBarChart, AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'
import { MdPlaylistAddCheck, MdSpeed } from 'react-icons/md'
import { usePathname } from 'next/navigation'

interface ItemProps {
  href: string,
  icon: React.ReactNode,
  label: string,
  open: boolean
  active?: boolean
}

const SidebarItem: React.FC<ItemProps> = ({ href, icon, label, open, active = false }) => {
  return (
    <div className='relative'>
      <Link href={href} className={`flex items-center gap-x-4 px-4 py-2 cursor-pointer ${!active && 'hover:bg-light-white'} rounded-l-full ${active && 'bg-bgColor before:absolute before:right-0 before:top-10 before:w-10 before:h-10 before:rounded-full before:shadow-[15px_-15px_0_1px_#fbfbfb] after:absolute after:right-0 after:-top-10 after:w-10 after:h-10 after:rounded-full after:shadow-[15px_15px_0_0px_#fbfbfb]'}`}>
        <span className='text-2xl'>
          {icon}
        </span>
        <span className={`origin-left whitespace-nowrap ${!open && 'scale-0'}`}>
          {label}
        </span>
      </Link>
    </div>
  )
}

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const currentPath = usePathname();

  return (
    <div className={`sidebar bg-primary h-screen flex flex-col pl-3 py-5 pt-8 ${open ? 'w-72' : 'w-20'}`}>
      <div className='logo flex items-center justify-between min-h-14 pr-5'>
        <span className={`${!open ? 'w-0' : 'w-72'}`}>
          <Image src={'/logoFull.png'} height={50} width={200} alt='Archerobotics' priority={true} className="w-full h-auto"/>
        </span>
        <span className='w-10'>
          <FaChevronLeft className={`bg-white text-3xl py-1 px-2 rounded-lg cursor-pointer ${!open && 'rotate-180 ml-1'}`} onClick={() => { setOpen(!open) }} />
        </span>
      </div>

      <div className="flex flex-col mt-10 gap-2 flex-1">
        <SidebarItem href='/dashboard' icon={<RiDashboardFill />} label='Dashboard' open={open} active={currentPath === '/dashboard'} />
        <SidebarItem href='/set_command' icon={<MdSpeed />} label='Set Command' open={open} active={currentPath === '/set_command'}/>
        <SidebarItem href='/analytics' icon={<AiOutlineBarChart />} label='Analytics' open={open} active={currentPath === '/analytics'}/>
        <SidebarItem href='/autotest' icon={<MdPlaylistAddCheck />} label='Auto Test' open={open} active={currentPath === '/autotest'}/>
      </div>

      <div className="flex flex-col border-t border-black">
        <SidebarItem href='setting' icon={<AiOutlineSetting />} label='Setting' open={open} active={currentPath === '/setting'}/>
        <SidebarItem href='#' icon={<AiOutlineLogout />} label='Logout' open={open} />
      </div>
    </div>
  )
}

export default Sidebar
 
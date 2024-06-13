'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/../public/logoFull.png'
import Link from 'next/link'
import { RiDashboardFill } from 'react-icons/ri'
import { FaChevronLeft } from 'react-icons/fa'
import {  AiOutlineBarChart, AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'
import { MdSpeed } from 'react-icons/md'

interface ItemProps {
  href: string,
  icon: React.ReactNode,
  label: string,
  open: boolean
  active?: boolean
}

const Item: React.FC<ItemProps> = ({ href, icon, label, open, active = false }) => {
  return (
    <div>
      <Link href={href} className={`flex items-center gap-x-4 p-2 cursor-pointer hover:bg-light-white rounded-lg mt-2 ${active && 'bg-light-white'}`}>
        <span className='text-2xl'>
          {icon}
        </span>
        <span className={`origin-left ${!open && 'scale-0'}`}>
          {label}
        </span>
      </Link>
    </div>
  )
}

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-white h-screen flex flex-col p-5 pt-8 ${open ? 'w-72' : 'w-20'}`}>
      <div className='flex items-center justify-between min-h-14'>
        <Image src={logo} height={50} width={200} alt='' className={`overflow-hidden ${!open && 'w-0'}`} />
        <FaChevronLeft className={`bg-primary text-4xl p-2 rounded-lg cursor-pointer ${!open && 'rotate-180'}`} onClick={() => { setOpen(!open) }} />
      </div>

      <div className="flex flex-col flex-1">
        <Item href='#' icon={<RiDashboardFill />} label='Dashboard' open={open} />
        <Item href='#' icon={<MdSpeed />} label='Monitor' open={open} />
        <Item href='#' icon={<AiOutlineBarChart />} label='Analytics' open={open} />
      </div>

      <div className="flex flex-col border-t">
        <Item href='#' icon={<AiOutlineSetting />} label='Setting' open={open} />
        <Item href='#' icon={<AiOutlineLogout /> } label='Logout' open={open} />
      </div>
    </div>
  )
}

export default Sidebar

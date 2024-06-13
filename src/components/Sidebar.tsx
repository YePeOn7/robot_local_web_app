'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/../public/logoFull.png'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { RiDashboardFill } from 'react-icons/ri'
import { BsArrowLeftShort, BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse, BsSearch } from 'react-icons/bs'
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa'
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai'
import { PiEmpty } from 'react-icons/pi'

interface ItemProps {
  href: string,
  Icon: IconType,
  label: string
}

const Item: React.FC<ItemProps> = ({ href, Icon, label }) => {
  return (
    <div>
      <Link href={href} className='text-2xl'>
        <span>
          <Icon />
        </span>
        {label}
      </Link>
    </div>
  )
}

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [opensub, setOpensub] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <RiDashboardFill /> },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} relative`}>
      <FaChevronLeft className={`bg-white text-4xl p-2 rounded-full absolute top-9 -right-3 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`} onClick={() => { setOpen(!open) }} />

      <div className="inline-flex items-center">
        <AiFillEnvironment className={`bg-yellow-200 text-3xl rounded block float-left mr-2 ${!open && 'rotate-[360deg]'}`} />
        <h1 className={`text-3xl text-white origin-left font-semibold ${!open && 'scale-0'}`}>Taiwind</h1>
      </div>

      <div className={`flex min-h-10 items-center rounded-md bg-light-white mt-6 ${!open ? 'px-3' : 'px-4'} py-2`}>
        <span className={`text-white float-left text-lg cursor-pointer block ${open && 'mr-2'}`}>
          <BsSearch />
        </span>
        <input type="search" className={`text-base w-full text-white bg-transparent focus:outline-none ${!open && 'hidden'}`} placeholder='Search' />
      </div>

      <ul className='pt-2'>
        {Menus.map((menu, index) => (
          <div key={index}>
            <li className={`text-white flex items-center gap-x-4 p-2 cursor-pointer hover:bg-light-white rounded-lg ${menu.spacing ? 'mt-9' : 'mt-2'}`} key={index}>
              <span className='text-2xl block'>
                {menu.icon? menu.icon:<PiEmpty />}
              </span>
              <span className={`origin-left ${!open && 'scale-0'} flex-1`}>
                {menu.title} 
              </span>
              {menu.submenu &&
                <FaChevronDown className={`${opensub && 'rotate-180'}`} onClick={() => { setOpensub(!opensub) }} />}
            </li>

            {
              menu.submenuItems && opensub && open &&
              <ul className='text-white'>
                {menu.submenuItems.map((item, index) => (
                  <li key={index} className='flex items-center gap-x-4 p-2 pl-6 cursor-pointer hover:bg-light-white rounded-lg'>
                    {item.title} 
                  </li>
                ))}
              </ul>
            }
          </div>
        ))}
      </ul>

      {/* <div className="logo text-center">
        <Image src={logo} height={50} width={250} alt='' />
      </div> */}

      {/* <div className="menu-list flex flex-col gap-10 h-full bg-slate-300">
        <Item Icon={RiDashboardFill} href='#' label='Dashboard' />
        <Item Icon={RiDashboardFill} href='#' label='Dashboard' />
        <Item Icon={RiDashboardFill} href='#' label='Dashboard' />
      </div> */}
    </div>
  )
}

export default Sidebar

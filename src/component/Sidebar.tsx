import Image from 'next/image'
import React from 'react'
import logo from '@/../public/logoFull.png'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { RiDashboardFill } from 'react-icons/ri'

interface ItemProps {
  href: string,
  Icon: IconType,
  label: string
}

const Item: React.FC<ItemProps> = ({ href, Icon, label }) => {
  return (
    <>
      <Link href={href} className=''>
        <span>
          <Icon />
        </span>
        {label}
      </Link>
    </>
  )
}

const Sidebar = () => {
  return (
    <div className='menu flex flex-col gap-10 h-[94vh] bg-red-400'>
      {/* <div className="logo p-5">
        <Image src={logo} height={50} width={250} alt='' />
      </div>

      <div className="menu-list">
        <Item Icon={RiDashboardFill} href='#' label='Dashboard' />
        <Item Icon={RiDashboardFill} href='#' label='Dashboard' />
        <Item Icon={RiDashboardFill} href='#' label='Dashboard' />
      </div> */}

      {/* <div className='h-9 w-9 bg-black'>
      </div> */}
    </div>
  )
}

export default Sidebar

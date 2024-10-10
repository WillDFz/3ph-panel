import { Logout, Menu } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between bg-custom_gray shadow-md p-3'>
        <button className='p-2'>
            <Menu />
        </button>
        <Image src='/svg/logoTypo.svg' alt='logo' width={100} height={100} />
        <button className='p-2'>
            <Logout />
        </button>
    </header>
  )
}

export default Header
import React from 'react'

import {AiFillHome} from 'react-icons/ai'
import {AiOutlineMinusSquare} from 'react-icons/ai'
import logo from './assets/DoeasilyLogo.svg'

const Sidebar = () => {
  return (
    <div className='w-40 flex-col items-center justify-center min-h-screen border pt-10'>
        <img src={logo} className='pb-3'/>
        <div className='flex gap-2 items-center justify-center'>
            <AiFillHome/>
            <h3 className='text-2xl font-semibold'>Parties</h3>
            <AiOutlineMinusSquare/>
        </div>
        <div className='flex items-center justify-center bg-[#484848] text-white'>
            <h3 className='text-lg font-normal'>Karigar</h3>
        </div>
        <div className='flex items-center justify-center'>
            <h3 className='text-lg font-normal'>Bullions</h3>
        </div><div className='flex items-center justify-center'>
            <h3 className='text-lg font-normal'>Supplier</h3>
        </div><div className='flex items-center justify-center '>
            <h3 className='text-lg font-normal'>Customer</h3>
        </div>
        </div>
  )
}

export default Sidebar
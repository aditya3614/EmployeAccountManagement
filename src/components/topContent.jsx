import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs'
import popup from './assets/ExportPopup.svg';
import popup2 from './assets/ExportButton.svg';
import group from './assets/Group.svg'

const TopContent = ({setModalOpen}) => {
  return (

    <div className='mb-16 flex'>
        <div className='flex-col w-full'>
        <div className='flex ml-9 mt-4 justify-evenly rounded-lg bg-[#484848]  w-52 border-2'>
            <h4 className='text-white'>Gold</h4>
            <h4 className='text-white'>Silver</h4>
            <h4 className='bg-white rounded-sm pl-3 pr-8 '>Both</h4>
        </div>

        <div className='border-4 ml-9 mt-3 px-4 py-4 w-1/2 border-inherit rounded-lg'>
         <div className='flex-col'>
            <div className='flex gap-8'>
                <h3 className='font-semibold text-xl'>Party</h3>
                <button className='border shadow flex items-center gap-2 rounded-lg px-2 py-0 border-black' onClick={()=>setModalOpen(true)}><AiOutlinePlusCircle/> <h4>Add party</h4></button>
            </div>
            <div className='flex gap-16 mt-4'>
                <h3 className='font-normal'>Silver</h3>
                <h3 className='font-normal'>Gold</h3>
                <h3 className='font-normal'>Amount</h3>
            </div>
            <div className='flex gap-8 '>
                <h3 className='font-semibold text-[#bc5c5c]'>14.200kg</h3>
                <h3 className='font-semibold text-[#bc5c5c]'>25.966gm</h3>
                <h3 className='font-semibold text-[#55a654]'>&#8377; 1850.00</h3>
            </div>
            <div className='flex gap-16 '>
                <h3 className='font-semibold text-[#bc5c5c]'>Lena</h3>
                <h3 className='font-semibold text-[#bc5c5c]'>Lena</h3>
                <h3 className='font-semibold text-[#55a654]'>Dena</h3>
            </div>
            </div>   
        </div>

        </div>
        <div>
            <div className='ml-48 mt-4' >
            <BsPersonCircle size={25} color='#484848'/>
            </div>
            
        <div className=' mt-20 mr-4'>
        <img src={popup}/>
        </div>  
        <img src={popup2} className='mt-2 w-20 ml-36'/>
        </div>
        
       

    </div>
 


  )
}

export default TopContent
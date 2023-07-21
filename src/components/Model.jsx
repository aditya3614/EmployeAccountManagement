import React from "react";
import { useState } from "react";

import  {BiSolidCamera} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeletableChips from "./chips";


export default function Modal({closeModal,onSubmit,defaultValue}) {
  const [showModal, setShowModal] = React.useState(false);

  
  const [selectedOptions, setSelectedOptions] = React.useState([]);


  const [formState,setFormState]=useState(
    defaultValue || {
        partyName:"",
        mobileNumber:'',
        gold:'',
        silver:'',
        amount:'',
        pincode:'',
        city:'',
        address:'',

    }
  );
 
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleDelete = (option) => () => {
    setSelectedOptions((prevOptions) => prevOptions.filter((item) => item !== option));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   onSubmit(formState);
closeModal();

   
  };


  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOptions((prevOptions) => [...prevOptions, selectedValue]);
  };


  return (
    <>

  
  
          <div
            className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-[#707f95] text-lg  flex items-center gap-2 font-medium ">
                    Add Party <BiSolidCamera/>
                  </h3>
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  <MdCancel size={23} onClick={() => 
                  {
        closeModal();
      }} className="pointer"/>
                </div>
                {/*body*/}
                <div className="p-4 flex-col">
              



{/* 1st row */}
                

{/* 2nd row */}

<form class="bg-white  rounded px-8 pt-3 pb-2 mb-4">

<div className="flex mb-5 gap-4 items-end"> 

      <div className="w-1/3 ">
      <label class="block text-gray-700 text-sm font-semibold mb-2" >
        Party Group *
      </label>
      <select
        label="Select Party Groups"
        className="w-full p-2.5 text-gray-500 bg-white border border-current rounded-md  outline-none appearance-none"
        
        value={selectedOptions}
        onChange={handleOptionChange}
      >
        <option value="Karigar">Karigar</option>
        <option value="Bullion">Bullion</option>
        <option value="Supplier">Supplier</option>
        <option value="Customer">Customer</option>
      </select>
      </div>
      
<div className="flex">
<Stack spacing={3}>
    <div className="flex">
    {selectedOptions.map((option) => (
          <Chip

            key={option}
            label={option}

            onDelete={handleDelete(option)}
          />
        ))}
    </div>
        
      </Stack>
</div>
    
    </div>



    <div className="flex gap-5">
    <div class="mb-4">
      <label class="block text-black text-sm font-semibold mb-2" for="username">
        Name*
      </label>
      {/* <input onChange={handleChange} value={formState.name} class="border-current  border   rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Enter Name"/> */}
      <input name="partyName" type="text" onChange={handleChange} value={formState.partyName}  placeholder="Enter Name" class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
        Phone Number
      </label>
      <input name="mobileNumber" value={formState.mobileNumber} class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={handleChange} placeholder="Enter 10 digit number"/>
    </div>
    </div>
    




    
{/* row 3 */}
<div className="flex gap-5">
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
        Address
      </label>
      <input name="address" onChange={handleChange} value={formState.address} class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Address"/>
    </div>
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
        City
      </label>
      <input name="city" value={formState.city}  onChange={handleChange}  class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter City"/>
    </div>
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
        Pincode
      </label>
      <input name="pincode" onChange={handleChange} value={formState.pincode} class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Pincode"/>
    </div>
    </div>

    {/* row 4 */}
    <div className="flex gap-5">
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
        Gold
      </label>
      <input name="gold" onChange={handleChange} value={formState.gold} class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter value "/>
    </div>
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
       Silver
      </label>
      <input name="silver" onChange={handleChange} value={formState.silver}  class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter value"/>
    </div>
    <div class="mb-4">
    <label class="block text-black text-sm font-semibold mb-2" for="username">
        Amount
      </label>
      <input name="amount" onChange={handleChange} value={formState.amount}  class="border-current  border appearance-none  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter total amount"/>
    </div>
    </div>


    </form>










                </div>
           
             
                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 gap-3  rounded-b">
                  <button
                    className="border-slate-600 border rounded-lg  background-transparent font-medium  px-6 py-1 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
             closeModal();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="border-slate-600 border rounded-lg  bg-[#484848] font-medium  px-6 py-1 text-md text-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) 
   

}
import React from "react";

export default function Navbar(){
    return (
        <div>
        <nav className='flex flex-row space-x-8 items-center justify-center bg-blue-500'>
        <img src="logo.svg" width={"100px"}/>
          <div>
            <input 
              className='w-[400px] bg-[#808080] border shadow rounded'
              placeholder='Search for Products, Brands and More'
              type='text'
            />
            <button className='bg-blue-700 text-white rounded p-2'>Search</button>
          </div>
          <button className='m-2 p-2 bg-red-400'>Home</button>
          <a href="/cart" className='m-2 p-2 bg-green-500'>Cart</a>
          <a href="/login" className='m-2 p-2 bg-yellow-400'>Login</a>
        </nav>
      </div>
    )
}
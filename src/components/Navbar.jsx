import React from 'react'
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=' w-screen mx-auto py-6 bg-[#FFBF1C]  text-[#FFFF80] h-[12%]'>
      <ul className='w-full flex justify-center items-center'>
        <li className='inline roboto-regular text-base'><a href="">Home</a></li>
        <li className='ml-[40%] inline-block roboto-regular text-base'><a href="">About</a></li>
        <li className='ml-5 roboto-regular inline-block text-base'><a href="">Works</a></li>
        <li className='ml-5 roboto-regular inline-block text-base'><a href="">Contact</a></li>
        <li className='ml-5  inline-block text-2xl'><a href=""><MdDarkMode /></a></li>

      </ul>
    </div>
  )
}

export default Navbar
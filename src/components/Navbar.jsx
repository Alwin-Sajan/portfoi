import React from 'react'
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const dcl = ['#092635',
  '#1B4242',
  '#5C8374',
  '#9EC8B9'];

  const Lcl = ['#FFFF80',
    '#FFAA80',
    '#FF5580',
    '#FF0080',
  'white']

  
  return (
    <div className={`w-full mx-auto py-6 bg-[]  ${darkMode?'text-gray-400':'text-[#FFBF1C]'} h-[12%]`}>
      <ul className='w-full flex justify-center items-center'>
        <li className='inline roboto-regular text-xl'><a href="">Home</a></li>
        <li className='ml-[40%] inline-block roboto-regular text-xl'><a href="#About">About</a></li>
        <li className='ml-5 roboto-regular inline-block text-xl'><a href="#works">Works</a></li>
        <li className='ml-5 roboto-regular inline-block text-xl'><a href="#contact">Contact</a></li>
        <li className='ml-5  inline-block text-2xl'><button onClick={toggleDarkMode}><MdDarkMode /></button></li>

      </ul>
    </div>
  )
}

export default Navbar
// SideNavbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdHome, MdInfo, MdWork, MdContactMail, MdDarkMode } from 'react-icons/md';
import menu_icon from '../assets/menu_icon.png'


const SideNavbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () =>{
    setIsOpen(true)
  }
  
  return (<>
    {!isOpen?<button className='fixed top-0 z-50  h-20 left-4 w-full  items-center bg-opacity-75 py-6 ' onClick={open}><motion.img whileTap={{scale:1.3,}} className='w-16 h-16' src={menu_icon} alt="" /></button>
    :<motion.div 
      className={`fixed top-0 z-50 left-0 h-16 flex flex-col w-full  items-center bg-opacity-75 py-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <ul className="w-full flex justify-around items-center">
        <li className="mb-6">
          <a href="/">
            <MdHome size={28} className={`${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </a>
          
        </li>
        <li className="mb-6">
          <a href="#About">
            <MdInfo size={28} className={`${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </a>
        </li>
        <li className="mb-6">
          <a href="#works">
            <MdWork size={28} className={`${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </a>
        </li>
        <li className="mb-6">
          <a href="#contact">
            <MdContactMail size={28} className={`${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </a>
        </li>
        <li className="mb-6">
          <button onClick={toggleDarkMode}>
            <MdDarkMode size={28} className={`${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </button>
        </li>
        <li className="mb-6">
          <button className=' text-2xl' onClick={()=>setIsOpen(false)}>X</button>
          
        </li>
      </ul>
    </motion.div>}
    </>
  );
};

export default SideNavbar;

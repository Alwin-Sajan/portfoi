// SideNavbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdHome, MdInfo, MdWork, MdContactMail, MdDarkMode } from 'react-icons/md';


const SideNavbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () =>{
    setIsOpen(true)
  }
  return (<>

    <motion.div 
      className={`fixed top-0 z-50 left-0 h-16 flex flex-col w-full  items-center bg-opacity-75 py-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
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
      </ul>
    </motion.div>
    </>
  );
};

export default SideNavbar;

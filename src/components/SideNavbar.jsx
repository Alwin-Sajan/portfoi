// SideNavbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdHome, MdInfo, MdWork, MdContactMail, MdDarkMode } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx'; // Cleaner close icon
import menu_icon from '../assets/menu_icon.png';
import { HiMenuAlt3 } from 'react-icons/hi';

const SideNavbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);

  return (
    <>
      {!isOpen ? (
        <button
        className="fixed top-4 left-4 z-50 bg-opacity-75 p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        onClick={open}
      >
        <HiMenuAlt3
          size={32}
          className={`${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}
        />
      </button>
      ) : (
        <motion.div
          className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-center shadow-md ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ul className="flex justify-around items-center w-full max-w-screen-lg px-4">
            <li>
              <a href="/portfoi" className="hover:text-blue-500 transition-colors duration-200">
                <MdHome size={26} />
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-blue-500 transition-colors duration-200">
                <MdInfo size={26} />
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-blue-500 transition-colors duration-200">
                <MdWork size={26} />
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">
                <MdContactMail size={26} />
              </a>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                <MdDarkMode size={26} />
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-red-400 transition-all duration-200"
              >
                <RxCross2 size={26} />
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default SideNavbar;

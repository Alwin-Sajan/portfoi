import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import './App.css';
import Reveal from './components/Reveal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Works from './components/Works';
import About from './components/About';
import Bio from './components/Bio';
import BioSection from './components/BioSection';
import Services from './components/Services';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

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
    <>
      <div className={`h-auto Main relative w-full  ${darkMode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
        {window.innerWidth > 500 ? <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> : <SideNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

        <div className={`lg:w-full ${darkMode?'bg-gray-800':' bg-[#ffbf1c]'} opacity-100  max-md:grid lg:h-[80vh] lg:mb-8 max-md:relative max-md:pb-96 box-border  lg:mt-0 lg:flex justify-center items-center`}>
          <div className={`${darkMode?'max-md::bg-slate-700':'max-md::bg-[#ffbf1c]'} max-md:opacity-85  max-md:py-48 max-md:w-[100%] max-md:absolute max-md:z-10 max-md:mt-72 max-md:p-16  lg:p-8 max-md:top-0 max-md:left-0`}>
            <Reveal>
              <h4 className={`${darkMode?'lg:text-[#7021c5]':'text-[#544c3b]'} lg:text-2xl max-md:text-2xl protest-guerrilla-regular`}>Hey, I'm</h4>
              <h1 className={`lg:text-8xl max-md:text-5xl ${darkMode ? 'lg:text-[#7021c5]' : 'lg:text-[#544c3b]'} max-md:w-fit max-md:px-2 p-2 protest-guerrilla-regular`}>Alwin Sajan!</h1>
              <ul className='inline-block max-md:px-2'>
                <li className='w-8 h-8 inline-block'>
                  <a href="https://www.linkedin.com/in/alwin-sajan-102177255/" target='_blank' rel='noopener noreferrer'>
                    <img className='rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="LinkedIn" />
                  </a>
                </li>
                <li className='w-8 h-8 inline-block ml-4'>
                  <a href="https://github.com/Alwin-Sajan" target='_blank' rel='noopener noreferrer'>
                    <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png" alt="GitHub" />
                  </a>
                </li>
                <li className='w-8 h-8 inline-block ml-4'>
                  <a href="https://www.instagram.com/_present_legend_/" target='_blank' rel='noopener noreferrer'>
                    <img className='rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
          <div className=''>
            <Reveal>
              <motion.img
                initial={{ y: 0, scale: 0.89 }}
                animate={{ y: [0, 10, 0], scale: [0.96, 1, 0.97] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                src="https://avatars.githubusercontent.com/u/116751380?v=4"
                className={`bounded-full lg:ml-56 max-md:mt-20 lg:w-60 max-md:hidden lg:border-solid lg:border-8 lg:m-4 ${darkMode ? 'lg:border-[#7021c5]' : 'lg:border-[#544c3b]'} lg:rounded-full`}
                alt="Alwin Sajan"
              />
              <img
                src="https://avatars.githubusercontent.com/u/116751380?v=4"
                className={`bounded-full relative lg:hidden max-md:block rounded-b-[42%] max-md: lg:w-60 lg:border-solid lg:border-8 lg:m-4 ${darkMode ? 'lg:border-[#7021c5]' : 'lg:border-[#FFBF1C]'} lg:rounded-full`}
                alt="Alwin Sajan"
              />
            </Reveal>
          </div>
        </div>

        <BioSection darkMode={darkMode}/>

        <Services darkMode={darkMode}/>

        <Works darkmode={darkMode} />

        <div className={`w-full h-auto ${darkMode?'bg-slate-800':'bg-[#FFFF80]'} mt-16 pt-8 pr-4 py-28`}>
          <h2 className={`text-3xl font-bold protest-guerrilla-regular ${darkMode?'text-[#ffff80]':'text-[#544c3b]'}  w-full text-center  pt-8 `}>Skills</h2>
          <ul className='mt-16 grid justify-center lg:grid-cols-5 max-md:grid-cols-2 gap-8  w-full lg:px-28 max-md:px-8 '>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Java</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Python</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Reactjs</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Javascript</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>CSS</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>HTML</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>MySQL</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Design</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Tailwind css</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Leadership</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Problem solving</li>
          </ul>
        </div>

      {/* <Bio darkMode={darkMode}/> */}

        {/* <About darkMode={darkMode}/> */}




        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

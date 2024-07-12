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
      <div className={`h-auto Main relative w-full max-md:pt-24 overflow-hidden ${darkMode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
        {window.innerWidth > 500 ? <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> : <SideNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

        <div className={`lg:w-screen ${darkMode?'stri2':'stri'}  max-md:grid lg:h-[80vh] lg:mb-8 max-md:relative max-md:pb-72 box-border max-md:mt-4  lg:mt-0 lg:flex justify-center items-center`}>
          <div className={`${darkMode?'max-md:bg-slate-700':'max-md:bg-[#ffbf1c]'}  max-md:py-16 max-md:w-[70%] max-md:absolute max-md:z-10 max-md:mt-72 max-md:pl-4 lg:p-8 max-md:top-0 max-md:left-0`}>
            <Reveal>
              <h4 className={`${darkMode?'lg:text-[#ff5555]':'text-[#544c3b]'} text-xl roboto-bold`}>Hey, I'm</h4>
              <h1 className={`lg:text-6xl max-md:text-4xl lg:${darkMode ? 'text-[#ff5555]' : 'text-[#544c3b]'} max-md:w-fit max-md:px-8 p-2 roboto-bold`}>Alwin Sajan!</h1>
              <ul className='inline-block max-md:px-8'>
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
                className={`bounded-full lg:ml-56 max-md:mt-20 lg:w-60 max-md:hidden lg:border-solid lg:border-8 lg:m-4 ${darkMode ? 'lg:border-[#ff5555]' : 'lg:border-[#FFBF1C]'} lg:rounded-full`}
                alt="Alwin Sajan"
              />
              <img
                src="https://avatars.githubusercontent.com/u/116751380?v=4"
                className={`bounded-full relative lg:hidden max-md:block max-md: lg:w-60 lg:border-solid lg:border-8 lg:m-4 ${darkMode ? 'lg:border-[#ff5555]' : 'lg:border-[#FFBF1C]'} lg:rounded-full`}
                alt="Alwin Sajan"
              />
            </Reveal>
          </div>
        </div>

        <Works darkmode={darkMode} />

        <div className={`w-full h-auto ${darkMode?'bg-slate-800':'bg-[#FFFF80]'} mt-16 pt-8 pr-4 py-28`}>
          <h2 className={`text-3xl font-bold roboto-black ${darkMode?'text-[#ffff80]':'text-[#544c3b]'}  w-full text-center  pt-8 `}>Skills</h2>
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

      <Bio darkMode={darkMode}/>

        {/* <About darkMode={darkMode}/> */}


        <div className={`${darkMode?'bg-gray-800 text-[#ffff80]':'bg-[#ffff80] text-[#544c3b]'} lg:w-[100vw] lg:h-[50vh] rounded  p-8 my-16  lg:flex items-center`}>
          <h3 className='roboto-black ml-28 text-3xl  '>Services</h3>
          <ul className='lg:flex max-md:grid justify-center items-center w-[100%] max-md:mt-20  gap-8 overflow-hidden'>
            <li className='w-60 h-auto '>
              <img className='rounded-lg' src="https://media.istockphoto.com/id/1402285381/vector/d-logo-design-and-template-creative-d-icon-initials-based-letters-in-vector.jpg?s=612x612&w=0&k=20&c=tIjfOJgtpV_92-Zw0lUFgguWYameGe4DJdAslBSJdPw=" alt="" />
              <p className='p-2 roboto-bold text-center'>Design</p>
            </li>
            <li className='w-60 h-auto'>
              <img className='rounded-lg' src="https://cdn-icons-png.flaticon.com/512/12953/12953846.png" alt="" />
              <p className='p-2 roboto-bold text-center'>Website Creation</p>
            </li>
            <li className='w-60 h-auto'>
              <img className='rounded-lg' src="https://cdn-icons-png.flaticon.com/512/243/243940.png" alt="" />
              <p className='p-2 roboto-bold text-center'>Tech Support</p>
            </li>
          </ul>
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

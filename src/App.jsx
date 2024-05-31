import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Reveal from './components/Reveal';
// import useAnim from './components/useAnim';
import { motion, spring } from 'framer-motion';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {

  return (
    <>
      <div className=" h-auto Main">
        <Navbar />

        <div className="w-screen mb-10 mt-24 flex justify-center items-center">
          <div>
            <Reveal>
              <h4 className='text-[#FF5580] text-xl roboto-bold'>Hey, I'm</h4>
              <h1 className="text-6xl text-[#FF5580] p-2 roboto-bold">Alwin Sajan!</h1>
              <ul className='inline-block'>
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
          <Reveal>

            <motion.img
              initial={{
                top: '-150px',

              }}
              animate={{
                y: '0px',


              }}

              transition={{
                duration: 0.5,
                delay: 1,
                type: spring
              }}



              src="https://avatars.githubusercontent.com/u/116751380?v=4"
              className='bounded-full ml-60 w-60 border-solid border-8 border-[#FFBF1C] rounded-full'
              alt="Alwin Sajan"
            />
          </Reveal>

        </div>




        <div className='mt-55 flex justify-center h-screen items-center'>

          <div className='w-[80%] bg-[#FFBF1C] h-[20vw] rounded-2xl' id='About'>
            <Reveal>
              <h2 className='text-3xl font-bold roboto-black  w-full text-center pt-10 pl-4'>About Me</h2>
              <p className='pl-8 pt-2 font-medium'>I am Alwin Sajan</p>
            </Reveal>
          </div>
        </div>


        <div className='flex w-screen h-screen justify-between'>
          <div className='w-[40vw] h-[70vh] bg-[#FF5580]'>

          </div>
          <div className='w-[15vw] h-[100vh] bg-[#FFFF80]'>

          </div>
          <div className='mt-[30vh] w-[40vw] h-[70vh] p-4 bg-[#ffbf1c]'>
            <Reveal>
              <h3 className=''>My works</h3>
            </Reveal>
          </div>

        </div>
    
        <div className=' bg-[#ff5580] w-[100vw] h-[50vh] rounded p-8 my-10'>
          {/* <Reveal> */}
            <ul className='flex justify-center items-center w-[100%] gap-8 overflow-hidden '>
              <li className='w-60 bg-white h-60'>hi</li>
              <li className='w-60 bg-white h-60'>hi</li>
              <li className='w-60 bg-white h-60'>hi</li>
              
            </ul>
          {/* </Reveal> */}
        </div>


        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default App;

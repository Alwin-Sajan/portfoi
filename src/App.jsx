import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Reveal from './components/Reveal';
import useAnim from './components/useAnim';

const App = () => {
  return (
    <>
      <div className="bg-[#FFFF80] h-auto ">
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
            <img src="https://avatars.githubusercontent.com/u/116751380?v=4" className='bounded-full ml-60 w-60 border-solid border-8 border-[#FFBF1C] rounded-full' alt="Alwin Sajan" />
          </Reveal>
        </div>


        <useAnim />

        <div className='mt-55 flex justify-center h-screen items-center'>
          <div className='w-[80%] bg-[#FF5580] h-[20vw]'></div>
        </div>
      </div>
    </>
  );
};

export default App;

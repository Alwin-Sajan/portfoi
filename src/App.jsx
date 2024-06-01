import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import './App.css';
import Reveal from './components/Reveal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Works from './components/Works';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className={`h-auto Main w-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {window.innerWidth > 500 ? <Navbar /> : <SideNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

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
              initial={{ y: 0 ,scale:0.89}}
              animate={{ y: [0, 10, 0], scale:[0.96,1,0.97] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              src="https://avatars.githubusercontent.com/u/116751380?v=4"
              className='bounded-full ml-56 w-60 border-solid border-8 m-4 border-[#FFBF1C] rounded-full'
              alt="Alwin Sajan"
            />
          </Reveal>
        </div>

        <div className='mt-60 flex w-screen h-screen justify-between mb-10 ' id='About'>
          <div className='w-[40vw] h-[70vh] bg-[#FFBF1C] text-[#544c3b] boxshdl p-4 -ml-1 pl-8 rotate-1'>
            <Reveal>
              <h2 className='text-3xl font-bold roboto-black  w-full text-center  pl-4'>About Me</h2>
              <p className='py-8 pt-4 fira-400'>Welcome to my digital realm! I am a passionate and
                versatile developer, currently pursuing my B.Tech in Computer Science at Toc H Institute
                of Science & Technology. Navigating the dynamic landscape of technology, I find joy in
                exploring the intricate world of programming and design. Proficient in HTML, CSS, Java,
                Python, JavaScript, C, and MySQL, I seamlessly blend aesthetics with functionality.</p>
              <p className='py-8 pt-1 fira-400'>
                Beyond coding, I have a keen eye for design and am actively exploring the realms of
                Artificial Intelligence and Machine Learning. I am passionate about leveraging these
                cutting-edge technologies to solve real-world challenges. As a music enthusiast, I
                find harmony between coding and melodies. In my role as a front-end developer, I
                bring user interfaces to life, prioritizing intuitive designs for engaging user
                experiences. Join me on this dynamic journey as I navigate the diverse landscapes
                of programming, design, and emerging technologies, aiming to make a positive impact
                through innovation.</p>
            </Reveal>
          </div>

          <div className='w-[14vw] h-[100vh] bg-[#FFFF80] '>
            <h2 className='text-3xl font-bold roboto-black text-black  w-full text-center pt-8 '>Skills</h2>
            <ul className='mt-8 grid justify-center gap-8 w-full '>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Java</li>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Python</li>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Reactjs</li>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Javascript</li>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>MySQL</li>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Design</li>
              <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Tailwind css</li>
            </ul>
          </div>

          <div className='mt-[30vh] w-[40vw] h-[70vh] p-4 bg-[#ffd51c] boxshdr flex -rotate-1'>
            <img className='w-auto mt-4 ml-4 h-[80%] rounded-lg inline-block rotate-1 boxshdr' src="https://media.licdn.com/dms/image/D5622AQEaqLhE0r5mSw/feedshare-shrink_800/0/1686475000708?e=2147483647&v=beta&t=rno5VrFq6ZoHZucRClzMJEqYAx53d1hzYShDcXXe7-E" alt="" />
            <div>
              <h3 className='m-8 mt-16 inline-block boxshdr bg-[#ffff80] text-black p-4 h-auto'>CSE Undergrad  Front-End Developer</h3>
              <h3 className='m-8 mt-4 inline-block boxshdr bg-[#ffff80] text-black p-4 h-auto'>B tech 2yr student at Toc H Institute
            of Science & Technology</h3>
            </div>
          </div>
        </div>

        <Works />

        <div className='bg-[#ffff80] w-[100vw] h-[50vh] rounded mt-10 p-8 my-10 flex items-center'>
          <h3 className='roboto-black ml-28 text-3xl'>Services</h3>
          <ul className='flex justify-center items-center w-[100%] gap-8 overflow-hidden'>
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

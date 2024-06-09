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
      <div className={`h-auto Main w-full max-md:pt-24  ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {window.innerWidth > 500 ? <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> : <SideNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

        <div className="lg:w-screen max-md:grid max-md:h-[50vh] box-border max-md:mt-20 mb-28 lg:mt-24 lg:flex justify-center  items-center">
          <div className='w-full'>
            <Reveal>
              <h4 className='text-[#FF5580] text-xl roboto-bold'>Hey, I'm</h4>
              <h1 className={`lg:text-6xl max-md:text-4xl ${darkMode ? 'text-[#ff5555]' : 'text-[#FF5580]'} max-md:w-fit max-md:px-8 p-2 roboto-bold`}>Alwin Sajan!</h1>
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
              initial={{ y: 0, scale: 0.89 }}
              animate={{ y: [0, 10, 0], scale: [0.96, 1, 0.97] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              src="https://avatars.githubusercontent.com/u/116751380?v=4"
              className={`bounded-full lg:ml-56 max-md:mt-20 w-60 border-solid border-8 m-4 ${darkMode ? 'border-[#ff5555]' : 'border-[#FFBF1C]'} rounded-full`}
              alt="Alwin Sajan"
            />
          </Reveal>
        </div>

        <div className='mt-60 lg:flex w-screen lg:h-screen justify-between mb-10 max-md:px-0 ' id='About'>

          <div className=' max-md:mx-8 lg:w-[40vw] lg:h-[70vh] bg-[#FFBF1C] text-[#544c3b] boxshdl p-4 -ml-1 pl-8 lg:rotate-1'>
            <Reveal>

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

          <div className='max-md:hidden'>
            <div className='lg:h-[30vh] p-1'>
              <h2 className={`text-7xl font-bold modak-regular w-full mt-8 lg:rotate-2 ${darkMode ? 'text-white' : 'text-[#544c3b]'} `}>About Me</h2>
            </div>

            <div className=' lg:w-[40vw]  lg:h-[70vh] p-4 bg-[#ffd51c] boxshdr lg:flex '>
              <img className='w-auto mt-4 ml-4 h-[80%] max-md:h-[50%] max-md:w-[50%] rounded-lg inline-block lg:rotate-2 ' src="https://media.licdn.com/dms/image/D5622AQEaqLhE0r5mSw/feedshare-shrink_800/0/1686475000708?e=2147483647&v=beta&t=rno5VrFq6ZoHZucRClzMJEqYAx53d1hzYShDcXXe7-E" alt="" />
              <div>
                <h3 className='m-8 mt-16 inline-block boxshdr bg-[#ffff80] text-[#544c3b] p-4 h-auto '>CSE Undergrad  Front-End Developer</h3>
                <h3 className='m-8 mt-4 inline-block boxshdr bg-[#ffff80] text-[#544c3b] p-4 h-auto'>B tech 2yr student at Toc H Institute
                  of Science & Technology</h3>
              </div>

            </div>
          </div>
        </div>

        <div className='w-full h-auto bg-[#FFFF80] mt-16 pt-8 pr-4 py-28'>
          <h2 className='text-3xl font-bold roboto-black text-[#544c3b]  w-full text-center  pt-8 '>Skills</h2>
          <ul className='mt-16 grid justify-center lg:grid-cols-4 max-md:grid-cols-2 gap-8  w-full lg:px-28 max-md:px-8 '>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Java</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Python</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Reactjs</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Javascript</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>MySQL</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Design</li>
            <li className='bg-[#FFBF1C] text-center p-2 min-w-[80%] roboto-regular rounded'>Tailwind css</li>
          </ul>
        </div>

        <Works />

        <div className='bg-[#ffff80] lg:w-[100vw] lg:h-[50vh] rounded mt-10 p-8 my-10 lg:flex items-center'>
          <h3 className='roboto-black ml-28 text-3xl text-[#544c3b] '>Services</h3>
          <ul className='lg:flex max-md:grid justify-center items-center w-[100%] text-[#544c3b] max-md:mt-20  gap-8 overflow-hidden'>
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

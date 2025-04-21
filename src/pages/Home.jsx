import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNavbar';
import '../App.css';
import Reveal from '../components/Reveal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Works from '../components/Works';
// import About from './components/About';
// import Bio from './components/Bio';
import BioSection from '../components/BioSection';
import Services from '../components/Services';
import Skills from '../components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    AOS.init();
  }, []);

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
      <div className={`h-auto Main relative w-full  ${darkMode ? 'bg-[#0b0b0b] text-white ' : 'bg-white text-[#544c3b] '}`}>
        {window.innerWidth > 500 ? <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> : <SideNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

        <div className={`w-full ${darkMode ? 'bg-[#272217]' : 'bg-[#ffbf1c]'} flex flex-col-reverse lg:flex-row items-center  max-md:pt-28 max-md:min-h-[75vh]  justify-between px-6 lg:px-28 py-14 lg:py-0 lg:h-[85vh]`}>

          {/* TEXT SECTION */}
          <div className={`text-center lg:text-left w-full lg:w-1/2 z-10 ${darkMode ? 'text-white' : 'text-[#544c3b]'}`}>
            <Reveal>
              <h4 className="text-2xl md:text-3xl lg:text-4xl mb-2 font-semibold tracking-wide">
                Hey, I'm
              </h4>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold protest-guerrilla-regular mb-4 ${darkMode ? 'text-[#00d1cd]' : 'text-[#4a3f2f]'}`}>
                Alwin Sajan
              </h1>
              <p className="text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed ">
                A full-stack developer blending AI, design, and innovation — building powerful, seamless digital experiences.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-5 mt-6">
                {[
                  {
                    href: "https://www.linkedin.com/in/alwin-sajan-102177255/",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png",
                    alt: "LinkedIn"
                  },
                  {
                    href: "https://github.com/Alwin-Sajan",
                    img: "https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png",
                    alt: "GitHub"
                  },
                  {
                    href: "https://www.instagram.com/_present_legend_/",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
                    alt: "Instagram"
                  }
                ].map(({ href, img, alt }) => (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10  shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <img className="w-10 h-10" src={img} alt={alt} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>



          <div data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-10 lg:mb-0 flex items-center justify-center relative overflow-visible">
            {/* Desktop animation */}
            <motion.div
              initial={{ y: 0, scale: 0.90 }}
              animate={{ y: [0, -12, 0], scale: [0.90, 1, 0.90] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden md:block"
            >
              <img
                src="https://avatars.githubusercontent.com/u/116751380?v=4"
                alt="Alwin Sajan"
                className={`w-40 md:w-72 lg:w-72 rounded-full border-4 md:border-8 ${darkMode ? 'border-[#00d1cd]' : 'border-[#4a3f2f]'}`}
              />
            </motion.div>

            {/* Mobile static image */}
            <div className="block md:hidden ">
              <img
                src="https://avatars.githubusercontent.com/u/116751380?v=4"
                alt="Alwin Sajan"
                className={`w-72 md:w-72 lg:w-72 rounded-full border-4 md:border-8 ${darkMode ? 'border-[#00d1cd]' : 'border-[#4a3f2f]'}`}
              />
            </div>
          </div>


        </div>


        {/* <div className={`lg:w-full ${darkMode?'bg-[#272217]':' bg-[#ffbf1c]'} opacity-100  max-md:grid lg:h-[80vh] lg:mb-8 max-md:relative max-md:pb-96 box-border  lg:mt-0 lg:flex justify-center items-center`}>
          <div className={`${darkMode?'max-md::bg-slate-700':'max-md::bg-[#ffbf1c]'} max-md:opacity-85  max-md:py-48 max-md:w-[100%] max-md:absolute max-md:z-10 max-md:mt-72 max-md:pl-16  lg:p-8 max-md:top-0 max-md:left-0`}>
            <Reveal>
              <h4 className={`${darkMode?'lg:text-[#00747a]':'text-[#544c3b]'} lg:text-5xl max-md:text-2xl `}>Hey, I'm</h4>
              <h1 className={`lg:text-8xl max-md:text-5xl ${darkMode ? 'lg:text-[#00747a]' : 'lg:text-[#544c3b]'} max-md:w-fit max-md:px-2 p-2 protest-guerrilla-regular`}>Alwin Sajan!</h1>
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
        </div> */}

        <BioSection darkMode={darkMode} />

        <Services darkMode={darkMode} />

        <Works darkMode={darkMode} />

        <Skills darkMode={darkMode} />

        {/* <Bio darkMode={darkMode}/> */}

        {/* <About darkMode={darkMode}/> */}


        <div
          className="w-full flex flex-col items-center justify-center py-12 px-6 lg:pb-32"
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{ minHeight: '50vh' }}
        >
          <h2 className={` ${darkMode ? "text-[#ffff80]" : ""} text-3xl lg:text-4xl font-bold mb-16 text-center protest-guerrilla-regular`}>
            Let's Connect
          </h2>

          <p className="text-center max-w-xl mb-10 text-base md:text-lg font-light">
            Whether you have an idea, a project, or just want to say hi — I'm always open to collaboration and conversation.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">

            {/* <a
              href="mailto:alwinsajanofficial@gmail.com"
              className="px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105
        shadow-lg backdrop-blur-md hover:shadow-2xl
        text-white border-cyan-400
        bg-gradient-to-r from-cyan-500 to-purple-600"
            >
              📧 Email Me
            </a> */}


            <a
              href="https://drive.google.com/file/d/1fcRW3r3TqyG6pNBr0nbDumUeW3Vge4Fm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105
                    shadow-lg backdrop-blur-md hover:shadow-2xl
                    text-white border-purple-400
                    bg-gradient-to-r from-purple-600 to-pink-600"
            >
              📄 View Resume
            </a>
          </div>
        </div>


        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;

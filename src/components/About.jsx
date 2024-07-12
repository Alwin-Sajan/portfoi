import React from 'react'
import Reveal from './Reveal'

const About = ({darkMode}) => {
  return (
    <div className='mt-60 lg: lg:mb-36 lg:flex w-screen lg:h-screen justify-between mb-10 max-md:px-0 ' id='About'>

          <div className={` max-md:mx-8 lg:w-[40vw] lg:h-[70vh] ${darkMode?'bg-slate-800 text-white':'bg-[#FFBF1C] text-[#544c3b]'} boxshdl p-4 -ml-1 pl-8 lg:rotate-1`}>
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

            <div className={` lg:w-[40vw]  lg:h-[70vh] p-4 ${darkMode?'bg-slate-600':'bg-[#ffd51c]'} boxshdr lg:flex `}>
              <img className='w-auto mt-4 ml-4 h-[80%] max-md:h-[50%] max-md:w-[50%] rounded-lg inline-block lg:rotate-2 ' src="https://media.licdn.com/dms/image/D5622AQEaqLhE0r5mSw/feedshare-shrink_800/0/1686475000708?e=2147483647&v=beta&t=rno5VrFq6ZoHZucRClzMJEqYAx53d1hzYShDcXXe7-E" alt="" />
              <div>
                <h3 className='m-8 mt-16 inline-block boxshdr bg-[#ffff80] text-[#544c3b] p-4 h-auto '>CSE Undergrad  Front-End Developer</h3>
                <h3 className='m-8 mt-4 inline-block boxshdr bg-[#ffff80] text-[#544c3b] p-4 h-auto'>B tech 2yr student at Toc H Institute
                  of Science & Technology</h3>
              </div>

            </div>
          </div>
        </div>
  )
}

export default About
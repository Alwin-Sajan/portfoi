import React from 'react';
import asp from '../assets/asp.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BioSection = ({darkMode}) => {
  AOS.init();
  return (
    
    <div data-aos="fade-up"
    data-aos-duration="2000" className=' flex justify-center lg:p-24 max-md:p-4 pt-28 max-md:pt-16 '>

    <div className={`${darkMode ?'bg-[#00747a] text-white':'bg-[#FFBF1C] text-[#544c3b]'} rounded-l-md lg:w-[50%] lg:p-8 max-md:p-4 `}>
      <h2 className='protest-guerrilla-regular text-3xl pb-8 ' >Bio Section</h2>
      <p className=' lg:text-lg roboto-regular'>
        I'm a B.Tech in Computer Science student at Toc H Institute
        of Science & Technology with a burning passion for web development. Fueled by a
        love for design, I weave functionality and aesthetics together to create user-friendly
        web experiences. My expertise lies in HTML, CSS, JavaScript, React, Node.js, and
        Express.js, alongside experience with various frameworks and databases like MySQL
        and MongoDB. Beyond code, I'm fascinated by Artificial Intelligence and Machine
        Learning, eager to explore their potential. My love for music translates into a
        keen focus on user-centered design, ensuring a harmonious user experience. As a
        team player, I thrive in collaborative settings. I'm a lifelong learner, always
        seeking new challenges to push my development skills. My mission? To leverage
        technology for innovative solutions that leave a positive impact.
      </p>
    </div>
    <div className={`${darkMode?"bg-[#00747a]":"bg-[#FFBF1C]"} max-md:hidden rounded-r-md w-[40.5%]`}>
      <img src={asp} className='opacity-75 rounded-r-md' alt="" />
    </div>
  </div>

  )
}

export default BioSection
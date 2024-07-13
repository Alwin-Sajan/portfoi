import React from 'react'
import alwin from '../assets/index.js'

const Bio = ({darkMode}) => {
  return (
    <div id='About' className={`lg:h-[80vh] w-full mt-16  mb-8 lg:flex items-end ${darkMode?'bg-slate-800 text-white':'bg-[#FFBF1C] text-[#544c3b]'}`}>
        <img src={alwin} className='h-[100%] max-md:hidden' alt="" />
        <div className={`lg:m-16 max-md:ml-4 text-[#544c3b] bg-[#FFFF80] w-full h-[80%] box-border p-12`}>
            <h2>About Me</h2>
            <p className='text-justify pt-4 ' >I'm a B.Tech in Computer Science student at Toc H Institute of Science & Technology 
                with a burning passion for web development. Fueled by a love for design, I weave functionality and aesthetics 
                together to create user-friendly web experiences. My expertise lies in HTML, CSS, JavaScript, React, Node.js, 
                and Express.js, alongside experience with various frameworks and databases like MySQL and MongoDB.

                Beyond code, I'm fascinated by Artificial Intelligence and Machine Learning, eager to explore their 
                potential. My love for music translates into a keen focus on user-centered design, ensuring a harmonious user experience.

                As a team player, I thrive in collaborative settings. I'm a lifelong learner, always seeking new challenges 
                to push my development skills. 
                My mission? To leverage technology for innovative solutions that leave a positive impact.</p>

        </div>
    </div>
  )
}

export default Bio
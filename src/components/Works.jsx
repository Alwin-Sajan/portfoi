import React, { useEffect } from 'react';
import Reveal from './Reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: 'NIST',
      image: 'https://cdn.worldvectorlogo.com/logos/nist.svg',
      link: 'https://collage-website-nist.vercel.app/',
      description: 'College Website'
    },
    {
      title: 'Quiz App',
      image: 'https://thumbs.dreamstime.com/b/quiz-icon-long-shadow-vector-98635928.jpg',
      link: 'https://alwin-sajan.github.io/Quiz-App/',
      description: 'GK testing website'
    },
    {
      title: 'Netflix Clone',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dCPFZ3snUnVpDvxtN0qS2bn13ZCppoC11FFvqcuPZtuUycVi_rpTZKaE5Vf2Dy9xmjo&usqp=CAU',
      link: 'https://neetocode.com/site/alwin-sajan/HCJ-BPX',
      description: 'Clone Website for Netflix'
    },
    {
      title: 'Uifry',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlxRVEnkTxLHnWzXjp0Y9g5zGZS8cTtGojw&s',
      link: 'https://uifry-coral.vercel.app/',
      description: 'Financial Decisions Website'
    },
    {
      title: 'Portfolio Site',
      image: 'https://i.pinimg.com/736x/17/c1/39/17c1393152623c2636ecbca5730f7ade.jpg',
      link: '#',
      description: 'React-based personal portfolio'
    },
    {
      title: 'Waste Detector',
      image: 'https://cdn.dribbble.com/userupload/16078982/file/original-dbe8bee92177b9874ed2217be029a2d9.png?format=webp&resize=400x300&vertical=center',
      link: '#',
      description: 'AI-based litter detection system'
    },
    {
      title: 'Hagana',
      image: 'https://raw.githubusercontent.com/Alwin-Sajan/Hagana-HACK-A-ADDICT/refs/heads/main/hagana/android/app/src/main/res/mipmap-xxxhdpi/hg_new.png',
      link: 'https://github.com/Alwin-Sajan/Hagana-HACK-A-ADDICT',
      description: 'Flutter App support individuals to overcome addiction'
    },
    {
      title: 'Hostel Management System',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyR9CZX7gczxas9lh7z3XlSp4X5yUXZZF3Q&s',
      link: 'https://github.com/Alwin-Sajan/Hostel-Management',
      description: 'Web app to manage hostel operations'
    }
  ];

  return (
    <div className={`lg:min-h-screen w-full lg:mt-16 py-16 ${darkMode ? 'bg-[#272217]' : 'bg-[#ffbf1c]'} text-[#ffff80]`} id='works'>
      <h3
        className={`protest-guerrilla-regular pt-8 pb-4 text-4xl text-center ${darkMode ? 'text-[#ffff80]' : 'text-[#544c3b]'}`}
        data-aos="fade-down">
        Works
      </h3>

      <p className={`text-center px-4 md:px-16 mt-4 text-base md:text-lg ${darkMode ? 'text-[#e0e0a8]' : 'text-[#544c3b]'}`}
        data-aos="fade-up">
        Explore my journey through impactful and hands-on projects that blend code, creativity, and problem-solving. Here are some highlights of what I've built so far:
      </p>

      <ul className="flex flex-wrap justify-center items-start pt-14 gap-10 px-4 md:px-10">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <li className='lg:w-60 w-80 min-h-[80%]  rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className='w-full object-cover rounded' />
                <h4 className={`mt-4 text-xl font-semibold text-center ${darkMode ?"text-[#ffff80]": "text-[#544c3b]"}`}>{project.title}</h4>
              </a>
              <p className={` text-center  ${darkMode ?"text-gray-200 ":"text-gray-800" } mt-2`}>{project.description}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
};

export default Works;

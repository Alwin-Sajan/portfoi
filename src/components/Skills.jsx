import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'ReactJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind', img: 'https://github.com/devicons/devicon/tree/v2.16.0/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Web Scraping', img: 'https://cdn-icons-png.flaticon.com/512/9335/9335772.png' },
    { name: 'AI', img: 'https://cdn-icons-png.flaticon.com/512/3105/3105613.png' },
    { name: 'Problem Solving', img: 'https://cdn-icons-png.flaticon.com/512/2784/2784460.png' },
    { name: 'Leadership', img: 'https://cdn-icons-png.flaticon.com/512/10813/10813991.png' },
    { name: 'Design', img: 'https://cdn-icons-png.flaticon.com/512/1823/1823578.png' },
  ];

  return (
    <div className={`w-full my-28 py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#ffbf1c]'} transition-colors duration-500`}>
      <h2 className={`text-4xl font-bold text-center mb-12 protest-guerrilla-regular ${darkMode ? 'text-[#ffff80]' : 'text-[#333]'}`}>
        Tech Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 sm:px-12 lg:px-28">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="relative bg-white backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl group overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md" />
            <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain z-10 mb-4" />
            <span className="roboto-medium text-base z-10 text-black">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

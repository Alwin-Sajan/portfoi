import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: 'Design',
      img: 'https://media.istockphoto.com/id/1402285381/vector/d-logo-design-and-template-creative-d-icon-initials-based-letters-in-vector.jpg?s=612x612&w=0&k=20&c=tIjfOJgtpV_92-Zw0lUFgguWYameGe4DJdAslBSJdPw=',
      asos:"fade-up-right"
    },
    {
      title: 'Website Creation',
      img: 'https://cdn-icons-png.flaticon.com/512/12953/12953846.png',
      asos:"zoom-in-up"
    },
    {
      title: 'Tech Support',
      img: 'https://cdn-icons-png.flaticon.com/512/243/243940.png',
      asos:"fade-up-left"
    },
  ];

  return (
    <div
      className={`${
        darkMode ? 'bg-[#272217] text-[#ffff80]' : ' text-[#544c3b]'
      } w-full py-16 px-4 lg:px-24 rounded-lg my-16 transition-colors duration-500`}
    >
      <h3
        className="protest-guerrilla-regular text-4xl text-center mb-20"
        data-aos="fade-down"
      >
        Services
      </h3>

      <ul className="flex flex-wrap justify-center gap-12 overflow-hidden">
        {services.map((service, index) => (
          <li
            key={index}
            className="w-72 p-4 h-auto bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden  hover:shadow-xl transition-all duration-300"
            data-aos={service.asos}
            data-aos-delay={index * 200}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-72  object-cover rounded-t-xl"
            />
            <p className="p-4 roboto-bold text-center text-lg">{service.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;

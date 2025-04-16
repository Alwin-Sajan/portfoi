import { motion } from 'framer-motion';
import Reveal from './Reveal'; // Assuming you have a Reveal component

const Main = ({ darkMode }) => {
  return (
    <div className={`lg:h-[85vh] w-full relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-0 ${darkMode ? 'bg-[#272217]' : 'bg-[#ffbf1c]'}`}>
      
      {/* TEXT SECTION */}
      <div className={`z-10 max-w-xl lg:max-w-2xl text-start ${darkMode ? 'text-white' : 'text-[#544c3b]'}`}>
        <Reveal>
          <h4 className="text-xl md:text-2xl mb-2 font-medium">
            Hey, I'm
          </h4>
          <h1 className={`text-5xl md:text-7xl font-bold protest-guerrilla-regular mb-4 ${darkMode ? 'text-[#00d1cd]' : 'text-[#4a3f2f]'}`}>
            Alwin Sajan
          </h1>
          <p className="text-md md:text-lg max-w-md mb-6">
            I build intelligent, scalable, and design-driven solutions with React, AI, and more.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/alwin-sajan-102177255/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all"
            >
              <img className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Alwin-Sajan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all"
            >
              <img className="w-5 h-5" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png" alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/_present_legend_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all"
            >
              <img className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* IMAGE SECTION */}
      <Reveal>
        <motion.div
          initial={{ y: 0, scale: 0.95 }}
          animate={{ y: [0, -10, 0], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="mt-10 lg:mt-0"
        >
          <img
            src="https://avatars.githubusercontent.com/u/116751380?v=4"
            alt="Alwin Sajan"
            className={`w-52 md:w-60 lg:w-72 rounded-full border-4 md:border-8 ${darkMode ? 'border-[#7021c5]' : 'border-[#4a3f2f]'}`}
          />
        </motion.div>
      </Reveal>
    </div>
  );
};

export default Main;

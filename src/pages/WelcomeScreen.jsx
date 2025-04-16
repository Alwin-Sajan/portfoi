import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Home';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block font-mono tracking-tight">
      {displayText}
      <span className="animate-pulse text-gray-400">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f0f0] to-gray-200 blur-2xl opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-300/30 via-transparent to-white/50 blur-xl" />
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 bg-white text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto text-center">

              {/* Headline */}
              <motion.div className="mb-6" variants={childVariants}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                  <div data-aos="fade-up" data-aos-delay="200">
                    Building Scalable, Elegant & Intelligent Web Solutions
                  </div>
                  <div
                    className="text-gray-600 text-base sm:text-lg mt-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Full Stack Developer • React & AI Enthusiast • Code that ships
                  </div>
                </h1>
              </motion.div>

              {/* Link */}
              <motion.div
                className="text-center mt-8"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <a
                  href="https://www.alwinsajan.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-black hover:shadow-xl transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base sm:text-lg text-gray-700 group-hover:text-black transition-colors duration-300">
                    <TypewriterEffect text="alwinsajan.com" />
                  </span>
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      ) : (
        <Home />
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;

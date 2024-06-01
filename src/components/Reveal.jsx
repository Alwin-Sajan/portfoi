// components/Reveal.js
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, easeIn } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sideControls.start("visible");
    }
  }, [isInView, mainControls, sideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.dev
        variants = {{
            hidden: {left: 0},
            visible: { left: '100%'},
        }}
        initial="hidden"
        animate = {sideControls}
        transition = {{duration: 0.5, ease: 'easeIn'  }}
        style={{
            position:"absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right:0,
            background: "#FFBF1C",
            zIndex:20,
        }}
      />
    </div>
  );
};

export default Reveal;

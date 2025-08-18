"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-sm font-medium z-50"
        style={{
          opacity: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }),
        }}
      >
        <motion.div
          style={{
            rotate: useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), {
              stiffness: 100,
              damping: 30,
            }),
          }}
          className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full"
        />
      </motion.div>
    </>
  );
};

export default ScrollProgress;

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxText = ({ children, className = "" }: ParallaxTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={textRef}
      style={{
        y: springY,
        opacity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxText;

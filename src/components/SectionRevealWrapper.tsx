"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionRevealWrapper = ({
  children,
  className = "",
  delay = 0,
}: SectionRevealWrapperProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 60,
              scale: 0.95,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {/* Single reveal line animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      />

      {children}
    </motion.div>
  );
};

export default SectionRevealWrapper;

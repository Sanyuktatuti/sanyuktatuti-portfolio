"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  icon: IconType;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

const AnimatedTimeline = ({ items }: AnimatedTimelineProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      {/* Main timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-30" />
      
      {/* Animated progress line */}
      <motion.div
        className="absolute left-4 md:left-8 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative flex items-start gap-6 md:gap-8"
          >
            {/* Timeline dot with icon */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.3 + 0.2,
                type: "spring",
                stiffness: 200
              }}
            >
              {/* Outer ring */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-0.5">
                <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center">
                  <item.icon className="text-xl md:text-2xl text-purple-400" />
                </div>
              </div>
              
              {/* Pulsing effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-500/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3 + 1,
                }}
              />
            </motion.div>

            {/* Content card */}
            <motion.div
              className="flex-1 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3 + 0.4
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)"
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Header */}
              <div className="relative z-10 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <p className="text-lg text-purple-300 font-semibold">
                    {item.company}
                  </p>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-sm text-blue-300 font-medium">
                      {item.period}
                    </span>
                    <span className="text-sm text-gray-400">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="relative z-10 space-y-3">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <motion.div
                    key={respIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 0.6 + respIndex * 0.1
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3 + respIndex * 0.5,
                      }}
                    />
                    <p className="text-gray-300 leading-relaxed">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating connection lines */}
      {items.map((_, index) => (
        index < items.length - 1 && (
          <motion.div
            key={`connection-${index}`}
            className="absolute left-8 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50"
            style={{ 
              top: `${((index + 1) * 100) / items.length - 10}%`
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.3 + 1.5
            }}
          />
        )
      ))}
    </div>
  );
};

export default AnimatedTimeline;

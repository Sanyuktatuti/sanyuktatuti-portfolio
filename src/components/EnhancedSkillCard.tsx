"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

interface EnhancedSkillCardProps {
  name: string;
  icon: IconType;
  color: string;
  proficiency: number; // 0-100
  index: number;
}

const EnhancedSkillCard = ({ name, icon: Icon, color, proficiency, index }: EnhancedSkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        z: 50
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 cursor-pointer overflow-hidden"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
        }}
        animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
      />

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(45deg, ${color}40, transparent, ${color}40)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      <div className="relative z-10">
        {/* Icon with pulse animation */}
        <motion.div
          className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl"
          style={{ backgroundColor: `${color}20` }}
          animate={isHovered ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          <Icon 
            className="text-2xl"
            style={{ color }}
          />
        </motion.div>

        {/* Skill name */}
        <motion.h3
          className="text-center text-white font-semibold mb-4 capitalize"
          style={{ fontSize: '0.9rem' }}
          animate={isHovered ? { y: -2 } : { y: 0 }}
        >
          {name}
        </motion.h3>

        {/* Proficiency bar */}
        <div className="relative">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full relative"
              style={{ 
                background: `linear-gradient(90deg, ${color}, ${color}80)`,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1 + 0.5,
                ease: "easeOut"
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
          
          {/* Proficiency percentage */}
          <motion.div
            className="text-xs text-gray-400 mt-2 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
          >
            {proficiency}%
          </motion.div>
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: color }}
                initial={{
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  opacity: 0,
                }}
                animate={{
                  y: [null, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedSkillCard;

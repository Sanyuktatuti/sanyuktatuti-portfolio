"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techIcons } from "@/constants";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Group tech icons by category
  const categories = {
    "Machine Learning": ["tensorflow", "pytorch", "scikit-learn", "keras"],
    "Data Science": ["python", "jupyter", "numpy", "pandas"],
    "Tools & Cloud": ["opencv", "mongodb", "aws", "docker"],
  };

  return (
    <div className="container-padding py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          A comprehensive overview of my technical expertise across different
          domains
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, skillNames], index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-[#1a1a2e] rounded-lg p-6 shadow-xl"
            >
              <div className={`inline-block bg-purple-600 rounded-lg p-2 mb-4`}>
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {skillNames.map((name) => {
                  const tech = techIcons.find((t) => t.name === name);
                  if (!tech) return null;

                  return (
                    <div
                      key={name}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <tech.icon
                        className="w-6 h-6"
                        style={{ color: tech.color }}
                      />
                      <span className="text-sm capitalize">{name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

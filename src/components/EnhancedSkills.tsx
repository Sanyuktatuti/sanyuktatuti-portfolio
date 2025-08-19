"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techIcons } from "@/constants";
import EnhancedSkillCard from "./EnhancedSkillCard";

// Define proficiency levels for skills (0-100)
const skillProficiency = {
  // Languages & Core
  "python": 95,
  "c++": 85,
  "java": 80,
  "sql": 90,
  
  // ML/DL Frameworks
  "tensorflow": 92,
  "pytorch": 90,
  "scikit-learn": 88,
  "keras": 85,
  "hugging face transformers": 87,
  
  // Data Science
  "jupyter": 95,
  "numpy": 92,
  "pandas": 90,
  "matplotlib": 85,
  
  // Big Data & Pipeline
  "spark": 80,
  "hadoop": 75,
  "kafka": 78,
  "airflow": 82,
  "mlflow": 85,
  
  // Tools & Infrastructure
  "redis": 75,
  "mongodb": 80,
  "git": 95,
  "docker": 88,
  "kubernetes": 78,
  
  // Web/Frameworks
  "fastapi": 85,
  "flask": 82,
  "streamlit": 90,
  "bokeh": 75,
  "panel": 70,
  "holoviews": 68,
  "d3.js": 75,
  
  // Cloud
  "aws": 85,
  "gcp": 80,
  "azure": 75,
};

const EnhancedSkills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = {
    "Core Technologies": ["python", "c++", "java", "sql"],
    "Machine Learning": ["tensorflow", "pytorch", "scikit-learn", "keras", "hugging face transformers"],
    "Data Science": ["jupyter", "numpy", "pandas", "matplotlib"],
    "Big Data & MLOps": ["spark", "hadoop", "kafka", "airflow", "mlflow"],
    "Infrastructure": ["redis", "mongodb", "git", "docker", "kubernetes"],
    "Frameworks": ["fastapi", "flask", "streamlit", "d3.js"],
    "Cloud Platforms": ["aws", "gcp", "azure"],
  };

  const getTech = (name: string) => {
    return techIcons.find((tech) => tech.name.toLowerCase() === name.toLowerCase());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive proficiency across the full spectrum of modern AI/ML technologies, 
            from research and development to production deployment at scale.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {Object.entries(categories).map(([category, skillNames], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{category}</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {skillNames.map((name, skillIndex) => {
                  const tech = getTech(name);
                  if (!tech) return null;

                  const proficiency = skillProficiency[name as keyof typeof skillProficiency] || 75;
                  
                  return (
                    <EnhancedSkillCard
                      key={name}
                      name={tech.name}
                      icon={tech.icon}
                      color={tech.color}
                      proficiency={proficiency}
                      index={categoryIndex * 10 + skillIndex}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "25+", label: "Technologies" },
            { number: "5+", label: "Years Experience" },
            { number: "10+", label: "Major Projects" },
            { number: "3", label: "Cloud Platforms" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnhancedSkills;

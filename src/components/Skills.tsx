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
      transition: { duration: 0.8, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  // Categories aligned to your requested groups
  const categories: Record<string, string[]> = {
    "Programming & Frameworks": [
      "python",
      "c++",
      "java",
      "sql",
      "pytorch",
      "tensorflow",
      "keras",
      "hugging face transformers",
      "scikit-learn",
      "fastapi",
      "flask",
      "streamlit",
      "bokeh",
      "panel",
      "holoviews",
      "d3.js",
    ],
    "Data & Tools": [
      "pandas",
      "numpy",
      "matplotlib",
      "spark",
      "hadoop",
      "kafka",
      "airflow",
      "mlflow",
      "redis",
      "mongodb",
      "git",
      "docker",
      "kubernetes",
    ],
    "Cloud & MLOps": ["aws", "gcp", "azure"],
  };

  // Helper to fetch icon metadata (name must match techIcons entry)
  const getTech = (name: string) => techIcons.find((t) => t.name === name);

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
          className="text-center text-gray-300/90 mb-12 max-w-2xl mx-auto"
        >
          A comprehensive overview of my tooling across{" "}
          <span className="font-semibold">ML/DL, CV, LLMs</span>, data
          engineering, and cloud/MLOps.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, skillNames]) => (
            <motion.section
              key={category}
              variants={itemVariants}
              className="bg-[#121225] rounded-2xl p-6 shadow-[0_8px_30px_rgb(2,6,23,0.35)] ring-1 ring-white/5 card-hover backdrop-blur-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80">
                  {skillNames.length} items
                </div>
              </div>

              {/* Grid of skill badges */}
              <div className="grid grid-cols-2 gap-3">
                {skillNames.map((name) => {
                  const tech = getTech(name);
                  if (!tech) return null;

                  const Icon = tech.icon as React.ComponentType<{
                    className?: string;
                    style?: React.CSSProperties;
                    title?: string;
                  }>;

                  return (
                    <div
                      key={name}
                      className="group flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-3 py-2"
                      title={name}
                    >
                      <Icon
                        className="w-6 h-6 shrink-0"
                        style={{ color: tech.color }}
                      />
                      <span className="text-sm text-gray-200 capitalize leading-tight">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

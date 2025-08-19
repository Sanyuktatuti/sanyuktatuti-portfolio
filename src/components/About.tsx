"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/constants";

const About = () => {
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
        staggerChildren: 0.2,
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

  const currentFocus = [
    "Efficient ML training & deployment (LoRA/QLoRA, quantization, MLOps)",
    "Multimodal learning (vision, text, and audio embeddings)",
    "Generative AI applications (LLMs with RAG & function calling)",
    "Computer Vision in robotics (perception, SLAM, navigation)",
  ];

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
          About Me
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 max-w-6xl mx-auto"
        >
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              I'm Sanyukta Tuti, an ML/AI Engineer and current M.S. Computer
              Science student at NYU Tandon. My passion lies in designing and
              deploying intelligent systems that blend research-driven
              innovation with production-grade engineering.
            </p>

            <p className="text-lg">
              Over the past few years, I've worked on projects spanning deep
              learning, computer vision, natural language processing, and
              generative AI. I enjoy building pipelines that aren't just
              academically sound, but also robust, scalable, and impactful in
              real-world settings. Whether it's fine-tuning large language
              models with LoRA/QLoRA for efficient inference, optimizing vision
              models for robotics and navigation, or architecting end-to-end ML
              workflows that run in production, I'm motivated by measurable
              improvements in lower latency, higher accuracy, safer systems.
            </p>

            <p className="text-lg">
              Professionally, I've contributed to AI-driven compliance systems,
              automated root cause analysis pipelines, and multimodal ML
              embeddings for retrieval and search. In academic and competitive
              settings, I've achieved milestones like 84.77% test accuracy on
              Kaggle (AG News) and led robotics research teams to 1st-place
              finishes in navigation challenges.
            </p>

            <p className="text-lg">
              My broader goal is to bridge cutting-edge AI research with
              scalable, production-ready systems that solve real business and
              societal challenges.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentFocus.map((focus, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{focus}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const focuses = [
    "Efficient ML training & deployment (LoRA/QLoRA, quantization, MLOps)",
    "Multimodal learning (vision, text, and audio embeddings)",
    "Generative AI applications (LLMs with RAG & function calling)",
    "Computer Vision in robotics (perception, SLAM, navigation)",
  ];

  return (
    <section id="about" className="container-padding py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a2e] rounded-xl p-6 md:p-8 shadow-xl ring-1 ring-white/5"
        >
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I’m <span className="font-semibold">Sanyukta Tuti</span>, an{" "}
              <span className="font-semibold">ML/AI Engineer</span> and current{" "}
              <span className="font-semibold">M.S. Computer Science student at NYU Tandon</span>. 
              My passion lies in designing and deploying{" "}
              <span className="font-semibold">intelligent systems</span> that
              blend research-driven innovation with production-grade engineering.
            </p>

            <p className="text-lg leading-relaxed">
              Over the past few years, I’ve worked on projects spanning{" "}
              <span className="font-semibold">
                deep learning, computer vision, natural language processing, and generative AI
              </span>. I enjoy building pipelines that aren’t just academically sound,
              but also robust, scalable, and impactful in real-world settings.
              Whether it’s fine-tuning{" "}
              <span className="font-semibold">large language models</span> with LoRA/QLoRA for
              efficient inference, optimizing{" "}
              <span className="font-semibold">vision models</span> for robotics and navigation,
              or architecting{" "}
              <span className="font-semibold">end-to-end ML workflows</span> that run in production,
              I’m motivated by measurable improvements in lower latency, higher accuracy, safer systems.
            </p>

            <p className="text-lg leading-relaxed">
              Professionally, I’ve contributed to{" "}
              <span className="font-semibold">AI-driven compliance systems</span>,{" "}
              <span className="font-semibold">automated root cause analysis pipelines</span>, and{" "}
              <span className="font-semibold">multimodal ML embeddings</span> for retrieval and search.
              In academic and competitive settings, I’ve achieved milestones like{" "}
              <span className="font-semibold">84.77% test accuracy on Kaggle (AG News)</span> and led
              robotics research teams to{" "}
              <span className="font-semibold">1st-place finishes</span> in navigation challenges.
            </p>

            <p className="text-lg leading-relaxed">
              My broader goal is to bridge{" "}
              <span className="font-semibold">cutting-edge AI research</span> with{" "}
              <span className="font-semibold">scalable, production-ready systems</span> that solve
              real business and societal challenges.
            </p>

            {/* Focus Section */}
            <div className="pt-2">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focuses.map((focus, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <span className="mt-2 inline-block size-2 rounded-full bg-purple-500"></span>
                    <span className="text-gray-200">{focus}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

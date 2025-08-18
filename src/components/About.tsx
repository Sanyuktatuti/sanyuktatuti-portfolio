import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  return (
    <div className="container-padding py-16 md:py-24">
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
          className="bg-[#1a1a2e] rounded-lg p-6 md:p-8 shadow-xl"
        >
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              I'm a passionate technologist bridging the gap between industry experience and academic excellence. Currently pursuing my Master's in Computer Science at USC while leveraging my professional software engineering background.
            </p>

            <p className="text-lg">
              My expertise spans full-stack development, algorithms, and machine learning & genAI. I thrive on solving complex problems and building scalable solutions that drive real-world impact.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Algorithms",
                  "GenAI & LLMs",
                  "Software Engineering",
                  "Innovation & New Technologies"
                ].map((focus, index) => (
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

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Master of Science in Computer Science</h4>
                  <p className="text-gray-400">University of Southern California (2023 - 2025)</p>
                  <p className="text-sm text-gray-400">GPA: 3.78/4.0</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                  <p className="text-gray-400">Kalinga Institute of Industrial Technology (2018 - 2022)</p>
                  <p className="text-sm text-gray-400">GPA: 3.91/4.0</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
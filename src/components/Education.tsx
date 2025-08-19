"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      school: "New York University Tandon School of Engineering",
      location: "New York, United States",
      degree: "Master's in Computer Science",
      period: "2024 – 2026",
      gpa: "3.889",
      courses: [
        "Deep Learning",
        "Machine Learning",
        "Big Data",
        "Principle Database Systems",
        "Data Analysis and Algorithms",
        "Information Visualization",
      ],
    },
    {
      school: "Kalinga Institute Of Industrial Technology",
      location: "Bhubaneshwar, Odisha",
      degree:
        "Bachelor of Technology (Honours) in Computer Science and Engineering",
      period: "2018 – 2022",
      gpa: "3.86",
      courses: [
        "Artificial Intelligence",
        "Probability and Statistics",
        "Data Structures and Algorithms",
        "Software Defined Networking",
        "Transaction Processing Systems",
        "Discrete Mathematics",
      ],
    },
  ];

  return (
    <div className="container-padding py-16 md:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {edu.school}
                    </h3>
                    <span className="text-purple-400">{edu.period}</span>
                  </div>
                  <p className="text-gray-400 mt-1">{edu.location}</p>
                  <p className="text-lg text-white mt-2">{edu.degree}</p>
                  <p className="text-gray-300 mt-1">GPA: {edu.gpa}</p>
                  {edu.courses && (
                    <div className="mt-4">
                      <p className="text-gray-300 font-medium">
                        Selected Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;

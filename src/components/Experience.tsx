"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "ML/AI Engineer",
    company: "NYU",
    location: "New York, NY",
    period: "2024 - Present",
    description: [
      "Developing and optimizing machine learning models for computer vision applications",
      "Implementing deep learning solutions using PyTorch and TensorFlow",
      "Researching and applying state-of-the-art AI techniques",
    ],
    icon: FaBriefcase,
    iconBg: "#1d4ed8",
  },
  {
    title: "Research Assistant",
    company: "NYU AI Lab",
    location: "New York, NY",
    period: "2023 - 2024",
    description: [
      "Conducted research in computer vision and deep learning",
      "Published papers in top-tier conferences",
      "Developed novel algorithms for image processing",
    ],
    icon: FaBriefcase,
    iconBg: "#4c1d95",
  },
  {
    title: "ML Engineer Intern",
    company: "Tech Company",
    location: "Remote",
    period: "2022 - 2023",
    description: [
      "Built and deployed machine learning models",
      "Optimized model performance and reduced inference time",
      "Collaborated with cross-functional teams on AI projects",
    ],
    icon: FaBriefcase,
    iconBg: "#831843",
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            const key = `${experience.company}-${experience.title}-${experience.period}`;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1a1a2e] rounded-lg p-6 md:p-8 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <p className="text-purple-400 mt-1">{experience.company}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400 text-sm">
                        {experience.location}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {experience.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

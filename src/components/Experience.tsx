"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    title: "Student Web Developer",
    company: "University of Southern California",
    location: "Los Angeles, CA",
    period: "2024 - Present",
    description: [
      "Automated daily workflows with Python & Excel, reducing task duration by 67%",
      "Created custom HTML/CSS/JS components for the site",
      "Developed skills in web design, user accessibility, and online fundraising strategies"
    ],
    icon: <FaBriefcase />,
    iconBg: "#1d4ed8"
  },
  {
    title: "Associate Software Engineer",
    company: "Highradius",
    location: "Hyderabad, India",
    period: "2022 - 2023",
    description: [
      "Contributed to Java i18n integration, boosting localization throughput 70% and cutting costs 40%",
      "Optimized search indexing and queries, slashing response times 60% and aiding Selenium test suite",
      "Unit-tested financial microservices (JUnit/Mockito), reducing processing time 30% and code size 15%"
    ],
    icon: <FaBriefcase />,
    iconBg: "#4c1d95"
  },
  {
    title: "Software Engineering Intern",
    company: "Highradius",
    location: "Remote",
    period: "2021 - 2022",
    description: [
      "Developed role-based web apps, CVM query framework, and modular ReactJS components for the analytics platform",
      "Improved access speed by 40% and dashboard engagement by 50% with a role-based web app",
      "Implemented secure authentication and role-based access control"
    ],
    icon: <FaBriefcase />,
    iconBg: "#831843"
  }
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

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1a1a2e",
                color: "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1a1a2e" }}
              date={experience.period}
              iconStyle={{ background: experience.iconBg, color: "#fff" }}
              icon={experience.icon}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-purple-400 mt-2">
                {experience.company}
              </h4>
              <p className="text-gray-400 text-sm mt-1">{experience.location}</p>
              <ul className="mt-4 space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default Experience;
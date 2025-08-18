"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";
import type { IconType } from "react-icons"; // ✅ type import

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: IconType; // ✅ simpler & safe with react-icons
  iconBg: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Artificial Intelligence Researcher — Self-Drive (VIP)",
    company: "NYU Tandon School of Engineering",
    location: "New York, United States",
    period: "Jan 2025 – Present",
    description: [
      "Engineered a ROS Noetic-based autonomous navigation stack on TurtleBot3; fine-tuned YOLOv8 with 300+ annotated images.",
      "Implemented ViT-DINO + VLAD retrieval across ~10k frames for target re-ID; integrated A* on a waypoint graph.",
      "Achieved ~25% faster navigation with 100% collision-free runs; 1st place (Final, 10+ teams) and runner-up (Early Bird).",
    ],
    icon: FaBriefcase,
    iconBg: "#1d4ed8",
  },
  {
    title: "Machine Learning Engineer (Customer Experience)",
    company: "Cisco Systems Inc.",
    location: "Bengaluru, IN",
    period: "Aug 2022 – Aug 2024",
    description: [
      "Productionized an RCA + ticket clustering pipeline (ServiceNow) using Sentence-Transformers, HDBSCAN, and XGBoost; ~3.2k tickets/day; reduced L2 escalations by ~31% over a 90-day A/B.",
      "Built an LLM-powered network compliance assistant (GPT-4 with RAG & function calling): parsed CLI via pyATS (Genie), generated configs with Jinja2, validated with Batfish & OPA; ~30% fewer misconfigurations.",
      "Led a team of 4 interns; designed modular Airflow DAGs with MLflow tracking and quality gates; improved training reliability and observability.",
      "Developed predictive analytics for network telemetry (ARIMA/Prophet; DBSCAN/K-Means) with Kafka Streams + Spark ETL; stored in BigQuery & Elasticsearch.",
    ],
    icon: FaBriefcase,
    iconBg: "#4c1d95",
  },
  {
    title: "Technical Undergraduate Intern",
    company: "Cisco Systems Inc.",
    location: "Bengaluru, IN",
    period: "Feb 2022 – Jun 2022",
    description: [
      "Built a web-based Case Escalation Tracker (Python/JS/MongoDB) used to manage 5,000+ customer support cases.",
      "Earned Cisco DevNet Associate & CCNA; specialized in Software-Defined Access.",
    ],
    icon: FaBriefcase,
    iconBg: "#831843",
  },
  {
    title: "Machine Learning Intern",
    company: "Verzeo (in collaboration with IIT Kharagpur)",
    location: "Bhubaneswar, Odisha, IN",
    period: "Jul 2020 – Dec 2020",
    description: [
      "Engineered a loan-default prediction model achieving 89.5% accuracy to forecast target outcomes.",
      "Crafted interactive dashboards for 10+ departments, streamlining reporting and saving ~15 hours/week of manual data compilation.",
    ],
    icon: FaBriefcase,
    iconBg: "#0f766e",
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
                className="bg-[#1a1a2e] rounded-lg p-6 md:p-8 shadow-xl card-hover backdrop-blur-sm"
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

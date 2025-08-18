"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const skillCategories = [
  {
    title: "Languages",
    color: "bg-blue-500",
    skills: [
      { name: "C++", icon: "cpp.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "Swift", icon: "swift.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" }
    ]
  },
  {
    title: "Frontend",
    color: "bg-purple-500",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "Angular", icon: "angular.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "HTML5", icon: "html5.svg" },
      { name: "CSS3", icon: "css3.svg" },
      { name: "Ext.js", icon: "extjs.svg" }
    ]
  },
  {
    title: "Backend",
    color: "bg-green-500",
    skills: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express.js", icon: "express.svg" },
      { name: "Spring Boot", icon: "spring.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "Flask", icon: "flask.svg" },
      { name: "Django", icon: "django.svg" }
    ]
  },
  {
    title: "Database",
    color: "bg-orange-500",
    skills: [
      { name: "MySQL", icon: "mysql.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "VectorDB", icon: "vectordb.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "PostGIS", icon: "postgis.svg" },
      { name: "Firebase", icon: "firebase.svg" }
    ]
  },
  {
    title: "DevOps & Cloud",
    color: "bg-indigo-500",
    skills: [
      { name: "Git", icon: "git.svg" },
      { name: "AWS", icon: "aws.svg" },
      { name: "CI/CD", icon: "cicd.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "Firebase", icon: "firebase.svg" },
      { name: "Kubernetes", icon: "kubernetes.svg" }
    ]
  },
  {
    title: "AI/ML",
    color: "bg-pink-500",
    skills: [
      { name: "LangChain", icon: "langchain.svg" },
      { name: "LangGraph", icon: "langgraph.svg" },
      { name: "LLMs", icon: "llm.svg" },
      { name: "VLMs", icon: "vlm.svg" },
      { name: "MCP", icon: "mcp.svg" },
      { name: "Pandas", icon: "pandas.svg" }
    ]
  }
];

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
          A comprehensive overview of my technical expertise across different domains
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1a2e] rounded-lg p-6 shadow-xl"
            >
              <div className={`inline-block ${category.color} rounded-lg p-2 mb-4`}>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className="w-6 h-6 relative">
                      <Image
                        src={`/tech/${skill.icon}`}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
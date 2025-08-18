import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
  {
    title: "Stock Trading & Analytics Platform",
    description: "Live stock analysis tool (Angular, Node.js, MongoDB) that cut analysis time 50% and grew daily users 20%.",
    image: "/projects/stock-analytics.png",
    tags: ["Angular", "Node.js", "Express", "MongoDB", "Swift"],
    links: {
      github: "https://github.com/adityac/stock-analytics",
      demo: "https://stock-analytics.demo.com"
    }
  },
  {
    title: "FlipQuest – 2D Platformer Game",
    description: "Unity/C# 2D platformer with flip mechanics, Firebase analytics, and unique levels featuring dynamic gameplay.",
    image: "/projects/flipquest.png",
    tags: ["C#", "Unity", "Firebase", "Data Analysis"],
    links: {
      github: "https://github.com/adityac/flipquest",
      demo: "https://flipquest.demo.com"
    }
  },
  {
    title: "Skive – Multi-Modal KYC Agent",
    description: "Processed 1M+ KYC docs with LangGraph/CI-CD, boosting throughput 50% and accuracy 35%.",
    image: "/projects/skive.png",
    tags: ["Langraph", "OCR", "Python", "PyTorch", "GenAI"],
    links: {
      github: "https://github.com/adityac/skive",
      demo: "https://skive.demo.com"
    }
  },
  {
    title: "Predictive Sales Order Manager",
    description: "Java Servlets & JDBC backend, ReactJS & Material UI front end, with ML-based invoice due-date forecasting and delay bucketization.",
    image: "/projects/sales-manager.png",
    tags: ["Java", "ReactJS", "Material UI", "ML"],
    links: {
      github: "https://github.com/adityac/sales-manager",
      demo: "https://sales-manager.demo.com"
    }
  },
  {
    title: "AI-Powered DeFi Sniper Bot",
    description: "DeepSeek-based DeFi sniper bot with sub-second executions; integrates on-chain liquidity parsing, sentiment & rug-pull filters, and RSI/MACD signals.",
    image: "/projects/defi-bot.png",
    tags: ["Python", "Web3", "ML", "DeFi"],
    links: {
      github: "https://github.com/adityac/defi-bot",
      demo: "https://defi-bot.demo.com"
    }
  }
];

const Projects = () => {
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
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-purple-900 text-purple-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-purple-500 transition-colors"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-500 transition-colors"
                  >
                    <BiLinkExternal />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
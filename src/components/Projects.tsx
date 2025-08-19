"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Enhanced3DCard from "./Enhanced3DCard";

// TIP: If you later want to use GitHub OpenGraph preview images, add
// images.domains = ["opengraph.githubassets.com"] to next.config.js
// and set image to: `https://opengraph.githubassets.com/1/Sanyuktatuti/<repo>`

const projects = [
  {
    title: "Personal AI Twin (LLM + RAG Platform)",
    description:
      "Production-grade LLM platform with ingestion, vector search, QLoRA fine-tuning, prompt tuning, and quantized inference.",
    image: "",
    tags: ["FastAPI", "RAG", "QLoRA", "FAISS/Pinecone", "Docker"],
    links: {
      github: "https://github.com/Sanyuktatuti/Personal-AI-Twin",
      demo: "https://github.com/Sanyuktatuti/Personal-AI-Twin",
    },
  },
  {
    title: "Airspace Congestion & Safety Monitoring",
    description:
      "Real-time flight congestion and risk scoring with streaming ETL, geospatial viz, and simulation—built for proactive ATC monitoring.",
    image: "", // e.g. "/projects/airspace.png" or GitHub OG url
    tags: ["Python", "Spark", "Kafka", "Airflow", "GIS", "Dashboard"],
    links: {
      github: "https://github.com/Sanyuktatuti/airspace-congestion-monitoring",
      demo: "https://github.com/Sanyuktatuti/airspace-congestion-monitoring",
    },
  },
  {
    title: "Candidate Recommendation Engine",
    description:
      "End-to-end semantic ranking for hiring: embeddings, similarity search, scoring, and interactive analytics UI.",
    image: "",
    tags: ["Python", "NLP", "Retrieval", "Streamlit", "scikit-learn"],
    links: {
      github: "https://github.com/Sanyuktatuti/Candidate-Recommendation-Engine",
      demo: "https://github.com/Sanyuktatuti/Candidate-Recommendation-Engine",
    },
  },
  {
    title: "Jailbreaking Deep Models",
    description:
      "Empirical study & tooling for LLM jailbreaks: prompt attack taxonomies, red-teaming harness, and defense evaluation suite.",
    image: "",
    tags: ["LLM", "Security", "Red Teaming", "Python", "Eval Suite"],
    links: {
      github: "https://github.com/Sanyuktatuti/Jailbreaking-Deep-Models",
      demo: "https://github.com/Sanyuktatuti/Jailbreaking-Deep-Models",
    },
  },

  {
    title: "NYU Research Visualization",
    description:
      "Interactive faculty–research mapping with D3.js + Python backend; filters, search, and dynamic network views.",
    image: "",
    tags: ["D3.js", "Python", "Bokeh/Panel", "Data Viz"],
    links: {
      github: "https://github.com/Sanyuktatuti/NYU_research_visualization",
      demo: "https://github.com/Sanyuktatuti/NYU_research_visualization",
    },
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Fallback visual if no image provided
  const FallbackBanner = ({ title }: { title: string }) => (
    <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-fuchsia-600/30">
      <div className="absolute inset-0 backdrop-blur-[2px] ring-1 ring-white/10" />
      <span className="relative z-10 text-lg font-semibold text-white/90 px-4 text-center">
        {title}
      </span>
    </div>
  );

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

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-300/90 mb-12 max-w-2xl mx-auto"
        >
          A selection of ML/AI, LLM, and data systems I’ve built across research
          and industry.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Enhanced3DCard className="h-full">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 h-full transition-all duration-300 hover:border-purple-500/30">
                  {/* Image or Fallback */}
                  {project.image ? (
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        priority={index < 2}
                      />
                    </div>
                  ) : (
                    <FallbackBanner title={project.title} />
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FaGithub className="text-xl" />
                        <span>Code</span>
                      </Link>

                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                        aria-label={`${project.title} live demo or docs`}
                      >
                        <BiLinkExternal className="text-xl" />
                        <span>Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Enhanced3DCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

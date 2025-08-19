"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { personalInfo } from "@/constants";
import EnhancedContactForm from "./EnhancedContactForm";

const Contact = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          Let's Connect
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-300 mb-12"
        >
          If you're building with purpose, complexity, and a bias to ship, I
          would love to connect!
          <br />
          I'm always keen to collaborate with fellow researchers and creators.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <EnhancedContactForm />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">
                Connect on LinkedIn
              </h3>
              <p className="text-gray-300 mb-6">
                Let's expand our professional network and stay updated on each
                other's journey.
              </p>
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>Connect on LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

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

export default Contact;

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 container-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500">
          <Image
            src="/profile.jpg"
            alt="Aditya Chaudhary"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Aditya Chaudhary
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Software Engineer & MS Computer Science @ USC
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center mb-8"
        >
          <div className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Software Engineer
          </div>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Tech Enthusiast
          </div>
          <div className="bg-pink-600 text-white px-4 py-2 rounded-md">
            Problem Solver
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-6 justify-center"
        >
          <Link
            href="https://github.com/adityac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-500 transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/adityac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://leetcode.com/adityac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-500 transition-colors"
          >
            <SiLeetcode />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

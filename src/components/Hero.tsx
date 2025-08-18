"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/constants";
import MagneticButton from "./MagneticButton";
import TextSpotlight from "./TextSpotlight";
import ParallaxText from "./ParallaxText";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-16 container-padding overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/50 group"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/profile.jpg"
            alt={personalInfo.name}
            fill
            priority
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        <TextSpotlight className="mb-4">
          <ParallaxText>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
            >
              {personalInfo.name}
            </motion.h1>
          </ParallaxText>
        </TextSpotlight>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          {personalInfo.roles.map((role, index) => (
            <motion.div
              key={role}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${
                index === 0
                  ? "bg-purple-600/80"
                  : index === 1
                  ? "bg-blue-600/80"
                  : "bg-pink-600/80"
              } backdrop-blur-sm text-white px-6 py-2 rounded-full shadow-lg transition-colors duration-300 hover:shadow-xl hover:ring-2 hover:ring-purple-500/50`}
            >
              {role}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-6 justify-center"
        >
          <MagneticButton>
            <Link
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-500 transition-colors p-4 bg-white/5 rounded-full backdrop-blur-sm hover:bg-white/10"
            >
              <FaGithub />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition-colors p-4 bg-white/5 rounded-full backdrop-blur-sm hover:bg-white/10"
            >
              <FaLinkedin />
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2"
            />
          </div>
          <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md -z-10" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

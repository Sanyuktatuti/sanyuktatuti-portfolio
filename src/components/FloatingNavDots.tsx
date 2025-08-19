"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingNavDots = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col items-center gap-3">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="relative group flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50"
                  : "bg-transparent border-gray-400 hover:border-purple-400"
              }`}
              whileHover={{
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
              }}
            />

            {/* Tooltip */}
            <motion.div
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10"
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              <span className="mr-1.5">{section.icon}</span>
              {section.label}
              {/* Arrow pointing to dot */}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-black/90"></div>
            </motion.div>

            {/* Active indicator line */}
            {activeSection === section.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingNavDots;

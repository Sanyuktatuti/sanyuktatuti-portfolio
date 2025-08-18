"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiX } from "react-icons/fi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const MobileMenu = ({ isOpen, onClose, activeSection }: MobileMenuProps) => {
  const menuItems = [
    "About",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-64 bg-[#1a1a2e] shadow-xl z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            <nav className="mt-12">
              {menuItems.map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={onClose}
                    className={`block py-3 px-4 my-2 rounded-lg transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

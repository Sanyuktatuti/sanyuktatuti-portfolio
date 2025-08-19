"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";

interface ViewCounterProps {
  className?: string;
  variant?: "default" | "minimal";
}

const ViewCounter = ({
  className = "",
  variant = "default",
}: ViewCounterProps) => {
  const [views, setViews] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get current view count from localStorage
    const currentViews = localStorage.getItem("portfolio-views");
    let viewCount = currentViews ? parseInt(currentViews) : 0;

    // Check if this is a new session
    const lastVisit = localStorage.getItem("portfolio-last-visit");
    const now = Date.now();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    // Only increment if it's been more than 1 hour since last visit
    if (!lastVisit || now - parseInt(lastVisit) > oneHour) {
      viewCount += 1;
      localStorage.setItem("portfolio-views", viewCount.toString());
      localStorage.setItem("portfolio-last-visit", now.toString());
    }

    setViews(viewCount);
    setIsLoading(false);
  }, []);

  // Format numbers with commas for large numbers
  const formatViews = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toLocaleString();
  };

  if (isLoading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <FaEye
          className={`animate-pulse ${
            variant === "minimal"
              ? "w-3 h-3 text-gray-400"
              : "w-4 h-4 text-purple-400"
          }`}
        />
        <span
          className={`animate-pulse ${
            variant === "minimal"
              ? "text-xs text-gray-400"
              : "text-sm text-purple-300"
          }`}
        >
          Loading...
        </span>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-1.5 ${className}`}
      >
        <FaEye className="w-3 h-3 text-gray-400" />
        <span className="text-xs text-gray-300 font-medium">
          {formatViews(views)}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <motion.div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <FaEye className="w-4 h-4 text-purple-400" />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.span
            key={views} // Re-animate when views change
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-sm font-semibold text-purple-300"
          >
            {formatViews(views)}
          </motion.span>
          <span className="text-xs text-purple-400/70">
            {views === 1 ? "view" : "views"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ViewCounter;

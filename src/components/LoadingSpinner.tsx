"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner = ({ size = 40, color = "#8B5CF6" }: LoadingSpinnerProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative inline-block"
    >
      <motion.div
        className="absolute inset-0 border-4 border-transparent rounded-full"
        style={{
          borderTopColor: color,
          borderRightColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 border-4 border-transparent rounded-full"
        style={{
          borderBottomColor: color,
          borderLeftColor: color,
          scale: 0.8,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030014]">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-300">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-purple-500/20 text-purple-500 hover:bg-purple-500/30 transition-colors duration-300 backdrop-blur-sm border border-purple-500/30"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

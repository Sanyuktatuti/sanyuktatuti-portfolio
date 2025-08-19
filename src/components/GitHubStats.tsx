"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiStar, FiGitBranch, FiUser, FiActivity } from "react-icons/fi";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Replace 'Sanyuktatuti' with your actual GitHub username
        const response = await fetch('https://api.github.com/users/Sanyuktatuti');
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(true);
        console.error('Error fetching GitHub stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <motion.div
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-white/20 rounded"></div>
            <div className="h-3 bg-white/20 rounded w-5/6"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (error || !stats) {
    return (
      <motion.div
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FiGithub className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-400 text-sm">GitHub stats unavailable</p>
      </motion.div>
    );
  }

  const statItems = [
    { icon: FiGitBranch, label: 'Repositories', value: stats.public_repos, color: '#8B5CF6' },
    { icon: FiUser, label: 'Followers', value: stats.followers, color: '#3B82F6' },
    { icon: FiStar, label: 'Following', value: stats.following, color: '#10B981' },
  ];

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <FiGithub className="w-5 h-5 text-white" />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-white">GitHub Activity</h3>
          <p className="text-sm text-gray-400">Live development stats</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {statItems.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <motion.div
              className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${stat.color}20` }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: `${stat.color}30` 
              }}
            >
              <stat.icon 
                className="w-4 h-4" 
                style={{ color: stat.color }}
              />
            </motion.div>
            <motion.div
              className="text-xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Link */}
      <motion.a
        href={stats.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm text-gray-300 hover:text-white"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FiActivity className="w-4 h-4" />
        View GitHub Profile
      </motion.a>

      {/* Animated Activity Indicator */}
      <motion.div
        className="mt-4 flex items-center justify-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        <span className="text-xs text-gray-400 ml-2">Active</span>
      </motion.div>
    </motion.div>
  );
};

export default GitHubStats;

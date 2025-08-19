"use client";

import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, actualTheme, setTheme, toggleTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

  const themes = [
    { id: 'light' as const, icon: FiSun, label: 'Light', color: '#F59E0B' },
    { id: 'dark' as const, icon: FiMoon, label: 'Dark', color: '#8B5CF6' },
    { id: 'system' as const, icon: FiMonitor, label: 'System', color: '#06B6D4' },
  ];

  const currentThemeData = themes.find(t => t.id === theme) || themes[1];

  return (
    <div className="relative">
      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setShowOptions(!showOptions)}
        className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${currentThemeData.color}20` }}
          animate={{ 
            opacity: showOptions ? 1 : 0,
            scale: showOptions ? 1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Current theme icon */}
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ color: currentThemeData.color }}
        >
          <currentThemeData.icon className="w-5 h-5" />
        </motion.div>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: currentThemeData.color }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Theme Options Dropdown */}
      <motion.div
        className="absolute top-16 right-0 bg-black/90 backdrop-blur-lg rounded-2xl border border-white/10 p-2 min-w-[120px] shadow-2xl"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ 
          opacity: showOptions ? 1 : 0,
          y: showOptions ? 0 : -10,
          scale: showOptions ? 1 : 0.9
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: showOptions ? 'auto' : 'none' }}
      >
        {themes.map((themeOption, index) => (
          <motion.button
            key={themeOption.id}
            onClick={() => {
              setTheme(themeOption.id);
              setShowOptions(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left text-sm text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: showOptions ? 1 : 0,
              x: showOptions ? 0 : -20
            }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 4 }}
          >
            <themeOption.icon 
              className="w-4 h-4 flex-shrink-0" 
              style={{ color: themeOption.color }}
            />
            <span className="flex-1">{themeOption.label}</span>
            {theme === themeOption.id && (
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: themeOption.color }}
                layoutId="activeTheme"
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Backdrop */}
      {showOptions && (
        <motion.div
          className="fixed inset-0 z-[-1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowOptions(false)}
        />
      )}
    </div>
  );
};

export default ThemeToggle;

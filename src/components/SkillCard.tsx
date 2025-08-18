"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillCardProps {
  name: string;
  Icon: React.ComponentType<any>;
  color: string;
  proficiency: number;
  description: string;
}

const SkillCard = ({ name, Icon, color, proficiency, description }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-24 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="absolute inset-0 group flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-3 py-2"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.3 }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <Icon className="w-6 h-6 shrink-0" style={{ color }} />
            <span className="text-sm text-gray-200 capitalize leading-tight">
              {name}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute inset-0 rounded-xl bg-white/10 p-3 flex flex-col justify-between"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.3 }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-xs text-gray-300">{description}</div>
            <div className="mt-2">
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${proficiency}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">
                {proficiency}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillCard;

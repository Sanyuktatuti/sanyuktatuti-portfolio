"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: 'circle' | 'triangle' | 'square' | 'hexagon';
  size: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  duration: number;
}

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(139, 92, 246, 0.1)', // purple
      'rgba(59, 130, 246, 0.1)',  // blue  
      'rgba(6, 182, 212, 0.1)',   // cyan
      'rgba(16, 185, 129, 0.1)',  // emerald
      'rgba(245, 158, 11, 0.1)',  // amber
    ];

    const types: ('circle' | 'triangle' | 'square' | 'hexagon')[] = ['circle', 'triangle', 'square', 'hexagon'];

    const newShapes: Shape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 100 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 10,
    }));

    setShapes(newShapes);
  }, []);

  const renderShape = (shape: Shape) => {
    const commonProps = {
      width: shape.size,
      height: shape.size,
      style: { 
        background: shape.color,
        backdropFilter: 'blur(1px)',
      }
    };

    switch (shape.type) {
      case 'circle':
        return <div {...commonProps} className="rounded-full border border-white/10" />;
      case 'square':
        return <div {...commonProps} className="border border-white/10" />;
      case 'triangle':
        return (
          <div 
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
            className="border-white/10"
          />
        );
      case 'hexagon':
        return (
          <div 
            {...commonProps}
            className="border border-white/10"
            style={{
              ...commonProps.style,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
            }}
          />
        );
      default:
        return <div {...commonProps} className="rounded-full border border-white/10" />;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{
            x: `${shape.x}vw`,
            y: `${shape.y}vh`,
            rotate: shape.rotation,
            opacity: 0,
          }}
          animate={{
            x: [`${shape.x}vw`, `${(shape.x + 20) % 100}vw`],
            y: [`${shape.y}vh`, `${(shape.y + 30) % 100}vh`],
            rotate: [shape.rotation, shape.rotation + 360],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{
            scale: 1.2,
            opacity: 0.8,
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;

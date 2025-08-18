"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 10 });

  useEffect(() => {
    const colors = [
      "rgba(139, 92, 246, 0.5)", // Purple
      "rgba(99, 102, 241, 0.5)", // Indigo
      "rgba(236, 72, 153, 0.5)", // Pink
    ];

    const initialParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      },
    }));

    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setParticles((currentParticles) =>
        currentParticles.map((particle) => {
          // Calculate distance from mouse
          const dx = springX.get() - particle.x;
          const dy = springY.get() - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Add mouse influence
          if (distance < 200) {
            const force = (200 - distance) / 200;
            particle.velocity.x -= (dx / distance) * force * 0.2;
            particle.velocity.y -= (dy / distance) * force * 0.2;
          }

          // Update position
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // Bounce off walls
          if (newX < 0 || newX > window.innerWidth) {
            particle.velocity.x *= -1;
            newX = particle.x;
          }
          if (newY < 0 || newY > window.innerHeight) {
            particle.velocity.y *= -1;
            newY = particle.y;
          }

          // Add some randomness
          particle.velocity.x += (Math.random() - 0.5) * 0.1;
          particle.velocity.y += (Math.random() - 0.5) * 0.1;

          // Dampen velocity
          particle.velocity.x *= 0.99;
          particle.velocity.y *= 0.99;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;

"use client";

import { useEffect, useState } from "react";
import { techIcons } from "@/constants";

const FloatingIcons = () => {
  const [icons, setIcons] = useState<
    {
      id: number;
      x: number;
      y: number;
      rotation: number;
      scale: number;
      Icon: any;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    const newIcons = Array.from({ length: 20 }, (_, i) => {
      const tech = techIcons[i % techIcons.length];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
        Icon: tech.icon,
        color: tech.color,
      };
    });

    setIcons(newIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute floating-icons opacity-10"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg) scale(${icon.scale})`,
          }}
        >
          <icon.Icon className="w-12 h-12" style={{ color: icon.color }} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;

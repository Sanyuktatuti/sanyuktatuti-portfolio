"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const FloatingIcons = () => {
  const [icons, setIcons] = useState<{ id: number; x: number; y: number; rotation: number; scale: number; }[]>([]);

  useEffect(() => {
    const techIcons = [
      'python.svg', 'react.svg', 'typescript.svg', 'nodejs.svg',
      'aws.svg', 'docker.svg', 'mongodb.svg', 'firebase.svg'
    ];

    const newIcons = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      icon: techIcons[i % techIcons.length]
    }));

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
          <Image
            src={`/tech/${icon.icon}`}
            alt="Tech Icon"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
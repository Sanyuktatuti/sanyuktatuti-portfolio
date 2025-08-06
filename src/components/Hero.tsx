import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-white font-black text-6xl">
          ML/AI Engineer &<span className="text-gradient"> Data Scientist</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Specializing in Machine Learning, Deep Learning,
          <br />
          Computer Vision & Artificial Intelligence
        </p>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import FloatingIcons from "./FloatingIcons";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import ParticleBackground from "./ParticleBackground";
import GradientBackground from "./GradientBackground";

export default function ClientLayout() {
  return (
    <div className="relative">
      <CustomCursor />
      <ScrollProgress />
      {/* Global background effects */}
      <div className="fixed inset-0 z-0">
        <GradientBackground />
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a0a1a]/50 to-[#030014]" />
      </div>
      
      <Navbar />
      <div className="relative">
        {/* Hero section with full background effects */}
        <section id="home" className="relative min-h-screen">
          <FloatingIcons />
          <div className="relative z-10">
            <Hero />
          </div>
        </section>

        {/* Content sections with glass effect */}
        <div className="relative z-10">
          <section id="about" className="relative min-h-screen">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10 container mx-auto">
              <About />
            </div>
          </section>

          <section id="education" className="relative min-h-screen">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10 container mx-auto">
              <Education />
            </div>
          </section>

          <section id="experience" className="relative min-h-screen">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10 container mx-auto">
              <Experience />
            </div>
          </section>

          <section id="skills" className="relative min-h-screen">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10 container mx-auto">
              <Skills />
            </div>
          </section>

          <section id="projects" className="relative min-h-screen">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10 container mx-auto">
              <Projects />
            </div>
          </section>

          <section id="contact" className="relative min-h-screen">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10 container mx-auto">
              <Contact />
            </div>
          </section>

          <footer className="relative">
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
            <div className="relative z-10">
              <Footer />
            </div>
          </footer>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
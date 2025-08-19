"use client";

import FloatingIcons from "./FloatingIcons";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import EnhancedSkills from "./EnhancedSkills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import ParticleBackground from "./ParticleBackground";
import GradientBackground from "./GradientBackground";
import InteractiveParticles from "./InteractiveParticles";
import FloatingShapes from "./FloatingShapes";
import FloatingNavDots from "./FloatingNavDots";
import SectionRevealWrapper from "./SectionRevealWrapper";
import MobileGestures from "./MobileGestures";

export default function ClientLayout() {
  return (
    <MobileGestures>
      <div className="relative">
        <CustomCursor />
        <ScrollProgress />
        <FloatingNavDots />

        {/* Enhanced background effects */}
        <div className="fixed inset-0 z-0">
          <GradientBackground />
          <ParticleBackground />
          <FloatingShapes />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a0a1a]/50 to-[#030014]" />
        </div>

        {/* Interactive particle overlay */}
        <InteractiveParticles />

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
              <SectionRevealWrapper
                className="relative z-10 container mx-auto"
                delay={0.1}
              >
                <About />
              </SectionRevealWrapper>
            </section>

            <section id="education" className="relative min-h-screen">
              <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
              <SectionRevealWrapper
                className="relative z-10 container mx-auto"
                delay={0.2}
              >
                <Education />
              </SectionRevealWrapper>
            </section>

            <section id="experience" className="relative min-h-screen">
              <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
              <SectionRevealWrapper
                className="relative z-10 container mx-auto"
                delay={0.3}
              >
                <Experience />
              </SectionRevealWrapper>
            </section>

            <section id="skills" className="relative min-h-screen">
              <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
              <SectionRevealWrapper
                className="relative z-10 container mx-auto"
                delay={0.4}
              >
                <EnhancedSkills />
              </SectionRevealWrapper>
            </section>

            <section id="projects" className="relative min-h-screen">
              <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
              <SectionRevealWrapper
                className="relative z-10 container mx-auto"
                delay={0.5}
              >
                <Projects />
              </SectionRevealWrapper>
            </section>

            <section id="contact" className="relative min-h-screen">
              <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-[8px]" />
              <SectionRevealWrapper
                className="relative z-10 container mx-auto"
                delay={0.6}
              >
                <Contact />
              </SectionRevealWrapper>
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
    </MobileGestures>
  );
}

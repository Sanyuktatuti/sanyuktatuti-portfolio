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

export default function ClientLayout() {
  return (
    <div className="relative">
      <Navbar />
      <FloatingIcons />
      <div>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen bg-[#0a0a1a]">
          <div className="container mx-auto">
            <About />
          </div>
        </section>
        <section id="education" className="min-h-screen bg-[#0a0a1a]">
          <div className="container mx-auto">
            <Education />
          </div>
        </section>
        <section id="experience" className="min-h-screen bg-[#0a0a1a]">
          <div className="container mx-auto">
            <Experience />
          </div>
        </section>
        <section id="skills" className="min-h-screen bg-[#0a0a1a]">
          <div className="container mx-auto">
            <Skills />
          </div>
        </section>
        <section id="projects" className="min-h-screen bg-[#0a0a1a]">
          <div className="container mx-auto">
            <Projects />
          </div>
        </section>
        <section id="contact" className="min-h-screen bg-[#0a0a1a]">
          <div className="container mx-auto">
            <Contact />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
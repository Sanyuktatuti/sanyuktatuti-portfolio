"use client";

import FloatingIcons from "./FloatingIcons";
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
      <FloatingIcons />
      <div className="container mx-auto">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="education" className="min-h-screen">
          <Education />
        </section>
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
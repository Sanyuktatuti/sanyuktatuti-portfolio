"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

export default function Home() {
  return (
    <>
      <div className="relative">
        <FloatingIcons />
        <div className="container mx-auto">
          <section id="home" className="min-h-screen">
            <Hero />
          </section>
          <section id="about" className="min-h-screen">
            <About />
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
    </>
  );
}

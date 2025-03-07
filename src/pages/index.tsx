import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import React from "react";

export default function index() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

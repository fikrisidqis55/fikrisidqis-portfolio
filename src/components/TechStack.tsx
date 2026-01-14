"use client";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative pt-24">
      {/* Perspective Grid Background */}
      <div className="perspective-grid overflow-hidden"></div>

      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#FF00FF 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-center uppercase text-tertiary vaporwave-glow-orange">
          Tech Stack & Skills
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto font-mono text-foreground/70">
          The technologies and tools I use to bring ideas to life
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border border-primary/30 border-t-2 border-t-tertiary bg-card/80 backdrop-blur-md rounded-none transition-all group hover:-translate-y-2 hover:shadow-neon-orange"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 text-tertiary">
                {skill.icon}
              </div>
              <p className="text-lg font-mono uppercase tracking-wider transition-colors text-foreground group-hover:text-tertiary">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

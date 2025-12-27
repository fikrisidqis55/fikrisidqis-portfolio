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
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(#ff3c00 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Tech Stack & Skills
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          The technologies and tools I use to bring ideas to life
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white/5 rounded-xl shadow-lg border border-white/10 transition-all group"
            >
              <div className="text-5xl mb-4 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-lg font-medium transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

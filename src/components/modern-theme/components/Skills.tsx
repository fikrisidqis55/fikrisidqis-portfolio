"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 88, category: "frontend", icon: "📘" },
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Prisma", level: 75, category: "backend", icon: "🔷" },
  { name: "PostgreSQL", level: 78, category: "backend", icon: "🐘" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "🎨" },
  { name: "Git", level: 85, category: "tools", icon: "📝" },
  { name: "Docker", level: 70, category: "tools", icon: "🐳" },
  { name: "Figma", level: 75, category: "design", icon: "🎯" },
];

const categories = {
  frontend: "Frontend",
  backend: "Backend", 
  tools: "Tools",
  design: "Design"
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 text-white relative">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF5700]">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-[#1A120B] p-2 rounded-lg border border-[#3A2A22]">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeCategory === "all"
                  ? "bg-[#FF5700] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === key
                    ? "bg-[#FF5700] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1A120B] to-[#2A1E17] p-6 rounded-xl border border-[#3A2A22] hover:border-[#FF5700]/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold group-hover:text-[#FF9100] transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm text-[#FF5700] font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-[#0D0D0D] rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF5700] to-[#FF9100] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
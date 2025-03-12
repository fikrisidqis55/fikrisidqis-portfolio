"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface PixelAboutProps {
  skills: Skill[];
}

export default function PixelAbout({ skills }: PixelAboutProps) {
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 pb-24 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pixel-text text-center">
          <span className="text-green-400">&lt;</span> About Me{" "}
          <span className="text-green-400">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-900 p-6 border-4 border-indigo-700">
            <h3 className="text-xl font-bold mb-4 font-mono">
              Character Stats
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="font-mono text-sm">{skill.level}/100</span>
                  </div>
                  <div className="w-full bg-indigo-950 h-4 border-2 border-indigo-700">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900 p-6 border-4 border-indigo-700">
            <h3 className="text-xl font-bold mb-4 font-mono">Character Bio</h3>
            <p className="font-mono mb-4">
              I&apos;m a developer with a passion for creating interactive
              digital experiences that blend technology with creativity.
            </p>
            <p className="font-mono mb-4">
              With a background in both web development and game design, I bring
              a unique perspective to projects that require technical expertise
              and creative problem-solving.
            </p>
            <p className="font-mono">
              When I&apos;m not coding, you can find me creating pixel art,
              playing retro games, or exploring new technologies to incorporate
              into my next project.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

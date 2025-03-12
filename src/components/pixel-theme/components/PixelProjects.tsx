"use client";

import { motion } from "framer-motion";
import ProjectCard from "./PixelProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface PixelProjectsProps {
  projects: Project[];
}

export default function PixelProjects({ projects }: PixelProjectsProps) {
  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 pb-24 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pixel-text text-center">
          <span className="text-yellow-400">[</span> My Projects{" "}
          <span className="text-yellow-400">]</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

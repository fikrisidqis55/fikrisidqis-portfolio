"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-indigo-900 border-4 border-indigo-700 overflow-hidden cursor-pointer"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-indigo-900/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 font-mono">{project.title}</h3>
        <p className="text-sm mb-4 font-mono text-gray-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-indigo-800 px-2 py-1 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          className="flex items-center text-green-400 font-mono text-sm"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          View Project <LuChevronRight className="w-4 h-4 ml-1" />
        </motion.div>
      </div>
    </motion.div>
  );
}

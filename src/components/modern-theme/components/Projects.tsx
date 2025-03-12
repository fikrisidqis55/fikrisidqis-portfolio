"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuX } from "react-icons/lu";

interface Project {
  title: string;
  description: string;
  image: string;
  details: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: "Smartcourier Courier Command Center & Customer Portal",
    description: "Logistics management system for efficient courier tracking.",
    image: "/projects/smartcourier.png",
    details: "/projects/details/smartcourier.png",
    technologies: [
      "React.js",
      "React Query",
      "Final Form",
      "ANT Design",
      "Redux",
    ],
  },
  {
    title: "Mirecruit CMS and Candidate Portal",
    description: "Recruitment platform for Manulife agents.",
    image: "/projects/mirecruit.png",
    details: "/projects/details/mirecruit.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Final Form",
      "ANT Design",
    ],
  },
  {
    title: "Cirrust DMS",
    description: "Cloud-based document management system.",
    image: "/projects/cirrust.png",
    details: "/projects/details/cirrust.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cirrust Workflow",
    description: "Automated document approval workflow system.",
    image: "/projects/cirrust.png",
    details: "/projects/details/cirrust.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Kansai Custom Page",
    description: "Custom web solution for Kansai Paint.",
    image: "/projects/kansai.png",
    details: "/projects/details/kansai.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "E-Kantah Badan Pertanahan Nasional (BPN)",
    description: "E-Registration for Self-Service Land Office.",
    image: "/projects/bpn.png",
    details: "/projects/details/bpn.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Impulse Web",
    description: "Business analytics dashboard with real-time insights.",
    image: "/projects/impulse.png",
    details: "/projects/details/impulse.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Zurich CMS",
    description: "Admin dashboard for Zurich agents' application management.",
    image: "/projects/zurich.png",
    details: "/projects/details/zurich.png",
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Final Form",
      "ANT Design",
      ".Net Core",
      "SQL Server",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 text-[#EDEDED] relative">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF5700]">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;ve used
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-gradient-to-br from-[#1A120B] to-[#2A1E17] p-6 rounded-xl shadow-lg border border-[#3A2A22] hover:border-[#FF5700] cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5700]/20 to-[#FF9100]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-full h-40 bg-[#0D0D0D] rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#FF5700]/10 to-[#FF9100]/10 flex items-center justify-center">
                  <span className="text-[#FF5700]">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF9100] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">{project.description}</p>

              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#0D0D0D] text-[#FF5700] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-[#0D0D0D] text-gray-400 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {!showAll && projects.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-[#1A120B] text-[#FF5700] border border-[#FF5700] rounded-lg hover:bg-[#FF5700] hover:text-black transition-colors duration-300"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1A120B] p-8 rounded-xl max-w-2xl w-full shadow-2xl border border-[#FF5700]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#FF5700]">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <LuX size={24} />
                </button>
              </div>

              <div className="w-full h-48 bg-[#0D0D0D] rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#FF5700]/10 to-[#FF9100]/10 flex items-center justify-center">
                  <span className="text-[#FF5700] text-4xl">
                    {selectedProject.title.charAt(0)}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.technologies && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-[#FF9100]">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-[#0D0D0D] text-[#FF5700] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full mt-4 px-4 py-3 bg-[#FF5700] text-white rounded-lg hover:bg-[#FF9100] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

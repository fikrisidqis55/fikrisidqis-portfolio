"use client";

import { useState } from "react";
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
    <section id="projects" className="relative pt-24">
      <div className="container mx-auto px-6 relative z-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;ve used
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group p-6 rounded-xl shadow-lg border border-white/10 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500"></div>

              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-transparent flex items-center justify-center">
                  <span className="text-4xl">{project.title.charAt(0)}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="mb-4">{project.description}</p>

              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-background px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-background px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && projects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-transparent border rounded-lg transition-colors duration-300"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white/5 p-8 rounded-xl max-w-2xl w-full shadow-2xl border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className="">
                <LuX size={24} />
              </button>
            </div>

            <div className="w-full h-48 bg-background rounded-lg mb-6 overflow-hidden">
              <div className="w-full h-full bg-transparentflex items-center justify-center">
                <span className="text-4xl">
                  {selectedProject.title.charAt(0)}
                </span>
              </div>
            </div>

            <p className="mb-6">{selectedProject.description}</p>

            {selectedProject.technologies && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-background px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full mt-4 px-4 py-3 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

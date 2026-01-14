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
    title: "Cirrust Lite",
    description:
      "Registration portal for Cirrust Lite, the free version of the Cirrust application.",
    image: "/projects/cirrust-lite-form.png",
    details: "/projects/cirrust-lite-form.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
  },
  {
    title: "Mirecruit CMS and Candidate Portal",
    description: "Recruitment platform for Manulife agents.",
    image: "/projects/mirecruit-cms-login.png",
    details: "/projects/mirecruit-cms-dashboard.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "React Final Form",
      "ANT Design",
    ],
  },
  {
    title: "Smartcourier Courier Command Center & Customer Portal",
    description: "Logistics management system for efficient courier tracking.",
    image: "/projects/smartcourier-ccc-login.png",
    details: "/projects/smartcourier-ccc-dashboard.png",
    technologies: [
      "React.js",
      "React Query",
      "React Final Form",
      "ANT Design",
      "React Redux",
    ],
  },
  {
    title: "Cirrust DMS",
    description: "Cloud-based document management system.",
    image: "/projects/cirrust-dms-login.png",
    details: "/projects/cirrust-dms-dashboard-admin.png",
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
    description: "Automated approval workflow system.",
    image: "/projects/cirrust-workflow-login.png",
    details: "/projects/cirrust-workflow-dashboard-admin.png",
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
    description: "Custom web solution for Kansai using Cirrust Engine",
    image: "/projects/kansai-custompage-form.png",
    details: "/projects/kansai-custompage-form.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "React Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "E-Kantah Badan Pertanahan Nasional (BPN)",
    description: "E-Registration for Self-Service Land Office.",
    image: "/projects/bpn-landing-page.png",
    details: "/projects/bpn-landing-page.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "React Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Impulse Web",
    description: "Business analytics dashboard with real-time insights.",
    image: "/projects/impulse-login.png",
    details: "/projects/impulse-dashboard.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "React Final Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "Zurich CMS",
    description: "Admin dashboard for Zurich agents application management.",
    image: "/projects/zurich-cms-dashboard.png",
    details: "/projects/zurich-cms-dashboard.png",
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "React Final Form",
      "ANT Design",
      ".Net Core",
      "SQL Server",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="relative pt-24">
      <div className="container mx-auto px-6 relative z-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase text-tertiary vaporwave-glow-orange">
            Projects
          </h2>
          <p className="max-w-2xl mx-auto font-mono text-foreground/70">
            A showcase of my recent work and the technologies I&apos;ve used
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group p-6 border border-primary/30 border-t-2 border-t-tertiary bg-card/80 backdrop-blur-md rounded-none cursor-pointer relative overflow-hidden hover:-translate-y-2 hover:shadow-neon-orange transition-all duration-200"
            >
              <div className="w-full aspect-video rounded-none mb-4 overflow-hidden border border-tertiary/30 bg-gradient-to-br from-tertiary/20 via-primary/20 to-secondary/20 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top vaporwave-filter"
                  onError={(e) => {
                    // Fallback ke placeholder jika gambar tidak ditemukan
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-4xl font-heading font-black text-tertiary flex items-center justify-center w-full h-full">${project.title.charAt(
                        0
                      )}</span>`;
                    }
                  }}
                />
                {/* Vaporwave overlay effect dengan gradient magenta-cyan */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 pointer-events-none mix-blend-mode-overlay opacity-80"></div>
                {/* Scanline effect untuk efek retro */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent bg-[length:100%_2px] pointer-events-none mix-blend-mode-overlay opacity-60"></div>
              </div>

              <h3 className="text-xl font-heading font-semibold mb-2 transition-colors duration-300 uppercase text-tertiary group-hover:text-tertiary vaporwave-glow-orange">
                {project.title}
              </h3>

              <p className="mb-4 font-mono text-foreground/80">
                {project.description}
              </p>

              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono uppercase tracking-wider bg-card border border-tertiary/40 px-2 py-1 rounded-none text-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-mono uppercase tracking-wider bg-card border border-tertiary/40 px-2 py-1 rounded-none text-tertiary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="flex justify-center mt-12">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="group px-6 py-3 h-12 border-2 border-tertiary bg-transparent text-tertiary font-mono uppercase tracking-wider rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:bg-tertiary hover:text-black hover:shadow-neon-orange"
              >
                <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
                  View All Projects
                </span>
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="group px-6 py-3 h-12 border-2 border-primary bg-transparent text-primary font-mono uppercase tracking-wider rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:bg-primary hover:text-white hover:shadow-neon-magenta"
              >
                <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
                  View Less
                </span>
              </button>
            )}
          </div>
        )}
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="border-2 border-secondary bg-card/90 backdrop-blur-md p-8 rounded-none max-w-4xl w-full shadow-neon-cyan relative z-[51]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Window Title Bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-tertiary/30 gap-8">
              <div className="flex gap-2 items-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <div className="h-3 w-3 rounded-full bg-secondary"></div>
                <div className="h-3 w-3 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,153,0,0.8)]"></div>
              </div>
              <h2 className="text-xl font-heading font-bold uppercase text-tertiary vaporwave-glow-orange">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-secondary hover:text-primary transition-colors"
              >
                <LuX size={24} />
              </button>
            </div>

            <div className="w-full aspect-video border border-tertiary/30 bg-gradient-to-br from-tertiary/20 via-primary/20 to-secondary/20 rounded-none mb-6 overflow-hidden relative z-[52] project-detail-image">
              <img
                src={selectedProject.details || selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain bg-card/50"
                onError={(e) => {
                  // Fallback ke placeholder jika gambar tidak ditemukan
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.className =
                      "w-full aspect-video border border-tertiary/30 bg-gradient-to-br from-tertiary/20 via-primary/20 to-secondary/20 rounded-none mb-6 overflow-hidden flex items-center justify-center relative z-[52] project-detail-image";
                    parent.innerHTML = `<span class="text-6xl font-heading font-black text-tertiary">${selectedProject.title.charAt(
                      0
                    )}</span>`;
                  }
                }}
              />
            </div>

            <p className="mb-6 font-mono text-foreground/90">
              {selectedProject.description}
            </p>

            {selectedProject.technologies && (
              <div className="mb-6">
                <h3 className="text-lg font-heading font-semibold mb-2 uppercase text-tertiary vaporwave-glow-orange">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-mono uppercase tracking-wider bg-card border border-tertiary/40 px-3 py-1 rounded-none text-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedProject(null)}
              className="group w-full mt-4 px-4 py-3 h-12 border-2 border-tertiary bg-tertiary text-black font-mono uppercase tracking-wider rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:scale-105 hover:opacity-90 hover:shadow-neon-orange"
            >
              <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
                Close
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

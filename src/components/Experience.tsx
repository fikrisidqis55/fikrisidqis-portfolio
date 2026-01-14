"use client";

import { useState, useEffect } from "react";
import DraggableWrapper from "./DraggableWrapper";

const experiences = [
  {
    title: "Frontend Web Developer",
    company: "Quadrant Synergy International",
    date: "June 2022 - Present",
    description:
      "Developing web applications using React.js and Next.js. Reworking old applications with modern tech stack.",
  },
  {
    title: "Backend Developer",
    company: "Quadrant Synergy International",
    date: "Des 2020 - June 2022",
    description:
      "Developing APIs for Agent Recruitment Applications (My Zurich Advisor & MiRecruit).",
  },
  {
    title: "Back End Developer (Intern)",
    company: "Telkom Indonesia",
    date: "Oct 2019 - Mar 2020",
    description:
      "Created several APIs and integrated them with NoSQL databases.",
  },
];

export default function Experience() {
  const [isMobile, setIsMobile] = useState(true); // Default to true to avoid hydration mismatch

  useEffect(() => {
    // Set initial value after mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section id="experience" className="relative w-full h-fit pt-24">
      <div className="px-6 relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-8 uppercase text-tertiary vaporwave-glow-orange">
          Experience
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-y-6 md:gap-x-6 w-full">
          {experiences.map((experience) => {
            return (
              <DraggableWrapper
                className="w-full md:flex-1 md:min-w-0 md:max-w-[calc(50%-12px)] lg:max-w-[calc(33.333%-16px)]"
                key={experience.title + experience.company}
                disabled={isMobile}
              >
                <div className="border border-primary/30 border-t-2 border-t-tertiary bg-card/80 backdrop-blur-md text-foreground px-4 py-6 min-h-[200px] overflow-y-auto w-full min-w-0 gap-y-2 flex flex-col rounded-none hover:shadow-neon-orange transition-all">
                  <h3 className="text-lg font-heading font-bold uppercase text-tertiary vaporwave-glow-orange break-words">
                    {experience.title}
                  </h3>
                  <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-foreground/90 break-words">
                    {experience.company}
                  </h4>
                  <span className="text-xs font-mono font-extralight text-foreground/60">
                    {experience.date}
                  </span>
                  <p className="text-sm font-mono font-light text-foreground/80 break-words">
                    {experience.description}
                  </p>
                </div>
              </DraggableWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

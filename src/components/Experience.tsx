"use client";

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
  return (
    <section id="experience" className="relative w-full h-fit pt-24">
      <div className="px-6 relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Experience
        </h2>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 w-full">
          {experiences.map((experience) => {
            const isMobile =
              typeof window !== "undefined" && window.innerWidth < 768;
            return (
              <DraggableWrapper
                className="inline-block"
                key={experience.title + experience.company}
                disabled={isMobile}
              >
                <div className="bg-slate-900/85 text-white px-4 py-1 min-h-[200px] overflow-y-auto min-w-[260px] gap-y-2 flex flex-col">
                  <h3 className="text-lg font-bold">{experience.title}</h3>
                  <h4 className="text-sm font-semibold">
                    {experience.company}
                  </h4>
                  <span className="text-xs font-extralight">
                    {experience.date}
                  </span>
                  <p className="text-sm font-light">{experience.description}</p>
                </div>
              </DraggableWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

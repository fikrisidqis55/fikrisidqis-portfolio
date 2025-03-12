"use client";

import { motion } from "framer-motion";

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
    <section id="experience" className="py-24 bg-[#0D0D0D] text-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0D0D0D] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FF5700]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5700] via-[#FF9100] to-[#FF5700]/30 transform md:translate-x-[-50%]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#FF5700] transform md:translate-x-[-50%] z-10"></div>

              <div className="md:w-1/2 mb-2 md:mb-0 md:px-6 text-center">
                <div
                  className={`inline-block md:${
                    index % 2 === 0 ? "float-left" : "float-right"
                  }`}
                >
                  <span className="text-sm text-[#FF9100] font-medium bg-[#1A120B] px-4 py-1 rounded-full">
                    {exp.date}
                  </span>
                </div>
              </div>

              <div className="md:w-1/2 md:px-6">
                <div className="p-6 bg-[#1A120B] rounded-lg shadow-lg border-l-4 border-[#FF5700] hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-[#FF9100]">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-[#FF5700]">{exp.company}</h4>
                  <p className="mt-3 text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

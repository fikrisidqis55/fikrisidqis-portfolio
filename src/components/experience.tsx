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
    date: "May 2021 - June 2022",
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
    <section id="experience" className="py-20 bg-[#0D0D0D] text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-[#FF5700]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-[#2A1E17] rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Garis samping dengan warna tema */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF5700] to-[#FF9100]"></div>

            <h3 className="text-xl font-semibold text-[#FF9100]">
              {exp.title}
            </h3>
            <h4 className="text-lg text-[#FF5700]">{exp.company}</h4>
            <p className="text-sm text-gray-400 italic">{exp.date}</p>
            <p className="mt-3 text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

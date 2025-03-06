import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  details: string;
}

const projects: Project[] = [
  {
    title: "Smartcourier.Web",
    description: "Logistics management system for efficient courier tracking.",
    image: "/projects/smartcourier.png",
    details: "/projects/details/smartcourier.png",
  },
  {
    title: "Manulife.Agent.WebCandidate (MiRecruit)",
    description: "Recruitment platform for Manulife agents.",
    image: "/projects/mirecruit.png",
    details: "/projects/details/mirecruit.png",
  },
  {
    title: "Kansai.custom.page",
    description: "Custom web solution for Kansai Paint.",
    image: "/projects/kansai.png",
    details: "/projects/details/kansai.png",
  },
  {
    title: "Impulse.Web",
    description: "Business analytics dashboard with real-time insights.",
    image: "/projects/impulse.png",
    details: "/projects/details/impulse.png",
  },
  {
    title: "Cirrust.Web",
    description: "Cloud-based document management system.",
    image: "/projects/cirrust.png",
    details: "/projects/details/cirrust.png",
  },
  {
    title: "Zurich",
    description: "Insurance platform development for Zurich.",
    image: "/projects/zurich.png",
    details: "/projects/details/zurich.png",
  },
  {
    title: "Portal.Courier.Command.Center (BPN)",
    description: "Government land registry system project.",
    image: "/projects/bpn.png",
    details: "/projects/details/bpn.png",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0D0D0D] text-[#EDEDED]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#FF5700]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-[#FF5700] hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Image
                src={project.image}
                alt={project.title}
                width={300} // Sesuaikan dengan ukuran sebenarnya
                height={200}
                className="rounded-lg w-full h-40 object-cover mb-4 border border-[#FF9100]"
              /> */}
              <h3 className="text-xl font-semibold group-hover:text-[#FF9100]">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1E1E1E] p-6 rounded-lg max-w-lg shadow-lg transform border border-[#FF5700]"
              onClick={(e) => e.stopPropagation()}
              initial={{ rotateY: 90, scale: 0.5 }}
              animate={{ rotateY: [90, -15, 10, -5, 0], scale: [0.5, 1.1, 1] }}
              exit={{ rotateY: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#FF5700]">
                {selectedProject.title}
              </h2>
              {/* <Image
                src={selectedProject.details}
                alt="Project preview"
                width={300} // Sesuaikan dengan ukuran sebenarnya
                height={200}
                className="rounded-lg w-full mb-4 border border-[#FF9100]"
              /> */}
              <p className="text-gray-300">{selectedProject.description}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-4 py-2 bg-[#FF5700] text-black rounded hover:bg-[#FF9100] transition-colors"
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

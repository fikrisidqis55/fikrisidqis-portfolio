import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true }); // Aktifkan animasi saat masuk viewport
  console.log("isInView", isInView);

  return (
    <section id="about" className="py-20 bg-[#0D0D0D] text-[#EDEDED] relative">
      <div
        ref={ref}
        className="container mx-auto flex flex-col md:flex-row items-center px-6 relative"
      >
        {/* Background Accent */}
        <div
          className="absolute inset-0 bg-[#FF5700] opacity-10 -z-10"
          style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)" }}
        ></div>

        {/* Foto Profil */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Image
            src="/profilePictureFikri.png"
            alt="Fikri Sidqi"
            width={192}
            height={192}
            className="rounded-full border-4 border-[#FF5700]"
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#FF5700]">About Me</h2>
          <p className="text-lg text-gray-300">
            Hello! I&#39;m{" "}
            <span className="text-[#FF9100] font-semibold">Fikri Sidqi</span>, a
            passionate Front-End Developer with more than 2 years of experience.
            I love building interactive, beautiful, and high-performance
            websites using <span className="text-[#FF9100]">React.js</span> and{" "}
            <span className="text-[#FF9100]">Next.js</span>. My focus is on
            crafting seamless user experiences with modern web technologies.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            Beyond coding, I enjoy exploring new technologies, mechanical
            keyboards, and experimenting with 3D graphics. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 text-[#EDEDED] relative">
      <div
        ref={ref}
        className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-10 md:gap-16 relative"
      >
        <motion.div
          className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#FF5700] to-[#FF9100] rounded-full blur-md opacity-70 animate-pulse"></div>
            <Image
              src="/profilePictureFikri.png"
              alt="Fikri Sidqi"
              width={220}
              height={220}
              className="rounded-full border-4 border-[#FF5700] relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/3 text-center md:text-left relative z-10"
          initial={{ opacity: 0, x: -25 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF5700]">
            About Me
          </h2>

          <div className="space-y-4 text-lg">
            <p className="text-gray-200 leading-relaxed">
              I am a dedicated{" "}
              <span className="text-[#FF9100] font-semibold">
                Software Engineer
              </span>{" "}
              with a passion for crafting intuitive and high-performance
              applications. My expertise spans across various modern
              technologies, allowing me to develop seamless and scalable digital
              solutions that enhance user experiences.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Constantly exploring the evolving tech landscape, I enjoy
              designing interactive interfaces, optimizing web performance, and
              implementing innovative development techniques to create impactful
              digital products.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I immerse myself in exploring new technologies,
              curating custom mechanical keyboards, and diving into the world of
              3D graphics. 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

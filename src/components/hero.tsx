import ThreeDModel from "./threeDModel";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-[#0D0D0D] text-[#EDEDED] relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#FF5700] opacity-20 blur-3xl"></div>

      <motion.h1
        className="text-6xl font-bold text-[#FF5700] drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hi, I&#39;m Fikri
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Software Engineer
      </motion.p>

      {/* Uncomment kalau mau pake 3D Model */}
      {/* <div className="flex justify-center items-center h-1/2 w-full">
        <ThreeDModel />
      </div> */}

      <motion.a
        href="#projects"
        className="mt-5 px-6 py-3 bg-[#FF5700] text-black font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#FF9100",
          boxShadow: "0px 0px 15px rgba(255, 145, 0, 0.5)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span className="relative z-10">See My Work</span>
        <motion.div
          className="absolute inset-0 bg-[#FF9100] opacity-0"
          whileHover={{ opacity: 0.2 }}
        />
      </motion.a>
    </section>
  );
}

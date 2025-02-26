import ThreeDModel from "./threeDModel";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Hi, I'm Fikri</h1>
      <p className="text-lg text-gray-400 mt-2 opacity-0 animate-fadeIn">
        Software Developer & 3D Enthusiast
      </p>
      {/* Ini buat section 3d Model nya */}
      <div className="flex justify-center items-center h-1/2 w-full">
        <ThreeDModel />
      </div>
      <a
        href="#projects"
        className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        See My Work
      </a>
    </section>
  );
}

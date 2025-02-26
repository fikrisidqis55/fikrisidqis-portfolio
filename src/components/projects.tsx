export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold">My Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {/* Tambahin list proyek di sini */}
        <div className="bg-gray-800 p-6 rounded-lg">Project 1</div>
        <div className="bg-gray-800 p-6 rounded-lg">Project 2</div>
        <div className="bg-gray-800 p-6 rounded-lg">Project 3</div>
      </div>
    </section>
  );
}

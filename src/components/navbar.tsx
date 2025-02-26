export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fikri's Portfolio</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

import { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-wide">
          MR<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            <li>
              <a
                href="#about"
                className="transition-colors duration-300 hover:text-blue-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="transition-colors duration-300 hover:text-blue-500"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition-colors duration-300 hover:text-blue-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="https://github.com/MuhammadRamdani121"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <ul className="flex flex-col p-4">
            <li>
              <a
                href="#about"
                className="block py-3 transition hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="block py-3 transition hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block py-3 transition hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-3 transition hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

            <li className="mt-4">
              <a
                href="https://github.com/MuhammadRamdani121"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 transition hover:border-blue-500"
              >
                <FaGithub />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

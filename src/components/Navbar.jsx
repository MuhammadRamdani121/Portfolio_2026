import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-500">Ramdani.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

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
                className="block py-3"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="block py-3"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block py-3"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-3"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

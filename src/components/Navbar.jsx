function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-500">Ramdani.dev</h1>

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
      </div>
    </nav>
  );
}

export default Navbar;

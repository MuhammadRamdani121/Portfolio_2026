function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-slate-500">© 2026 Muhamad Ramdani</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/MuhammadRamdani121"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-blue-500"
          >
            GitHub
          </a>

          <a href="#contact" className="text-slate-500 hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function FeaturedProject() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-blue-500">Featured Project</p>

        <h2 className="text-4xl font-bold">Netband Management System</h2>
      </div>

      <div
        className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
      >
        <div className="grid md:grid-cols-2">
          {/* Screenshot */}
          <div className="flex items-center justify-center bg-slate-950 p-8">
            <div
              className="
              flex
              h-80
              w-full
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-800
              text-slate-500
            "
            >
              Netband Screenshot
            </div>
          </div>

          {/* Content */}
          <div className="p-10">
            <p className="mb-3 text-blue-500">Full Stack Project</p>

            <h3 className="mb-6 text-3xl font-bold">
              Bandwidth Management Dashboard
            </h3>

            <p className="mb-6 text-slate-400">
              Web-based bandwidth management system designed to monitor users,
              allocate bandwidth, manage customer information, and simplify
              network administration.
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm">
                React
              </span>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm">
                Express
              </span>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm">
                SQLite
              </span>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm">
                Tailwind CSS
              </span>
            </div>

            <ul className="mb-8 space-y-3 text-slate-400">
              <li>✓ User Management</li>
              <li>✓ Bandwidth Monitoring</li>
              <li>✓ Dashboard Analytics</li>
              <li>✓ Authentication System</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://github.com/MuhammadRamdani121"
                target="_blank"
                rel="noreferrer"
                className="
                rounded-xl
                border
                border-slate-700
                px-6
                py-3
                transition
                hover:border-blue-500
              "
              >
                GitHub
              </a>

              <a
                href="#"
                className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                transition
                hover:bg-blue-700
              "
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;

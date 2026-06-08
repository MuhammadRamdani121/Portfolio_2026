function FeaturedProject() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Featured Project</h2>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center justify-center bg-slate-950 p-8">
            <div className="flex h-72 w-full items-center justify-center rounded-2xl border border-slate-800">
              Screenshot Netband
            </div>
          </div>

          <div className="p-10">
            <p className="mb-3 text-blue-500">Featured Project</p>

            <h3 className="mb-4 text-3xl font-bold">
              Netband Management System
            </h3>

            <p className="mb-6 text-slate-400">
              Web application for managing bandwidth allocation, customer data
              and network monitoring.
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              <Tag>React</Tag>
              <Tag>Express</Tag>
              <Tag>SQLite</Tag>
              <Tag>Tailwind CSS</Tag>
            </div>

            <div className="flex gap-4">
              <a href="#" className="rounded-lg bg-blue-600 px-6 py-3">
                Live Demo
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-700 px-6 py-3"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-slate-700 px-3 py-1 text-sm">
      {children}
    </span>
  );
}

export default FeaturedProject;

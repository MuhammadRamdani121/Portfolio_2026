import projects from "../data/projects";
import FadeIn from "./FadeIn";

function Projects() {
  return (
    <FadeIn>
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        {" "}
        <div className="mb-16 text-center">
          {" "}
          <p className="mb-3 text-blue-500">Portfolio </p>
          <h2 className="text-4xl font-bold">Other Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A collection of projects built using modern web technologies and
            tools.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className=" group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="h-48 bg-slate-800">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-500">
                    Project Preview
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <span className="translate-x-2 text-blue-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                  rounded-full
                  border
                  border-slate-700
                  px-3
                  py-1
                  text-xs
                  text-slate-300
                "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                rounded-lg
                border
                border-slate-700
                px-4
                py-2
                text-sm
                transition
                hover:border-blue-500
              "
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2
                  text-sm
                  transition
                  hover:bg-blue-700
                "
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}

export default Projects;

import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Skills & Technologies
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SkillCard title="Frontend" items={skills.frontend} />

        <SkillCard title="Backend" items={skills.backend} />

        <SkillCard title="Database" items={skills.database} />

        <SkillCard title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="mb-4 text-xl font-semibold text-blue-500">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;

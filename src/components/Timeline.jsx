const timeline = [
  {
    year: "2020",
    title: "Started Learning Programming",
  },
  {
    year: "2024",
    title: "Graduated Universitas Pamulang",
  },
  {
    year: "2025",
    title: "Built Netband Management System",
  },
  {
    year: "2026",
    title: "Seeking Full Stack Opportunity",
  },
];

function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-bold">Journey</h2>

      <div className="relative border-l border-slate-700">
        {timeline.map((item) => (
          <div key={item.year} className="relative mb-12 ml-8">
            <div className="absolute -left-11 h-4 w-4 rounded-full bg-blue-500" />

            <h3 className="text-xl font-bold text-blue-500">{item.year}</h3>

            <p className="text-slate-400">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;

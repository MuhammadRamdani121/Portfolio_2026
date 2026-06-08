const stats = [
  { number: "20+", title: "Projects" },
  { number: "4+", title: "Years Learning" },
  { number: "10+", title: "Technologies" },
  { number: "Open", title: "To Work" },
];

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-3xl font-bold text-blue-500">{item.number}</h3>

            <p className="text-slate-400">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

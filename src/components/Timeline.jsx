import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Started Informatics Engineering",
    description:
      "Began studying Informatics Engineering at Universitas Pamulang.",
  },
  {
    year: "2021",
    title: "Learning Web Development",
    description:
      "Started learning HTML, CSS, JavaScript, and responsive web design.",
  },
  {
    year: "2022",
    title: "Built PHP & MySQL Projects",
    description: "Developed several web applications using PHP and MySQL.",
  },
  {
    year: "2024",
    title: "Graduated",
    description:
      "Successfully graduated from Universitas Pamulang with a Bachelor's degree.",
  },
  {
    year: "2025",
    title: "Learning Modern Stack",
    description:
      "Focused on React, Node.js, Express, Laravel, Git, and API development.",
  },
  {
    year: "2026",
    title: "Full Stack Developer Journey",
    description:
      "Building portfolio projects and actively seeking professional opportunities.",
  },
];

function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-2 text-blue-500">Journey</p>

        <h2 className="text-4xl font-bold">My Timeline</h2>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-4 h-full w-0.5 bg-slate-700 md:left-1/2" />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className={`relative mb-12 flex w-full md:items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } `}
          >
            <div className="absolute left-4 h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-500 md:left-1/2 md:-translate-x-1/2" />

            <div className="ml-12 w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 md:ml-0 md:w-[45%]">
              <span className="text-sm text-blue-500">{item.year}</span>

              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-slate-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;

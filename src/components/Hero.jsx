import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 md:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left"
        >
          <p
            className="
              mb-4
              inline-flex
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-4
              py-2
              text-blue-400
            "
          >
            🚀 Full Stack Developer
          </p>

          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            Muhamad
            <span className="text-blue-500"> Ramdani</span>
          </h1>

          <div className="mb-6 flex justify-center md:justify-start">
            <span
              className="
                rounded-full
                border
                border-green-500/30
                bg-green-500/10
                px-4
                py-2
                text-sm
                text-green-400
              "
            >
              ● Open To Work
            </span>
          </div>

          <p className="mb-8 text-lg text-slate-400">
            Building modern web applications using React, Laravel, Node.js,
            Express, and MySQL.
          </p>

          {/* Tech Stack */}
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start">
            {["React", "Laravel", "Node.js", "Express", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900
                  px-3
                  py-1
                  text-sm
                  text-slate-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="
                rounded-xl
                border
                border-slate-700
                px-6
                py-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
              "
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />

          <img
            src={profile}
            alt="Muhamad Ramdani"
            className="
              relative
              h-72
              w-72
              rounded-full
              border-4
              border-blue-500
              object-cover
              shadow-2xl
              shadow-blue-500/20
              transition-all
              duration-500
              hover:scale-105
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

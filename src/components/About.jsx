import FadeIn from "./FadeIn";

function About() {
  return (
    <FadeIn>
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-8 text-center text-4xl font-bold">About Me</h2>

        <p className="text-center text-lg leading-relaxed text-slate-400">
          I am a Full Stack Developer from Indonesia with experience building
          web applications using React, Laravel, Node.js, Express and MySQL. I
          enjoy solving real-world problems through clean and scalable software
          solutions.
        </p>
      </section>
    </FadeIn>
  );
}

export default About;

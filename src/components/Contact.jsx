import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-blue-500">Contact</p>

        <h2 className="mb-4 text-4xl font-bold">Let's Work Together</h2>

        <p className="text-slate-400">
          Feel free to contact me for opportunities, collaborations, or just to
          say hello.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {/* Email */}
        <a
          href="mailto:muhamadramdani121.mr60@gmail.com"
          className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          <FaEnvelope className="text-2xl text-blue-500" />

          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-400">muhamadramdani121.mr60@gmail.com</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MuhammadRamdani121"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          <FaGithub className="text-2xl text-blue-500" />

          <div>
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-slate-400">MuhammadRamdani121</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhamadramdani121/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          <FaLinkedin className="text-2xl text-blue-500" />

          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-slate-400">Connect with me</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/62895805102578"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          <FaWhatsapp className="text-2xl text-blue-500" />

          <div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-slate-400">Chat with me</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;

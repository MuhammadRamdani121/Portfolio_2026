import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Contact</h2>

      <div className="grid gap-6 md:grid-cols-4">
        <a
          href="https://github.com/MuhammadRamdani121"
          target="_blank"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2"
        >
          <FaGithub className="mx-auto mb-4 text-3xl" />
          GitHub
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2"
        >
          <FaLinkedin className="mx-auto mb-4 text-3xl" />
          LinkedIn
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2"
        >
          <FaWhatsapp className="mx-auto mb-4 text-3xl" />
          WhatsApp
        </a>

        <a
          href="mailto:email@email.com"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2"
        >
          <FaEnvelope className="mx-auto mb-4 text-3xl" />
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;

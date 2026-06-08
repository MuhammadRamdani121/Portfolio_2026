import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Skills from "../components/Skills";
import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Skills />
      </FadeIn>

      <FadeIn>
        <FeaturedProject />
      </FadeIn>

      <FadeIn>
        <Projects />
      </FadeIn>

      <FadeIn>
        <Timeline />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default Home;

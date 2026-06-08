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

function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

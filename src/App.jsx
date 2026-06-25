import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <div className="cinematic-bg" aria-hidden="true">
        <span className="scene-line scene-line-one" />
        <span className="scene-line scene-line-two" />
        <span className="scene-line scene-line-three" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Toolkit from "../components/Toolkit";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const Homepage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <AboutMe />
        <Experience />
        <Toolkit />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

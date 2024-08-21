import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Footer from "../components/Footer";

export const Homepage = () => {
  return (
    <div className="bg-[#d9dcdf] min-h-screen font-chakra-petch">
      <Navbar />
      <AboutMe/>
      <Project/>
      <Footer/>
    </div>
  );
};

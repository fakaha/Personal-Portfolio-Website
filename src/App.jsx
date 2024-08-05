import { useState } from "react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { RouteList } from "./routes/RouteList";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Hero />
    //   <AboutMe/>
    //   <Skills/>
    //   <Project/>
    //   <Contact/>
    //   <Footer/>
    // </BrowserRouter>
    <RouteList/>
  );
};

export default App;

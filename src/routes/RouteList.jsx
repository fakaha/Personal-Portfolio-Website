import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} >
        <Route path="contact" element={<Contact />}/>
        <Route path="projects" element={<Project />}/>
        <Route path="skills" element={<Skills />}/>
        <Route path="about" element={<AboutMe />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

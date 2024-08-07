import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import SocialMedia from "../components/SocialMedia";


export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} >
        <Route index element={<AboutMe />}/>
        <Route path="about" element={<AboutMe />}/>
        <Route path="skills" element={<Skills />}/>
        <Route path="projects" element={<Project />}/>
        <Route path="contact" element={<SocialMedia/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import php from "../assets/php.svg";
import react from "../assets/reactjs.svg";
import tailwind from "../assets/tailwindcss.svg";
import bootstrap from "../assets/bootstrap.svg";
import node from "../assets/nodejs.svg";
import express from "../assets/express.svg";
import laravel from "../assets/Laravel.svg";
import mongo from "../assets/mongodb.svg";
import postgre from "../assets/postgre.svg";
import github from "../assets/github.svg";

const icons = {
  html,
  css,
  js,
  php,
  react,
  tailwind,
  bootstrap,
  node,
  express,
  laravel,
  mongo,
  postgre,
  github,
};

export const toolkit = [
  {
    title: "Languages",
    items: [
      { name: "HTML", icon: icons.html },
      { name: "CSS", icon: icons.css },
      { name: "JavaScript", icon: icons.js },
      { name: "PHP", icon: icons.php },
      { name: "C++", note: "basics" },
    ],
  },
  {
    title: "Front-End",
    items: [
      { name: "React", icon: icons.react },
      { name: "Tailwind CSS", icon: icons.tailwind },
      { name: "Bootstrap", icon: icons.bootstrap },
      { name: "Redux" },
    ],
  },
  {
    title: "Back-End",
    items: [
      { name: "Node.js", icon: icons.node },
      { name: "Express", icon: icons.express },
      { name: "Laravel", icon: icons.laravel },
      { name: "Mongoose" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data & Tools",
    items: [
      { name: "MongoDB", icon: icons.mongo },
      { name: "PostgreSQL", icon: icons.postgre },
      { name: "MySQL" },
      { name: "GitHub", icon: icons.github },
      { name: "Git" },
    ],
  },
];

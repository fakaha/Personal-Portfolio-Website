import React, { useEffect } from "react";
import Photo from "../assets/PersonalPhoto.png";
import Typed from "typed.js";
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwindcss.svg'
import js from '../assets/js.svg'
import reactJS from '../assets/reactjs.svg'

const AboutMe = () => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Zulfa Fakaha.", "Front-End Developer."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col justify-center lg:mx-12 mx-8 pt-32 px-8 gap-y-10 lg:gap-y-0"
    >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          <h2 className="text-xl lg:text-2xl mb-3 font-bold">
            Hello, I'm <span className="text-[#007bff]" ref={el}></span>
          </h2>
          <div className="">
            <p className="text-lg max-w-xl">
              I'm a Computer science student at University of Amikom Yogyakarta
              with special interest in{" "}
              <span className="text-[#007bff]">website development</span>,
              particularly in <span className="text-[#007bff]">Front End</span>.
              During my studies, i have learned C++, HTML, CSS, Bootstrap,
              TailwindCSS, JavaScript, and React JS.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <img className="mx-auto" src={Photo} alt="Personal Photo" />
        </div>
      </div>
      <div>
        <p className="text-xl font-bold mb-3">Favorite Tech Stacks</p>
        <div className="flex flex-wrap justify-center lg:justify-normal">
          <img className="h-20" src={html} alt="Tech Stack" />
          <img className="h-20" src={css} alt="Tech Stack" />
          <img className="h-20" src={bootstrap} alt="Tech Stack" />
          <img className="h-20" src={tailwind} alt="Tech Stack" />
          <img className="h-20" src={js} alt="Tech Stack" />
          <img className="h-20" src={reactJS} alt="Tech Stack" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

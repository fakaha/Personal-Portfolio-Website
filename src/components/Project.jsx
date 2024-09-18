import React from 'react'
import project1 from '../assets/todoProject.webp'
import project2 from '../assets/movieProject.webp'
import project3 from '../assets/courseProject.webp'
import project4 from '../assets/project4.webp'
import project5 from '../assets/emporium-z.webp'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Project = () => {
  const goto = (project) =>{
    window.open(project)
  }
  AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <section
      id="projects"
      className="project flex flex-col justify-center lg:mx-12 mx-8 pt-32 px-8"
    >
      <h2 className="text-2xl text-center mb-5 font-bold">Projects</h2>
      <div className="flex flex-wrap gap-8 lg:gap-x-6 justify-center mt-5">
        <div
          data-aos="zoom-in-down"
          className="project-content lg:w-[30%] w-full"
        >
          <img
            className="w-80"
            src={project1}
            alt=""
            onClick={() => goto("https://local-todo-apps-zul.vercel.app/")}
          />
          <p>
            Todo List website that uses local storage to save data without a
            database.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          className="project-content lg:w-[30%] w-full"
        >
          <img
            className="w-80"
            src={project2}
            alt=""
            onClick={() =>
              goto("https://challenge-06-zulfa-fakaha.vercel.app/")
            }
          />
          <p>Movie Website that displays several movies using a public API.</p>
        </div>
        <div
          data-aos="zoom-in-down"
          className="project-content lg:w-[30%] w-full"
        >
          <img
            className="w-80"
            src={project3}
            alt=""
            onClick={() => goto("https://fpbinar-kel7.vercel.app/")}
          />
          <p>
            Online Course website that features buying and watching for its
            users using a custom API.
            <br />
            (This project was created while I was participating in the
            Independent Study Batch 5 as a{" "}
            <span className="text-secondary">Front End</span> for the final
            project)
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          className="project-content lg:w-[30%] w-full"
        >
          <img
            className="w-80"
            src={project4}
            alt=""
            onClick={() => goto("https://quranku-tau.vercel.app/")}
          />
          <p>
            Quran website that features reading for its users using a API
            public.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          className="project-content lg:w-[30%] w-full"
        >
          <img
            className="w-80"
            src={project5}
            alt=""
            onClick={() => goto("https://emporium-z.vercel.app/")}
          />
          <p>
            Store website that features login, register, and adding items to
            cart for its users using a public API.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project
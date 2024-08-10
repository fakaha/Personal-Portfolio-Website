import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="about flex flex-col justify-center p-5">
      <h2 className="text-[#fff] text-2xl">About Me</h2>
      <div className="text-[#fff] flex flex-col items-center mt-5 justify-center">
        <p className="">
          Hello everyone, I'm Zulfa Fakaha. I'm a Computer science student at
          University of Amikom Yogyakarta with special interest in{" "}
          <span className="text-[#efcc84]">website development</span>,
          particularly in <span className="text-[#efcc84]">Front End</span>.
          During my studies, i have learned C++, HTML, CSS, Bootstrap,
          TailwindCSS, JavaScript, and React JS.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav id="" className="bg-secondary d-flex justify-space-between align-center">      
        <a
          href="#"
          className="text-decoration-none text-md font-bold text-light"
        >
          ZFakaha
        </a>
        <div className="navOption d-flex">
          <Link to="#home" className="text-decoration-none text-light">
            Home
          </Link>
          <Link to="#about" className="text-decoration-none text-light">
            About
          </Link>
          <Link to="#skills" className="text-decoration-none text-light">
            Skills
          </Link>
          <Link to="#projects" className="text-decoration-none text-light">
            Projects
          </Link>
          <Link to="#contact" className="text-decoration-none text-light">
            Contact
          </Link>
        </div>      
    </nav>
  );
};
export default Navbar;

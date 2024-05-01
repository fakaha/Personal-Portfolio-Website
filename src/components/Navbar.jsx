import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav id="" className="nav bg-secondary d-flex justify-space-between align-center">
        <div className="containerMenu d-flex justify-space-between">
        <a
          href="#"
          className="text-decoration-none text-md font-bold text-light"
        >
          ZFakaha
        </a>
          <div className="menu-toggle d-md-none" onClick={handleMenuToggle}>
          <input className="check-toggle" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>
        <div className={`navOption d-flex ${isMenuOpen ? "" : "d-none"}`}>
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

import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav id="" className="flex bg-[#4b4b4b] rounded-tr-xl rounded-br-xl rounded-bl-xl p-4 absolute right-0">
        
        <div className='flex gap-4 text-[#fff]'>
          <Link to="#home" className="text-decoration-none text-primary">
            Home
          </Link>
          <Link to="#about" className="text-decoration-none text-primary">
            About
          </Link>
          <Link to="#skills" className="text-decoration-none text-primary">
            Skills
          </Link>
          <Link to="#projects" className="text-decoration-none text-primary">
            Projects
          </Link>
          <Link to="#contact" className="text-decoration-none text-primary">
            Contact
          </Link>
        </div>      
    </nav>
  );
};
export default Navbar;

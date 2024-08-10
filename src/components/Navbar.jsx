import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav id="" className="flex bg-[#383838] rounded-tr-xl rounded-br-xl rounded-bl-xl p-4 absolute lg:right-0 lg:left-auto right-0 left-0">
        
        <div className='flex gap-5 text-[#fff]'>          
          <NavLink to="/about" className={({isActive }) => isActive ? "text-decoration-none text-[#efcc84] font-bold" : "text-decoration-none"}>
            About
          </NavLink>
          <NavLink to="/skills" className={({isActive }) => isActive ? "text-decoration-none text-[#efcc84] font-bold" : "text-decoration-none"}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({isActive }) => isActive ? "text-decoration-none text-[#efcc84] font-bold" : "text-decoration-none"}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({isActive }) => isActive ? "text-decoration-none text-[#efcc84] font-bold" : "text-decoration-none"}>
            Contact
          </NavLink>
        </div>      
    </nav>
  );
};
export default Navbar;

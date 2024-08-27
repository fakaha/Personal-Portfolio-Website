import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "./Button/Button";


const Navbar = () => {

  return (
    <nav className="flex justify-between px-8 py-7 items-center fixed top-0 right-0 left-0 bg-[#fff] lg:mx-12 mx-8 mt-7 w-max-md rounded-3xl">
      <h1 onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className="text-xl lg:text-3xl hover:cursor-pointer">ZFakaha</h1>
      <div className="flex gap-2 lg:gap-5 items-center">
        <Link className="hover:text-[#007bff]" smooth to="#home">Home</Link>
        <Link className="hover:text-[#007bff]" smooth to="#projects">Projects</Link>
      </div>
    </nav>
  );
};
export default Navbar;

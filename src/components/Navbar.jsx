import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-20 w-full border-b-2 border-solid border-white border-opacity-20 backdrop-blur-lg">
      <div className="flex h-full w-full items-center justify-between px-5">
        <ul className="flex gap-8 text-xl font-medium *:cursor-pointer mx-auto">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <li>Brochure</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

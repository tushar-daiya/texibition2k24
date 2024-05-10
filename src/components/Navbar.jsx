import React from "react";
import ScrambleTextHover from "./ScrambleTextHover";
import { useLocation } from "react-router-dom/dist";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed left-0 top-0 z-50 h-20 w-full border-b-2 border-solid border-white border-opacity-20 backdrop-blur-lg">
      <div className="flex h-full w-full items-center justify-between px-5">
        <ul className="mx-auto flex w-full justify-between text-xl font-medium *:cursor-pointer md:w-max md:gap-8">
          <li className={`${pathname == "/" ? "text-primary" : "text-white"}`}>
            <NavLink aria-label="Home Page" to={"/"}>
              <ScrambleTextHover text="Home" />
            </NavLink>
          </li>
          <li
            className={`${pathname == "/about" ? "text-primary" : "text-white"}`}
          >
            <NavLink aria-label="About Page" to={"/about"}>
              <ScrambleTextHover text="About" />
            </NavLink>
          </li>
          <li
            className={`${pathname == "/contact" ? "text-primary" : "text-white"}`}
          >
            <NavLink aria-label="Contact Page" to={"/contact"}>
              <ScrambleTextHover text="Contact" />
            </NavLink>
          </li>
          <li>
            <ScrambleTextHover text="Brochure" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

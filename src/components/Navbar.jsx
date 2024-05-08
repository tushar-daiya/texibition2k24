import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ScrambleTextHover from "./ScrambleTextHover";
import { useLocation } from "react-router-dom/dist";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="fixed left-0 top-0 z-50 h-20 w-full border-b-2 border-solid border-white border-opacity-20 backdrop-blur-lg">
      <div className="flex h-full w-full items-center justify-between px-5">
        <ul className="mx-auto flex gap-8 text-xl font-medium *:cursor-pointer">
          <Link to={"/"}>
            <li
              className={`${pathname == "/" ? "text-primary" : "text-white"}`}
            >
              <ScrambleTextHover text="Home" />
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className={`${pathname == "/about" ? "text-primary" : "text-white"}`}
            >
              <ScrambleTextHover text="About" />
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className={`${pathname == "/contact" ? "text-primary" : "text-white"}`}
            >
              <ScrambleTextHover text="Contact" />
            </li>
          </Link>
          <li>
            <ScrambleTextHover text="Brochure" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

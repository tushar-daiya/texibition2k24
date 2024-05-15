import React from "react";
import ScrambleTextHover from "./ScrambleTextHover";
import { useLocation } from "react-router-dom/dist";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    };
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [pathname]);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };
  return (
    <div className="fixed left-0 top-0 z-50 h-20 w-full border-b-2 border-solid border-white border-opacity-20 backdrop-blur-lg">
      <div className="flex h-full w-full items-center justify-between px-5">
        {windowSize > 768 ? (
          <ul className="mx-auto flex w-full justify-between text-xl font-medium *:cursor-pointer md:w-max md:gap-8">
            <li
              className={`${pathname == "/" ? "text-primary" : "text-white"}`}
            >
              <NavLink aria-label="Home Page" to={"/"}>
                <ScrambleTextHover text="Home" />
              </NavLink>
            </li>
            <li
              className={`${pathname == "/events" ? "text-primary" : "text-white"}`}
            >
              <NavLink aria-label="Events" to={"/events"}>
                <ScrambleTextHover text="Events" />
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
            <li
              className={`${pathname == "/team" ? "text-primary" : "text-white"}`}
            >
              <NavLink aria-label="Team Page" to={"/team"}>
                <ScrambleTextHover text="Team" />
              </NavLink>
            </li>
            <li>
              <ScrambleTextHover text="Brochure" />
            </li>
          </ul>
        ) : (
          <>
            <NavLink aria-label="Home Page" to={"/"}>
              <img width={48} height={40} src="/logo_initial.webp" alt="logo" className="h-10" />
            </NavLink>
            <button
              name="menu"
              aria-label="Menu"
              className={`${menuOpen ? "active" : ""} burger z-50`}
              onClick={handleMenuOpen}
            ></button>
            <div
              className={`${menuOpen ? "active h-screen" : "h-0"} absolute left-0 top-0 flex w-full items-center justify-center overflow-hidden bg-black transition-all duration-700 ease-in-out`}
            >
              <div className="flex flex-col items-center gap-10 text-5xl">
                <div className="menu-item">
                  <span id={`${pathname == "/" ? "active" : ""}`}>
                    <NavLink aria-label="Home Page" to={"/"}>
                      Home
                    </NavLink>
                  </span>
                </div>
                <div className="menu-item">
                  <span id={`${pathname == "/events" ? "active" : ""}`}>
                    <NavLink aria-label="Events" to={"/events"}>
                      Events
                    </NavLink>
                  </span>
                </div>
                <div className="menu-item">
                  <span id={`${pathname == "/about" ? "active" : ""}`}>
                    <NavLink aria-label="About Page" to={"/about"}>
                      About
                    </NavLink>
                  </span>
                </div>
                <div className="menu-item">
                  <span id={`${pathname == "/contact" ? "active" : ""}`}>
                    <NavLink aria-label="Contact Page" to={"/contact"}>
                      Contact
                    </NavLink>
                  </span>
                </div>
                <div className="menu-item">
                  <span id={`${pathname == "/team" ? "active" : ""}`}>
                    <NavLink aria-label="Team Page" to={"/team"}>
                      Team
                    </NavLink>
                  </span>
                </div>
                <div className="menu-item">
                  <span>
                    <NavLink aria-label="Brochure" to={"/"}>
                      Brochure
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

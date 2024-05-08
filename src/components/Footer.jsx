import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
import ScrambleTextHover from "./ScrambleTextHover";
const Footer = () => {
  return (
    <footer className="mt-10 flex h-fit flex-col flex-wrap overflow-hidden border-t-[1.5px] border-gray-200/40 px-0 text-white">
      <div className="flex flex-wrap">
        <div className="flex min-h-[14rem] w-full min-w-[18rem] flex-col items-start justify-center border-b-[1.5px] border-gray-200/40 p-10 lg:w-[22rem] lg:border-b-0 lg:border-r-[1.5px]">
          <p className="font-ibm text-stone-500">Get in Touch</p>
          <Link
            to="mailto:techclub@brainwareuniversity.ac.in"
            className=" text-xl font-semibold italic md:text-base"
          >
            techclub@brainwareuniversity.ac.in
          </Link>
        </div>

        <div className=" flex min-w-[21rem] grow-[1] flex-col justify-center gap-5 border-b-[1.5px] border-gray-200/40 p-10 text-white/70 sm:border-b-[1.5px] md:grow-0 md:border-b-0 md:border-r-[1.5px] xl:min-w-[25rem]">
          <p className=" text-[25px] font-semibold">Quick Links</p>
          <div className=" flex gap-10 text-[17px]">
            <div className="flex w-[6rem] flex-col gap-2">
              <Link to="/" className="hover:text-primary">
                <ScrambleTextHover text="Home" />
              </Link>
              <Link to="/brochure.pdf" className="hover:text-primary">
                <ScrambleTextHover text="Brochure" />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/contact" className="hover:text-primary">
                <ScrambleTextHover text="Contact" />
              </Link>
              <Link to="/about" className="hover:text-primary">
                <ScrambleTextHover text="About" />
              </Link>
            </div>
          </div>
        </div>

        <div className="min-w-[18rem] grow-[1] text-white/70">
          <div className=" flex min-h-[7rem] items-center justify-between border-b-[1.5px] border-gray-200/40 pl-5 pr-4 text-4xl font-bold italic lg:border-t-[1.5px] xl:border-t-0">
            <Link to="/" className="hover:text-primary">
              <ScrambleTextHover text="Texibition" />
            </Link>
          </div>
          <div>
            <div className="flex">
              <Link
                to="/"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <AiOutlineGlobal size="3rem" />
              </Link>
              <Link
                to="/"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <FaInstagram size="3rem" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

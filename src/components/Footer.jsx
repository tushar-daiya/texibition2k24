import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
import ScrambleTextHover from "./ScrambleTextHover";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="mt-10 flex h-fit flex-col flex-wrap overflow-hidden border-t-[1.5px] border-gray-200/40 px-0 text-white">
      <div className="flex flex-wrap">
        <div className="flex  w-full min-w-[18rem] flex-col items-start justify-center border-b-[1.5px] border-gray-200/40 p-10 lg:w-[22rem] lg:border-b-0 lg:border-r-[1.5px]">
          <p className="font-ibm ">Get in Touch</p>
          <Link
            aria-label="Mail to Tech Club"
            to="mailto:techclub@brainwareuniversity.ac.in"
            className=" text-xl font-semibold italic md:text-base"
          >
            techclub@brainwareuniversity.ac.in
          </Link>
        </div>

        <div className=" flex min-w-[21rem] grow-[1] flex-col justify-center gap-5 border-b-[1.5px] border-gray-200/40 p-10  sm:border-b-[1.5px] md:grow-0 md:border-b-0 md:border-r-[1.5px] xl:min-w-[25rem]">
          <p className=" text-[25px] font-semibold">Quick Links</p>
          <div className=" flex gap-10 text-[17px]">
            <div className="flex w-[6rem] flex-col gap-2">
              <Link to="/" className="hover:text-primary" aria-label="Home">
                <ScrambleTextHover text="Home" />
              </Link>
              <Link to="/" className="hover:text-primary" aria-label="Events">
                <ScrambleTextHover text="Events" />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/contact"
                className="hover:text-primary"
                aria-label="Contact"
              >
                <ScrambleTextHover text="Contact" />
              </Link>
              <Link to="/" className="hover:text-primary" aria-label="Team">
                <ScrambleTextHover text="Team" />
              </Link>
            </div>
          </div>
        </div>

        <div className="min-w-[18rem] grow-[1] ">
          <div className=" flex items-center justify-between border-b-[1.5px] border-gray-200/40 py-5 pl-5 pr-4 text-4xl font-bold italic lg:border-t-[1.5px] xl:border-t-0">
            <Link to="/" className="hover:text-primary" aria-label="Texibition">
              <ScrambleTextHover text="Texibition" />
            </Link>
          </div>
          <div>
            <div className="flex">
              <Link
                aria-label="Instagram"
                target="_blank"
                to="https://www.instagram.com/texibition2k24/"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <FaInstagram
                  className="transition-all hover:scale-110"
                  size="3rem"
                />
              </Link>
              <Link
                aria-label="Youtube"
                target="_blank"
                to="https://www.youtube.com/channel/UCcx0a7Ab_FMzscRA8AignVQ"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <FaYoutube
                  className="transition-all hover:scale-110"
                  size="3rem"
                />
              </Link>
              <Link
                aria-label="LinkedIn"
                target="_blank"
                to="https://www.linkedin.com/school/brainwareuniversity/?originalSubdomain=in"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <FaLinkedin
                  className="transition-all hover:scale-110"
                  size="3rem"
                />
              </Link>
              <Link
                aria-label="Twitter"
                target="_blank"
                to="https://twitter.com/BrainwareTweet"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <FaSquareXTwitter
                  className="transition-all hover:scale-110"
                  size="3rem"
                />
              </Link>
              <Link
                aria-label="Location"
                target="_blank"
                to="https://www.google.com/maps/place/Brainware+University/@22.7320243,88.4998499,15z/data=!4m6!3m5!1s0x39f89c04b6fe4559:0xa012120ab7f1da34!8m2!3d22.7320243!4d88.4998499!16s%2Fg%2F11cn6bkvfm?entry=ttu"
                className="social-links flex min-h-[12rem] min-w-[5rem] grow-[1] items-center justify-center hover:text-primary"
              >
                <FaMapMarkerAlt
                  className="transition-all hover:scale-110"
                  size="3rem"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

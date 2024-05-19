import React from "react";
import { FaLinkedin, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import ScrambleTextHover from "./ScrambleTextHover";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center border-t-2 border-white/40  px-5 py-10 md:flex-row md:items-center md:justify-between md:px-20">
      <div>
        <p className="text-center text-3xl font-bold md:text-start">
          <Link to="/" className="hover:text-primary" aria-label="Texibition">
            <ScrambleTextHover text="Texibition" />
          </Link>
        </p>
        <div className="mt-2 flex gap-5 md:mt-5">
          <Link to="/" className="hover:text-primary" aria-label="Home">
            <ScrambleTextHover text="Home" />{" "}
          </Link>{" "}
          <Link to="/about" className="hover:text-primary" aria-label="About">
            <ScrambleTextHover text="About" />{" "}
          </Link>{" "}
          <Link to="/events" className="hover:text-primary" aria-label="Events">
            <ScrambleTextHover text="Events" />{" "}
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary"
            aria-label="Contact"
          >
            <ScrambleTextHover text="Contact" />
          </Link>
          <Link to="/team" className="hover:text-primary" aria-label="Team">
            <ScrambleTextHover text="Team" />
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 md:mt-0">
        <div className="">
          <p className="text-center md:text-end">Get in Touch</p>
          <p>
            <Link
              aria-label="Mail to Tech Club"
              to="mailto:techclub@brainwareuniversity.ac.in"
              className=" text-xl md:text-base"
            >
              techclub@brainwareuniversity.ac.in
            </Link>
          </p>
        </div>
        <div className="mt-5 flex gap-4 self-center md:mt-0 md:self-end">
          <Link
            aria-label="Instagram"
            target="_blank"
            to="https://www.instagram.com/texibition2k24/"
            className=" hover:text-primary"
          >
            <AiFillInstagram
              className="transition-all hover:scale-110"
              size="2rem"
            />
          </Link>
          <Link
            aria-label="Youtube"
            target="_blank"
            to="https://www.youtube.com/channel/UCcx0a7Ab_FMzscRA8AignVQ"
            className=" hover:text-primary"
          >
            <IoLogoYoutube
              className="transition-all hover:scale-110"
              size="2rem"
            />
          </Link>
          <Link
            aria-label="LinkedIn"
            target="_blank"
            to="https://www.linkedin.com/school/brainwareuniversity/?originalSubdomain=in"
            className=" hover:text-primary"
          >
            <FaLinkedin
              className="transition-all hover:scale-110"
              size="2rem"
            />
          </Link>
          <Link
            aria-label="Twitter"
            target="_blank"
            to="https://twitter.com/BrainwareTweet"
            className=" hover:text-primary"
          >
            <FaSquareXTwitter
              className="transition-all hover:scale-110"
              size="2rem"
            />
          </Link>
          <Link
            aria-label="Location"
            target="_blank"
            to="https://www.google.com/maps/place/Brainware+University/@22.7320243,88.4998499,15z/data=!4m6!3m5!1s0x39f89c04b6fe4559:0xa012120ab7f1da34!8m2!3d22.7320243!4d88.4998499!16s%2Fg%2F11cn6bkvfm?entry=ttu"
            className=" hover:text-primary"
          >
            <FaMapMarkerAlt
              className="transition-all hover:scale-110"
              size="2rem"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

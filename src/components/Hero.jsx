import React from "react";
import { Clock } from "./Clock";
import { useEffect } from "react";
import Date from "./Date";
import RegisterButton from "../components/RegisterButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Hero = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".collegeName", {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power2.out",
    });
    gsap.from(".logo", {
      duration: 1,
      opacity: 0,
      scale: 0.3,
      delay: 0.5,
      ease: "power2.out",
    });
    gsap.to(".logo", {
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".date", {
      duration: 1,
      opacity: 0,
      delay: 0.5,
      x: -100,
      ease: "power2.out",
    });
    gsap.from(".dateTime", {
      duration: 1,
      opacity: 0,
      delay: 1,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(".register", {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".register",
        start: "top 90%",
      },
    });
  });

  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="border-b-2 border-solid pb-10 border-white/10">
      <div className="py-10">
        <h1 className="collegeName text-center text-lg font-medium  tracking-wider md:text-2xl">
          BRAINWARE UNIVERSITY PRESENTS
        </h1>
        <img
          src="/logo.webp"
          className="logo mx-auto max-w-[80%] md:w-[50%]"
          alt=""
        />
      </div>
      {windowSize < 1280 && (
        <div className="date mb-10">
          <Date />
        </div>
      )}
      <div className="dateTime">
        <Clock />
      </div>
      <div className="register w-max mx-auto mt-10 text-center">
        <RegisterButton />
      </div>
    </div>
  );
};

export default Hero;

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
    gsap.from(".organizers", {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 0.5,
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
    gsap.from(".registrationEnd", {
      duration: 1,
      opacity: 0,
      delay: 1.5,
      x: -100,
      ease: "power2.out",
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
    <div className="border-b-2 border-solid border-white/10 pb-10">
      <div className=" py-10">
        <h1 className="collegeName text-center text-xl mb-5 font-medium tracking-wider md:text-3xl">
          <p className="font-corporate">BRAINWARE UNIVERSITY</p>
          <p className="text-xs md:text-base">PRESENTS</p>
        </h1>
        <img
          width={636}
          height={320}
          src="/logo.webp"
          className="logo mx-auto max-w-[80%] md:w-[50%]"
          alt=""
        />
        <div className="organizers mx-auto mt-5 w-max">
          <p className="mb-5 text-center text-xl font-medium">Organised By</p>
          <div className="flex gap-5 ">
            <div>
              <img
                width={96}
                height={63}
                src="/techclub_logo.webp"
                alt="Tech Club Logo"
                className="w-20 md:w-24"
              />
            </div>
            <div className="flex items-center">
              <img
                width={128}
                height={56}
                src="/iic_logo.webp"
                alt="IIC Logo"
                className="w-28 md:w-32"
              />
            </div>
          </div>
        </div>
      </div>
      {windowSize < 1280 && (
        <div className="date mb-10">
          <Date />
        </div>
      )}
      <div className="registrationEnd mx-auto w-max">
        <p className="mb-5 text-center text-2xl font-medium">
          Registration Closes:{" "}
          <span className="ml-3 text-primary">24th May</span>
        </p>
      </div>

      <div className="dateTime">
        <Clock />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import ScrambleTextHover from "../components/ScrambleTextHover";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-5">
      <div className="about mt-8 flex flex-wrap font-alata text-[2.7rem]  font-bold leading-[3rem] tracking-wide text-white sm:text-[4.3rem]  md:text-[4.4rem] md:leading-[5rem] lg:text-[4.5rem] xl:text-[4.8rem] xl:tracking-[.5rem]">
        <span>Okay cool! But</span>
        <span>hold on, what is</span>
        <span className="text-[4rem] sm:text-[4.5rem] md:mt-4 md:text-[5.2rem] lg:mt-5 lg:text-[6.2rem] xl:text-[7.5rem]">
          <span className="text-primary">
            <ScrambleTextHover text={"TEXIBITION"} />{" "}
          </span>
        </span>
        <span className="text-[3.7rem] sm:text-[5rem] md:mt-4 md:text-[7rem] lg:mt-8 lg:text-[9rem] xl:text-[12rem]">
          ?
        </span>
      </div>
      <p className="mt-8 font-montserrat text-lg leading-loose md:text-xl">
        <span className="font-bold text-primary">Texibition 2K24&nbsp;</span>
        is Brainware University's premier technology festival, a dynamic event
        set to unfold on the 28th and 29th of May, 2024. This fest promises to
        be a thrilling showcase of innovation, creativity, and competition,
        bringing together technology enthusiasts from various domains to
        celebrate the spirit of digital advancement and engineering prowess.
      </p>
      <p className="mt-5 font-montserrat text-lg leading-loose md:text-xl">
        Texibition 2K24 is open to students, professionals, and anyone with a
        passion for technology and gaming. Whether you're a coder, a designer, a
        gamer, or just a tech enthusiast, this festival has something exciting
        for you.
      </p>
      <p className="mt-5 font-montserrat text-lg leading-loose md:text-xl">
        Get ready to experience two days of non-stop excitement and competition.
        Register now to be a part of Texibition 2K24 and mark your calendars for
        a festival that celebrates the best of technology and creativity! For
        more details and registration information, please visit our official
        website or contact the event coordinators at Brainware University. See
        you at Texibition 2K24 – where technology meets
        innovation and creativity!
      </p>
    </div>
  );
};

export default About;

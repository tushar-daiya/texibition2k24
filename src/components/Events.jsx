import React from "react";
import "./ghoonies.css";
import CodeGolf from "/posters/code_golf.webp";
import Intel from "/posters/intel.webp";
import PixelPulse from "/posters/pixel_pulse.webp";
import Prompters from "/posters/prompters.webp";
import Architect from "/posters/architect.webp";
import Cod from "/posters/cod.webp";
import Bgmi from "/posters/bgmi.webp";
import Free_Fire from "/posters/free_fire.webp";
import Pes from "/posters/pes.webp";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Events = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from("#eventButtons", {
      duration: 1,
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: document.getElementById("eventButtons"),
        start: "top 80%",
      },
      ease: "power2.out",
    });
    gsap.from("#ghoonies", {
      duration: 1,
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: document.getElementById("ghoonies"),
        start: "top 50%",
      },
      ease: "power2.out",
    });
  });

  const technicalEvents = [
    {
      image: CodeGolf,
      url: "event/code-golf",
      i: -2,
    },
    {
      image: Architect,
      url: "event/the-architect",
      i: -1,
    },
    {
      image: PixelPulse,
      url: "event/pixel-pulse",
      i: 1,
    },
    {
      image: Prompters,
      url: "event/the-prompters",
      i: 2,
    },
    {
      image: Intel,
      url: "event/intel-workshop",
      i: 0,
    },
  ];

  const gamingEvents = [
    {
      image: Cod,
      url: "event/call-of-duty",
      i: -2,
    },
    {
      image: Bgmi,
      url: "event/bgmi",
      i: 1,
    },
    {
      image: Free_Fire,
      url: "event/free-fire",
      i: 2,
    },
    {
      image: Pes,
      url: "event/pes",
      i: -1,
    },
  ];

  const [selected, setSelected] = useState("btn1");
  const [events, setEvents] = useState(technicalEvents);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const click1 = () => {
    setEvents(technicalEvents);
    setSelected("btn1");
  };
  const click2 = () => {
    setSelected("btn2");
    setEvents(gamingEvents);
  };
  return (
    <div>
      <div
        id="eventButtons"
        className="mx-auto flex max-w-[300px] justify-between font-medium xl:mb-20"
      >
        <button
          onClick={click1}
          className={`${selected == "btn1" ? "bg-primary text-white" : "bg-white text-black"}  px-5 py-2`}
        >
          Techincal events
        </button>
        <button
          onClick={click2}
          className={`${selected == "btn2" ? "bg-primary text-white" : "bg-white text-black"}  px-5 py-2`}
        >
          Gaming
        </button>
      </div>

      {windowWidth < 1192 ? (
        <div className="events eventDiv" id="ghoonies">
          <div className="screen-main">
            <div className="screen" id="screenn">
              <div className="arrriii">
                {events.map((image, index) => (
                  <div key={index} className="posterholder animation">
                    <Link to={image.url}>
                      <img
                        loading="lazy"
                        className="image  "
                        key={index}
                        src={image.image}
                        alt={`Image ${index}`}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="events mb-20" id="ghoonies">
          <div className="screen-main1">
            <div className="firstcontainer1">
              <div className="screen1" id="screenn">
                {events?.map((image, index) => (
                  <div
                    key={index}
                    className={`${events.length == 5 ? "posterholder1" : "posterholder2"}`}
                    style={{ "--i": image.i }}
                  >
                    <Link to={image.url}>
                      <img
                        loading="lazy"
                        className="image1"
                        key={index}
                        src={image.image}
                        alt={`Image ${index}`}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

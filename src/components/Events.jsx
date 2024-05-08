import React from "react";
import "./ghoonies.css";
import Image1 from "/event.webp";
import Image2 from "/event.webp";
import Image3 from "/event.webp";
import Image4 from "/event.webp";
import Image5 from "/event.webp";
import Image6 from "/event.webp";
import Image7 from "/event.webp";
import Image8 from "/event.webp";
import Image9 from "/event.webp";
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
      image: Image1,
      url: "event/bluster",
      i: -2,
    },
    {
      image: Image2,
      url: "event/the-architect",
      i: -1,
    },
    {
      image: Image3,
      url: "event/pixel-pulse",
      i: 0,
    },
    {
      image: Image4,
      url: "event/intel-workshop",
      i: 1,
    },
    {
      image: Image5,
      url: "event/the-prompters",
      i: 2,
    },
  ];

  const gamingEvents = [
    {
      image: Image6,
      url: "event/call-of-duty",
      i: -1,
    },
    {
      image: Image7,
      url: "event/pes",
      i: 0,
    },
    {
      image: Image8,
      url: "event/bgmi",
      i: 1,
    },
    {
      image: Image9,
      url: "event/free-fire",
      i: 2,
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
                    className="posterholder1"
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

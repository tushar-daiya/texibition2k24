import React from "react";
import Heading from "../components/Heading";
import { events } from "../data/events";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Events = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="mx-10 max-w-screen-lg md:mx-auto">
      <Heading text={"Events"} />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
        {events.map((event) => (
          <div
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.8"
            data-tilt-scale="1.05"
            key={event.i}
            className="eventDiv"
          >
            <Link to={`/event/${event.eventId}`}>
              <img
                src={event.image}
                alt="event"
                className="h-full w-full object-cover transition-all hover:shadow-lg hover:shadow-primary"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

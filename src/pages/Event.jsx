import React from "react";
import Heading from "../components/Heading";
import { events } from "../data/events";
import { useParams } from "react-router-dom";
import RegisterButton from "../components/RegisterButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom/dist";
const Event = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.eventId === eventId);
  if (!event) return <h1>Event not found</h1>;
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".poster", {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power2.out",
    });
    gsap.from(".eventDetails", {
      duration: 1,
      opacity: 0,
      x: 100,
      delay: 0.5,
      ease: "power2.out",
    });
  });
  console.log(event);
  if (event) {
    return (
      <div className="mx-5 max-w-screen-xl md:mx-auto">
        <Heading text={event.event_name} />
        <div className="mt-5 flex flex-col overflow-hidden rounded-2xl border border-solid border-white bg-white bg-opacity-10 backdrop-blur-md md:flex-row">
          <img
            src={event.image}
            alt="Event"
            className="poster sticky w-full md:w-1/3"
          />
          <div className="eventDetails flex flex-col justify-between overflow-y-scroll px-5 py-10 ">
            <div>
              <p className="font-chakra text-lg leading-relaxed md:text-xl">
                {event.event_description}
              </p>

              <div className="font-xl mt-5 font-clash text-xl font-medium">
                <p>
                  Reg Fees: <span className="ml-5">{event.fees}</span>
                </p>
                <p>
                  Event Type: <span className="ml-5">{event.eventType}</span>
                </p>
              </div>
              <div className="mt-7 *:font-medium">
                <h3 className="mb-3 text-3xl">Coordinator Details</h3>
                {event.coordinators.map((coordinator) => (
                  <p className="mb-2 text-xl">
                    {coordinator.name}:{" "}
                    <Link className="ml-5" to={`tel:${coordinator.phone}`}>
                      {coordinator.phone}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-5 text-center md:mt-0">
              <Link to={event.url} target="_blank">
                <RegisterButton />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h3 className="mt-5 text-center text-3xl font-bold">Rules</h3>
            <ul className="*:font-chakra ml-5 list-disc *:mt-3 *:text-lg marker:text-primary md:*:text-xl">
              {event.rules.map((rule) => (
                <li>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Event;

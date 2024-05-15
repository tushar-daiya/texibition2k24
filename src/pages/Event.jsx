import React from "react";
import Heading from "../components/Heading";
import { events } from "../data/events";
import { useParams } from "react-router-dom";
import RegisterButton from "../components/RegisterButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom/dist";
import GeneralInstruction from "../components/GeneralInstruction";
import { useState } from "react";
const Event = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.eventId === eventId);
  if (!event) return <h1>Event not found</h1>;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  if (event) {
    return (
      <div className="relative">
        {menuOpen && (
          <GeneralInstruction onClick={handleMenuOpen} eventUrl={event.url} />
        )}
        <div className={`relative mx-5 max-w-screen-xl md:mx-auto`}>
          <Heading text={event.event_name} />
          <div className="mt-5 flex flex-col rounded-2xl border border-solid border-white bg-white bg-opacity-10 backdrop-blur-md md:flex-row">
            <img
              width={426}
              height={568}
              loading="lazy"
              src={event.image}
              alt="Event"
              className="poster sticky w-full rounded-bl-none rounded-tl-2xl rounded-tr-2xl md:w-1/3 md:rounded-bl-2xl md:rounded-tr-none"
            />
            <div className="eventDetails flex flex-col justify-between overflow-y-scroll px-5 py-10 ">
              <div>
                {event.event_description && (
                  <p className="font-montserrat text-lg leading-relaxed md:text-xl">
                    {event.event_description}
                  </p>
                )}

                <div className="font-xl mt-5 font-montserrat text-lg">
                  <p className="font-medium text-primary">
                    Reg Fees :{" "}
                    <span className="ml-5 font-normal text-white">
                      {event.fees}
                    </span>
                  </p>
                  <p className="font-medium text-primary">
                    Event Type :{" "}
                    <span className="ml-5 font-normal text-white">
                      {event.eventType}
                    </span>
                  </p>
                </div>
                {event.faculty_coordinator && (
                  <div className="mt-7 *:font-medium">
                    <p className="mb-3 font-alata text-2xl text-primary">
                      Faculty Coordinators
                    </p>
                    {event.faculty_coordinator.map((coordinator, index) => (
                      <p key={index} className="mb-2 font-montserrat text-lg">
                        {coordinator.name}
                        {" ("}
                        {coordinator.department && (
                          <span className="">{coordinator.department})</span>
                        )}
                      </p>
                    ))}
                  </div>
                )}
                <div className="mt-7 *:font-medium">
                  <p className="mb-3 font-alata text-2xl text-primary">
                    Student Coordinators
                  </p>
                  {event.coordinators.map((coordinator, index) => (
                    <p key={index} className="mb-2 font-montserrat text-lg">
                      {coordinator.name}:{" "}
                      <Link className="ml-5" to={`tel:${coordinator.phone}`}>
                        {coordinator.phone}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-center md:mt-0">
                <RegisterButton onClick={handleMenuOpen} />
              </div>
            </div>
          </div>
          {event.about && (
            <div className="mt-10">
              <div>
                <p className="mt-5 text-center text-3xl font-bold text-primary">About</p>
                <p
                  dangerouslySetInnerHTML={{ __html: event.about }}
                  className="mt-5 font-montserrat w-[98%] mx-auto text-lg"
                ></p>
              </div>
            </div>
          )}
          {event.rules && (
            <div className="mt-10">
              <div>
                <p className="mt-5 text-center text-3xl font-bold text-primary">Rules</p>
                <ul className="ml-5 list-disc *:mt-3 *:font-montserrat *:text-lg marker:text-primary md:*:text-xl">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Event;

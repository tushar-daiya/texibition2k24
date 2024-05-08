import React from "react";
import Heading from "./Heading";
import Events from "./Events";

const EventSection = () => {
  return (
    <div id="events" className="mt-20 ">
      <Heading text="What's happening?" />
      <Events />
    </div>
  );
};

export default EventSection;

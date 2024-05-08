import React from "react";
import Hero from "../components/Hero";
import EventSection from "../components/EventSection";

const MainPage = () => {
  const eventRef = React.useRef(null);
  return (
    <div>
      <Hero eventRef={eventRef} />
      <EventSection eventRef={eventRef} />
    </div>
  );
};

export default MainPage;

import React from "react";
import Heading from "../components/Heading";
import ContactComponent from "../components/ContactComponent";
import { persons } from "../data/contact";


const Contact = () => {
  return (
    <div className="mx-5 max-w-screen-xl md:mx-auto">
      <Heading text={"Contact Us"} />
      <div className="flex flex-wrap justify-center gap-8 p-4 text-white lg:p-10">
        {persons.map((person) => (
          <ContactComponent person={person} key={person.id} />
        ))}
      </div>
    </div>
  );
};

export default Contact;

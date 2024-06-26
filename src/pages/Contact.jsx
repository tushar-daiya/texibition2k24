import React from "react";
import Heading from "../components/Heading";
import ContactComponent from "../components/ContactComponent";
import { persons } from "../data/contact";

const Contact = () => {
  const head = persons.slice(0, 3);
  const head2 = persons.slice(3, 8);
  const head3 = persons.slice(8, 11);
  const head4 = persons.slice(11, 19);
  return (
    <div className="mx-5 max-w-screen-xl md:mx-auto">
      <Heading text={"Contact Us"} />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-8 p-4 text-white lg:p-10">
        {head.map((person) => (
          <ContactComponent person={person} key={person.id} />
        ))}
      </div>
      <p className="text-3xl mt-5 font-bold text-center">Faculty Coordinator</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center gap-8 p-4 text-white lg:p-10">
        {head2.map((person) => (
          <ContactComponent person={person} key={person.id} />
        ))}
      </div>
      <p className="text-3xl mt-5 font-bold text-center">Student Leads</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center gap-8 p-4 text-white lg:p-10">
        {head3.map((person) => (
          <ContactComponent person={person} key={person.id} />
        ))}
      </div>
      <p className="text-3xl mt-5 font-bold text-center">Student Coordinators</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center gap-8 p-4 text-white lg:p-10">
        {head4.map((person) => (
          <ContactComponent person={person} key={person.id} />
        ))}
      </div>
    </div>
  );
};

export default Contact;

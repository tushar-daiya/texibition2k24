import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import ContactComponent from "../components/ContactComponent";
import Image1 from "/aritri.webp";
import Image2 from "/arpan.webp";
import Image3 from "/debarun.webp";
import Image4 from "/jitu.webp";
import Image5 from "/romit.webp";
import Image6 from "/saurabh.webp";
import Image7 from "/parthapratim.webp";

const Contact = () => {
  const persons = [
    {
      id: 1,
      name: "Mr. Partha Pratim Dasgupta",
      phone: "72787 71731",
      post: "Convener",
      image: Image7,
    },
    {
      id: 7,
      name: "Romit Pal",
      phone: "7044050975",
      post: "Coordinator",
      image: Image5,
    },
    {
      id: 2,
      name: "Aritri Podder",
      phone: "9831871391",
      post: "Coordinator",
      image: Image1,
    },
    {
      id: 3,
      name: "Arpan Bag",
      phone: "7478991512",
      post: "Coordinator",
      image: Image2,
    },
    {
      id: 4,
      name: "Debarun Joardar",
      phone: "9007883555",
      post: "Coordinator",
      image: Image3,
    },
    {
      id: 5,
      name: "Jitu PRADHAN ",
      phone: "7364859227",
      post: "Coordinator",
      image: Image4,
    },
    {
      id: 6,
      name: "SAURABH KUMAR JHA",
      phone: "9062600845",
      post: "Coordinator",
      image: Image6,
    },
  ];
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

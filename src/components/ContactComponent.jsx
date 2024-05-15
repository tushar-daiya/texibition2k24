import React from "react";
import "./contact.css";
import ScrambleTextHover from "./ScrambleTextHover";
import { Link } from "react-router-dom";
const ContactComponent = ({ person }) => {
  return (
    <div className="aspect-square w-full rounded-lg border border-solid border-white hover:shadow-lg hover:shadow-primary">
      <div
        className="item group relative h-full w-full cursor-pointer overflow-hidden border border-solid border-white border-opacity-10"
        id={person.id}
      >
        <div className="item-img h-full w-full">
          <img
            height={348}
            width={348}
            loading="lazy"
            src={person.image}
            className="h-full w-full scale-100 object-cover brightness-100 grayscale-0 sepia-0  transition-all group-hover:scale-110"
            alt=""
          />
        </div>
      </div>
      <div className="py-2">
        <p className="text-center font-clash text-xl font-medium text-primary">
          <ScrambleTextHover text={person.post} />
        </p>
        <p className="text-center font-clash text-lg font-medium">
          Name : <span>{person.name}</span>
        </p>
        {person.department && (
          <p className="text-center font-clash text-lg ">
            Department :{" "}
            <span className="break-words">{person.department}</span>
          </p>
        )}
        {person.faculty_post && (
          <p className="break-words text-center font-clash text-lg ">
            {person.faculty_post}
          </p>
        )}
        {person.phone && (
          <p className="text-center font-clash text-lg">
            Phone :{" "}
            <span>
              <Link to={`tel:${person.phone}`}>{person.phone}</Link>
            </span>
          </p>
        )}
        {person.whatsapp && (
          <p className="text-center font-clash text-lg">
            Phone :{" "}
            <span>
              <Link
                to={`https://api.whatsapp.com/send?phone=91${person.whatsapp}`}
              >
                {person.whatsapp}
              </Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactComponent;

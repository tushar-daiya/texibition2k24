import React from "react";
import { IoClose } from "react-icons/io5";
import RegisterButton from "./RegisterButton";
import { useState } from "react";

const GeneralInstruction = ({ onClick, eventUrl }) => {
  const [checkbox, setCheckbox] = useState(false);
  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
  };
  const handleRegister = () => {
    if (checkbox) {
      window.open(eventUrl, "_blank");
    } else {
      alert("Please read and understand the instructions before proceeding.");
    }
  };
  const generalinstructions = [
    "Each participant should carry identity proof.",
    "On-spot entry will not be obliged.",
    "Students should refrain from abusive language, obscene displays and revealing costumes. During the competitions, failing which they will be disqualified.",
    "Smoking, drinking and consumption of any such 'substances' are prohibited.",
    "The Judge’s decisions are final.",
    "For team participation, The form should be filled up and submitted by Team Leader from his/her email address along with the details of group members through Texibition-2K24 website.",
    "For single participation, The form should be filled up and submitted by yourself through Texibition-2K24 website.",
    "Interactive price money is also given to the winner of the competition.",
    "All participants will get E-Certificate.",
    "Multiple submission of the same group from different emails may lead to cancellation of the team.",
    "If a participant is participating in Legends(Gaming) then he/she can only participate in any one from the following(The Bluster, The Prompters, Pixel Pulse , The Architect).",
    "If a participant is participating in Intel DevCloud then he/she can only participate in the following (The Bluster, The Architect)",
  ];
  return (
    <>
      <div class="fixed inset-0 z-50 flex overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative top-80 mx-8 h-max max-w-screen-sm rounded-lg border-2 border-solid border-white/60 bg-black px-5 pb-5 sm:mx-auto md:top-40">
          <IoClose
            onClick={onClick} size={30}
            className="absolute right-5 top-5 cursor-pointer text-2xl text-white"
          />
          <h1 className="mt-5 font-chakra text-3xl font-bold text-primary">
            General Instructions
          </h1>
          <ul className="ml-5 list-disc *:mt-3 *:font-chakra *:text-lg marker:text-primary md:*:text-xl">
            {generalinstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <div className="ml-2 mt-5 text-xl">
            <input
              onChange={handleCheckbox}
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1">
              {" "}
              I have read and understood the instructions
            </label>
          </div>
          <RegisterButton onClick={handleRegister} />
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
    </>
  );
};

export default GeneralInstruction;

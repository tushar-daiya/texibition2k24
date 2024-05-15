import React from "react";
import { team } from "../data/team";
import Heading from "../components/Heading";
const Team = () => {
  const team1 = team.slice(0, 1);
  const team2 = team.slice(1, 4);
  const team3 = team.slice(4, 8);
  const team4 = team.slice(8, 12);
  const team5 = team.slice(12, 14);
  const team6 = team.slice(14, 24);
  const team7 = team.slice(24, 29);
  return (
    <div className="mx-5 max-w-screen-xl md:mx-auto">
      <Heading text={"Team"} />
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team1[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team1.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)]"
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team2[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team2.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)] "
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team3[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team3.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)] "
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team4[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team4.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)] "
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team5[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team5.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)] "
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team6[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team6.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)] "
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
      <p className="mb-4 mt-5 text-center text-3xl font-bold">
        {team7[0].role}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-white ">
        {team7.map((person) => (
          <div
            key={person.id}
            className="*:font-montserrat w-full rounded-2xl border border-solid border-white/60 px-4 py-6 hover:shadow-lg hover:shadow-primary sm:w-[calc(50%-24px)] md:w-[calc(33%-24px)] "
          >
            <p className="text-2xl font-bold text-primary">{person.name}</p>
            <p className="text-lg">{person.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

import React from "react";
import "./marquee.css";
export default function Marquee() {
  const shortText = "Texibition";
  const longText = "Brainware University";
  return (
    <section className="relative flex h-[12rem] flex-col overflow-hidden pt-6 ">
      <div className="marquee2 font-alata tracking-widest text-primary/70">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <p key={index} className="text font-black">
              DESIGN.BUILD.GROW
            </p>
          );
        })}
      </div>
      <div className="marquee3 font-alata tracking-widest textStroke text-transparent">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <p key={index} className="text textStroke text-primary font-black text-transparent">
              Brainware University
            </p>
          );
        })}
      </div>

      
    </section>
  );
}

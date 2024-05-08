import React from "react";
import "./marquee.css";
export default function Marquee() {
  const shortText = "Texibition";
  const longText = "Brainware University";
  return (
    <section className="relative flex h-[12rem] flex-col overflow-hidden pt-6 ">
      <div className="marquee2 font-clash tracking-widest text-primary/70">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <h4 key={index} className="text font-black">
              DESIGN.BUILD.GROW
            </h4>
          );
        })}
      </div>
      <div className="marquee3 font-clash tracking-widest textStroke text-transparent">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <h4 key={index} className="text textStroke text-primary font-black text-transparent">
              Brainware University
            </h4>
          );
        })}
      </div>

      {/* <div className="marquee3 font-chakra text-main_primary/50  tracking-widest">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <>
              <h1
                key={index}
                className="text textStroke text-primary font-black text-transparent"
              >
                {shortText}
                {String.fromCharCode(160).repeat(
                  longText.length - shortText.length,
                )}
              </h1>
              <h1 className="text font-black text-white/60  ">{longText}</h1>
            </>
          );
        })}
      </div> */}
    </section>
  );
}

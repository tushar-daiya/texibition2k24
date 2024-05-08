import React from "react";
import { useScramble } from "use-scramble";

const ScrambleTextHover = ({ text }) => {
  const { ref, replay } = useScramble({
    text: text,
    // playOnMount: true,
    speed: 0.9,
  });
  return (
    <span ref={ref} onMouseOver={replay} >
      {text}
    </span>
  );
};

export default ScrambleTextHover;

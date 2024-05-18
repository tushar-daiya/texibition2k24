import React from "react";
import { useScramble } from "use-scramble";
const Heading = ({ text }) => {
  const { ref, replay } = useScramble({
    text: text,
    playOnMount: true,
    speed: text.length / 15,
  });
  return (
    <div className="my-5 text-center">
      <h1
        ref={ref}
        onMouseOver={replay}
        onFocus={replay}
        className="text-4xl leading-snug font-extrabold md:text-6xl md:leading-snug "
      ></h1>
    </div>
  );
};

export default Heading;

"use client";

import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <div>
      <span className="text-[2em]">Your news about... </span>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Coding",
          4000, // wait 1s before replacing "Mice" with "Hamsters"
          "Football",
          4000,
          "Cooking",
          4000,
        ]}
        wrapper="span"
        speed={2}
        style={{
          fontSize: "2em",
          display: "inline-block",
          background: "black",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Animation;

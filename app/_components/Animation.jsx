"use client";

import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <div>
      <span className="text-[2rem] font-semibold">Everything about</span>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Coding",
          5000, // wait 1s before replacing "Mice" with "Hamsters"
          "Football",
          5000,
          "Cooking",
          5000,
        ]}
        wrapper="span"
        speed={2}
        style={{
          fontSize: "2rem",
          display: "inline-block",
          color: "black",
          padding: "4px 8px",
          borderRadius: "4px",
          fontWeight: "600",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Animation;

import React from "react";

export const GlitchText = () => {
  return (
    <div
      data-text={"DESIGN"}
      id={"glitch-text"}
      className={`text-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-gunterz italic text-center animate-glitch-clip
      before:content-[attr(data-text)] before:w-[110%] before:z-[-1] before:absolute before:top-[10px] before:left-[15px] before:animate-glitch-flicker-1
      after:content-[attr(data-text)] after:w-[110%] after:z-[-1] after:absolute after:top-[50px] after:left-[-10px] after:animate-glitch-flicker-2
      text-5xl md:text-7xl 2xl:text-9xl
    `}
    >
      <span className={"animate-flicker-away animation-delay-[2.5s]"}>D</span>
      <span className={"animate-flicker-away animation-delay-[3.5s]"}>E</span>
      <span className={"animate-flicker-away animation-delay-[2.8s]"}>S</span>
      <span className={"animate-flicker-away animation-delay-[3.5s]"}>I</span>
      <span className={"animate-flicker-away animation-delay-[3s]"}>G</span>
      <span className={"animate-flicker-away animation-delay-[2.7s]"}>N</span>
    </div>
  );
};

import React from "react";

export const GlitchText = () => {
  return (
    <div
      data-text={"DESIGN"}
      id={"glitch-text"}
      className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-gunterz italic text-9xl text-center animate-glitch-clip
      before:content-[attr(data-text)] before:w-[110%] before:z-[-1] before:absolute before:top-[10px] before:left-[15px] before:animate-glitch-flicker-1
      after:content-[attr(data-text)] after:w-[110%] after:z-[-1] after:absolute after:top-[50px] after:left-[-10px] after:animate-glitch-flicker-2
    `}
    >
      <span className={"animate-flicker-away animation-delay-[5.5s]"}>D</span>
      <span className={"animate-flicker-away animation-delay-[6.5s]"}>E</span>
      <span className={"animate-flicker-away animation-delay-[5.8s]"}>S</span>
      <span className={"animate-flicker-away animation-delay-[6.5s]"}>I</span>
      <span className={"animate-flicker-away animation-delay-[6s]"}>G</span>
      <span className={"animate-flicker-away animation-delay-[5.7s]"}>N</span>
    </div>
  );
};

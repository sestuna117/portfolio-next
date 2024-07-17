import React from "react";

interface GlitchTextProps {
  text: string
}

export const GlitchText = (props: GlitchTextProps) => {
  const { text } = props;

  return <div
    data-text={text}
    data-path={""}
    className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-gunterz italic text-9xl text-center animate-glitch-clip
      before:content-[attr(data-text)] before:w-[110%] before:z-[-1] before:absolute before:top-[10px] before:left-[15px] before:animate-glitch-flicker-1
      after:content-[attr(data-text)] after:w-[110%] after:z-[-1] after:absolute after:top-[50px] after:left-[-10px] after:animate-glitch-flicker-2
    `}
  >
    {text}
  </div>;
};

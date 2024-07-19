"use client";
import { GlitchText } from "@/components/DesignModal/GlitchText";
import React, { useEffect, useState } from "react";
import { sleep } from "@/utils";

interface DelayedGlitchTransitionScreenProps {
  text: string;
  children: React.ReactNode;
  delay?: number;
}

export const DelayedGlitchTransitionScreen = (
  props: DelayedGlitchTransitionScreenProps,
) => {
  const { text, children, delay = 500 } = props;
  const [displayContent, setDisplayContent] = useState(false);

  useEffect(() => {
    const delayAndWipe = async () => {
      await sleep(delay);
      const blackWipe = document.getElementById("black-bar-transition");
      blackWipe?.classList.add("before:animate-slide-down");
      await sleep(2000);
      setDisplayContent(true);
    };
    delayAndWipe();
  }, [delay]);

  return displayContent ? (
    children
  ) : (
    <div
      className={`fixed top-0 left-0 w-screen h-screen font-sans text-alto bg-black-bars-vertical before:w-screen before:h-screen before:content-[''] before:absolute before:-top-full before:bg-black`}
      id={"black-bar-transition"}
    >
      <div
        className={
          "w-full h-full animate-background-flicker bg-opacity-40 bg-black"
        }
      >
        <GlitchText />
        <svg
          className={"w-full h-full"}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <circle
            className={"animate-grow-infinite origin-center"}
            vectorEffect="non-scaling-stroke"
            cx="50%"
            cy="50%"
            r="96%"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle
            className={
              "animate-grow-infinite origin-center animation-delay-[1s]"
            }
            vectorEffect="non-scaling-stroke"
            cx="50%"
            cy="50%"
            r="96%"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

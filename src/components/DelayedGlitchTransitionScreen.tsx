'use client'
import { GlitchText } from "@/components/GlitchText";
import React, {useEffect, useState} from "react";

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
    const timer = setTimeout(() => {
      setDisplayContent(true);
    }, delay);
    return () => clearTimeout(timer);
  },[delay])

  return displayContent ? children : (
    <div
      className={`fixed top-0 left-0 w-screen h-screen font-sans text-alto bg-black-bars-vertical`}
      id={"black-bar-transition"}
    >
      <div className={"w-full h-full animate-background-flicker bg-opacity-40 bg-black"}>
        <GlitchText text={text} />
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
              "animate-grow-infinite origin-center animation-delay-[3s]"
            }
            vectorEffect="non-scaling-stroke"
            cx="50%"
            cy="50%"
            r="96%"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

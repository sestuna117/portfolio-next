"use client";

import React from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  RiJavaFill,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsFill,
} from "react-icons/ri";
import { InView } from "react-intersection-observer";

export default function SkillsListSegment() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={
            "w-full flex flex-col justify-space-between items-center flex-wrap h-[172px] [&>*]:m-2"
          }
        >
          <BiLogoJavascript
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-1000"
                : "opacity-0"
            }
            size={64}
          />
          <RiReactjsFill
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1110ms]"
                : "opacity-0"
            }
            size={64}
          />
          <BiLogoTypescript
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1220ms]"
                : "opacity-0"
            }
            size={64}
          />
          <RiNextjsFill
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1330ms]"
                : "opacity-0"
            }
            size={64}
          />
          <BiLogoHtml5
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1440ms]"
                : "opacity-0"
            }
            size={64}
          />
          <RiJavaFill
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1550ms]"
                : "opacity-0"
            }
            size={64}
          />
          <BiLogoCss3
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1660ms]"
                : "opacity-0"
            }
            size={64}
          />
          <RiNodejsLine
            className={
              inView
                ? "opacity-0 animate-slide-text-up-right animation-delay-[1770ms]"
                : "opacity-0"
            }
            size={64}
          />
        </div>
      )}
    </InView>
  );
}

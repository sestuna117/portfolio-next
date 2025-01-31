"use client";

import React from "react";
import { InView } from "react-intersection-observer";
import WorkSelector from "@/app/_components/experience/components/WorkSelector";

export default function ExperienceSection() {
  return (
    <div id={"experience"} className={"min-h-screen text-white"}>
      <InView triggerOnce threshold={1}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <div>
              <div className={"text-4xl mb-[10px]"}>
                <span
                  className={
                    inView
                      ? "inline-block opacity-0 animate-slide-heading-up-right"
                      : "opacity-0"
                  }
                >
                  Experience
                </span>
              </div>
              <svg
                height="1"
                width="100%"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                className={
                  inView
                    ? "opacity-1 translate-y-[100vh] animate-slide-up-body-line"
                    : "opacity-0"
                }
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  stroke="white"
                  strokeWidth="100%"
                  opacity="0.8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            <WorkSelector />
          </div>
        )}
      </InView>
    </div>
  );
}

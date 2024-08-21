"use client";

import { InView } from "react-intersection-observer";
import React from "react";

interface AboutSectionSegmentProps {
  titleText: string;
  secondTitleText?: string;
  children: React.ReactNode;
  childrenClassNameInView: string;
  titleAnimationDelay: number;
  dividerAnimationDelay: number;
}

export default function AboutSectionSegment({
  titleText,
  secondTitleText,
  children,
  childrenClassNameInView,
  titleAnimationDelay,
  dividerAnimationDelay,
}: AboutSectionSegmentProps) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref }) => (
        <div ref={ref} className={"mb-10"}>
          <div className={"text-4xl mb-[10px] w-full"}>
            <span
              className={
                inView
                  ? "inline-block opacity-0 animate-slide-text-up-right"
                  : "opacity-0"
              }
              style={{ animationDelay: `${titleAnimationDelay}ms` }}
            >
              {titleText}
            </span>
            {secondTitleText && (
              <span
                className={
                  inView
                    ? "ml-3 inline-block opacity-0 text-heliotrope animate-slide-text-up-right"
                    : "opacity-0"
                }
                style={{ animationDelay: `${titleAnimationDelay + 150}ms` }}
              >
                {secondTitleText}
              </span>
            )}
          </div>
          <svg
            height="2"
            width="100%"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className={
              inView
                ? "opacity-1 translate-y-[100vh] animate-slide-up-body-line"
                : "opacity-0"
            }
            style={{ animationDelay: `${dividerAnimationDelay}ms` }}
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="mediumpurple"
              strokeWidth="100%"
              opacity="0.8"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div
            className={`mt-4 ${inView ? childrenClassNameInView : "opacity-0"}`}
          >
            {children}
          </div>
        </div>
      )}
    </InView>
  );
}

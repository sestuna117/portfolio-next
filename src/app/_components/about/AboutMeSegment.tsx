"use client";

import React from "react";
import { InView } from "react-intersection-observer";

export default function AboutMeSegment() {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref }) => (
        <div ref={ref}>
          <div
            className={
              inView
                ? "mb-10 opacity-0 animate-slide-text-up-show animation-delay-[1250ms]"
                : "opacity-0"
            }
          >
            I first truly got onto web development during my junior year in
            university when my friend/mentor of sorts (you know who you are)
            convinced me to try developing something that I could actually use
            or enjoy. Thus I embarked on my journey to create a stat tracker
            site for the popular MOBA game League of Legends. While developing
            my first site, I learned of the instance gratification that web
            development could give you, and it helped motivate me even more to
            continue. Since then I&apos;ve been hooked on creating webpages and
            the many other aspects of frontend development.
          </div>
          <div
            className={
              inView
                ? "opacity-0 animate-slide-text-up-show animation-delay-[1500ms]"
                : "opacity-0"
            }
          >
            My primary focus these days have been developing web applications
            for internal use within{" "}
            <a
              className={"text-heliotrope"}
              href={"https://www.ibm.com/us-en"}
              target={"_blank"}
            >
              IBM
            </a>
            . What I find the most enjoyable is when I&apos;m given the
            opportunity to work with both the design and the development portion
            of a component. I want things to look nice as well as functional.
          </div>
        </div>
      )}
    </InView>
  );
}

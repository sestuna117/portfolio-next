'use client'
import React from "react";

const AboutSection = () => {
  return (
    <div id={"about"} className={"min-h-screen text-white"}>
      <div className={"text-4xl mb-[10px] w-full"}>
        <span className={"inline-block opacity-0 animate-slide-text-up-right animation-delay-[750ms]"}>About </span>
        <span className={"ml-3 inline-block opacity-0 text-heliotrope animate-slide-text-up-right animation-delay-1000"}>Me</span>
      </div>
      <svg
        className={"motion-safe:animate-slide-up-body-line"}
        id={""}
        height="2"
        width="100%"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
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
      <div>
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
      <div>
        <div>Skills</div>
      </div>
      <div>
        <div>Education</div>
      </div>
    </div>
  )
}

export default AboutSection;
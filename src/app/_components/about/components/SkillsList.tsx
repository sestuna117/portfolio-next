"use client";

import React from "react";
import { InView } from "react-intersection-observer";
import SkillsListItem from "@/app/_components/about/components/SkillsListItem";

export default function SkillsList() {
  const SKILLS_LIST = [
    "Javascript",
    "React",
    "Typescript",
    "Next.js",
    "HTML",
    "Java",
    "CSS",
    "Node.js",
  ];

  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={
            "w-full flex flex-col justify-space-between items-center flex-wrap h-[172px] [&>*]:m-2"
          }
        >
          {SKILLS_LIST.map((skill, index) => (
            <SkillsListItem
              key={`skill-list-${index}`}
              inView={inView}
              name={skill}
              animationDelay={1000 + 110 * index}
            />
          ))}
        </div>
      )}
    </InView>
  );
}

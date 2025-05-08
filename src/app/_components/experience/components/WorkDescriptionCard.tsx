import React, { useState } from "react";
import { Experience } from "@/types/Experience";
import { InView } from "react-intersection-observer";

type WorkDescriptionCardProps = {
  selectedExp: Experience;
};

export default function WorkDescriptionCard(props: WorkDescriptionCardProps) {
  const { selectedExp } = props;
  const { jobTitle, company, duration, description } = selectedExp;

  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={
            inView
              ? "mb-10 opacity-0 border-[1px] border-solid animate-slide-text-left-show animation-delay-[1000ms]"
              : "opacity-0"
          }
        >
          <div id={"work-desc-card"} className={" p-10"}>
            <div className={"mb-3 text-2xl"}>
              {jobTitle} - <span className={"text-heliotrope"}>{company}</span>
            </div>
            <div className={"mb-3"}>{duration}</div>
            <ul className={"ml-6 list-disc"}>
              {description.map((bullet, index) => (
                <li key={`${jobTitle}-desc-${index}`}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </InView>
  );
}

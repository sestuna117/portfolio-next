import React from "react";
import { Experience } from "@/types/Experience";
import { InView } from "react-intersection-observer";

type JobSelectorProps = {
  experiences: Experience[];
  handleSelectExperience: (job: Experience) => void;
};

export default function WorkSelectOption(props: JobSelectorProps) {
  const { experiences, handleSelectExperience } = props;
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <div ref={ref}>
          <div
            className={
              inView
                ? "mb-10 opacity-0 animate-slide-text-up-show animation-delay-[1250ms]"
                : "opacity-0"
            }
          >
            <div>
              {experiences.map((experience) => (
                <button
                  onClick={() => handleSelectExperience(experience)}
                  key={experience.jobTitle}
                >
                  <div>{experience.jobTitle}</div>
                  <div>{experience.company}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

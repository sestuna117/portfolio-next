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
    <InView triggerOnce threshold={1}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={
            inView
              ? "mb-10 opacity-0 animate-slide-text-right-show animation-delay-[750ms]"
              : "opacity-0"
          }
        >
          <div>
            {experiences.map((experience) => (
              <button
                className={
                  "overflow-hidden border-[1px] border-solid relative p-4 min-h-[100px] max-w-[300px] mb-4 duration-200 after:button-wiper hover:after:left-[120%] ease-fast-wipe hover:border-heliotrope active:bg-heavy-metal"
                }
                onClick={() => handleSelectExperience(experience)}
                key={experience.jobTitle}
              >
                <div className={"z-20"}>
                  {`${experience.jobTitle} - `}
                  <span className={"text-heliotrope"}>
                    {experience.company}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </InView>
  );
}

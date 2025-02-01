import React, { useState } from "react";
import { Experience } from "@/types/Experience";

type JobSelectorProps = {
  experiences: Experience[];
  handleSelectJob: (job: Experience) => void;
};

export default function JobSelector(props: JobSelectorProps) {
  const { experiences, handleSelectJob } = props;
  return (
    <div>
      {experiences.map((experience) => (
        <div key={experience.jobTitle}>
          <div>{experience.jobTitle}</div>
          <div>{experience.company}</div>
        </div>
      ))}
    </div>
  );
}

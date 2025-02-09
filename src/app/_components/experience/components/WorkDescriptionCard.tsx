import React, { useState } from "react";
import { Experience } from "@/types/Experience";

type WorkDescriptionCardProps = {
  selectedExp: Experience;
};

export default function WorkDescriptionCard(props: WorkDescriptionCardProps) {
  const { selectedExp } = props;
  const { jobTitle, company, duration, description } = selectedExp;

  return (
    <div className={""}>
      <div>{jobTitle}</div>
      <div>{company}</div>
      <div>{duration}</div>
      <div>
        {description.map((bullet, index) => (
          <div key={`${jobTitle}-desc-${index}`}>- {bullet}</div>
        ))}
      </div>
    </div>
  );
}

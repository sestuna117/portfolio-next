import React, { useState } from "react";
import { Experience } from "@/types/Experience";
import JobSelector from "@/app/_components/experience/components/JobSelector";

const EXPERIENCES: Experience[] = [
  {
    jobTitle: "Software Developer",
    company: "IBM",
    duration: "Jan 2023 - Present",
    description: [
      "Contributed to the development of a new Intercompany Agreement (ICA) solution used by IBMers worldwide as a replacement to the legacy system that used Lotus Notes which would be sunset.",
      "Developed a new email notification microservice which handled the sending of all emails within the application throughout an ICA’s approval process using Spring Boot and Thymeleaf templates.",
      "Implemented feature for users to delegate/reassign approvals within dynamic UI modals based on validations.",
    ],
  },
  {
    jobTitle: "Frontend Developer Intern",
    company: "IBM",
    duration: "May 2022 - August 2022",
    description: [
      "Helped spearhead the revamp of the UI for IBMs internal Global Ledger secondary support application used by admins and developers to help debug and monitor activity on the main application.",
      "Helped in redesign decisions and implementations utilizing Carbon React as well as custom stylings and components for a cohesive and coherent UI experience.",
      "Utilized React Hot Toast library along with React's useContext hook in the creation of a universal notification system for all status and error notifications displayed to users.",
    ],
  },
];

export default function WorkSelector() {
  const [selectedJob, setSelectedJob] = useState(EXPERIENCES[0]);

  const handleChangeJob = (job: Experience) => {
    setSelectedJob(job);
  };

  return (
    <div className={"flex mt-10"}>
      <JobSelector
        experiences={EXPERIENCES}
        handleSelectJob={handleChangeJob}
      />
      <div>description</div>
    </div>
  );
}

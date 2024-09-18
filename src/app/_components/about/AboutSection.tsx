import React from "react";
import AboutSegmentWrapper from "@/app/_components/about/components/AboutSegmentWrapper";
import SkillsList from "@/app/_components/about/components/SkillsList";
import AboutMe from "@/app/_components/about/components/AboutMe";

const AboutSection = () => {
  return (
    <div id={"about"} className={"min-h-screen text-white"}>
      <AboutSegmentWrapper
        titleText={"About "}
        secondTitleText={"Me"}
        titleAnimationDelay={500}
        dividerAnimationDelay={0}
        threshold={0.2}
      >
        <AboutMe />
      </AboutSegmentWrapper>

      <AboutSegmentWrapper
        titleText={"Technical "}
        secondTitleText={"Skills"}
        titleAnimationDelay={750}
        dividerAnimationDelay={250}
        threshold={0.5}
      >
        <SkillsList />
      </AboutSegmentWrapper>
    </div>
  );
};

export default AboutSection;

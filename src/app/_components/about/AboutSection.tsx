import React from "react";
import AboutSectionSegment from "@/app/_components/about/AboutSectionSegment";
import SkillsListSegment from "@/app/_components/about/SkillsListSegment";
import AboutMeSegment from "@/app/_components/about/AboutMeSegment";

const AboutSection = () => {
  return (
    <div id={"about"} className={"min-h-screen text-white"}>
      <AboutSectionSegment
        titleText={"About "}
        secondTitleText={"Me"}
        titleAnimationDelay={500}
        dividerAnimationDelay={0}
        threshold={0.2}
      >
        <AboutMeSegment />
      </AboutSectionSegment>

      <AboutSectionSegment
        titleText={"Technical "}
        secondTitleText={"Skills"}
        titleAnimationDelay={750}
        dividerAnimationDelay={250}
        threshold={0.5}
      >
        <SkillsListSegment />
      </AboutSectionSegment>
    </div>
  );
};

export default AboutSection;

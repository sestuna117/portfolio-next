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
        childrenClassNameInView={""}
        titleAnimationDelay={500}
        dividerAnimationDelay={0}
        threshold={0.2}
      >
        <AboutMeSegment />
      </AboutSectionSegment>

      <AboutSectionSegment
        titleText={"Technical "}
        secondTitleText={"Skills"}
        childrenClassNameInView={""}
        titleAnimationDelay={750}
        dividerAnimationDelay={250}
        threshold={1}
      >
        <SkillsListSegment />
      </AboutSectionSegment>

      <AboutSectionSegment
        titleText={"Education"}
        childrenClassNameInView={
          "opacity-0 animate-slide-text-up-show animation-delay-500"
        }
        titleAnimationDelay={1000}
        dividerAnimationDelay={500}
        threshold={1}
      ></AboutSectionSegment>
    </div>
  );
};

export default AboutSection;

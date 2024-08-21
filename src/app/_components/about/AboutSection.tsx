import React from "react";
import AboutSectionSegment from "@/app/_components/about/AboutSectionSegment";
import SkillsList from "@/app/_components/about/SkillsList";

const AboutSection = () => {
  return (
    <div id={"about"} className={"min-h-screen text-white"}>
      <AboutSectionSegment
        titleText={"About "}
        secondTitleText={"Me"}
        childrenClassNameInView={""}
        titleAnimationDelay={500}
        dividerAnimationDelay={0}
      >
        <div
          className={
            "mb-10 opacity-0 animate-slide-text-up-show animation-delay-[1250ms]"
          }
        >
          I first truly got onto web development during my junior year in
          university when my friend/mentor of sorts (you know who you are)
          convinced me to try developing something that I could actually use or
          enjoy. Thus I embarked on my journey to create a stat tracker site for
          the popular MOBA game League of Legends. While developing my first
          site, I learned of the instance gratification that web development
          could give you, and it helped motivate me even more to continue. Since
          then I&apos;ve been hooked on creating webpages and the many other
          aspects of frontend development.
        </div>
        <div
          className={
            "opacity-0 animate-slide-text-up-show animation-delay-[1500ms]"
          }
        >
          My primary focus these days have been developing web applications for
          internal use within IBM. What I find the most enjoyable is when
          I&apos;m given the opportunity to work with both the design and the
          development portion of a component. I want things to look nice as well
          as functional.
        </div>
      </AboutSectionSegment>

      <AboutSectionSegment
        titleText={"Technical "}
        secondTitleText={"Skills"}
        childrenClassNameInView={""}
        titleAnimationDelay={750}
        dividerAnimationDelay={250}
      >
        <SkillsList />
      </AboutSectionSegment>

      <AboutSectionSegment
        titleText={"Education"}
        childrenClassNameInView={
          "opacity-0 animate-slide-text-up-show animation-delay-500"
        }
        titleAnimationDelay={1000}
        dividerAnimationDelay={500}
      ></AboutSectionSegment>
    </div>
  );
};

export default AboutSection;

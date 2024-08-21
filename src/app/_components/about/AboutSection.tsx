import React from "react";
import AboutSectionSegment from "@/app/_components/about/AboutSectionSegment";

const AboutSection = () => {
  return (
    <div id={"about"} className={"min-h-screen text-white"}>
      <AboutSectionSegment
        titleText={"About "}
        secondTitleText={"Me"}
        childrenClassNameInView={
          "opacity-0 animate-slide-text-up-show animation-delay-[1250ms]"
        }
        titleAnimationDelay={500}
        dividerAnimationDelay={0}
      >
        I first truly got onto web development during my junior year in
        university when my friend/mentor of sorts (you know who you are)
        convinced me to try developing something that I could actually use or
        enjoy. Thus I embarked on my journey to create a stat tracker site for
        the popular MOBA game League of Legends. While developing my first site,
        I learned of the instance gratification that web development could give
        you, and it helped motivate me even more to continue. Since then
        I&apos;ve been hooked on creating webpages and the many other aspects of
        frontend development.
      </AboutSectionSegment>

      <AboutSectionSegment
        titleText={"Technical "}
        secondTitleText={"Skills"}
        childrenClassNameInView={
          "opacity-0 animate-slide-text-up-show animation-delay-1000"
        }
        titleAnimationDelay={750}
        dividerAnimationDelay={250}
      ></AboutSectionSegment>

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

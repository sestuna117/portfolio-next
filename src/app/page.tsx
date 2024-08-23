import { HomeLink } from "@/app/_components/HomeLink";
import { PageTextBorder } from "@/components/PageTextBorder";
import React from "react";
import AboutSection from "@/app/_components/about/AboutSection";

export default function Home() {
  return (
    <>
      <PageTextBorder
        texts={["Scale Models", "Front End Development", "Photography"]}
      />
      <main
        className={
          "[&>*]:py-16 [&>*]:px-6 [&>*]:sm:px-10 [&>*]:md:px-16 [&>*]:lg:px-32"
        }
      >
        <div id={"home"} className={"h-screen bg-cod-gray py-16"}>
          <div className={"flex flex-col items-end"}>
            <HomeLink href={"#about"} label={"About"} />
            <HomeLink href={"#experience"} label={"Experience"} />
            <HomeLink href={"#projects"} label={"Projects"} />
          </div>
        </div>
        <AboutSection />
      </main>
    </>
  );
}

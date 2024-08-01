import { HomeLink } from "@/app/_components/HomeLink";
import { PageTextBorder } from "@/components/PageTextBorder";

export default function Home() {
  return (
    <>
      <PageTextBorder
        texts={["Scale Models", "Front End Development", "Photography"]}
      />
      <main className={"[&>*]:py-16 [&>*]:px-6 [&>*]:sm:px-10 [&>*]:md:px-16 [&>*]:lg:px-32"}>
        <div id={"home"} className={"h-screen bg-cod-gray py-16"}>
          <div className={"flex flex-col items-end"}>
            <HomeLink href={"#about"} label={"About"} />
            <HomeLink href={"#work"} label={"Work"} />
            <HomeLink href={"#projects"} label={"Projects"} />
          </div>
        </div>
        <div id={"about"} className={"min-h-screen text-white"}>
          <div className={""}>
            <span>About</span>
            <span>Me</span>
          </div>
          <div>
            I first truly got onto web development during my junior year in university when my friend/mentor of sorts
            (you know who you are) convinced me to try developing something that I could actually use or enjoy.
            Thus I embarked on my journey to create a stat tracker site for the popular MOBA game League of Legends.
            While developing my first site, I learned of the instance gratification that web development
            could give you, and it helped motivate me even more to continue. Since then I&apos;ve been hooked
            on creating webpages and the many other aspects of frontend development.
          </div>
          <div>
            <div>Skills</div>
          </div>
          <div>
            <div>Education</div>
          </div>
        </div>
      </main>
    </>
  );
}

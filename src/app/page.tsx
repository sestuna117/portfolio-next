import { HomeLink } from "@/app/_components/HomeLink";
import { PageTextBorder } from "@/components/PageTextBorder";

export default function Home() {
  return (
    <>
      <PageTextBorder
        texts={["Scale Models", "Front End Development", "Photography"]}
      />
      <main
        className={
          "h-screen bg-cod-gray py-16 px-6 sm:10 md:px-16 lg:px-32"
        }
      >
        <div className={"flex flex-col items-end"}>
          <HomeLink href={"/about"} label={"About"} />
          <HomeLink href={"/work"} label={"Work"} />
          <HomeLink href={"/projects"} label={"Projects"} />
        </div>
      </main>
    </>
  );
}

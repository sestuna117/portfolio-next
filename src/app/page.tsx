import { HomeLink } from "@/app/_components/HomeLink";
import { PageTextBorder } from "@/components/PageTextBorder";
import {DesignModalButton} from "@/app/_components/DesignModalButton";

export default function Home() {
  return (
    <>
      <PageTextBorder
        texts={["Scale Models", "Front End Development", "Photography"]}
      />
      <main
        className={
          "h-screen py-16 px-32 bg-gradient-to-r from-malachite to-pastel-green"
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

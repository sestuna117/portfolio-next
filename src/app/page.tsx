import {HomeLink} from "@/app/_components/HomeLink";

export default function Home() {
  return (
      <main className={"w-screen h-screen p-10 bg-gradient-to-r from-malachite to-pastel-green"}>
          <div className={"flex flex-col items-end"}>
              <HomeLink href={"/about"} label={"About"} />
              <HomeLink href={"/work"} label={"Work"} />
              <HomeLink href={"/projects"} label={"Projects"} />
          </div>
      </main>
  );
}

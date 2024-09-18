import React from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  RiJavaFill,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsFill,
} from "react-icons/ri";

interface SkillsListItemProps {
  inView: boolean;
  name: string;
  animationDelay: number;
}

export default function SkillsListItem(props: SkillsListItemProps) {
  const { inView, name, animationDelay } = props;

  const getIconByName = (name) => {
    let icon;

    switch (name) {
      case "Javascript":
        icon = <BiLogoJavascript size={64} />;
        break;
      case "React":
        icon = <RiReactjsFill size={64} />;
        break;
      case "Typescript":
        icon = <BiLogoTypescript size={64} />;
        break;
      case "Next.js":
        icon = <RiNextjsFill size={64} />;
        break;
      case "HTML":
        icon = <BiLogoHtml5 size={64} />;
        break;
      case "Java":
        icon = <RiJavaFill size={64} />;
        break;
      case "CSS":
        icon = <BiLogoCss3 size={64} />;
        break;
      case "Node.js":
        icon = <RiNodejsLine size={64} />;
        break;
      default:
        icon = <BiLogoJavascript size={64} color={"transparent"} />;
    }

    return icon;
  };

  return (
    <div
      className={
        inView
          ? "opacity-0 animate-slide-text-up-right animation-delay-1000 flex items-center justify-start w-[200px]"
          : "opacity-0"
      }
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {getIconByName(name)}
      {name}
    </div>
  );
}

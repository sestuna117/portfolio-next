"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { sleep } from "@/utils";

interface HomeLinkProps extends LinkProps {
  label: string;
  href: string;
}

export const HomeLink = (props: HomeLinkProps) => {
  const { href, label } = props;

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("after:wiper-on-a");
    body?.classList.add("before:wiper-on-b");

    await sleep(1000);

    // router.push(href)

    await sleep(500);

    body?.classList.remove("after:wiper-on-a");
    body?.classList.remove("before:wiper-on-b");
  };

  return (
    <a
      className={`text-white relative inline-block text-right font-bold uppercase 
                 text-4xl mobile-m:text-5xl md:text-7xl lg:text-9xl 2xl:text-10xl fhd:text-xxl
                 before:wipe before:content-[attr(id)] before:background-size-width-[0] before:inline-block before:text-right 
                 before:font-bold before:uppercase before:absolute before:top-0 before:left-0 
                 before:transition-background-size before:ease-slow-wipe before:duration-500 hover:before:background-size-width-[220%]`}
      id={label}
      // onClick={handleClick}
      href={href}
    >
      {label}
    </a>
  );
};

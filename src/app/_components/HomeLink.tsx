"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface HomeLinkProps extends LinkProps {
  label: string;
  href: string;
}

export const HomeLink = (props: HomeLinkProps) => {
  const router = useRouter();
  const { href, label } = props;

  const sleep = async (ms: number): Promise<unknown> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

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
    <Link
      className={`text-cod gray relative inline-block text-right font-bold text-xxl uppercase 
                 before:wipe before:content-[attr(id)] before:background-size-width-[0] before:inline-block before:text-right 
                 before:font-bold before:text-xxl before:uppercase before:absolute before:top-0 before:left-0 
                 before:transition-background-size before:ease-slow-wipe before:duration-500 hover:before:background-size-width-[220%]`}
      id={label}
      onClick={handleClick}
      href={href}
    >
      {label}
    </Link>
  );
};

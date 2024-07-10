'use client'
import Link, {LinkProps} from "next/link";
import React from "react";
interface HomeLinkProps extends LinkProps {
    label: string
}

export const HomeLink = (props: HomeLinkProps) => {
    const {href, label} = props

    const sleep = async (ms: number):Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const body = document.querySelector("body")

        body?.classList.add("after:animate-page-transition")

        await sleep(500)

        await sleep(500)

        body?.classList.remove("after:animate-page-transition")
    }

    return (
            <Link className={
                `text-cod gray relative inline-block text-right  font-bold text-xxl uppercase 
                 before:wipe before:content-[attr(id)] before:background-size-width-[0] before:inline-block before:text-right 
                 before:font-bold before:text-xxl before:uppercase before:absolute before:top-0 before:left-0 
                 before:transition-background-size before:ease-slow-wipe before:duration-500 hover:before:background-size-width-[220%]`
            } id={label}
                  onClick={handleClick}
                  href={href}>{label}
            </Link>
    )
}
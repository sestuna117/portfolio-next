import Link, {LinkProps} from "next/link";
import React from "react";
interface HomeLinkProps extends LinkProps {
    label: string
}

export const HomeLink = (props: HomeLinkProps) => {
    const {href, label} = props

    // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    // }

    return (
            <Link className={
                "text-cod gray relative  hover:before:wipe-full before:wipe inline-block  text-right  font-bold  text-xxl uppercase " +
                "before:content-[attr(id)] before:inline-block before:text-right before:font-bold before:text-xxl before:uppercase "
                // + "hover:text-alto transition hover:scale-110 hover:-translate-x-32 duration-300"
            } id={label}
                  // onClick={(e) => handleClick(e)}
                  href={href}>{label}
            </Link>
    )
}
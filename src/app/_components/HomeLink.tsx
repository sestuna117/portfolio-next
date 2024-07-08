import Link, {LinkProps} from "next/link";
interface HomeLinkProps extends LinkProps {
    label: String
}

export const HomeLink = (props: HomeLinkProps) => {
    const {href, label} = props

    return (
        <Link className={
            "text-right w-fit font-bold uppercase text-xxl"}
              href={href}>{label}</Link>
    )
}
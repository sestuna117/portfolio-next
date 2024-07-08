import Link, {LinkProps} from "next/link";
interface HomeLinkProps extends LinkProps {
    label: String
}

export const HomeLink = (props: HomeLinkProps) => {
    const {href, label} = props

    return (
        <Link className={
            "flex align-middle align-text text-right w-fit font-bold uppercase text-xxl hover:hollow-text transition hover:scale-110 hover:-translate-x-32 duration-300"}
              href={href}>{label}
        </Link>
    )
}
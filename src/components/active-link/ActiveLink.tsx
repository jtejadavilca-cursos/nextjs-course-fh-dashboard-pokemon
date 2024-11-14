"use client";
import Link from "next/link";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    children: JSX.Element;
}

export const ActiveLink = ({ path, children }: Props) => {
    const currentPath = usePathname();

    return (
        <Link href={path} className={`${style.link} ${currentPath === path && style["active-link"]}`}>
            {children}
        </Link>
    );
};

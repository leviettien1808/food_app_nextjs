"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "@/components/main-header/nav-link.module.css";

type NavLinkProps = {
  href: string;
};

export default function NavLink({
  href,
  children,
}: NavLinkProps & Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

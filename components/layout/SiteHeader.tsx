"use client";

import Link from "next/link";
import { Header } from "./Header";
import type { NavItem } from "./Nav";

const navItems: NavItem[] = [
  { label: "בית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "שירותים", href: "/services" },
  { label: "צור קשר", href: "/contact" },
];

export function SiteHeader() {
  return (
    <Header
      logo={
        <Link href="/" className="flex items-center h-full text-xl font-bold text-white">
          Trievox
        </Link>
      }
      navItems={navItems}
    />
  );
}

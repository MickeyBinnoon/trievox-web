"use client";

import Link from "next/link";
import { Header } from "./Header";
import { Button } from "@/components/ui";
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
        <Link href="/" className="text-xl font-bold">
          Trievox
        </Link>
      }
      navItems={navItems}
      actions={
        <Button asChild size="sm">
          <Link href="/contact">התחל עכשיו</Link>
        </Button>
      }
    />
  );
}

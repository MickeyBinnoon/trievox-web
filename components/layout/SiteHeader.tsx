"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "./Header";
import { Button } from "@/components/ui/Button";
import type { NavItem } from "./Nav";

const navItems: NavItem[] = [
  { label: "בית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "שיווק דיגיטלי", href: "/digital-marketing" },
  { label: "פיתוח אתרים", href: "/web-development" },
  { label: "אוטומציות", href: "/automations" },
];

export function SiteHeader() {
  return (
    <Header
      logo={
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo_full_trans.webp"
            alt="Trievox"
            width={150}
            height={40}
            priority
          />
        </Link>
      }
      navItems={navItems}
      actions={
        <Button variant="gradient" size="sm" asChild className="hidden md:inline-flex">
          <Link href="/#contact">צור קשר</Link>
        </Button>
      }
      ctaLabel="צור קשר"
      ctaHref="/#contact"
    />
  );
}

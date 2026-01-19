"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { Nav, type NavItem } from "./Nav";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  actions?: React.ReactNode;
}

export function Header({
  className,
  logo,
  navItems = [],
  actions,
  ...props
}: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      {...props}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">{logo}</div>

          {/* Desktop Navigation */}
          {!isMobile && navItems.length > 0 && (
            <Nav items={navItems} className="hidden md:flex" />
          )}

          {/* Actions and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {actions}

            {/* Mobile Menu Toggle */}
            {isMobile && navItems.length > 0 && (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring md:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-expanded={mobileNavOpen}
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isMobile && (
        <MobileNav
          items={navItems}
          open={mobileNavOpen}
          onOpenChange={setMobileNavOpen}
        />
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { Nav, type NavItem } from "./Nav";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  actions?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Header({
  className,
  logo,
  navItems = [],
  actions,
  ctaLabel,
  ctaHref,
  ...props
}: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Track scroll position for visual effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={cn(
        // Glass effect navbar
        "sticky top-0 z-40 w-full backdrop-blur-xl transition-all duration-300",
        // Initial state
        "border-b border-[rgba(148,163,184,0.1)]",
        isScrolled
          ? "bg-[rgba(2,6,23,0.95)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-[rgba(2,6,23,0.8)]",
        className
      )}
      {...props}
    >
      <Container>
        {/* FIXED: Removed px-4 md:px-16 lg:px-24 - Container provides padding */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">{logo}</div>

          {/* Desktop Navigation */}
          {!isMobile && navItems.length > 0 && (
            <Nav
              items={navItems}
              className="hidden md:flex"
              aria-label="Main navigation"
            />
          )}

          {/* Actions and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {actions}

            {/* Mobile Menu Toggle - Animated Hamburger */}
            {isMobile && navItems.length > 0 && (
              <button
                type="button"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  "text-foreground hover:text-primary",
                  "hover:bg-[rgba(0,212,255,0.08)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "transition-colors duration-200",
                  "active:scale-95",
                  "md:hidden",
                  mobileNavOpen && "hamburger-open"
                )}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                aria-expanded={mobileNavOpen}
                aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
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
                  {/* Animated hamburger lines */}
                  <path
                    className="hamburger-line hamburger-line-1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16"
                  />
                  <path
                    className="hamburger-line hamburger-line-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h16"
                  />
                  <path
                    className="hamburger-line hamburger-line-3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 18h16"
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
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
        />
      )}
    </header>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface NavItemChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItemGroup {
  title: string;
  items: NavItemChild[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItemChild[] | NavItemGroup[];
}

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[];
}

function isGroupArray(
  children: NavItemChild[] | NavItemGroup[]
): children is NavItemGroup[] {
  return children.length > 0 && "items" in children[0];
}

export function Nav({ items, className, ...props }: NavProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150);
  };

  return (
    <nav ref={navRef} className={cn("flex items-center gap-1", className)} {...props}>
      {items.map((item, index) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openIndex === index;

        if (!hasChildren) {
          return (
            <NextLink
              key={item.label}
              href={item.href || "#"}
              className={cn(
                "relative px-3 py-2 text-sm font-medium text-foreground/80 rounded-lg",
                "transition-all duration-200",
                "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                "active:scale-[0.97] active:bg-[rgba(0,212,255,0.12)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                // Animated underline
                "after:absolute after:bottom-0.5 after:inset-x-3 after:h-0.5",
                "after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#c026d3]",
                "after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-left"
              )}
            >
              {item.label}
            </NextLink>
          );
        }

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={cn(
                "relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium",
                "transition-all duration-200",
                "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                "active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                // Animated underline
                "after:absolute after:bottom-0.5 after:inset-x-3 after:h-0.5",
                "after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#c026d3]",
                "after:transition-transform after:duration-300",
                isOpen
                  ? "text-primary bg-[rgba(0,212,255,0.08)] after:scale-x-100"
                  : "text-foreground/80 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.label}
              <svg
                className={cn(
                  "h-4 w-4 transition-transform",
                  isOpen && "rotate-180"
                )}
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Mega Menu Dropdown */}
            {isOpen && item.children && (
              <div
                className={cn(
                  "absolute start-0 top-full z-50 mt-1 min-w-[200px] rounded-xl p-4",
                  "border border-[rgba(148,163,184,0.1)]",
                  "bg-[rgba(2,6,23,0.95)] backdrop-blur-xl",
                  "shadow-[0_4px_30px_rgba(0,0,0,0.3)]",
                  isGroupArray(item.children) && "min-w-[400px]"
                )}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {isGroupArray(item.children) ? (
                  // Grouped mega menu
                  <div className="grid grid-cols-2 gap-6">
                    {item.children.map((group) => (
                      <div key={group.title}>
                        <h3 className="mb-2 text-sm font-semibold text-foreground">
                          {group.title}
                        </h3>
                        <ul className="space-y-1">
                          {group.items.map((child) => (
                            <li key={child.href}>
                              <NextLink
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-2 py-1.5 text-sm text-foreground/70",
                                  "transition-all duration-150",
                                  "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                                  "active:scale-[0.98] active:bg-[rgba(0,212,255,0.12)]"
                                )}
                              >
                                {child.label}
                                {child.description && (
                                  <span className="block text-xs text-muted-foreground">
                                    {child.description}
                                  </span>
                                )}
                              </NextLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Simple dropdown
                  <ul className="space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NextLink
                          href={child.href}
                          className={cn(
                            "block rounded-md px-2 py-1.5 text-sm text-muted-foreground",
                            "transition-all duration-150",
                            "hover:bg-muted hover:text-foreground",
                            "active:scale-[0.98]"
                          )}
                        >
                          {child.label}
                          {child.description && (
                            <span className="block text-xs text-muted-foreground">
                              {child.description}
                            </span>
                          )}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

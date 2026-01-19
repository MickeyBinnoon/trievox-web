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
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                isOpen ? "bg-muted text-foreground" : "text-foreground/80"
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
                  "absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-md border border-border bg-background p-4 shadow-lg",
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
                                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
                          className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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

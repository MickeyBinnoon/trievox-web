"use client";

import { useState, useCallback } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { type NavItem, type NavItemGroup, type NavItemChild } from "./Nav";

export interface MobileNavProps {
  items: NavItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaLabel?: string;
  ctaHref?: string;
}

function isGroupArray(
  children: NavItemChild[] | NavItemGroup[]
): children is NavItemGroup[] {
  return children.length > 0 && "items" in children[0];
}

const CLOSE_DELAY_MS = 200;

export function MobileNav({
  items,
  open,
  onOpenChange,
  ctaLabel,
  ctaHref,
}: MobileNavProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedHref, setSelectedHref] = useState<string | null>(null);

  // Handle link click with visual feedback and delayed close
  const handleLinkClick = useCallback(
    (href: string) => {
      setSelectedHref(href);
      setTimeout(() => {
        onOpenChange(false);
        // Reset selected state after drawer closes
        setTimeout(() => setSelectedHref(null), 300);
      }, CLOSE_DELAY_MS);
    },
    [onOpenChange]
  );

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        side="left"
        className={cn(
          "w-full max-w-xs",
          "bg-[rgba(2,6,23,0.95)] backdrop-blur-xl",
          "border-e border-[rgba(148,163,184,0.1)]"
        )}
      >
        <DrawerHeader className="border-b border-[rgba(148,163,184,0.1)]">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {items.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedIndex === index;

            if (!hasChildren) {
              const href = item.href || "#";
              const isSelected = selectedHref === href;
              return (
                <NextLink
                  key={item.label}
                  href={href}
                  className={cn(
                    "flex min-h-[44px] items-center rounded-lg px-3 py-2 text-base font-medium",
                    "text-foreground/80 transition-all duration-150",
                    "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                    "active:scale-[0.98] active:bg-[rgba(0,212,255,0.12)]",
                    isSelected && "nav-link-selected"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(href);
                    // Allow navigation after a brief moment
                    setTimeout(() => {
                      window.location.href = href;
                    }, CLOSE_DELAY_MS + 50);
                  }}
                >
                  {item.label}
                </NextLink>
              );
            }

            return (
              <div key={item.label}>
                <button
                  type="button"
                  className={cn(
                    "flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium",
                    "transition-colors duration-200",
                    "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                    "active:bg-[rgba(0,212,255,0.12)]",
                    isExpanded
                      ? "text-primary bg-[rgba(0,212,255,0.08)]"
                      : "text-foreground/80"
                  )}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                >
                  {item.label}
                  <svg
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isExpanded && "rotate-180"
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

                {isExpanded && item.children && (
                  <div className="ms-4 mt-1 border-s border-border ps-4">
                    {isGroupArray(item.children) ? (
                      // Grouped items
                      item.children.map((group) => (
                        <div key={group.title} className="mb-4">
                          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {group.title}
                          </h3>
                          <ul className="space-y-1">
                            {group.items.map((child) => {
                              const isSelected = selectedHref === child.href;
                              return (
                                <li key={child.href}>
                                  <NextLink
                                    href={child.href}
                                    className={cn(
                                      "flex min-h-[40px] items-center rounded-lg px-2 py-1.5 text-sm text-foreground/70",
                                      "transition-all duration-150",
                                      "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                                      "active:scale-[0.98]",
                                      isSelected && "nav-link-selected"
                                    )}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleLinkClick(child.href);
                                      setTimeout(() => {
                                        window.location.href = child.href;
                                      }, CLOSE_DELAY_MS + 50);
                                    }}
                                  >
                                    {child.label}
                                  </NextLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))
                    ) : (
                      // Simple items
                      <ul className="space-y-1">
                        {item.children.map((child) => {
                          const isSelected = selectedHref === child.href;
                          return (
                            <li key={child.href}>
                              <NextLink
                                href={child.href}
                                className={cn(
                                  "flex min-h-[40px] items-center rounded-lg px-2 py-1.5 text-sm text-foreground/70",
                                  "transition-all duration-150",
                                  "hover:text-primary hover:bg-[rgba(0,212,255,0.08)]",
                                  "active:scale-[0.98]",
                                  isSelected && "nav-link-selected"
                                )}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleLinkClick(child.href);
                                  setTimeout(() => {
                                    window.location.href = child.href;
                                  }, CLOSE_DELAY_MS + 50);
                                }}
                              >
                                {child.label}
                              </NextLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button */}
        {ctaLabel && ctaHref && (
          <div className="mt-auto border-t border-[rgba(148,163,184,0.1)] p-4">
            <Button
              variant="gradient"
              className={cn(
                "w-full transition-all duration-150",
                "active:scale-[0.98]",
                selectedHref === ctaHref && "ring-2 ring-primary"
              )}
              asChild
            >
              <NextLink
                href={ctaHref}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(ctaHref);
                  setTimeout(() => {
                    window.location.href = ctaHref;
                  }, CLOSE_DELAY_MS + 50);
                }}
              >
                {ctaLabel}
              </NextLink>
            </Button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

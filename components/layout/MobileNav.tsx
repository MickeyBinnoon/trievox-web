"use client";

import { useState } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { type NavItem, type NavItemGroup, type NavItemChild } from "./Nav";

export interface MobileNavProps {
  items: NavItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function isGroupArray(
  children: NavItemChild[] | NavItemGroup[]
): children is NavItemGroup[] {
  return children.length > 0 && "items" in children[0];
}

export function MobileNav({ items, open, onOpenChange }: MobileNavProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent side="left" className="w-full max-w-xs">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <nav className="flex flex-col gap-1 p-4">
          {items.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedIndex === index;

            if (!hasChildren) {
              return (
                <NextLink
                  key={item.label}
                  href={item.href || "#"}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => onOpenChange(false)}
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
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "hover:bg-muted hover:text-foreground",
                    isExpanded ? "bg-muted text-foreground" : "text-foreground/80"
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
                            {group.items.map((child) => (
                              <li key={child.href}>
                                <NextLink
                                  href={child.href}
                                  className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                  onClick={() => onOpenChange(false)}
                                >
                                  {child.label}
                                </NextLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      // Simple items
                      <ul className="space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NextLink
                              href={child.href}
                              className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                              onClick={() => onOpenChange(false)}
                            >
                              {child.label}
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
      </DrawerContent>
    </Drawer>
  );
}

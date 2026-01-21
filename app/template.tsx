"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface TemplateProps {
  children: React.ReactNode;
}

/**
 * Template wrapper that adds page transition animations.
 * Uses modern CSS @starting-style for enter animations.
 * Respects prefers-reduced-motion.
 */
export default function Template({ children }: TemplateProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "page-transition",
        prefersReducedMotion && "page-transition-reduced"
      )}
    >
      {children}
    </div>
  );
}

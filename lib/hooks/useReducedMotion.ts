"use client";

import { useSyncExternalStore } from "react";

function getServerSnapshot(): boolean {
  // Default to reduced motion on server for accessibility
  return true;
}

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Hook to detect if the user prefers reduced motion.
 * Returns true if the user has enabled reduced motion in their OS settings.
 *
 * Use this hook to conditionally disable or simplify animations.
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 *
 * return (
 *   <div className={prefersReducedMotion ? "" : "animate-bounce"}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

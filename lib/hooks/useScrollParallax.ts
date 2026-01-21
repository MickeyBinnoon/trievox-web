"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { useIsMobile } from "./useMediaQuery";
import { useReducedMotion } from "./useReducedMotion";
import { useSyncExternalStore } from "react";

interface UseScrollParallaxOptions {
  maxOffsetDesktop?: number;
  maxOffsetMobile?: number;
  lerpFactor?: number;
}

/**
 * Custom hook for scroll-based vertical offset with lerp interpolation.
 *
 * - Returns vertical offset based on scroll progress
 * - Uses passive scroll listener
 * - Applies lerp interpolation for smoothness
 * - Respects prefers-reduced-motion
 * - Reduced offset on mobile
 */
export function useScrollParallax(
  options: UseScrollParallaxOptions = {}
): number {
  const {
    maxOffsetDesktop = 8,
    maxOffsetMobile = 4,
    lerpFactor = 0.08,
  } = options;

  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isIdleRef = useRef(true);
  const animateRef = useRef<() => void>(() => {});
  const listenersRef = useRef<Set<() => void>>(new Set());

  const maxOffset = isMobile ? maxOffsetMobile : maxOffsetDesktop;

  // Store animate function in a ref
  useEffect(() => {
    animateRef.current = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Calculate lerp
      const newOffset = current + (target - current) * lerpFactor;

      // Check if we've reached the target (delta < 0.01px)
      const delta = Math.abs(target - newOffset);

      if (delta < 0.01) {
        currentRef.current = target;
        isIdleRef.current = true;
        rafRef.current = null;
        // Notify subscribers
        listenersRef.current.forEach((listener) => listener());
        return;
      }

      currentRef.current = newOffset;
      // Notify subscribers
      listenersRef.current.forEach((listener) => listener());

      rafRef.current = requestAnimationFrame(animateRef.current);
    };
  }, [lerpFactor]);

  const startAnimation = useCallback(() => {
    if (isIdleRef.current) {
      isIdleRef.current = false;
      rafRef.current = requestAnimationFrame(animateRef.current);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion) return;

    // Calculate scroll progress (0 to 1) within hero section (first viewport height)
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Clamp progress to 0-1 range
    const progress = Math.min(scrollY / viewportHeight, 1);

    // Set target offset
    targetRef.current = progress * maxOffset;

    // Start animation if idle
    startAnimation();
  }, [prefersReducedMotion, maxOffset, startAnimation]);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Reset refs when disabled
      targetRef.current = 0;
      currentRef.current = 0;
      // Notify subscribers of the reset
      listenersRef.current.forEach((listener) => listener());
      return;
    }

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [prefersReducedMotion, handleScroll]);

  // Use useSyncExternalStore for reactive updates
  const subscribe = useCallback((callback: () => void) => {
    listenersRef.current.add(callback);
    return () => {
      listenersRef.current.delete(callback);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    return currentRef.current;
  }, []);

  const getServerSnapshot = useCallback(() => {
    return 0;
  }, []);

  const offset = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Return zero offset when disabled
  return useMemo(() => {
    if (prefersReducedMotion) {
      return 0;
    }
    return offset;
  }, [prefersReducedMotion, offset]);
}

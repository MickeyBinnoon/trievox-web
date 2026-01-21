"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { useIsMobile } from "./useMediaQuery";
import { useReducedMotion } from "./useReducedMotion";
import { useSyncExternalStore } from "react";

interface ParallaxOffset {
  x: number;
  y: number;
}

interface UseMouseParallaxOptions {
  maxOffset?: number;
  lerpFactor?: number;
}

/**
 * Custom hook for mouse tracking with lerp interpolation for parallax effects.
 *
 * - Tracks normalized mouse position relative to viewport center
 * - Applies smooth interpolation (lerp)
 * - Returns `{ x, y }` offset in pixels
 * - Disabled on mobile
 * - Respects prefers-reduced-motion
 * - Stops RAF loop when idle
 */
export function useMouseParallax(
  options: UseMouseParallaxOptions = {}
): ParallaxOffset {
  const { maxOffset = 12, lerpFactor = 0.08 } = options;

  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Stable reference for server snapshot (must be cached to avoid infinite loop)
  const serverSnapshotRef = useRef<ParallaxOffset>({ x: 0, y: 0 });

  // Use refs to store state that doesn't need to trigger renders on every frame
  const targetRef = useRef<ParallaxOffset>({ x: 0, y: 0 });
  const currentRef = useRef<ParallaxOffset>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const isIdleRef = useRef(true);
  const animateRef = useRef<() => void>(() => {});
  const listenersRef = useRef<Set<() => void>>(new Set());

  // Disabled state
  const isDisabled = isMobile || prefersReducedMotion;

  // Store animate function in a ref
  useEffect(() => {
    animateRef.current = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Calculate lerp
      const newX = current.x + (target.x - current.x) * lerpFactor;
      const newY = current.y + (target.y - current.y) * lerpFactor;

      // Check if we've reached the target (delta < 0.01px)
      const deltaX = Math.abs(target.x - newX);
      const deltaY = Math.abs(target.y - newY);

      if (deltaX < 0.01 && deltaY < 0.01) {
        // We're at target, stop animation
        currentRef.current = { x: target.x, y: target.y };
        isIdleRef.current = true;
        rafRef.current = null;
        // Notify subscribers
        listenersRef.current.forEach((listener) => listener());
        return;
      }

      // Update current position
      currentRef.current = { x: newX, y: newY };
      // Notify subscribers
      listenersRef.current.forEach((listener) => listener());

      // Continue animation
      rafRef.current = requestAnimationFrame(animateRef.current);
    };
  }, [lerpFactor]);

  const startAnimation = useCallback(() => {
    if (isIdleRef.current) {
      isIdleRef.current = false;
      rafRef.current = requestAnimationFrame(animateRef.current);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDisabled) return;

      // Calculate normalized position (-1 to 1) from center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;

      // Set target offset
      targetRef.current = {
        x: normalizedX * maxOffset,
        y: normalizedY * maxOffset,
      };

      // Start animation if idle
      startAnimation();
    },
    [isDisabled, maxOffset, startAnimation]
  );

  useEffect(() => {
    if (isDisabled) {
      // Reset refs when disabled
      targetRef.current = { x: 0, y: 0 };
      currentRef.current = { x: 0, y: 0 };
      // Notify subscribers of the reset
      listenersRef.current.forEach((listener) => listener());
      return;
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isDisabled, handleMouseMove]);

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

  const getServerSnapshot = useCallback((): ParallaxOffset => {
    return serverSnapshotRef.current;
  }, []);

  const offset = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Return zero offset when disabled
  return useMemo(() => {
    if (isDisabled) {
      return { x: 0, y: 0 };
    }
    return offset;
  }, [isDisabled, offset]);
}

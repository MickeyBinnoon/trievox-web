"use client";

import { ReactNode } from "react";
import { useMouseParallax, useScrollParallax } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export interface HeroBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Galaxy/sci-fi hero background with parallax motion.
 *
 * Layer structure (bottom to top):
 * 1. Base gradient - diagonal teal-left to purple-right (static)
 * 2. Starfield - CSS pseudo-elements with tiny radial-gradient dots (depth: 0.1)
 * 3. Nebula glows - soft magenta bloom right, cyan glow left (depth: 0.3)
 * 4. Orbs - large blurred circles at edges (depth: 0.8)
 * 5. Vignette - edge darkening (static)
 * 6. Content - children slot (z-10)
 *
 * All decorative layers: pointer-events: none, aria-hidden="true"
 */
export function HeroBackground({ children, className }: HeroBackgroundProps) {
  const mouseOffset = useMouseParallax({ maxOffset: 12 });
  const scrollOffset = useScrollParallax({ maxOffsetDesktop: 8, maxOffsetMobile: 4 });

  // Depth multipliers for parallax effect
  const depthStarfield = 0.1;
  const depthNebula = 0.3;
  const depthOrbs = 0.8;

  // Calculate transforms for each layer
  const getTransform = (depth: number) => {
    const x = mouseOffset.x * depth;
    const y = (mouseOffset.y + scrollOffset) * depth;
    return `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <section
      className={cn(
        "relative min-h-[85vh] flex items-center overflow-hidden",
        className
      )}
    >
      {/* Layer 1: Base gradient (static) */}
      <div
        className="absolute inset-0 galaxy-base-gradient"
        aria-hidden="true"
      />

      {/* Layer 2: Starfield (depth: 0.1) */}
      <div
        className="starfield pointer-events-none"
        aria-hidden="true"
        style={{ transform: getTransform(depthStarfield) }}
      />

      {/* Layer 3: Nebula glows (depth: 0.3) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ transform: getTransform(depthNebula) }}
      >
        <div className="nebula-magenta" />
        <div className="nebula-cyan" />
      </div>

      {/* Layer 4: Orbs (depth: 0.8) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ transform: getTransform(depthOrbs) }}
      >
        <div className="galaxy-orb-purple-lg" />
        <div className="galaxy-orb-purple-bl" />
        <div className="galaxy-orb-cyan-left" />
        <div className="galaxy-orb-cyan-right" />
        <div className="galaxy-dot-1" />
        <div className="galaxy-dot-2" />
        <div className="galaxy-dot-3" />
      </div>

      {/* Layer 5: Vignette (static) */}
      <div
        className="galaxy-vignette pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 6: Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

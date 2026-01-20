import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "primary" | "secondary" | "gradient" | "mesh";
  /** Add floating glowing orbs like the logo nodes */
  withOrbs?: boolean;
}

/** Decorative glowing orb component (like logo nodes) */
function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-left cyan orb */}
      <div
        className="glow-orb-cyan absolute w-32 h-32 md:w-48 md:h-48 -top-16 -left-16 md:-top-24 md:-left-24 opacity-60"
        style={{ animationDelay: '0s' }}
      />
      {/* Top-right purple orb */}
      <div
        className="glow-orb-purple absolute w-24 h-24 md:w-36 md:h-36 -top-8 right-1/4 opacity-50"
        style={{ animationDelay: '-1.5s' }}
      />
      {/* Middle-right cyan orb */}
      <div
        className="glow-orb-cyan absolute w-20 h-20 md:w-32 md:h-32 top-1/3 -right-10 md:-right-16 opacity-40"
        style={{ animationDelay: '-3s' }}
      />
      {/* Bottom-left purple orb */}
      <div
        className="glow-orb-purple absolute w-28 h-28 md:w-40 md:h-40 -bottom-14 left-1/4 opacity-50"
        style={{ animationDelay: '-2s' }}
      />
      {/* Small accent orbs */}
      <div
        className="glow-orb absolute w-4 h-4 md:w-6 md:h-6 top-1/4 left-1/3 opacity-80"
        style={{ animationDelay: '-0.5s' }}
      />
      <div
        className="glow-orb absolute w-3 h-3 md:w-5 md:h-5 bottom-1/3 right-1/3 opacity-70"
        style={{ animationDelay: '-2.5s' }}
      />
    </div>
  );
}

export function Section({
  className,
  spacing = "lg",
  background = "default",
  withOrbs = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        // Spacing (slightly increased for more breathing room)
        {
          "py-0": spacing === "none",
          "py-10 md:py-14": spacing === "sm",
          "py-14 md:py-20": spacing === "md",
          "py-20 md:py-28": spacing === "lg",
          "py-28 md:py-36": spacing === "xl",
        },
        // Background variants (Logo-aligned deeper navy)
        {
          // Default - Deeper navy like logo
          "bg-[#030b1a]": background === "default",
          // Muted - Slightly elevated surface
          "bg-[#0c1829]": background === "muted",
          // Primary - Gradient background
          "bg-gradient-to-br from-[#0891b2] to-[#86198f] text-white":
            background === "primary",
          // Secondary - Surface color
          "bg-[#1a2642] text-foreground": background === "secondary",
          // Gradient - Animated gradient mesh
          "bg-[#030b1a] relative overflow-hidden": background === "gradient",
          // Mesh - Enhanced gradient mesh pattern (brighter, logo-aligned)
          "bg-[#030b1a] relative [background-image:radial-gradient(at_40%_20%,rgba(0,212,255,0.18)_0px,transparent_50%),radial-gradient(at_80%_0%,rgba(192,38,211,0.18)_0px,transparent_50%),radial-gradient(at_0%_50%,rgba(0,212,255,0.12)_0px,transparent_50%),radial-gradient(at_80%_50%,rgba(192,38,211,0.12)_0px,transparent_50%),radial-gradient(at_0%_100%,rgba(0,212,255,0.12)_0px,transparent_50%),radial-gradient(at_80%_100%,rgba(192,38,211,0.12)_0px,transparent_50%)]":
            background === "mesh",
        },
        // Need relative positioning for orbs
        withOrbs && "relative overflow-hidden",
        className
      )}
      {...props}
    >
      {withOrbs && <GlowOrbs />}
      {children}
    </section>
  );
}

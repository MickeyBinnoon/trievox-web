import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "error" | "outline" | "gradient";
  size?: "sm" | "md";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium transition-colors duration-200",

          // Variants - Dark theme optimized
          {
            // Default - Cyan accent
            "bg-primary/20 text-primary": variant === "default",
            // Secondary - Purple accent
            "bg-secondary/20 text-secondary": variant === "secondary",
            // Success
            "bg-[rgba(34,197,94,0.15)] text-[#22c55e]": variant === "success",
            // Warning
            "bg-[rgba(245,158,11,0.15)] text-[#f59e0b]": variant === "warning",
            // Error
            "bg-[rgba(239,68,68,0.15)] text-[#ef4444]": variant === "error",
            // Outline - Glass border
            "border border-[rgba(148,163,184,0.2)] bg-transparent text-foreground":
              variant === "outline",
            // Gradient - Premium
            "bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-white font-semibold":
              variant === "gradient",
          },

          // Sizes
          {
            "px-2 py-0.5 text-xs": size === "sm",
            "px-3 py-1 text-sm": size === "md",
          },

          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

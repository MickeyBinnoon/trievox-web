"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { useAnalytics } from "@/lib/analytics";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
  /**
   * Optional tracking ID for analytics.
   * When provided, button clicks will be tracked with this ID.
   */
  trackingId?: string;
  /**
   * Optional location context for analytics (e.g., "hero", "footer", "nav").
   */
  trackingLocation?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      asChild = false,
      disabled,
      children,
      trackingId,
      trackingLocation,
      onClick,
      ...props
    },
    ref
  ) => {
    const { track, events } = useAnalytics();
    const Comp = asChild ? Slot : "button";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Track if trackingId is provided
      if (trackingId) {
        track(events.CTA_CLICK, {
          buttonId: trackingId,
          buttonText: typeof children === "string" ? children : undefined,
          location: trackingLocation,
        });
      }

      // Call original onClick handler
      onClick?.(event);
    };

    return (
      <Comp
        ref={ref}
        disabled={disabled || isLoading}
        onClick={handleClick}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variants (Logo-aligned colors with stronger glows)
          {
            // Primary - Cyan with intense glow
            "bg-primary text-primary-foreground hover:shadow-[0_0_25px_rgba(0,212,255,0.5),0_0_50px_rgba(0,212,255,0.25)] hover:scale-[1.02] active:scale-[0.98]":
              variant === "primary",
            // Secondary - Magenta accent
            "bg-secondary text-secondary-foreground hover:shadow-[0_0_25px_rgba(192,38,211,0.5),0_0_50px_rgba(192,38,211,0.25)] hover:scale-[1.02] active:scale-[0.98]":
              variant === "secondary",
            // Ghost - Subtle hover
            "text-foreground hover:bg-[rgba(0,212,255,0.08)] hover:text-primary":
              variant === "ghost",
            // Destructive
            "bg-error text-white hover:bg-error/90 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]":
              variant === "destructive",
            // Outline - Glass border with cyan hint
            "border border-[rgba(0,212,255,0.15)] bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-[rgba(0,212,255,0.06)] hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]":
              variant === "outline",
            // Gradient - Premium CTA with intense glow (like logo nodes)
            "bg-gradient-to-r from-[#00d4ff] to-[#c026d3] text-white font-semibold shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5),0_0_80px_rgba(192,38,211,0.35),0_0_120px_rgba(0,212,255,0.2)] hover:scale-[1.02] active:scale-[0.98]":
              variant === "gradient",
          },

          // Sizes
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-5 text-sm": size === "md",
            "h-12 px-8 text-base": size === "lg",
          },

          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading</span>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

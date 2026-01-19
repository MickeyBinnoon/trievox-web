"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { useAnalytics } from "@/lib/analytics";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
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
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variants
          {
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90":
              variant === "secondary",
            "hover:bg-muted hover:text-foreground": variant === "ghost",
            "bg-error text-white hover:bg-error/90": variant === "destructive",
            "border border-border bg-transparent hover:bg-muted":
              variant === "outline",
          },

          // Sizes
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
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

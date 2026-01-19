import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium",

          // Variants
          {
            "bg-primary text-primary-foreground": variant === "default",
            "bg-secondary text-secondary-foreground": variant === "secondary",
            "bg-success-light text-success": variant === "success",
            "bg-warning-light text-warning": variant === "warning",
            "bg-error-light text-error": variant === "error",
            "border border-border bg-transparent text-foreground":
              variant === "outline",
          },

          // Sizes
          {
            "px-2 py-0.5 text-xs": size === "sm",
            "px-2.5 py-0.5 text-sm": size === "md",
          },

          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

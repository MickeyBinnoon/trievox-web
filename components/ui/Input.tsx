import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        aria-invalid={error ? "true" : undefined}
        className={cn(
          // Base styles
          "flex h-11 w-full rounded-xl px-4 py-2 text-sm",
          // Dark theme styling
          "bg-[#0f172a] text-foreground",
          "border border-[rgba(148,163,184,0.15)]",
          // Placeholder
          "placeholder:text-[#64748b]",
          // Focus state with gradient glow
          "focus-visible:outline-none focus-visible:border-primary",
          "focus-visible:shadow-[0_0_0_3px_rgba(34,211,238,0.15),0_0_20px_rgba(34,211,238,0.1)]",
          // Transitions
          "transition-all duration-200",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#1e293b]",
          // File input
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary",
          // Error state
          error
            ? "border-error focus-visible:border-error focus-visible:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
            : "",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

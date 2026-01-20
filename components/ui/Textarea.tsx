import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={error ? "true" : undefined}
        className={cn(
          // Base styles
          "flex min-h-[120px] w-full rounded-xl px-4 py-3 text-sm resize-none",
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

Textarea.displayName = "Textarea";

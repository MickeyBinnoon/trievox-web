import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = "column",
      gap = "md",
      align = "stretch",
      justify = "start",
      wrap = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          // Direction
          {
            "flex-row": direction === "row",
            "flex-col": direction === "column",
            "flex-row-reverse": direction === "row-reverse",
            "flex-col-reverse": direction === "column-reverse",
          },
          // Gap
          {
            "gap-0": gap === "none",
            "gap-1": gap === "xs",
            "gap-2": gap === "sm",
            "gap-4": gap === "md",
            "gap-6": gap === "lg",
            "gap-8": gap === "xl",
          },
          // Align
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "items-stretch": align === "stretch",
            "items-baseline": align === "baseline",
          },
          // Justify
          {
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between",
            "justify-around": justify === "around",
            "justify-evenly": justify === "evenly",
          },
          // Wrap
          wrap && "flex-wrap",
          className
        )}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";

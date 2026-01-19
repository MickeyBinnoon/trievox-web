import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "primary" | "secondary";
}

export function Section({
  className,
  spacing = "lg",
  background = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        // Spacing
        {
          "py-0": spacing === "none",
          "py-8 md:py-12": spacing === "sm",
          "py-12 md:py-16": spacing === "md",
          "py-16 md:py-24": spacing === "lg",
          "py-24 md:py-32": spacing === "xl",
        },
        // Background
        {
          "bg-background": background === "default",
          "bg-muted": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
          "bg-secondary text-secondary-foreground": background === "secondary",
        },
        className
      )}
      {...props}
    />
  );
}

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300 ease-out",
          // Variants (Logo-aligned with deeper surfaces)
          {
            // Default - Elevated surface with subtle cyan border hint
            "bg-[#0c1829] border border-[rgba(0,212,255,0.08)] shadow-lg":
              variant === "default",
            // Glass - Enhanced glassmorphism with inner glow
            "bg-[rgba(12,24,41,0.75)] backdrop-blur-xl border border-[rgba(0,212,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(0,212,255,0.05)]":
              variant === "glass",
            // Gradient border - More prominent like logo
            "bg-[#0c1829] border-2 border-transparent bg-clip-padding [background:linear-gradient(#0c1829,#0c1829)_padding-box,linear-gradient(135deg,#00d4ff,#c026d3)_border-box]":
              variant === "gradient",
          },
          // Hover effects - Stronger lift and glow
          "hover:shadow-[0_0_35px_rgba(0,212,255,0.15),0_0_70px_rgba(192,38,211,0.08)]",
          "hover:border-[rgba(0,212,255,0.12)]",
          "hover:-translate-y-1",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-none tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

CardDescription.displayName = "CardDescription";

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    );
  }
);

CardContent.displayName = "CardContent";

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

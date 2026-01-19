import { forwardRef } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "default" | "muted" | "underline" | "none";
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, href, variant = "default", external, children, ...props },
    ref
  ) => {
    const isExternal =
      external ?? (href.startsWith("http") || href.startsWith("mailto:"));

    const classes = cn(
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
      {
        "text-primary hover:text-primary/80": variant === "default",
        "text-muted-foreground hover:text-foreground": variant === "muted",
        "text-primary underline underline-offset-4 hover:text-primary/80":
          variant === "underline",
        "": variant === "none",
      },
      className
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink ref={ref} href={href} className={classes} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

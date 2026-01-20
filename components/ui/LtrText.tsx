import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LtrTextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render.
   * @default "span"
   */
  as?: "span" | "div" | "p";
}

/**
 * LtrText isolates left-to-right content within an RTL context.
 * Use for email addresses, URLs, phone numbers, and code snippets
 * to prevent visual corruption in Hebrew text.
 *
 * @example
 * <p>צור קשר: <LtrText>hello@example.com</LtrText></p>
 * <p>אתר: <LtrText>https://trievox.com</LtrText></p>
 * <p>טלפון: <LtrText>+972-50-123-4567</LtrText></p>
 */
export const LtrText = forwardRef<HTMLElement, LtrTextProps>(
  ({ as: Component = "span", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLSpanElement & HTMLDivElement & HTMLParagraphElement>}
        dir="ltr"
        className={cn("ltr", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

LtrText.displayName = "LtrText";

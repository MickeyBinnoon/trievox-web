import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export interface FooterColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({
  title,
  links,
  className,
  ...props
}: FooterColumnProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2" role="list">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <span className="inline-flex">{link.icon}</span>}
                {link.label}
              </a>
            ) : (
              <NextLink
                href={link.href}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.icon && <span className="inline-flex">{link.icon}</span>}
                {link.label}
              </NextLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

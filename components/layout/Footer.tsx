import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { FooterColumn, type FooterColumnProps } from "./FooterColumn";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  description?: string;
  columns?: Omit<FooterColumnProps, "className">[];
  socialLinks?: SocialLink[];
  copyright?: string;
  legalLinks?: { label: string; href: string }[];
}

export function Footer({
  logo,
  description,
  columns = [],
  socialLinks = [],
  copyright,
  legalLinks = [],
  className,
  ...props
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("border-t border-border bg-background", className)}
      {...props}
    >
      <Container>
        {/* Main Footer Content */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            {logo}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {copyright || `© ${currentYear} All rights reserved.`}
          </p>
          {legalLinks.length > 0 && (
            <nav className="flex gap-6" aria-label="Legal">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </Container>
    </footer>
  );
}

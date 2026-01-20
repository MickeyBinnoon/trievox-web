import Link from "next/link";
import { Footer } from "./Footer";

// Inline SVG Icons
const InstagramIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6L12 13L2 6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export function SiteFooter() {
  return (
    <Footer
      logo={
        <Link href="/" className="text-lg font-semibold">
          Trievox
        </Link>
      }
      description="שיווק דיגיטלי, אתרים ואוטומציות"
      columns={[
        {
          title: "קישורים",
          links: [
            { label: "בית", href: "/" },
            { label: "אודות", href: "/about" },
            { label: "שירותים", href: "/services" },
            { label: "צור קשר", href: "/contact" },
          ],
        },
        {
          title: "צור קשר",
          links: [
            {
              label: "trievox",
              href: "https://www.instagram.com/trievox/",
              external: true,
              icon: <InstagramIcon />,
            },
            {
              label: "trievomarketing@gmail.com",
              href: "mailto:trievomarketing@gmail.com",
              icon: <MailIcon />,
            },
            {
              label: "052-376-8232",
              href: "tel:+972523768232",
              icon: <PhoneIcon />,
            },
          ],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} Trievox. כל הזכויות שמורות.`}
      legalLinks={[
        { label: "תנאי שימוש", href: "/terms" },
        { label: "מדיניות פרטיות", href: "/privacy" },
      ]}
    />
  );
}

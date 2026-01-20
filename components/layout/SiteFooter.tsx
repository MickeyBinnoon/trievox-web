import Link from "next/link";
import { Footer } from "./Footer";

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
          title: "שירותים",
          links: [
            { label: "שירות 1", href: "/services#service-1" },
            { label: "שירות 2", href: "/services#service-2" },
            { label: "שירות 3", href: "/services#service-3" },
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

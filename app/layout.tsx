import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SiteHeader, SiteFooter, ContactSection } from "@/components/layout";
import { Toaster } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trievox",
  description: "שיווק דיגיטלי, אתרים ואוטומציות",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${fontVariables} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
        >
          דלג לתוכן
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <ContactSection />
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}

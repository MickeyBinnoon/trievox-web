import type { Metadata } from "next";
import { Section, Container, Stack, Grid } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "שיווק דיגיטלי | Trievox",
  description: "שירותי שיווק דיגיטלי מקצועיים לעסקים - פרסום ממומן בגוגל, פייסבוק, אינסטגרם וטיקטוק",
};

const platforms = [
  {
    id: "google",
    icon: "🔍",
    title: "פרסום בגוגל",
    description: "הגעה ללקוחות בדיוק ברגע שהם מחפשים את השירותים או המוצרים שלכם",
    benefits: [
      "מודעות חיפוש - הופעה בתוצאות החיפוש של גוגל",
      "מודעות רשת המדיה - באנרים באתרים פופולריים",
      "Google Shopping - פרסום מוצרים עם תמונות ומחירים",
      "פרסום ביוטיוב - סרטוני וידאו ומודעות",
    ],
  },
  {
    id: "facebook",
    icon: "📘",
    title: "פרסום בפייסבוק",
    description: "הגעה לקהלים מדויקים על בסיס תחומי עניין, דמוגרפיה והתנהגות",
    benefits: [
      "מודעות בפיד - תוכן ממומן בניוזפיד",
      "סטוריז - מודעות במסך מלא בפורמט אנכי",
      "Reels - סרטונים קצרים ומעורבים",
      "Messenger - תקשורת ישירה עם לקוחות פוטנציאליים",
    ],
  },
  {
    id: "instagram",
    icon: "📸",
    title: "פרסום באינסטגרם",
    description: "חשיפה ויזואלית מרשימה לקהל צעיר ומעורב דרך תמונות וסרטונים",
    benefits: [
      "מודעות בפיד - תמונות וקרוסלות מקצועיות",
      "סטוריז - תוכן אינטראקטיבי וממוקד",
      "Reels - סרטונים קצרים לחשיפה מקסימלית",
      "Explore - הגעה למשתמשים שמחפשים תוכן חדש",
    ],
  },
  {
    id: "tiktok",
    icon: "🎵",
    title: "פרסום בטיקטוק",
    description: "חיבור לדור הצעיר דרך תוכן וידאו קצר, יצירתי ואותנטי",
    benefits: [
      "In-Feed Ads - מודעות בפיד הראשי",
      "TopView - מודעה ראשונה בפתיחת האפליקציה",
      "Brand Takeover - השתלטות מותג למקסימום חשיפה",
      "Spark Ads - קידום תוכן אורגני קיים",
    ],
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" background="mesh" withOrbs>
        <Container>
          <Stack gap="lg" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl gradient-text">
              שיווק דיגיטלי
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
              פרסום ממומן בפלטפורמות המובילות - מגדילים את החשיפה, מביאים לידים איכותיים ומייצרים מכירות
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Platform Sections */}
      {platforms.map((platform, index) => (
        <Section
          key={platform.id}
          spacing="lg"
          background={index % 2 === 0 ? "muted" : "default"}
        >
          <Container>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Content side */}
              <div className={`flex-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Stack gap="md">
                  <span className="text-5xl">{platform.icon}</span>
                  <h2 className="text-3xl font-bold md:text-4xl gradient-text">
                    {platform.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {platform.description}
                  </p>
                </Stack>
              </div>

              {/* Benefits side */}
              <div className={`flex-1 mt-8 lg:mt-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Grid cols={2} gap="sm">
                  {platform.benefits.map((benefit, benefitIndex) => (
                    <Card
                      key={benefitIndex}
                      variant="glass"
                      className="p-4"
                    >
                      <p className="text-sm text-foreground">{benefit}</p>
                    </Card>
                  ))}
                </Grid>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* CTA Section */}
      <Section spacing="xl" background="gradient">
        <Container>
          <Card variant="gradient" className="p-8 md:p-12">
            <Stack gap="md" align="center" className="text-center">
              <h2 className="text-2xl font-bold md:text-3xl text-foreground">
                מוכנים להתחיל לפרסם?
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                צרו קשר היום ונבנה עבורכם אסטרטגיית פרסום דיגיטלי מותאמת אישית שתביא תוצאות
              </p>
              <Button
                asChild
                variant="gradient"
                size="lg"
                className="mt-4"
              >
                <NextLink href="/#contact">
                  דברו איתנו
                </NextLink>
              </Button>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  );
}

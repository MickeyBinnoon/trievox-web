import type { Metadata } from "next";
import { Section, Container, Stack } from "@/components/layout";
import { Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "פיתוח אתרים | Trievox",
  description: "שירותי פיתוח אתרים מקצועיים - אתרי תדמית, חנויות אונליין, מערכות ניהול ואפליקציות ווב",
};

export default function WebDevelopmentPage() {
  return (
    <Section spacing="lg" background="mesh">
      <Container>
        <Stack gap="md" align="center" className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl gradient-text">פיתוח אתרים</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            פיתוח אתרים ואפליקציות ווב מותאמים אישית לצרכי העסק שלך
          </p>
          <Card variant="glass" className="mt-8 px-8 py-6">
            <p className="text-muted-foreground">עמוד זה בבנייה - בקרוב נוסיף תוכן מלא</p>
          </Card>
        </Stack>
      </Container>
    </Section>
  );
}

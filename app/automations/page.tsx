import type { Metadata } from "next";
import { Section, Container, Stack } from "@/components/layout";
import { Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "אוטומציות | Trievox",
  description: "שירותי אוטומציה עסקית - ייעול תהליכים, אינטגרציות מערכות ופתרונות AI לעסקים",
};

export default function AutomationsPage() {
  return (
    <Section spacing="lg" background="mesh">
      <Container>
        <Stack gap="md" align="center" className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl gradient-text">אוטומציות</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            אוטומציה של תהליכים עסקיים לחיסכון בזמן ומשאבים
          </p>
          <Card variant="glass" className="mt-8 px-8 py-6">
            <p className="text-muted-foreground">עמוד זה בבנייה - בקרוב נוסיף תוכן מלא</p>
          </Card>
        </Stack>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { Section, Container, Stack, Grid } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";

export const metadata: Metadata = {
  title: "אודות | Trievox",
  description: "הכירו את Trievox - סוכנות דיגיטלית שמלווה עסקים בדרך להצלחה עם שיווק, אתרים ואוטומציות",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" background="mesh">
        <Container>
          <Stack gap="md" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl gradient-text">הסיפור שלנו</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              אנחנו מאמינים שכל עסק ראוי לנוכחות דיגיטלית מנצחת
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Company Story */}
      <Section spacing="lg" background="default">
        <Container size="md">
          <Stack gap="lg">
            <h2 className="text-3xl font-bold">איך הכל התחיל</h2>
            <Stack gap="md">
              <p className="text-muted-foreground leading-relaxed">
                Trievox נולדה מתוך הבנה פשוטה: עסקים רבים יודעים שהם צריכים להיות נוכחים בדיגיטל, אבל לא תמיד יודעים איך. הקמנו את החברה כדי לגשר על הפער הזה ולהפוך את העולם הדיגיטלי לנגיש לכולם.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                עם השנים צברנו ניסיון עשיר בעבודה עם עסקים מגוונים - מעסקים קטנים ועד חברות גדולות. למדנו שההצלחה האמיתית מגיעה כשמקשיבים, מבינים את הצרכים האמיתיים ובונים פתרונות מותאמים אישית.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                היום אנחנו גאים להיות השותפים הדיגיטליים של עשרות עסקים מצליחים. אנחנו ממשיכים לצמוח, ללמוד ולהתפתח - כי בעולם הדיגיטל, מי שעומד במקום נשאר מאחור.
              </p>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Mission & Values */}
      <Section spacing="lg" background="muted">
        <Container>
          <Stack gap="lg">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold">הערכים שמנחים אותנו</h2>
              <p className="max-w-2xl text-muted-foreground">
                אנחנו מחויבים להצלחה של הלקוחות שלנו, ופועלים לפי עקרונות שמבטיחים תוצאות אמיתיות
              </p>
            </Stack>
            <Grid cols={3} gap="md">
              <Card variant="glass">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary text-2xl">
                    👁️
                  </div>
                  <CardTitle>שקיפות מלאה</CardTitle>
                  <CardDescription>אין הפתעות, אין עלויות נסתרות. אתם תמיד יודעים מה קורה, למה ומה התוצאות</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 text-secondary text-2xl">
                    🤝
                  </div>
                  <CardTitle>שותפות אמיתית</CardTitle>
                  <CardDescription>ההצלחה שלכם היא ההצלחה שלנו. אנחנו לא ספקים, אנחנו שותפים לדרך</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary text-2xl">
                    🚀
                  </div>
                  <CardTitle>חדשנות מתמדת</CardTitle>
                  <CardDescription>העולם הדיגיטלי משתנה כל הזמן, ואנחנו דואגים להישאר בחזית עם הכלים והטכנולוגיות החדשות</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="mesh">
        <Container size="md">
          <Card variant="gradient" className="p-8 md:p-12">
            <Stack gap="md" align="center" className="text-center">
              <h2 className="text-3xl font-bold">בואו נעשה משהו מדהים יחד</h2>
              <p className="text-muted-foreground max-w-lg">יש לכם רעיון או פרויקט בראש? נשמח לשמוע ולעזור להפוך אותו למציאות</p>
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">דברו איתנו</Link>
              </Button>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  );
}

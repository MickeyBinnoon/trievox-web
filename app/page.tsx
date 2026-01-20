import Link from "next/link";
import { Section, Container, Stack, Grid } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero Section - Gradient mesh background with floating orbs */}
      <Section spacing="xl" background="mesh" withOrbs>
        <Container>
          <Stack gap="lg" align="center" className="text-center relative z-10">
            <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl gradient-text tracking-tight">
              הופכים רעיונות לתוצאות דיגיטליות
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Trievox מלווה עסקים בדרך להצלחה דיגיטלית עם שיווק חכם, אתרים מרשימים ואוטומציות שחוסכות זמן ומשאבים.
            </p>
            <Stack direction="row" gap="md" className="flex-wrap justify-center pt-2">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">בואו נדבר</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">השירותים שלנו</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section spacing="lg" background="default">
        <Container>
          <Stack gap="xl">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">מה אנחנו עושים?</h2>
              <p className="max-w-2xl text-muted-foreground leading-relaxed">
                אנחנו מציעים מגוון פתרונות דיגיטליים שיעזרו לעסק שלכם לצמוח ולהתבלט
              </p>
            </Stack>
            <Grid cols={3} gap="lg">
              <Card variant="glass">
                <CardHeader>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#c026d3] text-3xl shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                    📈
                  </div>
                  <CardTitle className="text-xl">שיווק דיגיטלי</CardTitle>
                  <CardDescription className="leading-relaxed">קמפיינים ממוקדים שמביאים לקוחות איכותיים ומגדילים את החשיפה שלכם ברשת</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#c026d3] text-3xl shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                    💻
                  </div>
                  <CardTitle className="text-xl">בניית אתרים</CardTitle>
                  <CardDescription className="leading-relaxed">אתרים מעוצבים ומותאמים אישית שמספרים את הסיפור שלכם ומניעים לפעולה</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#c026d3] text-3xl shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                    ⚙️
                  </div>
                  <CardTitle className="text-xl">אוטומציות עסקיות</CardTitle>
                  <CardDescription className="leading-relaxed">פתרונות חכמים שמייעלים תהליכים, חוסכים זמן ומאפשרים לכם להתמקד בעיקר</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
            <div className="text-center pt-4">
              <Button variant="outline" asChild>
                <Link href="/services">לכל השירותים</Link>
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="mesh" withOrbs>
        <Container size="md">
          <Card variant="gradient" className="p-8 md:p-12 relative z-10">
            <Stack gap="lg" align="center" className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">מוכנים להתחיל?</h2>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                ספרו לנו על העסק שלכם ונבנה יחד תוכנית פעולה שתקדם אתכם קדימה
              </p>
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">צרו קשר עכשיו</Link>
              </Button>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  );
}

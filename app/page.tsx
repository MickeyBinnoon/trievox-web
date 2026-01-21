import Link from "next/link";
import { Section, Container, Stack, Grid, ContactSection } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" background="mesh" withOrbs className="min-h-[85vh] flex items-center">
        <Container>
          <Stack gap="lg" align="center" className="text-center relative z-10">
            <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl gradient-text tracking-tight">
              trievox
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
              שיווק דיגיטלי, פיתוח אתרים ואוטומציות
              <br />
              קח את העסק שלך לצעד הבא
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              לידים איכותיים חיסכון בזמן וחוויית משתמש - trievox מובילה לתוצאות
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
              trackingId="hero-cta"
              trackingLocation="hero"
            >
              <a href="#contact">קביעת שיחת היכרות</a>
            </Button>
          </Stack>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section spacing="lg" background="default">
        <Container>
          <Grid cols={3} gap="lg">
            {/* Service 1 - Digital Marketing */}
            <Card variant="gradient" id="digital-marketing">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  📈
                </div>
                <CardTitle className="text-xl">שיווק דיגיטלי</CardTitle>
                <CardDescription>קמפיינים שמביאים תוצאות אמיתיות ומגדילים את העסק שלכם</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    ניהול קמפיינים בגוגל ובפייסבוק
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    אסטרטגיית תוכן ורשתות חברתיות
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    קידום אורגני (SEO)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 - Website Development */}
            <Card variant="gradient" id="website-development">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  💻
                </div>
                <CardTitle className="text-xl">בניית אתרים</CardTitle>
                <CardDescription>אתרים שנראים מעולה ועובדים עוד יותר טוב</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    עיצוב מותאם אישית למותג
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    אתרים מהירים ומותאמים לנייד
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    חנויות אונליין ומערכות ניהול
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 - Business Automations */}
            <Card variant="gradient" id="business-automations">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  ⚙️
                </div>
                <CardTitle className="text-xl">אוטומציות עסקיות</CardTitle>
                <CardDescription>פתרונות שחוסכים זמן ומאפשרים לעסק לעבוד חכם יותר</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    אוטומציה של תהליכים חוזרים
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    חיבור בין מערכות ואפליקציות
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    בוטים וצ׳אטבוטים חכמים
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Process Section */}
      <Section spacing="lg" background="muted">
        <Container>
          <Stack gap="lg">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold">איך זה עובד?</h2>
              <p className="max-w-2xl text-muted-foreground">
                תהליך עבודה פשוט ושקוף שמבטיח תוצאות
              </p>
            </Stack>
            <Grid cols={4} gap="md">
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-white font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  1
                </div>
                <h3 className="font-semibold text-foreground">שיחת היכרות</h3>
                <p className="text-sm text-muted-foreground">נכיר את העסק שלכם, המטרות והאתגרים</p>
              </Stack>
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-white font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  2
                </div>
                <h3 className="font-semibold text-foreground">בניית תוכנית</h3>
                <p className="text-sm text-muted-foreground">נבנה אסטרטגיה מותאמת אישית לצרכים שלכם</p>
              </Stack>
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-white font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  3
                </div>
                <h3 className="font-semibold text-foreground">יציאה לדרך</h3>
                <p className="text-sm text-muted-foreground">מתחילים לעבוד ומעדכנים אתכם בכל שלב</p>
              </Stack>
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-white font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  4
                </div>
                <h3 className="font-semibold text-foreground">מדידה ושיפור</h3>
                <p className="text-sm text-muted-foreground">עוקבים אחרי התוצאות ומשפרים באופן מתמיד</p>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="mesh">
        <Container size="md">
          <Card variant="gradient" className="p-8 md:p-12">
            <Stack gap="md" align="center" className="text-center">
              <h2 className="text-3xl font-bold">מוכנים לקחת את העסק לשלב הבא?</h2>
              <p className="text-muted-foreground max-w-lg">
                ספרו לנו על האתגרים שלכם ונמצא יחד את הפתרון המתאים
              </p>
              <Button size="lg" variant="gradient" asChild>
                <Link href="#contact">בואו נתחיל</Link>
              </Button>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

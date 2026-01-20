import type { Metadata } from "next";
import { Section, Container, Stack, Grid } from "@/components/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Textarea,
  Label,
  LtrText,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "צור קשר | Trievox",
  description: "צרו איתנו קשר - נשמח לשמוע על העסק שלכם ולעזור לכם להצליח בדיגיטל",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" background="mesh">
        <Container>
          <Stack gap="md" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl gradient-text">בואו נדבר</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              יש לכם שאלה או רעיון? השאירו פרטים ונחזור אליכם בהקדם
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section spacing="lg" background="default">
        <Container>
          <Grid cols={2} gap="lg">
            {/* Contact Form */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle>שלחו לנו הודעה</CardTitle>
                <CardDescription>מלאו את הטופס ונחזור אליכם תוך יום עסקים</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">שם מלא</Label>
                    <Input id="name" placeholder="איך קוראים לכם?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">אימייל</Label>
                    <Input id="email" type="email" placeholder="example@email.com" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">טלפון</Label>
                    <Input id="phone" type="tel" placeholder="050-000-0000" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">איך נוכל לעזור?</Label>
                    <Textarea
                      id="message"
                      placeholder="ספרו לנו על העסק שלכם ומה אתם מחפשים..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" variant="gradient" className="w-full">
                    שליחה
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Stack gap="lg">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle>פרטי התקשרות</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack gap="md">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0">
                        ✉️
                      </div>
                      <div>
                        <p className="font-medium text-foreground">אימייל</p>
                        <LtrText className="text-muted-foreground">
                          contact@trievox.com
                        </LtrText>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0">
                        📞
                      </div>
                      <div>
                        <p className="font-medium text-foreground">טלפון</p>
                        <LtrText className="text-muted-foreground">
                          +972-XX-XXX-XXXX
                        </LtrText>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0">
                        📍
                      </div>
                      <div>
                        <p className="font-medium text-foreground">כתובת</p>
                        <p className="text-muted-foreground">[רחוב ומספר]</p>
                        <p className="text-muted-foreground">[עיר, מיקוד]</p>
                      </div>
                    </div>
                  </Stack>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card variant="glass">
                <CardHeader>
                  <CardTitle>שעות פעילות</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack gap="sm">
                    <div className="flex justify-between py-2 border-b border-[rgba(148,163,184,0.1)]">
                      <span className="text-foreground">ראשון - חמישי</span>
                      <LtrText className="text-primary font-medium">09:00 - 18:00</LtrText>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[rgba(148,163,184,0.1)]">
                      <span className="text-foreground">שישי</span>
                      <LtrText className="text-primary font-medium">09:00 - 13:00</LtrText>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-foreground">שבת</span>
                      <span className="text-muted-foreground">סגור</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section spacing="none" background="muted">
        <div className="h-96 w-full bg-[#0f172a] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/50" />
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <Card variant="glass" className="px-8 py-4">
              <span>[מפה תתווסף כאן]</span>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

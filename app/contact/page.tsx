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
  description: "[Contact page description for SEO]",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" background="muted">
        <Container>
          <Stack gap="md" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">[Contact Page Title]</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              [Contact page subtitle - invite to reach out]
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section spacing="lg">
        <Container>
          <Grid cols={2} gap="lg">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>[Form Title]</CardTitle>
                <CardDescription>[Form description]</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">[Name Label]</Label>
                    <Input id="name" placeholder="[Name placeholder]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">[Email Label]</Label>
                    <Input id="email" type="email" placeholder="[Email placeholder]" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">[Phone Label]</Label>
                    <Input id="phone" type="tel" placeholder="[Phone placeholder]" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">[Message Label]</Label>
                    <Textarea
                      id="message"
                      placeholder="[Message placeholder]"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    [Submit Button]
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Stack gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>[Contact Info Title]</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack gap="md">
                    <div>
                      <p className="font-medium">[Email Label]</p>
                      <LtrText className="text-muted-foreground">
                        contact@trievox.com
                      </LtrText>
                    </div>
                    <div>
                      <p className="font-medium">[Phone Label]</p>
                      <LtrText className="text-muted-foreground">
                        +972-XX-XXX-XXXX
                      </LtrText>
                    </div>
                    <div>
                      <p className="font-medium">[Address Label]</p>
                      <p className="text-muted-foreground">[Address line 1]</p>
                      <p className="text-muted-foreground">[Address line 2]</p>
                    </div>
                  </Stack>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>[Business Hours Title]</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack gap="sm">
                    <div className="flex justify-between">
                      <span>[Sunday - Thursday]</span>
                      <LtrText className="text-muted-foreground">09:00 - 18:00</LtrText>
                    </div>
                    <div className="flex justify-between">
                      <span>[Friday]</span>
                      <LtrText className="text-muted-foreground">09:00 - 13:00</LtrText>
                    </div>
                    <div className="flex justify-between">
                      <span>[Saturday]</span>
                      <span className="text-muted-foreground">[Closed]</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section spacing="none">
        <div className="h-96 w-full bg-muted">
          <div className="flex h-full items-center justify-center text-muted-foreground">
            [Map Placeholder]
          </div>
        </div>
      </Section>
    </>
  );
}

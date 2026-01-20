import Link from "next/link";
import type { Metadata } from "next";
import { Section, Container, Stack, Grid } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

export const metadata: Metadata = {
  title: "שירותים | Trievox",
  description: "[Services page description for SEO]",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" background="muted">
        <Container>
          <Stack gap="md" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">[Services Page Title]</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              [Services page subtitle - what you offer]
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section spacing="lg">
        <Container>
          <Grid cols={3} gap="lg">
            {/* Service 1 */}
            <Card id="service-1">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  [Icon]
                </div>
                <CardTitle className="text-xl">[Service 1 Title]</CardTitle>
                <CardDescription>[Service 1 brief description]</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>[Feature 1.1]</li>
                  <li>[Feature 1.2]</li>
                  <li>[Feature 1.3]</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card id="service-2">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  [Icon]
                </div>
                <CardTitle className="text-xl">[Service 2 Title]</CardTitle>
                <CardDescription>[Service 2 brief description]</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>[Feature 2.1]</li>
                  <li>[Feature 2.2]</li>
                  <li>[Feature 2.3]</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card id="service-3">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  [Icon]
                </div>
                <CardTitle className="text-xl">[Service 3 Title]</CardTitle>
                <CardDescription>[Service 3 brief description]</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>[Feature 3.1]</li>
                  <li>[Feature 3.2]</li>
                  <li>[Feature 3.3]</li>
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
              <h2 className="text-3xl font-bold">[Our Process Title]</h2>
              <p className="max-w-2xl text-muted-foreground">
                [Process section description]
              </p>
            </Stack>
            <Grid cols={4} gap="md">
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="font-semibold">[Step 1]</h3>
                <p className="text-sm text-muted-foreground">[Step 1 description]</p>
              </Stack>
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="font-semibold">[Step 2]</h3>
                <p className="text-sm text-muted-foreground">[Step 2 description]</p>
              </Stack>
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="font-semibold">[Step 3]</h3>
                <p className="text-sm text-muted-foreground">[Step 3 description]</p>
              </Stack>
              <Stack gap="sm" align="center" className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <h3 className="font-semibold">[Step 4]</h3>
                <p className="text-sm text-muted-foreground">[Step 4 description]</p>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container size="md">
          <Stack gap="md" align="center" className="text-center">
            <h2 className="text-3xl font-bold">[CTA Title]</h2>
            <p className="text-muted-foreground">
              [CTA description - encourage to get started]
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">[Get Started CTA]</Link>
            </Button>
          </Stack>
        </Container>
      </Section>
    </>
  );
}

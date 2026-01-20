import Link from "next/link";
import type { Metadata } from "next";
import { Section, Container, Stack, Grid } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";

export const metadata: Metadata = {
  title: "אודות | Trievox",
  description: "[About page description for SEO]",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" background="muted">
        <Container>
          <Stack gap="md" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">[About Page Title]</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              [About page subtitle / tagline]
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Company Story */}
      <Section spacing="lg">
        <Container size="md">
          <Stack gap="lg">
            <h2 className="text-3xl font-bold">[Our Story Title]</h2>
            <Stack gap="md">
              <p className="text-muted-foreground">
                [Company story paragraph 1 - founding, origins]
              </p>
              <p className="text-muted-foreground">
                [Company story paragraph 2 - growth, evolution]
              </p>
              <p className="text-muted-foreground">
                [Company story paragraph 3 - present day, vision]
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
              <h2 className="text-3xl font-bold">[Mission & Values Title]</h2>
              <p className="max-w-2xl text-muted-foreground">
                [Mission statement]
              </p>
            </Stack>
            <Grid cols={3} gap="md">
              <Card>
                <CardHeader>
                  <CardTitle>[Value 1]</CardTitle>
                  <CardDescription>[Value 1 description]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>[Value 2]</CardTitle>
                  <CardDescription>[Value 2 description]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>[Value 3]</CardTitle>
                  <CardDescription>[Value 3 description]</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Team Section */}
      <Section spacing="lg">
        <Container>
          <Stack gap="lg">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold">[Team Section Title]</h2>
              <p className="max-w-2xl text-muted-foreground">
                [Team section description]
              </p>
            </Stack>
            <Grid cols={4} gap="md">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
                  <CardTitle>[Team Member 1]</CardTitle>
                  <CardDescription>[Role 1]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
                  <CardTitle>[Team Member 2]</CardTitle>
                  <CardDescription>[Role 2]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
                  <CardTitle>[Team Member 3]</CardTitle>
                  <CardDescription>[Role 3]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
                  <CardTitle>[Team Member 4]</CardTitle>
                  <CardDescription>[Role 4]</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="primary">
        <Container size="md">
          <Stack gap="md" align="center" className="text-center">
            <h2 className="text-3xl font-bold">[CTA Title]</h2>
            <p className="opacity-90">[CTA description - invite to work together]</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">[Contact CTA]</Link>
            </Button>
          </Stack>
        </Container>
      </Section>
    </>
  );
}

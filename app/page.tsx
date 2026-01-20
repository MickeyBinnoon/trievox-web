import Link from "next/link";
import { Section, Container, Stack, Grid } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" background="primary">
        <Container>
          <Stack gap="lg" align="center" className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              [Hero Headline]
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
              [Hero description text - brief value proposition]
            </p>
            <Stack direction="row" gap="md" className="flex-wrap justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">[Primary CTA]</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">[Secondary CTA]</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section spacing="lg">
        <Container>
          <Stack gap="lg">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold">[Services Section Title]</h2>
              <p className="max-w-2xl text-muted-foreground">
                [Services section description]
              </p>
            </Stack>
            <Grid cols={3} gap="md">
              <Card>
                <CardHeader>
                  <CardTitle>[Service 1]</CardTitle>
                  <CardDescription>[Service 1 brief description]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>[Service 2]</CardTitle>
                  <CardDescription>[Service 2 brief description]</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>[Service 3]</CardTitle>
                  <CardDescription>[Service 3 brief description]</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/services">[View All Services]</Link>
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Testimonials / Social Proof */}
      <Section spacing="lg" background="muted">
        <Container>
          <Stack gap="lg">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold">[Testimonials Section Title]</h2>
              <p className="max-w-2xl text-muted-foreground">
                [Testimonials section description]
              </p>
            </Stack>
            <Grid cols={3} gap="md">
              <Card>
                <CardHeader>
                  <CardDescription>&quot;[Testimonial 1 quote]&quot;</CardDescription>
                  <CardTitle className="text-base">[Client 1 Name]</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>&quot;[Testimonial 2 quote]&quot;</CardDescription>
                  <CardTitle className="text-base">[Client 2 Name]</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>&quot;[Testimonial 3 quote]&quot;</CardDescription>
                  <CardTitle className="text-base">[Client 3 Name]</CardTitle>
                </CardHeader>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container size="md">
          <Stack gap="md" align="center" className="text-center">
            <h2 className="text-3xl font-bold">[CTA Section Title]</h2>
            <p className="text-muted-foreground">
              [CTA section description - encourage action]
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">[Contact CTA]</Link>
            </Button>
          </Stack>
        </Container>
      </Section>
    </>
  );
}

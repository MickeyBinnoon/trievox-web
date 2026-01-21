import { Section } from "./Section";
import { Container } from "./Container";
import { Stack } from "./Stack";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <Section id="contact" spacing="lg" background="mesh">
      <Container>
        <Stack gap="lg" align="center">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl gradient-text mb-4">
              בואו נדבר
            </h2>
            <p className="text-lg text-muted-foreground">
              השאירו פרטים ונחזור אליכם בהקדם
            </p>
          </div>
          <ContactForm />
        </Stack>
      </Container>
    </Section>
  );
}

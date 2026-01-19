import { Container } from "@/components/layout";

export default function UIKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background py-8">
      <Container size="xl">{children}</Container>
    </div>
  );
}

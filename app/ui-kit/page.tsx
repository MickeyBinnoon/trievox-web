"use client";

import { useState } from "react";
import {
  Button,
  Link,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  Toaster,
  Label,
  Input,
  Textarea,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  FormField,
} from "@/components/ui";
import { Section, Stack, Grid } from "@/components/layout";
import { toast } from "@/lib/hooks/useToast";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-b border-border pb-2 text-2xl font-semibold">
      {children}
    </h2>
  );
}

function ComponentGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}

export default function UIKitPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Toaster />

      <div className="space-y-16">
        <header>
          <h1 className="text-4xl font-bold">UI Kit</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Component library for Trievox marketing website
          </p>
        </header>

        {/* Buttons */}
        <Section spacing="none">
          <SectionTitle>Buttons</SectionTitle>
          <Stack gap="lg">
            <ComponentGroup title="Variants">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </ComponentGroup>
            <ComponentGroup title="Sizes">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </ComponentGroup>
            <ComponentGroup title="States">
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
            </ComponentGroup>
          </Stack>
        </Section>

        {/* Links */}
        <Section spacing="none">
          <SectionTitle>Links</SectionTitle>
          <Stack gap="md" direction="row" wrap>
            <Link href="#" variant="default">
              Default Link
            </Link>
            <Link href="#" variant="muted">
              Muted Link
            </Link>
            <Link href="#" variant="underline">
              Underline Link
            </Link>
            <Link href="https://example.com" external>
              External Link
            </Link>
          </Stack>
        </Section>

        {/* Badges */}
        <Section spacing="none">
          <SectionTitle>Badges</SectionTitle>
          <Stack gap="lg">
            <ComponentGroup title="Variants">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </ComponentGroup>
            <ComponentGroup title="Sizes">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
            </ComponentGroup>
          </Stack>
        </Section>

        {/* Cards */}
        <Section spacing="none">
          <SectionTitle>Cards</SectionTitle>
          <Grid cols={3} gap="md">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a card description that provides more context.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here. It can contain any elements.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Another Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Simple card without description or footer.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="success" className="w-fit">
                  New
                </Badge>
                <CardTitle>Featured Card</CardTitle>
                <CardDescription>With a badge in the header.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards can be customized with any content.</p>
              </CardContent>
            </Card>
          </Grid>
        </Section>

        {/* Tabs */}
        <Section spacing="none">
          <SectionTitle>Tabs</SectionTitle>
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Card>
                <CardContent className="pt-6">
                  Content for Tab 1. Click other tabs to switch.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2">
              <Card>
                <CardContent className="pt-6">
                  Content for Tab 2. Keyboard navigation supported.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3">
              <Card>
                <CardContent className="pt-6">
                  Content for Tab 3. Use arrow keys to navigate.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Section>

        {/* Accordion */}
        <Section spacing="none">
          <SectionTitle>Accordion</SectionTitle>
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match your design system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It is animated by default, but respects reduced motion
                preferences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* Modal & Drawer */}
        <Section spacing="none">
          <SectionTitle>Modal & Drawer</SectionTitle>
          <Stack gap="md" direction="row">
            <Modal open={modalOpen} onOpenChange={setModalOpen}>
              <ModalTrigger asChild>
                <Button>Open Modal</Button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Modal Title</ModalTitle>
                  <ModalDescription>
                    This is a modal dialog. Press Escape or click outside to
                    close.
                  </ModalDescription>
                </ModalHeader>
                <div className="py-4">
                  <p>Modal content goes here.</p>
                </div>
                <ModalFooter>
                  <Button variant="outline" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer Title</DrawerTitle>
                  <DrawerDescription>
                    Slide-out panel for additional content.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>Drawer content goes here.</p>
                </div>
              </DrawerContent>
            </Drawer>
          </Stack>
        </Section>

        {/* Toast */}
        <Section spacing="none">
          <SectionTitle>Toast</SectionTitle>
          <Stack gap="md" direction="row" wrap>
            <Button
              variant="outline"
              onClick={() =>
                toast({ title: "Default Toast", description: "This is a default notification." })
              }
            >
              Default Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast({
                  title: "Success!",
                  description: "Your action was successful.",
                  variant: "success",
                })
              }
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast({
                  title: "Error",
                  description: "Something went wrong.",
                  variant: "error",
                })
              }
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast({
                  title: "Warning",
                  description: "Please review your input.",
                  variant: "warning",
                })
              }
            >
              Warning Toast
            </Button>
          </Stack>
        </Section>

        {/* Form Fields */}
        <Section spacing="none">
          <SectionTitle>Form Fields</SectionTitle>
          <div className="max-w-md space-y-6">
            <FormField label="Text Input" htmlFor="text-input">
              <Input id="text-input" placeholder="Enter text..." />
            </FormField>

            <FormField
              label="Input with Error"
              htmlFor="error-input"
              error="This field is required"
            >
              <Input id="error-input" error placeholder="Error state" />
            </FormField>

            <FormField
              label="Input with Helper"
              htmlFor="helper-input"
              helperText="This is helper text"
            >
              <Input id="helper-input" placeholder="With helper text" />
            </FormField>

            <FormField label="Textarea" htmlFor="textarea">
              <Textarea
                id="textarea"
                placeholder="Enter a longer message..."
              />
            </FormField>

            <FormField label="Select" htmlFor="select">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="checkbox" />
                <Label htmlFor="checkbox">Accept terms and conditions</Label>
              </div>

              <div className="space-y-2">
                <Label>Radio Group</Label>
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Option 1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Option 2</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">Option 3</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </Section>

        {/* Layout Components */}
        <Section spacing="none">
          <SectionTitle>Layout Components</SectionTitle>
          <Stack gap="lg">
            <ComponentGroup title="Stack (Horizontal)">
              <Stack direction="row" gap="md" className="rounded border border-border p-4">
                <div className="rounded bg-muted p-4">Item 1</div>
                <div className="rounded bg-muted p-4">Item 2</div>
                <div className="rounded bg-muted p-4">Item 3</div>
              </Stack>
            </ComponentGroup>
            <ComponentGroup title="Stack (Vertical)">
              <Stack direction="column" gap="sm" className="rounded border border-border p-4">
                <div className="rounded bg-muted p-4">Item 1</div>
                <div className="rounded bg-muted p-4">Item 2</div>
                <div className="rounded bg-muted p-4">Item 3</div>
              </Stack>
            </ComponentGroup>
            <ComponentGroup title="Grid (4 columns)">
              <Grid cols={4} gap="md" className="w-full">
                <div className="rounded bg-muted p-4 text-center">1</div>
                <div className="rounded bg-muted p-4 text-center">2</div>
                <div className="rounded bg-muted p-4 text-center">3</div>
                <div className="rounded bg-muted p-4 text-center">4</div>
              </Grid>
            </ComponentGroup>
          </Stack>
        </Section>

        {/* Section Backgrounds */}
        <Section spacing="none">
          <SectionTitle>Section Backgrounds</SectionTitle>
          <Stack gap="md">
            <Section spacing="sm" background="muted" className="rounded">
              <p className="text-center">Muted background section</p>
            </Section>
            <Section spacing="sm" background="primary" className="rounded">
              <p className="text-center">Primary background section</p>
            </Section>
            <Section spacing="sm" background="secondary" className="rounded">
              <p className="text-center">Secondary background section</p>
            </Section>
          </Stack>
        </Section>
      </div>
    </>
  );
}

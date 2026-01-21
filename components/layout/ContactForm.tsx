"use client";

import { useState, useRef, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Textarea,
  FormField,
} from "@/components/ui";
import { toast } from "@/lib/hooks/useToast";

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialFormData: FormData = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  message: "",
};

// Israeli phone regex - accepts formats like: 050-1234567, 052-123-4567, +972-50-1234567, 03-1234567
const ISRAELI_PHONE_REGEX = /^(\+972[-\s]?|0)([23489]|5[0-9]|7[0-9])[-\s]?\d{3}[-\s]?\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjjwwro";

function validateField(name: keyof FormData, value: string): string | undefined {
  switch (name) {
    case "fullName":
      if (!value.trim()) return "נא להזין שם מלא";
      if (value.trim().length < 2) return "נא להזין שם מלא";
      return undefined;
    case "businessName":
      if (!value.trim()) return "נא להזין שם עסק";
      if (value.trim().length < 2) return "נא להזין שם עסק";
      return undefined;
    case "email":
      // Optional - only validate format if provided
      if (value.trim() && !EMAIL_REGEX.test(value)) return "נא להזין כתובת אימייל תקינה";
      return undefined;
    case "phone":
      if (!value.trim()) return "נא להזין מספר טלפון תקין";
      if (!ISRAELI_PHONE_REGEX.test(value.replace(/\s/g, ""))) return "נא להזין מספר טלפון תקין";
      return undefined;
    case "message":
      if (!value.trim()) return "נא להזין הודעה (לפחות 10 תווים)";
      if (value.trim().length < 10) return "נא להזין הודעה (לפחות 10 תווים)";
      return undefined;
    default:
      return undefined;
  }
}

function validateAllFields(data: FormData): FormErrors {
  const errors: FormErrors = {};
  for (const [key, value] of Object.entries(data)) {
    const error = validateField(key as keyof FormData, value);
    if (error) {
      errors[key as keyof FormData] = error;
    }
  }
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const focusFirstError = useCallback((validationErrors: FormErrors) => {
    const fieldOrder: (keyof FormData)[] = ["fullName", "businessName", "email", "phone", "message"];
    const refs: Record<keyof FormData, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>> = {
      fullName: fullNameRef,
      businessName: businessNameRef,
      email: emailRef,
      phone: phoneRef,
      message: messageRef,
    };
    for (const field of fieldOrder) {
      if (validationErrors[field]) {
        refs[field]?.current?.focus();
        break;
      }
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAllFields(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast({
        title: "הפנייה נשלחה בהצלחה!",
        description: "נחזור אליכם בהקדם",
        variant: "success",
      });

      setFormData(initialFormData);
      setErrors({});
    } catch {
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסו שוב מאוחר יותר",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, focusFirstError]);

  return (
    <Card variant="glass" className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>שלחו לנו הודעה</CardTitle>
        <CardDescription>מלאו את הטופס ונחזור אליכם תוך יום עסקים</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          <FormField
            label="שם מלא"
            htmlFor="contact-fullName"
            error={errors.fullName}
            required
          >
            <Input
              ref={fullNameRef}
              id="contact-fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="איך קוראים לכם?"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "contact-fullName-error" : undefined}
            />
          </FormField>

          <FormField
            label="שם העסק"
            htmlFor="contact-businessName"
            error={errors.businessName}
            required
          >
            <Input
              ref={businessNameRef}
              id="contact-businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="מה שם העסק שלכם?"
              aria-invalid={!!errors.businessName}
              aria-describedby={errors.businessName ? "contact-businessName-error" : undefined}
            />
          </FormField>

          <FormField
            label="אימייל"
            htmlFor="contact-email"
            error={errors.email}
          >
            <Input
              ref={emailRef}
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="example@email.com"
              dir="ltr"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
          </FormField>

          <FormField
            label="טלפון"
            htmlFor="contact-phone"
            error={errors.phone}
            required
          >
            <Input
              ref={phoneRef}
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="050-000-0000"
              dir="ltr"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            />
          </FormField>

          <FormField
            label="הודעה"
            htmlFor="contact-message"
            error={errors.message}
            required
          >
            <Textarea
              ref={messageRef}
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="ספרו לנו על העסק שלכם ומה אתם מחפשים..."
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
          </FormField>

          <Button
            type="submit"
            variant="gradient"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "שולח..." : "שליחה"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

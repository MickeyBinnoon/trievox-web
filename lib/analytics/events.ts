/**
 * Analytics event type definitions.
 * These define the structure of tracked events for type safety.
 */

export const AnalyticsEvents = {
  CTA_CLICK: "cta_click",
  FORM_SUBMIT: "form_submit",
  FORM_FIELD_FOCUS: "form_field_focus",
  FORM_FIELD_BLUR: "form_field_blur",
  NAVIGATION_CLICK: "navigation_click",
  PAGE_VIEW: "page_view",
  MODAL_OPEN: "modal_open",
  MODAL_CLOSE: "modal_close",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];

export interface CTAClickProperties {
  buttonId: string;
  buttonText?: string;
  location?: string;
}

export interface FormSubmitProperties {
  formId: string;
  formName?: string;
  success: boolean;
}

export interface FormFieldProperties {
  fieldId: string;
  fieldName?: string;
  formId?: string;
}

export interface NavigationClickProperties {
  linkText: string;
  href: string;
  location?: string;
}

export interface PageViewProperties {
  path: string;
  title?: string;
  referrer?: string;
}

export interface ModalProperties {
  modalId: string;
  modalTitle?: string;
}

export type AnalyticsEventProperties = {
  [AnalyticsEvents.CTA_CLICK]: CTAClickProperties;
  [AnalyticsEvents.FORM_SUBMIT]: FormSubmitProperties;
  [AnalyticsEvents.FORM_FIELD_FOCUS]: FormFieldProperties;
  [AnalyticsEvents.FORM_FIELD_BLUR]: FormFieldProperties;
  [AnalyticsEvents.NAVIGATION_CLICK]: NavigationClickProperties;
  [AnalyticsEvents.PAGE_VIEW]: PageViewProperties;
  [AnalyticsEvents.MODAL_OPEN]: ModalProperties;
  [AnalyticsEvents.MODAL_CLOSE]: ModalProperties;
};

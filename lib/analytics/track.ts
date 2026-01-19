import {
  type AnalyticsEventName,
  type AnalyticsEventProperties,
} from "./events";

type TrackFn = <T extends AnalyticsEventName>(
  event: T,
  properties: AnalyticsEventProperties[T]
) => void;

/**
 * Analytics tracking function.
 * In development, logs to console.
 * In production, this will be replaced with actual vendor implementation.
 *
 * @example
 * ```tsx
 * track(AnalyticsEvents.CTA_CLICK, {
 *   buttonId: "hero-cta",
 *   buttonText: "Get Started",
 *   location: "hero",
 * });
 * ```
 */
export const track: TrackFn = (event, properties) => {
  // Development: Log to console
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${event}`, properties);
  }

  // Production: This is where vendor integration would go
  // Examples:
  // - Google Analytics: gtag('event', event, properties)
  // - Segment: analytics.track(event, properties)
  // - Mixpanel: mixpanel.track(event, properties)
  // - PostHog: posthog.capture(event, properties)
};

/**
 * Identify a user for analytics tracking.
 * Placeholder for future vendor integration.
 */
export function identify(userId: string, traits?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] identify`, { userId, traits });
  }
}

/**
 * Track a page view.
 * Call this on route changes.
 */
export function trackPageView(path: string, title?: string) {
  track("page_view", {
    path,
    title,
    referrer: typeof document !== "undefined" ? document.referrer : undefined,
  });
}

"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";
import { track, identify, trackPageView } from "./track";
import {
  AnalyticsEvents,
  type AnalyticsEventName,
  type AnalyticsEventProperties,
} from "./events";

interface AnalyticsContextValue {
  track: typeof track;
  identify: typeof identify;
  trackPageView: typeof trackPageView;
  events: typeof AnalyticsEvents;
}

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

interface AnalyticsProviderProps {
  children: ReactNode;
  /**
   * Enable/disable analytics tracking globally.
   * Useful for respecting user consent preferences.
   */
  enabled?: boolean;
}

/**
 * Analytics provider component.
 * Wrap your app with this to enable analytics tracking throughout.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { AnalyticsProvider } from "@/lib/analytics";
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <AnalyticsProvider>
 *           {children}
 *         </AnalyticsProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function AnalyticsProvider({
  children,
  enabled = true,
}: AnalyticsProviderProps) {
  const wrappedTrack = useCallback(
    <T extends AnalyticsEventName>(
      event: T,
      properties: AnalyticsEventProperties[T]
    ) => {
      if (enabled) {
        track(event, properties);
      }
    },
    [enabled]
  );

  const wrappedIdentify = useCallback(
    (userId: string, traits?: Record<string, unknown>) => {
      if (enabled) {
        identify(userId, traits);
      }
    },
    [enabled]
  );

  const wrappedTrackPageView = useCallback(
    (path: string, title?: string) => {
      if (enabled) {
        trackPageView(path, title);
      }
    },
    [enabled]
  );

  return (
    <AnalyticsContext.Provider
      value={{
        track: wrappedTrack as typeof track,
        identify: wrappedIdentify,
        trackPageView: wrappedTrackPageView,
        events: AnalyticsEvents,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

/**
 * Hook to access analytics functions.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { track, events } = useAnalytics();
 *
 *   return (
 *     <button onClick={() => track(events.CTA_CLICK, { buttonId: "my-btn" })}>
 *       Click me
 *     </button>
 *   );
 * }
 * ```
 */
export function useAnalytics() {
  const context = useContext(AnalyticsContext);

  if (!context) {
    // Return no-op functions if used outside provider
    // This allows components to be used without analytics
    return {
      track: () => {},
      identify: () => {},
      trackPageView: () => {},
      events: AnalyticsEvents,
    } as AnalyticsContextValue;
  }

  return context;
}

"use client";

import { useEffect, useCallback, useState } from "react";

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyConfig {
  key: string;
  handler: KeyHandler;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  preventDefault?: boolean;
}

interface UseKeyboardOptions {
  enabled?: boolean;
  target?: "document" | "window" | React.RefObject<HTMLElement>;
}

/**
 * Hook for handling keyboard events with modifier key support.
 *
 * @example
 * ```tsx
 * useKeyboard([
 *   { key: "Escape", handler: () => setOpen(false) },
 *   { key: "k", ctrl: true, handler: () => setSearchOpen(true), preventDefault: true },
 * ]);
 * ```
 */
export function useKeyboard(
  keys: KeyConfig[],
  options: UseKeyboardOptions = {}
) {
  const { enabled = true, target = "document" } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      for (const config of keys) {
        const {
          key,
          handler,
          ctrl = false,
          shift = false,
          alt = false,
          preventDefault = false,
        } = config;

        const keyMatches = event.key.toLowerCase() === key.toLowerCase();
        const ctrlMatches = ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
        const shiftMatches = shift ? event.shiftKey : !event.shiftKey;
        const altMatches = alt ? event.altKey : !event.altKey;

        if (keyMatches && ctrlMatches && shiftMatches && altMatches) {
          if (preventDefault) {
            event.preventDefault();
          }
          handler(event);
          break;
        }
      }
    },
    [keys, enabled]
  );

  useEffect(() => {
    if (!enabled) return;

    let element: EventTarget;

    if (target === "document") {
      element = document;
    } else if (target === "window") {
      element = window;
    } else if (target.current) {
      element = target.current;
    } else {
      return;
    }

    element.addEventListener("keydown", handleKeyDown as EventListener);

    return () => {
      element.removeEventListener("keydown", handleKeyDown as EventListener);
    };
  }, [enabled, target, handleKeyDown]);
}

/**
 * Hook to handle Escape key press.
 *
 * @example
 * ```tsx
 * useEscapeKey(() => setOpen(false));
 * ```
 */
export function useEscapeKey(handler: () => void, enabled = true) {
  useKeyboard([{ key: "Escape", handler }], { enabled });
}

/**
 * Hook to handle arrow key navigation in a list.
 * Returns state and handlers for managing active index.
 *
 * @example
 * ```tsx
 * const { activeIndex, handlers } = useArrowNavigation({
 *   itemCount: items.length,
 *   onSelect: (index) => handleSelect(items[index]),
 * });
 * ```
 */
export function useArrowNavigation(options: {
  itemCount: number;
  initialIndex?: number;
  onSelect?: (index: number) => void;
  enabled?: boolean;
  loop?: boolean;
}) {
  const {
    itemCount,
    initialIndex = 0,
    onSelect,
    enabled = true,
    loop = true,
  } = options;

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useKeyboard(
    [
      {
        key: "ArrowDown",
        handler: () => {
          setActiveIndex((prev) => {
            if (loop) {
              return (prev + 1) % itemCount;
            }
            return Math.min(prev + 1, itemCount - 1);
          });
        },
        preventDefault: true,
      },
      {
        key: "ArrowUp",
        handler: () => {
          setActiveIndex((prev) => {
            if (loop) {
              return (prev - 1 + itemCount) % itemCount;
            }
            return Math.max(prev - 1, 0);
          });
        },
        preventDefault: true,
      },
      {
        key: "Enter",
        handler: () => {
          onSelect?.(activeIndex);
        },
      },
    ],
    { enabled }
  );

  return {
    activeIndex,
    setActiveIndex,
  };
}

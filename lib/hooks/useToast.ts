"use client";

import { useState, useCallback } from "react";

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastState {
  toasts: Toast[];
}

let toastCount = 0;

function generateId() {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  return toastCount.toString();
}

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 5000;

type ToastActionType =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "REMOVE_TOAST"; id: string }
  | { type: "DISMISS_TOAST"; id: string };

const listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };

function dispatch(action: ToastActionType) {
  switch (action.type) {
    case "ADD_TOAST":
      memoryState = {
        ...memoryState,
        toasts: [action.toast, ...memoryState.toasts].slice(0, TOAST_LIMIT),
      };
      break;

    case "REMOVE_TOAST":
      memoryState = {
        ...memoryState,
        toasts: memoryState.toasts.filter((t) => t.id !== action.id),
      };
      break;

    case "DISMISS_TOAST":
      memoryState = {
        ...memoryState,
        toasts: memoryState.toasts.filter((t) => t.id !== action.id),
      };
      break;
  }

  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

export function toast(props: Omit<Toast, "id">) {
  const id = generateId();
  const duration = props.duration ?? TOAST_REMOVE_DELAY;

  dispatch({
    type: "ADD_TOAST",
    toast: { ...props, id },
  });

  if (duration > 0) {
    setTimeout(() => {
      dispatch({ type: "DISMISS_TOAST", id });
    }, duration);
  }

  return {
    id,
    dismiss: () => dispatch({ type: "DISMISS_TOAST", id }),
  };
}

export function useToast() {
  const [state, setState] = useState<ToastState>(memoryState);

  const subscribe = useCallback((listener: (state: ToastState) => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  useState(() => {
    return subscribe(setState);
  });

  return {
    ...state,
    toast,
    dismiss: (id: string) => dispatch({ type: "DISMISS_TOAST", id }),
  };
}

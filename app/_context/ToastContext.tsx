"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type: "success" | "error") => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: "success" | "error") => {
    setToasts([...toasts, { id: Date.now(), message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>;
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast는 ToastProvider안에서 사용해주세요");
  }
  return context;
};

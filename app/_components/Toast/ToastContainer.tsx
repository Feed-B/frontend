"use client";

import React from "react";
import { useToast } from "@/app/_context/ToastContext";
import Toast from "./Toast";

function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[384px] -translate-x-1/2 transform">
      {toasts.map(toast => (
        <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

export default ToastContainer;

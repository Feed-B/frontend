"use client";

import { ReactNode, createContext, useContext, useState } from "react";

// interface LoginData {
//   email: string;
//   type: string;
// }

interface LoginContextType {
  email: string;
  setEmail: (email: string) => void;
  type: string;
  setType: (type: string) => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  return <LoginContext.Provider value={{ email, setEmail, type, setType }}>{children}</LoginContext.Provider>;
}

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin은 LoginProvider 내에서 사용해야 합니다.");
  }

  return context;
}

import { create } from "zustand";

export type LoginData = {
  email: string;
  accessToken: string;
  type: string;
};

type LoginStore = {
  email: string;
  setEmail: (email: string) => void;
  type: string;
  setType: (type: string) => void;
};

export const useLoginStore = create<LoginStore>(set => ({
  email: "",
  setEmail: email => set(() => ({ email })),
  type: "",
  setType: type => set(() => ({ type })),
}));

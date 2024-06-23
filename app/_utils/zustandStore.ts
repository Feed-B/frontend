import { create } from "zustand";

export type KakaoData = {
  email: string;
  token: string;
  type: string;
};

type KaKaoStore = {
  email: string;
  setEmail: (email: string) => void;
  type: string;
  setType: (type: string) => void;
};

export const useKakaoStore = create<KaKaoStore>(set => ({
  email: "",
  setEmail: email => set(() => ({ email })),
  type: "",
  setType: type => set(() => ({ type })),
}));

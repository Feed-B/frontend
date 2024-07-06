import Providers from "@/app/_queryFactory/providers";
import Header from "@/app/_components/Header/Header";
import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "FeedB",
  description: "FeedB에 오신 걸 환영합니다",
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div id="modal" />
      <Header />
      {children}
    </Providers>
  );
}

import Header from "@/app/_components/Header/Header";
import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "FeedB",
  description: "제 프로젝트를 소개합니다!",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="modal" />
      <Header />
      {children}
    </>
  );
}

import Header from "@/app/_components/Header/Header";
import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "FeedB",
  description: "FeedB에서 프로젝트를 공유해보세요.",
};

export default function addProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

import Providers from "@/app/_queryFactory/providers";
import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "피드비 | FeedB",
  description:
    "피드비는 여러분의 프로젝트를 공유하고, 서로 피드백을 주고받을 수 있는 최적의 플랫폼입니다. 피드비를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
  icons: {
    icon: "/beeIcons/yellowBee.svg",
  },
  generator: "Next.js",
  applicationName: "피드비 | FeedB",
  keywords: ["피드비", "Feedb", "FeedB", "사이드 프로젝트", "피드백"],
  openGraph: {
    title: "피드비",
    description: "FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
    url: process.env.NEXT_PUBLIC_SERVICE_URL,
    siteName: "FeedB",
    images: [
      {
        url: "https://i.ibb.co/d5ftBLK/feedbopengraph.jpg",
        width: 1200,
        height: 628,
        alt: "FeedB 사이드 프로젝트 Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "피드비",
    description: "FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
    images: [
      {
        url: "https://i.ibb.co/d5ftBLK/feedbopengraph.jpg",
        width: 1200,
        height: 628,
        alt: "FeedB 사이드 프로젝트 Image",
      },
    ],
  },
  category: "사이드 프로젝트",
  bookmarks: ["https://feedb.vercel.app/main"],
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}

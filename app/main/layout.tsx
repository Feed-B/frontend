import Providers from "@/app/_queryFactory/providers";
import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "피드비",
  description:
    "프로젝트를 진행하면서 종종 의견을 얻고 싶거나, 다른 사람들의 피드백을 받고 싶었던 적이 있으신가요? FeedB는 여러분의 프로젝트를 공유하고, 서로 피드백을 주고받을 수 있는 최적의 플랫폼입니다. FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
  icons: {
    icon: "/Variant3.png",
  },
  openGraph: {
    title: "피드비",
    description: "FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
    url: process.env.NEXT_PUBLIC_SERVICE_URL,
    images: [
      {
        url: "https://drive.google.com/file/d/1fH4VxoXgmruhEGfGvUvgbPeQ8AP7rkVY/view?usp=sharing",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}

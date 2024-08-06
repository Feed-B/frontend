import Script from "next/script";
import Header from "./_components/Header/Header";
import ToastContainer from "./_components/Toast/ToastContainer";
import Providers from "./_queryFactory/providers";
import { LoginProvider } from "./_context/LoginProvider";
import { ToastProvider } from "./_context/ToastContext";
import type { Metadata } from "next";
import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "피드비",
  description:
    "프로젝트를 진행하면서 종종 의견을 얻고 싶거나, 다른 사람들의 피드백을 받고 싶었던 적이 있으신가요? FeedB는 여러분의 프로젝트를 공유하고, 서로 피드백을 주고받을 수 있는 최적의 플랫폼입니다. FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
  icons: {
    icon: "/beeIcons/yellowBee.svg",
  },
  openGraph: {
    title: "피드비",
    description: "FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
    url: process.env.NEXT_PUBLIC_SERVICE_URL,
    siteName: "FeedB",
    images: [
      {
        url: "/images/openGraph..png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="6a3b830c55bbf7e49d2df7be3a9440cbae79d570" />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="beforeInteractive" />
      </head>
      <body>
        <div id="modal" />
        <Providers>
          <LoginProvider>
            <ToastProvider>
              <Header />
              {children}
              <ToastContainer />
            </ToastProvider>
          </LoginProvider>
        </Providers>
      </body>
    </html>
  );
}

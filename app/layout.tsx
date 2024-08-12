import Script from "next/script";
import Header from "./_components/Header/Header";
import ToastContainer from "./_components/Toast/ToastContainer";
import Providers from "./_queryFactory/providers";
import { LoginProvider } from "./_context/LoginProvider";
import { ToastProvider } from "./_context/ToastContext";
import GoogleAnalytics from "./googleAnalytics";
import type { Metadata } from "next";
import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "피드비",
  description:
    "FeedB는 여러분의 프로젝트를 공유하고, 서로 피드백을 주고받을 수 있는 최적의 플랫폼입니다. FeedB를 통해 프로젝트의 완성도를 높이고, 새로운 아이디어를 얻어보세요!",
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
        url: "https://i.ibb.co/d5ftBLK/feedbopengraph.jpg",
        width: 1200,
        height: 628,
        alt: "FeedB Image",
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
        <meta name="google-site-verification" content="FSXKlC8L2fC87G2HeDdxtnQyzDlOM4C3Y1eYoq3mzVA" />
        <meta name="naver-site-verification" content="6a3b830c55bbf7e49d2df7be3a9440cbae79d570" />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="beforeInteractive" />
      </head>
      <body>
        <div id="modal" />
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID} />
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

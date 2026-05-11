import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "선린인터넷고등학교 진로체험",
  description: "나의 적성에 알맞는 학과/동아리 탐색하기",
  icons: {
    icon: "/sunrin.png",
    shortcut: "/sunrin.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './style/globals.css';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react'

const pretendard = localFont({
  src: './style/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

const cooper = localFont({
  src: './style/fonts/Cooper-Bold.woff2',
  display: 'swap',
  variable: '--font-cooper',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unlimitedhan.vercel.app'),
  title: 'unlimited Han',
  description: "Jeongbin1's blog",
  keywords: ['블로그', '포트폴리오', '개발자', '프론트엔드', 'frontend'],
  openGraph: {
    title: 'unlimited Han',
    description: "Jeongbin1's blog",
    type: 'website',
    siteName: 'unlimited Han',
    url: 'https://unlimitedhan.vercel.app',
    images: [
      {
        url: '/images/logo.png',
        width: 430,
        height: 430,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'unlimited Han',
    description: "Jeongbin1's blog",
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${cooper.variable}`}>
      <body>
        <ScrollToTop />
        <Header />
        <main className="flex flex-col mx-2 sm:mx-6 md:mx-auto md:max-w-screen-md">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

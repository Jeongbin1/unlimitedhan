import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './style/globals.css';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

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
  title: 'unlimited Han',
  description: "Jeongbin1's blog",
  openGraph: {
    title: 'unlimited Han',
    description: "Jeongbin1's blog",
    images: [
      {
        url: '/images/logo.png',
        width: 430,
        height: 430,
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
    <html lang="ko" className={`${pretendard.variable} ${cooper.variable}`}>
      <body>
        <ScrollToTop />
        <Header />
        <main className="flex flex-col mx-2 sm:mx-6 md:mx-auto md:max-w-screen-md">
          {children}
        </main>
      </body>
    </html>
  );
}

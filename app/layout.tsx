import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './style/globals.css';
import Header from '@/components/Header';

const pretendard = localFont({
  src: './style/fonts/PretendardVariable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'unlimited Han',
  description: "Jeongbin1's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <main className="flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

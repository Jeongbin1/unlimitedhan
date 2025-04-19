import Link from 'next/link';
import Image from 'next/image';
import Nav from './nav';

export default function Header() {
  return (
    <header className="sticky top-0 px-4 z-50 bg-background backdrop-blur border-b border-[#fff4d5]">
      <div className="container border-t border-transparent flex h-16 items-center justify-between">
        <Link href="/" className="text-[#f27405] font-bold text-lg">
          <Image src="/images/logo.png" alt="로고" width={50} height={50} />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

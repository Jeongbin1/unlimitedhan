import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="sticky shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] w-full top-0 z-50 bg-background backdrop-blur  ">
      <div className="container max-w-screen-md flex h-20 items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="로고"
            width={50}
            height={50}
            className="w-16 h-16"
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

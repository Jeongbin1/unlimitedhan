import Link from 'next/link';
import Nav from './nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur border-b border-[#f29f05]">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-[#f27405] font-bold text-lg">
          unlimited Han
        </Link>
        <Nav />
      </div>
    </header>
  );
}

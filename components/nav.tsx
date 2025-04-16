'use client';

import Link from 'next/link';
import { navlinks } from '@/data/navlinks';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Nav {
  link: string;
  label: string;
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {navlinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'hover:font-black py-3 text-primary font-bold flex items-center',
            pathname === href && 'underline underline-offset-4 font-black'
          )}
        >
          {label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}

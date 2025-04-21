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
    <nav className="flex font-cooper font-light items-center gap-6">
      {navlinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          scroll={true}
          className={cn(
            'transition duration-300  hover:text-primary py-6 text-black/80 font-medium flex items-center',
            pathname.startsWith(href) &&
              'text-primary border border-primary-60 py-2 px-6'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

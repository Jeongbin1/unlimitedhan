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
    <nav className="flex items-center gap-6">
      {navlinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'border-b-2 border-transparent transition duration-300  hover:text-[#f27405]  hover:border-b-2 hover:border-[#ffb76b] py-5 text-primary font-bold flex items-center',
            pathname === href &&
              'border-b-2 border-[#f27405] text-[#f27405] font-black'
          )}
        >
          {label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}

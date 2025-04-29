'use client';

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { navlinks } from '@/data/navlinks';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[200px] sm:w-[240px]">
        <nav className="flex flex-col space-y-2 mt-6">
          {navlinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={handleClose}
              className={cn(
                'px-3 py-2 text-lg hover:text-primary text-black/80 font-cooper',
                pathname.startsWith(href) && 'text-primary'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

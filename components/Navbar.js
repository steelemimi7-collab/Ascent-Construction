'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PHONE, PHONE_TEL } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-sm border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <img src="/Logo.png" alt="Ascent Construction Group" className="h-20 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-display font-semibold text-sm tracking-widest uppercase transition-colors duration-150 ${
                pathname === href ? 'text-accent' : 'text-white hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href={`tel:${PHONE_TEL}`} className="font-display font-semibold text-xs tracking-widest text-white/70 hover:text-accent transition-colors uppercase">
            {PHONE}
          </a>
          <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
            Get a Quote
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-fore transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-fore transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-fore transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-edge">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className={`font-display font-semibold text-sm tracking-widest2 uppercase ${pathname === href ? 'text-accent' : 'text-fore'}`}>
                {label}
              </Link>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="font-display text-sm tracking-widest text-muted uppercase mt-2">{PHONE}</a>
          </nav>
        </div>
      )}
    </header>
  );
}


import Link from 'next/link';
import { PHONE, PHONE_TEL } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-edge">
      {/* CTA band */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-800 text-2xl md:text-3xl tracking-tight text-base uppercase leading-tight">
              Ready to build?
            </p>
            <p className="font-body text-base/80 text-sm mt-1">
              Call us or send a message, and we&apos;ll get back to you promptly.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-display font-700 text-base text-base text-lg tracking-wide hover:underline"
            >
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-base text-fore font-display font-semibold text-xs tracking-widest2 uppercase px-7 py-3.5 hover:bg-surface-2 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src="/Logo.png" alt="Ascent Construction Group" className="h-30 w-auto" />
          </div>

          {/* Nav */}
          <div>
            <p className="label mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-display font-semibold text-xs tracking-widest uppercase text-muted hover:text-fore transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-5">Contact</p>
            <div className="flex flex-col gap-3 font-body text-sm text-muted">
              <div>
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-fore/50 block mb-0.5">Phone</span>
                <a href={`tel:${PHONE_TEL}`} className="text-fore hover:text-accent transition-colors">
                  {PHONE}
                </a>
              </div>
              <div>
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-fore/50 block mb-0.5">Email</span>
                <a href="mailto:pat@ascentconstructiongroup.com" className="text-fore hover:text-accent transition-colors">
                  pat@ascentconstructiongroup.com
                </a>
              </div>
              <div>
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-fore/50 block mb-0.5">License</span>
                <span className="text-fore">#1080865
                </span>
              </div>
              <div>
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-fore/50 block mb-0.5">Service Area</span>
                <span className="text-fore">Central Valley · Shaver Lake · Huntington Lake</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-rule" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xs tracking-widest uppercase text-muted">
            © {new Date().getFullYear()} Ascent Construction Group Inc. All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="font-display text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/accessibility" className="font-display text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

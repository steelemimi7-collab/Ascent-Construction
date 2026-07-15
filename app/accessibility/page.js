import Link from 'next/link';
import { PHONE, PHONE_TEL } from '@/lib/site';

export const metadata = {
  title: 'Accessibility | Ascent Construction Group',
  description:
    'Ascent Construction Group is committed to making our website accessible to everyone, including people with disabilities.',
};

export default function Accessibility() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Our Commitment</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none">
            Accessibility
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-base">
        <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
          <p className="font-body text-base text-fore/80 leading-relaxed">
            Ascent Construction Group is committed to making our website accessible to everyone,
            including people with disabilities. We want every visitor to be able to find information
            about our work and get in touch with us, regardless of how they browse the web.
          </p>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              What we are doing
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed mb-3">
              We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. Steps
              we have taken on this site include:
            </p>
            <ul className="font-body text-base text-fore/80 leading-relaxed space-y-2 list-disc pl-6">
              <li>Descriptive text alternatives for images so screen readers can describe them</li>
              <li>Full keyboard support, including closing photo pop-ups with the Escape key</li>
              <li>Clear, visible focus outlines for people navigating by keyboard</li>
              <li>A &ldquo;Skip to main content&rdquo; link for screen-reader users</li>
              <li>Labeled form fields on our contact page</li>
              <li>Readable fonts and color contrast chosen for legibility</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              Ongoing effort
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed">
              Accessibility is an ongoing process, and we are continually working to improve the
              experience for all of our visitors. If you come across any part of our site that is
              difficult to use, we want to hear about it and will do our best to fix it.
            </p>
          </div>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              Contact us
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed">
              If you have trouble accessing any content on this website, or have a suggestion that
              would help us improve, please reach out:
            </p>
            <div className="mt-4 space-y-1 font-body text-base text-fore">
              <p>
                Phone:{' '}
                <a href={`tel:${PHONE_TEL}`} className="text-accent hover:text-accent-light transition-colors">
                  {PHONE}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:pat@ascentconstructiongroup.com" className="text-accent hover:text-accent-light transition-colors">
                  pat@ascentconstructiongroup.com
                </a>
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-8 inline-block">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

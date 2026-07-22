import Link from 'next/link';
import { PHONE, PHONE_TEL } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Ascent Construction Group, Central Valley',
  description:
    'How Ascent Construction Group collects, uses, and protects the information you share through our Central Valley construction website and contact form.',
  path: '/privacy',
});

export default function Privacy() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])} />
      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Your Privacy</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-base">
        <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
          <p className="font-body text-base text-fore/80 leading-relaxed">
            Ascent Construction Group Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
            This policy explains what information we collect through this website and how we use it.
          </p>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              Information we collect
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed">
              When you fill out our contact form, we collect the information you choose to provide,
              which may include your name, phone number, email address, project type, and any details
              you share in your message. We do not require you to create an account, and we do not
              knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              How we use your information
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed">
              We use the information you submit solely to respond to your inquiry, discuss your
              project, and provide the services you request. We do not sell or rent your personal
              information to anyone.
            </p>
          </div>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              Sharing your information
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed">
              We may share your information with trusted service providers who help us operate the
              website or respond to your inquiry (for example, the service that delivers contact-form
              messages to our email). These providers are only permitted to use your information to
              perform services on our behalf. We may also disclose information if required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              Your choices and rights
            </h2>
            <p className="font-body text-base text-fore/80 leading-relaxed">
              You can choose not to submit information through the website. If you are a California
              resident, you may have the right to request access to or deletion of the personal
              information we hold about you. To make a request, or to ask us to update or remove your
              information, please contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-tight text-fore mb-3">
              Contact us
            </h2>
            <div className="mt-2 space-y-1 font-body text-base text-fore">
              <p>Ascent Construction Group Inc.</p>
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

          <p className="font-body text-sm text-muted leading-relaxed border-l-2 border-edge pl-4">
            This policy may be updated from time to time. Any changes will be posted on this page.
          </p>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { PHONE, PHONE_TEL } from '@/lib/site';

const FAQS = [
  {
    q: 'What areas does Ascent Construction serve?',
    a: "We work throughout California's Central Valley and the Sierra foothills, including Fresno, Clovis, Madera, Visalia, Sanger, Auberry, Shaver Lake, and Huntington Lake. If you are not sure whether your location is covered, reach out and we will let you know.",
  },
  {
    q: 'What types of projects do you take on?',
    a: 'We build custom homes and mountain cabins, whole-home and interior remodels, ranch and agricultural buildings, outdoor living and recreation spaces, fire features, barn conversions, and commercial build-outs. Many projects cross several of these areas.',
  },
  {
    q: 'Are you a licensed contractor?',
    a: 'Yes. Ascent Construction Group is a California licensed contractor, CSLB license number 1080865.',
  },
  {
    q: 'Who will I actually be working with?',
    a: 'You work directly with Patrick Steele, the owner. He is personally involved in every project from the first conversation through the final walkthrough, so there are no handoffs or middlemen in between.',
  },
  {
    q: 'How much experience does Ascent have?',
    a: 'Patrick brings more than 40 years of hands-on construction experience across residential, ranch, and commercial work. Ascent Construction Group was founded in 2021.',
  },
  {
    q: 'Do you handle both residential and commercial projects?',
    a: 'Yes. Alongside custom homes and full property builds, we take on commercial build-outs and specialty spaces, and we bring the same attention to detail to each.',
  },
  {
    q: 'Do you build and remodel in the mountains, like Shaver Lake?',
    a: 'Yes. Mountain builds and remodels come with their own challenges, including elevation, snow load, weather exposure, and remote access. We plan for those conditions from the first drawing forward.',
  },
  {
    q: 'How do I get started or request an estimate?',
    a: `Call us at ${PHONE} or send a message through our contact page. We start every project with a conversation to understand the property, your goals, and the scope before making any recommendations.`,
  },
];

export const metadata = buildMetadata({
  title: 'Construction FAQ | Ascent Construction Group, Central Valley',
  description:
    "Common questions about Ascent Construction Group, an owner-led builder in California's Central Valley, covering service areas, project types, and licensing.",
  path: '/faq',
});

export default function FAQ() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Common Questions</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl mt-6 leading-relaxed">
            A few of the questions we hear most. If you do not see yours here, get in touch and we
            will answer it directly.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-surface border-b border-edge">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="space-y-6">
            {FAQS.map((f, i) => (
              <div key={i} className="card p-8">
                <h2 className="font-display font-700 text-lg md:text-xl uppercase tracking-wide text-fore mb-3">
                  {f.q}
                </h2>
                <p className="font-body text-base text-fore/80 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl uppercase tracking-tightest text-fore mb-4">
            Still Have a Question?
          </h2>
          <p className="font-body text-base text-muted max-w-lg mx-auto mb-8">
            Reach out and we will get you an answer. Every project starts with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Send a Message</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-outline">{`Call ${PHONE}`}</a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Ascent Construction | Central Valley Home Builder',
  description:
    "Meet Patrick Steele and Ascent Construction Group, an owner-led builder serving California's Central Valley with 40 plus years of hands-on experience.",
  path: '/about',
});

const values = [
  {
    title: 'Practical Planning',
    desc: 'Before any plans are drawn or materials ordered, we take time to understand the property, the vision, and the goals, so what we build actually fits the way you live.',
  },
  {
    title: 'Clear Communication',
    desc: "You have a single point of contact throughout the entire process. No phone tag and no handoffs. Patrick stays involved from the first conversation to the final walkthrough.",
  },
  {
    title: 'Built to Last',
    desc: "Construction isn't just about hitting a deadline. It's about creating something that serves you for the long haul, done right the first time.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c8973a 0px, transparent 1px, transparent 60px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Our Story</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none max-w-3xl">
            About Ascent<br />
            <span className="text-accent">Construction</span>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl mt-6 leading-relaxed">
            A full-service construction company serving the Central Valley, founded on experience,
            built on integrity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label mb-4">Who We Are</p>
              <p className="font-body text-lg text-fore/80 leading-relaxed mb-4">
                Ascent Construction Group is a full-service construction company primarily serving
                the Central Valley, specializing in custom residential, outdoor living, ranch,
                agricultural, and commercial projects.
              </p>
              <p className="font-body text-base text-muted leading-relaxed">
                We were founded in 2021 by Patrick Steele, and everything we do is built on more
                than 40 years of hands-on experience in the construction industry.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-edge">
              {[
                { val: '40+', label: 'Years of Industry Experience' },
                { val: '2021', label: 'Year Founded' },
                { val: '100%', label: 'Founder-Led & Personally Involved' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-surface px-8 py-6 flex items-center gap-6">
                  <div className="font-display font-800 text-4xl text-accent leading-none w-24 flex-shrink-0">
                    {val}
                  </div>
                  <div className="font-display font-semibold text-xs uppercase tracking-widest text-muted">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-base border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="label mb-4">Our Philosophy</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase tracking-tightest text-fore leading-none mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-edge">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-base p-8 border-t-2 border-t-accent">
                <h3 className="font-display font-700 text-xl uppercase tracking-widest text-fore mb-4">
                  {title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patrick */}
      <section className="bg-surface-2 border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <div className="h-96 overflow-hidden">
  <img src="/patrick.png" alt="Patrick Steele" className="w-full h-full object-cover" />
</div>
            <div>
              <p className="label mb-4">Meet the Founder</p>
              <h2 className="font-display font-800 text-4xl uppercase tracking-tightest text-fore leading-none mb-6">
                Patrick Steele
              </h2>
              <p className="font-body text-base text-muted leading-relaxed mb-4">
                Patrick brings a practical, detail-oriented approach to every project. His
                background spans custom homes, large remodels, outdoor living spaces, ranch and
                agricultural improvements, and commercial construction, giving him a well-rounded
                understanding of what it takes to manage complex builds from start to finish.
              </p>
              <p className="font-body text-base text-muted leading-relaxed mb-4">
                As the founder and owner, Patrick stays directly involved in each project. Clients
                have a clear point of contact throughout the entire process, from the initial
                planning conversation to the final walkthrough.
              </p>
              <p className="font-body text-base text-muted leading-relaxed">
                That kind of personal attention is something we&apos;re committed to, and it&apos;s
                one of the things that sets Ascent apart from larger, less accessible contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="bg-base border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="label mb-4">Credentials</p>
          <h2 className="font-display font-800 text-3xl uppercase tracking-tightest text-fore leading-none mb-6">
            Certifications &amp; Licenses
          </h2>
          <div className="bg-surface border border-edge p-8 max-w-xl">
            <div className="flex items-baseline justify-between">
              <span className="font-display font-semibold text-xs uppercase tracking-widest text-muted">License</span>
              <span className="font-display text-base text-fore">#1080865</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-2">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase tracking-tightest text-fore leading-none mb-4">
            Let&apos;s Talk About<br />
            <span className="text-accent">Your Project</span>
          </h2>
          <p className="font-body text-base text-muted max-w-lg mx-auto mb-8 leading-relaxed">
            We work with homeowners, landowners, ranchers, and business owners throughout the
            Central Valley. If you have something in mind, even still in early planning, we&apos;d
            love to hear about it.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}

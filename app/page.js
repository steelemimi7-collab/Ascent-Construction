import Link from 'next/link';
import HeroSlideshow from '@/components/HeroSlideshow';

export const metadata = {
  title: 'Ascent Construction Group | Custom Homes, Ranch Builds & Outdoor Living | Central Valley, CA',
  description:
    'Patrick Steele brings 40+ years of hands-on construction experience to every project. Custom homes, mountain builds, ranch infrastructure, and outdoor living throughout the Central Valley and Sierra foothills.',
};

const services = [
  { title: 'Custom Homes', href: '/services#residential', image: '/thumbs/studio.jpg' },
  { title: 'Mountain Homes', href: '/services#mountain', image: '/thumbs/shaver.jpg' },
  { title: 'Outdoor Living', href: '/services#outdoor', image: '/thumbs/treehouse.jpg' },
  { title: 'Fire Pits', href: '/services#firepit', image: '/fireball/fireball-01.jpg' },
  { title: 'Ranch & Agricultural', href: '/services#ranch', image: '/thumbs/shop.jpg' },
  { title: 'Commercial & Specialty', href: '/services#commercial', image: '/thumbs/wine-bar.jpg' },
];

const featuredTestimonial = {
  name: 'Matt Ruiz',
  detail: 'Shaver Lake, CA · Basement Remodel',
  quote: 'Ascent Construction helped us restore and completely remodel our basement after it was flooded. What started as a stressful situation turned into an opportunity to create a beautiful new living space for our family and friends. In fact, we were so pleased with the basement remodel, Ascent is remodeling the upstairs of our home as well. Working with Patrick and the team has been fantastic. They are incredibly creative, listened carefully to our needs and vision, and brought ideas to the table that improved the final result. Throughout the project, they communicated well, paid attention to details, and genuinely cared about delivering a space that exceeded our expectations. I would recommend them without hesitation. Out of all the contractors I have worked with over the years, Ascent Construction has done the best job of not only building a beautiful space but actually finishing the project the right way. The last 10% of a project is often the most important and where many contractors fall short. Ascent followed through on every detail and delivered a polished, complete result. That level of trust says everything about our experience.',
};

const projects = [
  { slug: 'shaver-cabin', title: 'Shaver Cabin', type: 'Mountain Homes', location: 'Shaver Lake, CA', cover: '/thumbs/shaver.jpg' },
  { slug: 'studio', title: 'Studio', type: 'Residential Construction', location: 'Sanger, CA', cover: '/thumbs/studio.jpg' },
  { slug: 'shop', title: 'Shop', type: 'Ranch & Agricultural', location: 'Sanger, CA', cover: '/thumbs/shop.jpg' },
  { slug: 'sport-court', title: 'Sport Court', type: 'Outdoor Living & Recreation', location: 'Sanger, CA', cover: '/thumbs/sport-court.jpg' },
  { slug: 'treehouse', title: 'Tree House', type: 'Outdoor Living & Recreation', location: 'Sanger, CA', cover: '/thumbs/treehouse.jpg' },
  { slug: 'pasture', title: 'Horse Barns & Pasture', type: 'Ranch & Agricultural', location: 'Sanger, CA', cover: '/thumbs/pasture.jpg' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-base pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-base via-surface to-base" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-screen items-center">

            {/* Left: Copy */}
            <div className="py-24 pr-12 lg:col-span-3">
              <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent">
                  40+ Years Experience. Owner on Every Job.
                </span>
              </div>

              <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-none tracking-tightest uppercase text-fore mb-6">
                Built Right.<br />
                <span className="text-accent">By Someone</span><br />
                Who Cares.
              </h1>

              <p className="font-body text-lg text-fore/70 max-w-lg mb-4 leading-relaxed">
                Forty years of custom builds, so the one you picture is the one you get.
              </p>
              <p className="font-body text-base text-muted max-w-lg mb-10 leading-relaxed">
                Custom homes, mountain builds, ranch infrastructure, and outdoor living throughout the Central Valley and Sierra foothills.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-primary">Talk to Patrick</Link>
                <Link href="/gallery" className="btn-outline">See the Work</Link>
              </div>

              <div className="grid grid-cols-3 gap-0 border-t border-edge pt-8">
                {[
                  { val: '40+', label: 'Years in the Field' },
                  { val: '100%', label: 'Founder-Led' },
                  { val: 'LIC', label: '#1080865' },
                ].map(({ val, label }) => (
                  <div key={label} className="pr-6">
                    <div className="font-display font-800 text-3xl text-accent leading-none">{val}</div>
                    <div className="font-display font-semibold text-xs uppercase tracking-widest text-muted mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Project photo slideshow */}
            <div className="hidden lg:block relative self-center lg:col-span-2" style={{ height: '600px', width: '100%' }}>
              <HeroSlideshow />
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER-LED CALLOUT */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <p className="font-display font-800 text-2xl md:text-3xl uppercase tracking-tight text-base leading-tight">
                You talk to Patrick. Patrick runs the job. That is it.
              </p>
              <p className="font-body text-base/80 text-sm mt-1">
                No project managers. No handoffs. The owner is your point of contact from start to finish.
              </p>
            </div>
            <Link href="/contact" className="bg-base text-fore font-display font-semibold text-xs tracking-widest2 uppercase px-7 py-3.5 hover:bg-surface-2 transition-colors whitespace-nowrap flex-shrink-0">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="label mb-3">What We Build</p>
              <h2 className="font-display font-800 text-4xl md:text-5xl uppercase tracking-tightest text-fore leading-none">
                Services
              </h2>
            </div>
            <Link href="/services" className="btn-outline text-xs">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ title, href, image }) => (
              <Link
                key={title}
                href={href}
                className="group block overflow-hidden border border-edge hover:border-accent/40 transition-colors duration-300"
              >
                {/* Photo */}
                <div className="relative h-56 md:h-72 bg-surface-2 overflow-hidden">
                  {image ? (
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-xs tracking-widest uppercase text-muted/40">Photo</span>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
                  {/* Accent underline on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-0.5 bg-accent transition-all duration-300" />
                </div>

                {/* Label */}
                <div className="bg-surface px-5 py-4 flex items-center justify-between">
                  <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">
                    {title}
                  </p>
                  <span className="text-muted group-hover:text-accent transition-colors text-base">→</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="font-body text-sm text-muted italic mt-6 border-l-2 border-edge pl-4">
            Not sure which category your project falls into? Reach out. Many projects cross multiple areas, and we handle the whole thing.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-base border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="label mb-3">Recent Work</p>
              <h2 className="font-display font-800 text-4xl md:text-5xl uppercase tracking-tightest text-fore leading-none">
                Featured Projects
              </h2>
            </div>
            <Link href="/gallery" className="btn-outline text-xs">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map(({ slug, title, type, location, cover }, i) => (
              <Link key={i} href={`/projects/${slug}`} className="card group cursor-pointer overflow-hidden hover:border-accent/40 transition-colors">
                <div className="bg-surface-2 h-56 border-b border-edge relative overflow-hidden">
                  <img src={cover} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <p className="label mb-1">{type}</p>
                  <h3 className="font-display font-700 text-lg uppercase tracking-wide text-fore">{title}</h3>
                  <p className="font-body text-sm text-muted mt-1">{location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface-2 border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="label mb-3">Client Feedback</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase tracking-tightest text-fore leading-none mb-12">
            What Our Clients Say
          </h2>
          <div className="bg-surface border border-edge p-8 md:p-12 relative max-w-4xl">
            <div className="absolute top-6 right-8 font-display text-6xl text-accent/20 leading-none select-none">&ldquo;</div>
            <p className="font-body text-base text-fore/80 leading-relaxed italic">
              {featuredTestimonial.quote}
            </p>
            <div className="border-t border-edge pt-6 mt-8">
              <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">{featuredTestimonial.name}</p>
              <p className="font-display text-xs uppercase tracking-widest text-muted mt-0.5">{featuredTestimonial.detail}</p>
              <Link href="/projects/shaver-cabin" className="inline-block mt-3 font-display text-xs uppercase tracking-widest text-accent hover:text-accent-light transition-colors">View the Shaver Cabin project →</Link>
            </div>
          </div>

          <div className="bg-surface border border-edge p-8 md:p-12 relative max-w-4xl mt-6">
            <div className="absolute top-6 right-8 font-display text-6xl text-accent/20 leading-none select-none">&ldquo;</div>
            <p className="font-body text-base text-fore/80 leading-relaxed italic">
              Ascent Construction helped me remodel a fifty-year-old barn into a luxury residential living space. Ascent was there from design through completion, always answering questions and making meaningful design recommendations. I wholeheartedly recommend Ascent for even the most complicated construction projects.
            </p>
            <div className="border-t border-edge pt-6 mt-8">
              <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">LtCol James W. Weirick, USMC (Ret.), Esq.</p>
              <p className="font-display text-xs uppercase tracking-widest text-muted mt-0.5">Barn Conversion</p>
              <Link href="/projects/barn-to-residence" className="inline-block mt-3 font-display text-xs uppercase tracking-widest text-accent hover:text-accent-light transition-colors">View the Barn to Residence project →</Link>
            </div>
          </div>

          <div className="bg-surface border border-edge p-8 md:p-12 relative max-w-4xl mt-6">
            <div className="absolute top-6 right-8 font-display text-6xl text-accent/20 leading-none select-none">&ldquo;</div>
            <p className="font-body text-base text-fore/80 leading-relaxed italic">
              Ascent completed both our bar remodel and the new build of the pool house for us. Working with the Ascent Construction team was an outstanding experience from start to finish. Their professionalism, attention to detail, and commitment to quality were evident throughout the entire project. The team communicated clearly, kept us informed at every stage, and consistently delivered on their promises. What impressed me most was their ability to handle challenges efficiently while maintaining a high standard of workmanship. Everyone on the team was knowledgeable, responsive, and genuinely invested in ensuring the project&apos;s success. They completed the work on schedule, stayed organized, and made the entire process smooth and stress-free. I would highly recommend Ascent Construction to anyone looking for a reliable, skilled, and customer-focused construction company. It was a pleasure working with such a dedicated team, and I would gladly work with them again on future projects. From the initial planning stages through project completion, their team demonstrated strong communication, attention to detail, and a genuine commitment to customer satisfaction. They consistently met expectations, addressed questions and concerns promptly, and delivered results that reflected a high level of craftsmanship. Their ability to stay organized, maintain timelines, and provide a smooth, stress-free experience made them stand out. Anyone looking for a trustworthy construction partner can feel confident choosing Ascent Construction.
            </p>
            <div className="border-t border-edge pt-6 mt-8">
              <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">Alisa Emmett</p>
              <p className="font-display text-xs uppercase tracking-widest text-muted mt-0.5">Fresno, CA · Wine Bar &amp; Pool House</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3">
                <Link href="/projects/wine-bar" className="font-display text-xs uppercase tracking-widest text-accent hover:text-accent-light transition-colors">View the Wine Bar →</Link>
                <Link href="/projects/pool-house" className="font-display text-xs uppercase tracking-widest text-accent hover:text-accent-light transition-colors">View the Pool House →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-base">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-surface border border-edge h-80 overflow-hidden order-2 md:order-1">
              <img src="/patrick.png" alt="Patrick Steele" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <p className="label mb-4">About Patrick Steele</p>
              <h2 className="font-display font-800 text-4xl md:text-5xl uppercase tracking-tightest text-fore leading-none mb-6">
                40 Years in the Field.<br />
                <span className="text-accent">On Your Job.</span>
              </h2>
              <p className="font-body text-base text-muted leading-relaxed mb-4">
                Patrick founded Ascent Construction in 2021 after four decades of hands-on work across residential, ranch, and commercial projects throughout California. That experience is what you are hiring when you call Ascent.
              </p>
              <p className="font-body text-base text-muted leading-relaxed mb-8">
                No middlemen. No handoffs. You get direct access to the person running your job, from the first call to the final walkthrough.
              </p>
              <Link href="/about" className="btn-primary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


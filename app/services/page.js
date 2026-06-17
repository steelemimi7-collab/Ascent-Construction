import Link from 'next/link';

export const metadata = {
  title: 'Services | Ascent Construction Group',
  description: 'Custom homes, ranch builds, outdoor living, and commercial construction throughout the Central Valley.',
};

const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    desc: 'Custom homes, cabins, new construction, and large-scale remodels. We work closely with you to build something that fits your vision, your property, and the way you live.',
    detail: 'From site prep and foundation through framing, finishes, and final walkthrough, we manage the full build with personal attention at every stage.',
    projects: [
      { slug: 'custom-home-fresno', name: 'Custom Home', location: 'Fresno, CA', year: '2024' },
      { slug: 'studio', name: 'Studio', location: 'Sanger, CA', year: '2024', cover: '/studio/studio-08.jpg' },
      { slug: 'project-4', name: 'Project Name', location: 'Clovis, CA', year: '2023' },
    ],
  },
  {
    id: 'mountain',
    title: 'Mountain Homes',
    desc: 'Custom homes and cabins built for mountain terrain. Sierra Nevada foothills, wooded lots, and elevated properties that require a different level of planning and expertise.',
    detail: 'Mountain builds come with unique challenges: steep grades, remote access, weather exposure, and site conditions that vary dramatically from flatland construction. We plan for all of it from the start.',
    projects: [
      { slug: 'project-4', name: 'Project Name', location: 'Oakhurst, CA', year: '2024' },
      { slug: 'project-5', name: 'Project Name', location: 'Bass Lake, CA', year: '2023' },
      { slug: 'shaver-cabin', name: 'Shaver Cabin', location: 'Shaver Lake, CA', year: '2025', cover: '/ruiz-cabin/ruiz-cabin-lower-13.jpg' },
    ],
  },
  {
    id: 'outdoor',
    title: 'Outdoor Living & Recreation',
    desc: 'Decks, covered patios, water features, pool houses, game rooms, and sports courts made to be used and enjoyed year-round.',
    detail: 'Whether you want a low-maintenance covered patio or a full resort-style backyard, we design and build it around how you want to live outside.',
    projects: [
      { slug: 'outdoor-living-clovis', name: 'Outdoor Living Space', location: 'Clovis, CA', year: '2023' },
      { slug: 'treehouse', name: 'Tree House', location: 'Sanger, CA', year: '2024', cover: '/treehouse/treehouse-01.jpg' },
      { slug: 'project-8', name: 'Project Name', location: 'Visalia, CA', year: '2022' },
    ],
  },
  {
    id: 'firepit',
    title: 'Fire Pits & Outdoor Fire Features',
    desc: 'Custom-built fire pits, outdoor fireplaces, and fire features designed to be the centerpiece of your outdoor space.',
    detail: 'We build everything from simple gas fire pits to elaborate stone outdoor fireplaces, integrated seating walls, and full fire-and-water feature combinations.',
    projects: [
      { slug: 'project-5', name: 'Project Name', location: 'Fresno, CA', year: '2024' },
      { slug: 'project-6', name: 'Project Name', location: 'Clovis, CA', year: '2024' },
      { slug: 'project-7', name: 'Project Name', location: 'Madera, CA', year: '2023' },
    ],
  },
  {
    id: 'ranch',
    title: 'Ranch & Agricultural',
    desc: 'Land clearing, fencing, irrigation, shops, pole barns, arenas, and agricultural buildings. Structures that are tough, practical, and built for the long run.',
    detail: 'We understand the demands of working land. Every build is designed to handle real use: livestock, equipment, weather, and the kind of wear that comes with a working property.',
    projects: [
      { slug: 'ranch-shop-madera', name: 'Ranch Shop & Arena', location: 'Madera, CA', year: '2024' },
      { slug: 'pasture', name: 'Horse Barns & Pasture', location: 'Sanger, CA', year: '2023', cover: '/pasture/pasture-02.png' },
      { slug: 'project-9', name: 'Project Name', location: 'Hanford, CA', year: '2022' },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial & Specialty',
    desc: 'Office tenant improvements, build-outs, barndominiums, demolition, and off-grid systems, with the same focus and craftsmanship applied to every job.',
    detail: "Whether it's a business space or a one-of-a-kind build, we bring the same attention to detail and project management discipline as we do to our residential work.",
    projects: [
      { slug: 'project-6', name: 'Project Name', location: 'Fresno, CA', year: '2024' },
      { slug: 'project-7', name: 'Project Name', location: 'Visalia, CA', year: '2023' },
      { slug: 'project-8', name: 'Project Name', location: 'Bakersfield, CA', year: '2022' },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">What We Build</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none max-w-3xl">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl mt-6 leading-relaxed">
            From custom homes to ranch infrastructure. Every project managed with the same commitment to quality, clear timelines, and honest communication.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map(({ id, title, desc, detail, projects }, idx) => (
        <section key={id} id={id} className={`border-b border-edge ${idx % 2 === 0 ? 'bg-surface' : 'bg-base'}`}>
          <div className="max-w-7xl mx-auto px-6 py-20">

            {/* Section header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="label mb-3">
                  {String(idx + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </p>
                <h2 className="font-display font-800 text-3xl md:text-4xl uppercase tracking-tightest text-fore leading-none mb-6">
                  {title}
                </h2>
                <p className="font-body text-base text-fore/80 leading-relaxed mb-4">{desc}</p>
                <p className="font-body text-sm text-muted leading-relaxed mb-8">{detail}</p>
                <Link href="/contact" className="btn-primary text-xs">Discuss a Project</Link>
              </div>
              <div className="flex items-end">
                <p className="font-body text-sm text-muted italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                  Click any project below to see photos and full project details.
                </p>
              </div>
            </div>

            {/* Project photo grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.map(({ slug, name, location, year, cover }) => (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className="card group cursor-pointer overflow-hidden hover:border-accent/40 transition-colors"
                >
                  <div className="bg-surface-2 h-48 flex items-center justify-center border-b border-edge relative overflow-hidden">
                    {cover ? (
                      <img src={cover} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <span className="font-display text-xs tracking-widest uppercase text-muted/40">Project Photo</span>
                    )}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-0.5 bg-accent transition-all duration-300" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">{name}</p>
                      <p className="font-display text-xs tracking-widest text-muted uppercase mt-0.5">{location} · {year}</p>
                    </div>
                    <span className="text-muted group-hover:text-accent transition-colors text-lg">→</span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* Note */}
      <section className="bg-surface-2">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="border-l-2 border-accent pl-6 max-w-2xl">
            <p className="font-body text-base text-muted leading-relaxed italic">
              Not sure which category your project falls into? That is fine. Reach out and we will help you figure out the right approach. Many projects cross multiple areas, and we are set up to handle the whole thing.
            </p>
            <Link href="/contact" className="btn-primary text-xs mt-6 inline-block">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
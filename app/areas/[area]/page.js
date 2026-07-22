import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AREAS, AREA_SLUGS } from '@/lib/areas';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return AREA_SLUGS.map((area) => ({ area }));
}

export function generateMetadata({ params }) {
  const data = AREAS[params.area];
  if (!data) {
    return buildMetadata({
      title: 'Service Area Not Found | Ascent Construction Group',
      description: 'This service area page could not be found.',
      path: `/areas/${params.area}`,
    });
  }
  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/areas/${params.area}`,
  });
}

export default function AreaPage({ params }) {
  const data = AREAS[params.area];
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: `${data.city}, CA`, path: `/areas/${params.area}` },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Service Area</p>
          <h1 className="font-display font-800 text-4xl md:text-6xl uppercase tracking-tightest text-fore leading-none max-w-4xl">
            {data.h1}
          </h1>
          <p className="font-body text-lg text-muted max-w-2xl mt-6 leading-relaxed">{data.intro}</p>
        </div>
      </section>

      {/* Projects built here */}
      <section className="bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="label mb-3">Completed Work in {data.city}</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl uppercase tracking-tightest text-fore leading-none mb-10">
            Projects We Have Built Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="card group p-6 block hover:border-accent/40 transition-colors"
              >
                <h3 className="font-display font-700 text-lg uppercase tracking-wide text-fore mb-2 group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-3">{p.blurb}</p>
                <span className="font-display text-xs uppercase tracking-widest text-accent">View the project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services + CTA */}
      <section className="bg-base">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="label mb-4">What We Build in {data.city}</p>
            <ul className="space-y-3">
              {data.services.map((s) => (
                <li key={s} className="font-body text-base text-fore/80 border-l-2 border-accent/30 pl-4 leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-body text-base text-muted leading-relaxed mb-6">{data.closing}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start a Conversation</Link>
              <Link href="/gallery" className="btn-outline">See All Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Ascent Construction Group',
};

export default function NotFound() {
  return (
    <section className="min-h-screen bg-base flex items-center justify-center pt-20 pb-20 px-6">
      <div className="text-center max-w-xl">
        <p className="label mb-4">Error 404</p>
        <h1 className="font-display font-800 text-6xl md:text-8xl uppercase tracking-tightest text-fore leading-none mb-6">
          Page <span className="text-accent">Not Found</span>
        </h1>
        <p className="font-body text-base text-muted leading-relaxed mb-10">
          The page you are looking for does not exist or may have moved. Use the links
          below to get back on track, or reach out and we will point you in the right direction.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services" className="btn-outline">View Our Services</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

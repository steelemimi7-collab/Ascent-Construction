import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Contact Ascent Construction | Central Valley, California',
  description:
    "Reach Ascent Construction Group for custom homes, ranch, outdoor, and commercial projects across California's Central Valley. Call or send a message.",
  path: '/contact',
});

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      {children}
    </>
  );
}

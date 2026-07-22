import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Project Gallery | Central Valley Construction | Ascent',
  description:
    "Browse completed Ascent Construction projects across California's Central Valley and Sierra, from custom homes and cabins to ranch and outdoor builds.",
  path: '/gallery',
});

export default function GalleryLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])} />
      {children}
    </>
  );
}

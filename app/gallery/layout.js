import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Project Gallery | Central Valley Construction | Ascent',
  description:
    "Browse completed Ascent Construction projects across California's Central Valley and Sierra, from custom homes and cabins to ranch and outdoor builds.",
  path: '/gallery',
});

export default function GalleryLayout({ children }) {
  return children;
}

import { SITE_NAME } from '@/lib/site';

export const DEFAULT_OG_IMAGE = '/og-default.png';

// Builds a full metadata object: title, description, a self-referencing canonical,
// Open Graph, and Twitter card. Paths are relative; metadataBase (set in the root
// layout) resolves canonical and image URLs to absolute self-referencing links.
export function buildMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

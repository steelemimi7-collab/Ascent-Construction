import { SITE_URL } from '@/lib/site';
import { PROJECT_SLUGS } from '@/lib/projects';
import { AREA_SLUGS } from '@/lib/areas';

export default function sitemap() {
  const lastModified = new Date();

  const pages = ['', '/about', '/services', '/gallery', '/faq', '/contact', '/privacy', '/accessibility'];

  const staticEntries = pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const areaEntries = AREA_SLUGS.map((slug) => ({
    url: `${SITE_URL}/areas/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectEntries = PROJECT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...areaEntries, ...projectEntries];
}

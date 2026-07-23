import {
  SITE_URL,
  SITE_NAME,
  PHONE,
  EMAIL,
  LICENSE_NUMBER,
  SERVICE_AREAS,
  BUSINESS_DESCRIPTION,
} from '@/lib/site';

const BUSINESS_ID = `${SITE_URL}/#business`;

// Site-wide GeneralContractor. No address (not confirmed), no sameAs (no confirmed
// social profiles), and no aggregateRating (no real review source to point to).
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    description: BUSINESS_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/og-default.png`,
    logo: `${SITE_URL}/Logo.png`,
    identifier: {
      '@type': 'PropertyValue',
      name: 'CSLB License',
      value: LICENSE_NUMBER,
    },
    areaServed: SERVICE_AREAS.map((area) => ({ '@type': 'Place', name: `${area}, CA` })),
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function projectSchema({ slug, title, type, location, description, hero }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/projects/${slug}#project`,
    name: title,
    description,
    url: `${SITE_URL}/projects/${slug}`,
    about: type,
    creator: { '@type': 'GeneralContractor', '@id': BUSINESS_ID, name: SITE_NAME },
    provider: { '@id': BUSINESS_ID },
  };
  if (location) data.contentLocation = { '@type': 'Place', name: location };
  if (hero) data.image = `${SITE_URL}${hero}`;
  return data;
}

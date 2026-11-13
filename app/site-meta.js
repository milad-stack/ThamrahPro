import { content, CONTACT } from './content';

export const SITE_URL = 'https://thamrahpro.com';

export function buildMetadata(locale) {
  const t = content[locale];
  const path = locale === 'ar' ? '/ar' : '/';
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: 'Thamrah Pro',
    alternates: {
      canonical: path,
      languages: { en: '/', ar: '/ar', 'x-default': '/' },
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      siteName: 'Thamrah Pro',
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === 'ar' ? 'ar_JO' : 'en_US',
      alternateLocale: [locale === 'ar' ? 'en_US' : 'ar_JO'],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport = { themeColor: '#0B2F6B' };

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: content.en.legalName,
    alternateName: ['Thamrah Pro', content.ar.legalName],
    url: SITE_URL,
    logo: `${SITE_URL}/logo-color.svg`,
    image: `${SITE_URL}/og-image.png`,
    description: content.en.meta.description,
    slogan: content.en.footer.tagline,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    address: { '@type': 'PostalAddress', addressLocality: 'Amman', addressCountry: 'JO' },
    areaServed: { '@type': 'Country', name: 'Jordan' },
    knowsLanguage: ['ar', 'en'],
    sameAs: [
      'https://www.facebook.com/ThamrahPro',
      'https://www.linkedin.com/company/thamrahpro/',
    ],
  };
}

import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const SITE_URL = 'https://thamrahpro.com';
const TITLE = 'Thamrah Pro | Managed IT, Cybersecurity & Network Services in Jordan';
const DESCRIPTION =
  'Thamrah Professionals for Information Technology provides managed IT support, cybersecurity, networks, cloud and business email for companies across Jordan. Remote and on-site support.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Thamrah Pro',
  keywords: [
    'IT services Jordan',
    'managed IT services Amman',
    'cybersecurity Jordan',
    'network setup Jordan',
    'IT support company Jordan',
    'شركة خدمات تقنية المعلومات الأردن',
    'دعم فني للشركات عمان',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Thamrah Pro',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    alternateLocale: ['ar_JO'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thamrah Professionals for Information Technology: managed IT, cybersecurity and infrastructure across Jordan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#020617',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Thamrah Professionals for Information Technology',
  alternateName: ['Thamrah Pro', 'ثمرة المحترفون لتكنولوجيا المعلومات'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  email: 'info@thamrahpro.com',
  telephone: '+962799150175',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amman',
    addressCountry: 'JO',
  },
  areaServed: { '@type': 'Country', name: 'Jordan' },
  sameAs: [
    'https://www.facebook.com/ThamrahPro',
    'https://www.linkedin.com/company/thamrahpro',
    'https://instagram.com/thamrahpro',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import '../globals.css';
import { Analytics } from '@vercel/analytics/next';
import { montserrat, plexArabic } from '../fonts';
import { organizationJsonLd } from '../site-meta';

export default function RootShell({ lang, dir, children }) {
  return (
    <html lang={lang} dir={dir} className={`${montserrat.variable} ${plexArabic.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

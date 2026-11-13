import localFont from 'next/font/local';

// Brand typefaces (SIL OFL), self-hosted from the Thamrah Pro brand package.
export const montserrat = localFont({
  src: [
    { path: './fonts/montserrat-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/montserrat-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/montserrat-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/montserrat-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const plexArabic = localFont({
  src: [
    { path: './fonts/plexar-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/plexar-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/plexar-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/plexar-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-plex-arabic',
  display: 'swap',
  fallback: ['Tahoma', 'Arial', 'sans-serif'],
});

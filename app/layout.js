import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Thamrah Pro',
  description: 'IT Services in Jordan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: 'Thamrah Pro',
  description: 'IT Services in Jordan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

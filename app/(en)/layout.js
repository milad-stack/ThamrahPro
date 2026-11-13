import RootShell from '../components/RootShell';
import { buildMetadata } from '../site-meta';

export const metadata = buildMetadata('en');
export { viewport } from '../site-meta';

export default function EnglishLayout({ children }) {
  return (
    <RootShell lang="en" dir="ltr">
      {children}
    </RootShell>
  );
}

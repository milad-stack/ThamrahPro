import RootShell from '../../components/RootShell';
import { buildMetadata } from '../../site-meta';

export const metadata = buildMetadata('ar');
export { viewport } from '../../site-meta';

export default function ArabicLayout({ children }) {
  return (
    <RootShell lang="ar" dir="rtl">
      {children}
    </RootShell>
  );
}

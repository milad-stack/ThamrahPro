export default function sitemap() {
  const languages = { en: 'https://thamrahpro.com/', ar: 'https://thamrahpro.com/ar' };
  return [
    { url: 'https://thamrahpro.com/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1, alternates: { languages } },
    { url: 'https://thamrahpro.com/ar', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, alternates: { languages } },
  ];
}

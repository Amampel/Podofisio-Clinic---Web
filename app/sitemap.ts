import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.podofisioclinic.com';
  
  const routes = [
    { url: '', priority: 1, changeFrequency: 'monthly' },
    { url: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/tarifas', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/nosotros', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  ] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

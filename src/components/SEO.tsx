interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO(_props: SEOProps) {
  // In Next.js, SEO is handled via `export const metadata` in each `app/*/page.tsx`.
  // To keep backwards compatibility with the existing pages that import this component,
  // we simply return null here. It won't render anything or crash.
  return null;
}

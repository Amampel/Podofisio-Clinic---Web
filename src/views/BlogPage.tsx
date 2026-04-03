import Blog from '../components/Blog';
import SEO from '../components/SEO';

export default function BlogPage() {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <SEO
        title="Blog de Salud y Biomecánica | Podofisio Clinic"
        description="Consejos de expertos en fisioterapia y podología. Aprende sobre prevención de lesiones, biomecánica y salud de la extremidad inferior."
      />
      <Blog />
    </div>
  );
}

import Services from '../components/Services';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <SEO 
        title="Servicios de Alta Resolución | Fisioterapia y Podología en Terrassa"
        description="Especialización en extremidad inferior: Ecografía clínica, EPI, EPTE, Indiba, biomecánica digital y plantillas 3D en Terrassa."
      />
      <Services />
    </div>
  );
}

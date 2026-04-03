import Pricing from '../components/Pricing';
import SEO from '../components/SEO';

export default function PricingPage() {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <SEO
        title="Tarifas y Precios | Podofisio Clinic Terrassa"
        description="Consulta nuestras tarifas transparentes para fisioterapia avanzada y podología clínica en Terrassa. Bonos de sesiones y presupuestos personalizados."
      />
      <Pricing />
    </div>
  );
}

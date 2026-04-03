import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <SEO
        title="Contacto y Cita Previa | Podofisio Clinic Terrassa"
        description="Pide tu cita en Podofisio Clinic Terrassa. Ubicados en Carrer de la Salut, 42. Teléfono, WhatsApp y formulario de contacto."
      />
      <Contact />
    </div>
  );
}

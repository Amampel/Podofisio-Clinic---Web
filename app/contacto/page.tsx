import type { Metadata } from 'next';
import ContactPage from "../../src/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita tu cita en Podofisio Clinic Terrassa. Contacta con nosotros para resolver dudas sobre nuestros servicios de podología y fisioterapia.",
};

export default function Page() {
  return <ContactPage />;
}

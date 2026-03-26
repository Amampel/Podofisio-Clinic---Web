import type { Metadata } from 'next';
import ServicesPage from "../../src/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Tratamientos avanzados en fisioterapia, podología clínica y estudio biomecánico para recuperar tu movilidad sin dolor en Terrassa.",
};

export default function Page() {
  return <ServicesPage />;
}

import type { Metadata } from 'next';
import AboutPage from "../../src/pages/AboutPage";

export const metadata: Metadata = {
  title: "Nosotros - El Equipo",
  description: "Conoce a nuestro equipo interdisciplinar de fisioterapeutas y podólogos expertos en Terrassa. Orientados en solucionar la raíz de tu dolor.",
};

export default function Page() {
  return <AboutPage />;
}

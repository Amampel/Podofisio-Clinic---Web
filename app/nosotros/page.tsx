import type { Metadata } from "next";
import AboutPage from "../../src/views/AboutPage";

export const metadata: Metadata = {
  title: "Nuestro Equipo de Podólogos y Fisioterapeutas en Terrassa",
  description:
    "Conoce al equipo de podólogos y fisioterapeutas especializados de Podofisio Clinic Terrassa. Más de 15 años de experiencia clínica combinada en patologías de la extremidad inferior.",
  keywords: [
    "podólogo experto Terrassa",
    "fisioterapeuta titulado Terrassa",
    "equipo fisioterapeutas Terrassa",
    "podólogos colegiados Terrassa",
    "clínica podología Terrassa equipo",
    "mejor podólogo Terrassa",
    "mejor fisioterapeuta Terrassa",
    "fisioterapeutas especializados Terrassa",
    "podología clínica Terrassa profesional",
    "Podofisio Clinic equipo",
  ],
  alternates: {
    canonical: "/nosotros",
  },
};

export default function Page() {
  return <AboutPage />;
}

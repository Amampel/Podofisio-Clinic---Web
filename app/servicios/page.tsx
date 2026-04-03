import type { Metadata } from "next";
import ServicesPage from "../../src/views/ServicesPage";

export const metadata: Metadata = {
  title: "Servicios de Podología y Fisioterapia en Terrassa",
  description:
    "Servicios de podología y fisioterapia en Terrassa: ecografía clínica, EPI/EPTE, Radiofrecuencia Indiba, biomecánica digital, plantillas 3D y cirugía ungueal. Tecnología de vanguardia.",
  keywords: [
    "servicios podología Terrassa",
    "servicios fisioterapia Terrassa",
    "ecografía clínica Terrassa",
    "EPI EPTE Terrassa",
    "electrólisis percutánea Terrassa",
    "radiofrecuencia Indiba Terrassa",
    "biomecánica digital Terrassa",
    "estudio de la pisada Terrassa",
    "plantillas 3D Terrassa",
    "plantillas personalizadas Terrassa",
    "cirugía ungueal Terrassa",
    "uñas encarnadas tratamiento Terrassa",
    "fisioterapia invasiva Terrassa",
    "tendinopatía tratamiento Terrassa",
    "fascitis plantar tratamiento Terrassa",
    "punción seca Terrassa",
  ],
  alternates: {
    canonical: "/servicios",
  },
};

export default function Page() {
  return <ServicesPage />;
}

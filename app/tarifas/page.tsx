import type { Metadata } from "next";
import PricingPage from "../../src/views/PricingPage";

export const metadata: Metadata = {
  title: "Precios y Tarifas de Podología y Fisioterapia en Terrassa",
  description:
    "Consulta los precios de podología y fisioterapia en Terrassa. Tarifas transparentes para sesiones individuales, bonos y estudio biomecánico. Sin sorpresas.",
  keywords: [
    "precio podólogo Terrassa",
    "precio fisioterapia Terrassa",
    "tarifas podología Terrassa",
    "tarifas fisioterapia Terrassa",
    "cuánto cuesta podólogo Terrassa",
    "cuánto cuesta fisioterapia Terrassa",
    "sesión fisioterapia precio Terrassa",
    "primera consulta podología Terrassa",
    "bono sesiones fisioterapia Terrassa",
    "precio estudio biomecánico Terrassa",
    "precio plantillas ortopédicas Terrassa",
    "podólogo barato Terrassa",
    "fisioterapia económica Terrassa",
  ],
  alternates: {
    canonical: "/tarifas",
  },
};

export default function Page() {
  return <PricingPage />;
}

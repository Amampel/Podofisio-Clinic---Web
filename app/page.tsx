import type { Metadata } from "next";
import Home from "../src/views/Home";

export const metadata: Metadata = {
  title: "Podólogo y Fisioterapeuta en Terrassa",
  description:
    "Clínica de podología y fisioterapia en Terrassa. Especialistas en fascitis plantar, uñas encarnadas, biomecánica del pie, plantillas ortopédicas y fisioterapia deportiva. Pide cita hoy.",
  keywords: [
    "podólogo Terrassa",
    "fisioterapeuta Terrassa",
    "clínica podología Terrassa",
    "fisioterapia Terrassa",
    "fascitis plantar Terrassa",
    "uñas encarnadas Terrassa",
    "plantillas ortopédicas Terrassa",
    "estudio biomecánico Terrassa",
    "fisioterapia deportiva Terrassa",
    "dolor de pie Terrassa",
    "podologia Terrassa",
    "fisioteràpia Terrassa",
    "podòleg Terrassa",
    "mejor podólogo Terrassa",
    "clínica podología fisioterapia Terrassa",
    "dolor talón Terrassa",
    "extremidad inferior Terrassa",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <Home />;
}

import type { Metadata } from "next";
import BlogPage from "../../src/views/BlogPage";

export const metadata: Metadata = {
  title: "Blog de Podología y Fisioterapia en Terrassa",
  description:
    "Artículos de podología y fisioterapia escritos por los especialistas de Podofisio Clinic Terrassa. Aprende sobre fascitis plantar, biomecánica, lesiones deportivas y cuidado del pie.",
  keywords: [
    "blog podología Terrassa",
    "blog fisioterapia Terrassa",
    "fascitis plantar tratamiento casero",
    "qué es la biomecánica del pie",
    "cómo prevenir uñas encarnadas",
    "ejercicios para el dolor de talón",
    "dolor talón causas",
    "plantillas personalizadas para qué sirven",
    "fisioterapia deportiva consejos",
    "lesiones pie running",
    "consejos podología",
    "salud del pie",
    "tendinopatía aquílea tratamiento",
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return <BlogPage />;
}

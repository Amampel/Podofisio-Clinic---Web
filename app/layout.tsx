import type { Metadata } from "next";
import "../src/index.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import FloatingActions from "../src/components/FloatingActions";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.podofisioclinic.com"),
  title: {
    template: "%s | Podofisio Clinic Terrassa",
    default: "Podología y Fisioterapia en Terrassa | Podofisio Clinic",
  },
  description: "Podofisio Clinic en Terrassa: Especialistas en patologías de la extremidad inferior, podología clínica, fisioterapia y estudio biomecánico. ¡Pide tu cita!",
  openGraph: {
    title: "Podofisio Clinic | Especialistas en Extremidad Inferior en Terrassa",
    description: "Recupera tu salud integral con nuestros servicios de podología y fisioterapia experta en Terrassa. Clínica referente en el tratamiento de la pierna y el pie.",
    url: "https://www.podofisioclinic.com/",
    siteName: "Podofisio Clinic",
    images: [
      {
        url: "https://www.podofisioclinic.com/og-image.jpg",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podología y Fisioterapia Especializada en Terrassa",
    description: "Podofisio Clinic en Terrassa: Especialistas en patologías de la extremidad inferior, podología clínica, fisioterapia deportiva y plantillas. Reserva tu visita.",
    images: ["https://www.podofisioclinic.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}

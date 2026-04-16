import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "../src/index.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import FloatingActions from "../src/components/FloatingActions";
import Maintenance from "../src/components/Maintenance";

const UNDER_CONSTRUCTION = true;


export const metadata: Metadata = {
  metadataBase: new URL("https://www.podofisioclinic.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Podofisio Clinic Terrassa",
    default: "Podólogo y Fisioterapeuta en Terrassa | Podofisio Clinic",
  },
  description:
    "Clínica especializada en podología y fisioterapia en Terrassa. Tratamos fascitis plantar, uñas encarnadas, lesiones deportivas y patologías de la extremidad inferior. Pide tu cita.",
  keywords: [
    "podólogo Terrassa",
    "fisioterapeuta Terrassa",
    "podología Terrassa",
    "fisioterapia Terrassa",
    "clínica podología fisioterapia Terrassa",
    "podologia Terrassa",
    "fisioteràpia Terrassa",
    "podòleg Terrassa",
    "especialista pie Terrassa",
    "Podofisio Clinic",
  ],
  openGraph: {
    title: "Podólogo y Fisioterapeuta en Terrassa | Podofisio Clinic",
    description:
      "Clínica especializada en podología y fisioterapia en Terrassa. Tratamos fascitis plantar, uñas encarnadas, lesiones deportivas y patologías de la extremidad inferior.",
    url: "https://www.podofisioclinic.com/",
    siteName: "Podofisio Clinic",
    images: [
      {
        url: "https://www.podofisioclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Podofisio Clinic - Podología y Fisioterapia en Terrassa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podólogo y Fisioterapeuta en Terrassa | Podofisio Clinic",
    description:
      "Clínica especializada en podología y fisioterapia en Terrassa. Fascitis plantar, uñas encarnadas, biomecánica, plantillas y más. Reserva tu visita.",
    images: ["https://www.podofisioclinic.com/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Podofisio Clinic",
  description:
    "Clínica especializada en podología y fisioterapia en Terrassa. Tratamos patologías de la extremidad inferior con tecnología avanzada: ecografía, EPI/EPTE, Indiba, biomecánica digital y plantillas 3D.",
  url: "https://www.podofisioclinic.com",
  logo: "https://www.podofisioclinic.com/assets/images/podofisio_logo.png",
  image: "https://www.podofisioclinic.com/og-image.jpg",
  telephone: "+34937000000",
  email: "hola@podofisio.clinic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer de la Salut, 42",
    addressLocality: "Terrassa",
    postalCode: "08221",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "41.5634",
    longitude: "2.0089",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  medicalSpecialty: ["Podiatry", "PhysicalTherapy"],
  availableService: [
    { "@type": "MedicalTherapy", "name": "Podología Clínica" },
    { "@type": "MedicalTherapy", "name": "Fisioterapia" },
    { "@type": "MedicalTherapy", "name": "Biomecánica Digital" },
    { "@type": "MedicalTherapy", "name": "Plantillas 3D Élite" },
    { "@type": "MedicalTherapy", "name": "EPI / EPTE Guiada" },
    { "@type": "MedicalTherapy", "name": "Radiofrecuencia Indiba" },
    { "@type": "MedicalTherapy", "name": "Ecografía Clínica" },
    { "@type": "MedicalTherapy", "name": "Cirugía Ungueal" },
  ],
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    { "@type": "City", "name": "Terrassa" },
    { "@type": "City", "name": "Rubí" },
    { "@type": "City", "name": "Sant Cugat del Vallès" },
    { "@type": "City", "name": "Sabadell" },
    { "@type": "AdministrativeArea", "name": "Vallès Occidental" },
  ],
  sameAs: [
    "https://www.instagram.com/podofisioclinic",
    "https://www.facebook.com/podofisioclinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {UNDER_CONSTRUCTION ? (
          <Maintenance />
        ) : (
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
            <FloatingActions />
            <SpeedInsights />
            <Analytics />
          </div>
        )}
      </body>
    </html>
  );
}

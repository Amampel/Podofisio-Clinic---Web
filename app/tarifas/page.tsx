import type { Metadata } from 'next';
import PricingPage from "../../src/pages/PricingPage";

export const metadata: Metadata = {
  title: "Tarifas",
  description: "Precios transparentes de nuestras sesiones de fisioterapia, podología y nuestro estudio de la pisada en Terrassa.",
};

export default function Page() {
  return <PricingPage />;
}

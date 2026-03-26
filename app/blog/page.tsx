import type { Metadata } from 'next';
import BlogPage from "../../src/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos y novedades sobre fisioterapia deportiva, cuidados del pie, biomecánica y salud integral redactados por los expertos de Podofisio Clinic.",
};

export default function Page() {
  return <BlogPage />;
}

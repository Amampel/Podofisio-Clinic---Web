import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-lowest w-full py-20 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-lg font-black text-white mb-4 block font-headline tracking-tighter uppercase">Podofisio Clinic</Link>
            <p className="font-body text-sm leading-relaxed text-neutral-400">
              Cuidado avanzado para tus pies y extremidad inferior. Tecnología y profesionalismo en el corazón de Terrassa.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-white uppercase tracking-widest mb-6 block">Navegación</span>
            <ul className="space-y-4">
              <li><Link href="/servicios" className="text-sm text-neutral-400 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/nosotros" className="text-sm text-neutral-400 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/tarifas" className="text-sm text-neutral-400 hover:text-white transition-colors">Tarifas</Link></li>
              <li><Link href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-bold text-white uppercase tracking-widest mb-6 block">Contacto</span>
            <ul className="space-y-4">
              <li className="text-sm text-neutral-400">Carrer de la Salut, 42, Terrassa</li>
              <li className="text-sm text-neutral-400">+34 937 000 000</li>
              <li className="text-sm text-neutral-400">hola@podofisio.clinic</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-bold text-white uppercase tracking-widest mb-6 block">Síguenos</span>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-neutral-500">© 2024 Podofisio Clinic. Precision in Motion.</span>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Microscope, Activity } from 'lucide-react';
import Link from "next/link";
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const stats = [
  { label: 'Años de Experiencia', value: '15+' },
  { label: 'Pacientes Satisfechos', value: '10k+' },
  { label: 'Tecnologías Propias', value: '8' },
  { label: 'Especialistas', value: '6' },
];

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <SEO
        title="Podofisio Clinic Terrassa | Especialistas en Extremidad Inferior"
        description="Clínica en Terrassa especializada en fisioterapia invasiva y podología para la extremidad inferior. Biomecánica digital y recuperación avanzada."
      />
      <Hero />

      {/* Philosophy Section */}
      <section className="py-32 bg-surface-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary block mb-4">Nuestra Filosofía</span>
              <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-tight">
                Ciencia, <span className="text-secondary">Tecnología</span> y Humanidad.
              </h2>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10">
                En Podofisio Clinic entendemos que cada paso cuenta. No solo tratamos el pie, sino la biomecánica completa de tu cuerpo. Nuestro enfoque multidisciplinar combina la podología deportiva con la fisioterapia avanzada para garantizar una recuperación real y duradera.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Garantía Clínica</h4>
                    <p className="text-on-surface-variant text-sm font-light">Protocolos basados en la última evidencia científica.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Alta Tecnología</h4>
                    <p className="text-on-surface-variant text-sm font-light">Equipamiento de diagnóstico por imagen de última generación.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                  alt="Clinical Excellence"
                  className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-2xl border border-secondary/20 hidden md:block">
                <p className="text-secondary font-headline text-6xl font-extrabold tracking-tighter mb-2">98%</p>
                <p className="text-white text-sm font-light uppercase tracking-widest">Éxito en tratamientos crónicos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}-${stat.label}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-secondary font-headline text-5xl font-extrabold mb-2">{stat.value}</p>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services CTA */}
      <section className="py-32 bg-surface-lowest">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-8 text-center"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
            ¿Listo para volver a <span className="text-secondary">moverte sin dolor?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/servicios"
              className="bg-white text-background px-12 py-5 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-secondary transition-all flex items-center justify-center gap-3"
            >
              Explorar Servicios <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="border border-white/10 text-white px-12 py-5 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Reservar Cita
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

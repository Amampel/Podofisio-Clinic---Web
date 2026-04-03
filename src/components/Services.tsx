"use client";
import { motion, useAnimation, useMotionValue } from 'motion/react';
import {
  ArrowRight, ChevronRight,
  Scan, Zap, Activity, Radio, Footprints, ScanLine,
  Droplet, Scissors, Wind,
} from 'lucide-react';
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';

const mainServices = [
  {
    slug: 'ecografia',
    title: 'Ecografía',
    description: 'Diagnóstico por imagen de alta resolución para identificar patologías musculoesqueléticas en tiempo real.',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'epte',
    title: 'EPTE',
    description: 'Electrolisis percutánea terapéutica para regenerar tejido dañado y resolver tendinopatías crónicas bajo control ecográfico.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'recuperacion-funcional',
    title: 'Recuperación Funcional',
    description: 'Fisioterapia y rehabilitación integral para devolverte el movimiento y la función tras lesiones o cirugías.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'indiba',
    title: 'Indiba',
    description: 'Radiofrecuencia terapéutica de 448 kHz que acelera la reparación tisular en profundidad sin dolor.',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'quiropodia',
    title: 'Quiropodía',
    description: 'Tratamiento y cuidado profesional del pie: callos, durezas, uñas y prevención del pie diabético.',
    icon: Footprints,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'estudio-biomecanico',
    title: 'Estudio Biomecánico',
    description: 'Análisis computerizado de la pisada y la marcha para detectar desequilibrios y prevenir lesiones.',
    icon: ScanLine,
    image: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2070&auto=format&fit=crop',
    hasSubServices: true,
  },
];

const biomecSubServices = [
  {
    slug: 'plantillas',
    title: 'Plantillas',
    description: 'Soportes plantares personalizados mediante escáner 3D e impresión aditiva para una corrección biomecánica perfecta.',
    icon: Footprints,
    tag: 'Biomecánica',
  },
  {
    slug: 'prp',
    title: 'PRP',
    description: 'Plasma Rico en Plaquetas para la regeneración de tejidos crónicamente dañados con tus propias células.',
    icon: Droplet,
    tag: 'Medicina Regenerativa',
  },
  {
    slug: 'cirugia-ungueal',
    title: 'Cirugía Ungueal',
    description: 'Resolución definitiva de uñas encarnadas mediante cirugía menor ambulatoria con anestesia local.',
    icon: Scissors,
    tag: 'Cirugía Menor',
  },
  {
    slug: 'tratamientos-complementarios',
    title: 'Presoterapia & Cryopush',
    description: 'Tratamientos complementarios de presoterapia y crioterapia para la recuperación activa y el drenaje linfático.',
    icon: Wind,
    tag: 'Recuperación',
  },
];

export default function Services() {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [itemWidth, setItemWidth] = useState(452);

  useEffect(() => {
    const updateWidth = () => {
      setItemWidth(420 + 32); // 420px card + gap-8 (32px)
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const loopWidth = itemWidth * mainServices.length;

  const startAnimation = async (currentX: number) => {
    if (isDraggingRef.current) return;
    let startX = currentX % loopWidth;
    if (startX > 0) startX -= loopWidth;
    const remainingDistance = Math.abs(-loopWidth - startX);
    const duration = 60 * (remainingDistance / loopWidth);
    try {
      await controls.start({
        x: [startX, -loopWidth],
        transition: { duration, ease: 'linear' },
      });
      if (!isDraggingRef.current && hoveredIndex === null) {
        startAnimation(0);
      }
    } catch (e) {
      // Animation stopped intentionally
    }
  };

  useEffect(() => {
    if (hoveredIndex === null && !isDragging) {
      startAnimation(x.get());
    } else {
      controls.stop();
    }
    return () => controls.stop();
  }, [loopWidth, hoveredIndex, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
    controls.stop();
  };

  const handleDragEnd = (_: any, _info: any) => {
    setIsDragging(false);
    setTimeout(() => { isDraggingRef.current = false; }, 150);
    startAnimation(x.get());
  };

  return (
    <section className="bg-surface-lowest relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <div className="px-8 max-w-7xl mx-auto pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div className="max-w-3xl">
            <span className="font-label text-xs md:text-sm uppercase tracking-[0.2em] text-secondary block mb-4 flex items-center gap-4">
              <span className="w-12 h-px bg-secondary"></span>
              Especialización en Extremidad Inferior
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Servicios de <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">Alta Resolución</span>
            </h2>
            <p className="mt-8 text-on-surface-variant font-light text-xl leading-relaxed max-w-2xl">
              Aplicamos biotecnología avanzada y fisioterapia invasiva para ofrecerte un abordaje clínico premium, encontrando el origen real de tu patología musculoesquelética.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── MOBILE: native CSS scroll + snap ─────────────────────────────── */}
      <div className="md:hidden relative z-10">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-5 pb-4 pt-2">
          {mainServices.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="snap-start flex-shrink-0 w-[78vw] max-w-[300px] aspect-[3/4] relative block active:scale-[0.98] transition-transform duration-150"
            >
              <div className="w-full h-full glass-card rounded-[2rem] p-7 flex flex-col justify-between relative overflow-hidden border border-white/5">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    draggable={false}
                    className="w-full h-full object-cover opacity-20 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />
                </div>

                {/* Top icon */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  {service.hasSubServices && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-secondary/20 bg-secondary/5">
                      <span className="text-secondary/60 text-[10px] uppercase tracking-widest font-medium">4 incluidos</span>
                    </div>
                  )}
                  <div className="mt-5 inline-flex items-center gap-2 text-secondary text-[10px] font-bold uppercase tracking-widest">
                    Ver servicio <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* Right padding sentinel */}
          <div className="flex-shrink-0 w-1" aria-hidden="true" />
        </div>

        {/* Scroll hint dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {mainServices.map((s) => (
            <span key={s.slug} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: Framer Motion infinite carousel ──────────────────────── */}
      <div className="hidden md:block py-8 px-8 relative z-10" ref={containerRef}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-lowest to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-lowest to-transparent z-20 pointer-events-none" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -loopWidth * 2, right: 0 }}
          style={{ x, cursor: isDragging ? 'grabbing' : 'grab' }}
          animate={controls}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="flex gap-8 w-max"
        >
          {[...mainServices, ...mainServices, ...mainServices].map((service, index) => {
            const isHovered = hoveredIndex === index % mainServices.length;
            return (
              <div
                key={`service-carousel-${index}-${service.title}`}
                className="w-[420px] aspect-[4/5] relative group flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index % mainServices.length)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={`/servicios/${service.slug}`}
                  className="block w-full h-full"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onClick={(e) => { if (isDraggingRef.current) e.preventDefault(); }}
                >
                  <div className="w-full h-full glass-card rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 border border-white/5 group-hover:border-secondary/30">
                    <div className="absolute inset-0 w-full h-full bg-surface-base/80 z-0 pointer-events-none">
                      <img
                        src={service.image}
                        alt={service.title}
                        draggable={false}
                        className="w-full h-full object-cover opacity-10 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-30 grayscale group-hover:grayscale-0 select-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />
                    </div>

                    <div className="relative z-10 flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-all duration-500 group-hover:-translate-y-2">
                        <service.icon className="w-8 h-8 text-white group-hover:text-secondary transition-colors duration-500" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden group-hover:bg-secondary/20 group-hover:border-secondary transition-all duration-500">
                        <div className="relative w-5 h-5 flex items-center justify-center">
                          <ArrowRight className="absolute text-white transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0" />
                          <ArrowRight className="absolute text-secondary transition-all duration-500 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-12 transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="font-headline text-3xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-500 pr-4">
                        {service.title}
                      </h3>
                      <p className="text-on-surface-variant font-light leading-relaxed text-base line-clamp-4">
                        {service.description}
                      </p>
                      {service.hasSubServices && (
                        <div className="mt-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-secondary/20 bg-secondary/5">
                          <ChevronRight className="w-3 h-3 text-secondary/60" />
                          <span className="text-secondary/60 text-[10px] uppercase tracking-widest font-medium">4 incluidos</span>
                        </div>
                      )}
                    </div>

                    <div className={`absolute inset-0 -z-10 rounded-[2.5rem] opacity-0 blur-xl transition-opacity duration-500 bg-gradient-to-br from-secondary/40 via-transparent to-secondary/10 ${isHovered ? 'opacity-100' : ''}`} />
                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── SUB-SERVICES: Estudio Biomecánico hub ─────────────────────────── */}
      <div className="bg-background relative z-10">
        {/* Top divider glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-secondary/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 py-24 relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">Estudio Biomecánico</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight">
                Tratamientos <span className="text-secondary">integrados.</span>
              </h2>
              <p className="text-on-surface-variant font-light text-base max-w-sm md:text-right">
                El estudio biomecánico incluye acceso a estos tratamientos especializados.
              </p>
            </div>
          </motion.div>

          {/* 4-card grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {biomecSubServices.map((sub, idx) => (
              <motion.div
                key={sub.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/servicios/${sub.slug}`}
                  className="group flex flex-col h-full glass-card rounded-2xl p-7 border border-white/5 hover:border-secondary/20 transition-all duration-400 relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary/5 via-transparent to-transparent pointer-events-none" />

                  {/* Tag badge */}
                  <div className="flex items-start justify-between mb-6 gap-2">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-400">
                      <sub.icon className="w-5 h-5 text-white/70 group-hover:text-secondary transition-colors duration-400" />
                    </div>
                    {/* Tag */}
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary/50 bg-secondary/5 border border-secondary/10 rounded-full px-2.5 py-1 leading-none whitespace-nowrap group-hover:border-secondary/25 group-hover:text-secondary/80 transition-all duration-400">
                      {sub.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="font-headline font-bold text-white text-lg mb-2 leading-snug group-hover:text-secondary transition-colors duration-400">
                      {sub.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed flex-1">
                      {sub.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-widest group-hover:gap-2.5 transition-all duration-300">
                      Ver tratamiento
                      <ArrowRight className="w-3 h-3 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TECHNOLOGY SECTION ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-surface-base/30 p-8 md:p-16 rounded-[40px] border border-white/5 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Technology"
                className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-80" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 md:-right-8 glass-card p-8 rounded-3xl border border-secondary/20 max-w-[280px] shadow-2xl backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2" />
              <p className="text-secondary font-headline text-5xl md:text-6xl font-bold mb-3 tracking-tighter">+15</p>
              <p className="text-white text-base font-light leading-relaxed">Años de experiencia clínica combinada en el sector de alto rendimiento.</p>
            </motion.div>
          </motion.div>

          <div className="pt-8 md:pt-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight"
            >
              Vanguardia en <span className="text-secondary italic">Tecnología Clínica</span>
            </motion.h3>
            <div className="space-y-10">
              {[
                { num: '01', title: 'Diagnóstico por Imagen Ultra-HD', desc: 'Utilizamos ecógrafos de última generación para una valoración objetiva, milimétrica y precisa de la lesión en tiempo real.' },
                { num: '02', title: 'Terapias Invasivas Guiadas', desc: 'Sistemas EPI y EPTE para regenerar tejidos fibrilares donde las terapias manuales conservadoras no pueden llegar.' },
                { num: '03', title: 'Laboratorio Biomecánico 3D', desc: 'Sistemas ópticos de captura de movimiento y plataformas de presiones nanométricas para un análisis dinámico real.' },
              ].map((item, idx) => (
                <motion.div
                  key={`tech-${idx}-${item.num}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-500">
                    <span className="text-secondary font-headline font-bold text-xl">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-headline text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed text-base font-light max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-px bg-gradient-to-r from-secondary/50 to-transparent mt-12 mb-8 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

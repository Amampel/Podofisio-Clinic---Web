"use client";
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Link from "next/link";

const VIDEO_ID = "AuqCXhA4pVQ";
const YT_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-surface-lowest">

      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />

        {/* YouTube iframe — covers the full section regardless of screen ratio */}
        <iframe
          src={YT_SRC}
          title="Podofisio Clinic background video"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            /* Fill the container keeping 16:9 ratio */
            width: '177.78vh',   /* 100 * 16/9 */
            height: '100vh',
            minWidth: '100%',
            minHeight: '56.25vw', /* 100 * 9/16 */
            opacity: 0.35,
            filter: 'grayscale(1) contrast(1.2)',
            border: 'none',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-6 inline-block"
        >
          <span className="font-headline text-[10px] md:text-xs uppercase tracking-[0.4em] text-secondary font-bold">
            Podología &amp; Fisioterapia de Vanguardia en Terrassa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 md:mb-8 leading-[1] md:leading-[0.9] text-glow"
        >
          Excelencia clínica <br className="hidden md:block" />
          <span className="text-secondary">en cada paso.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-body text-base md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed"
        >
          En Podofisio Clinic, fusionamos la tecnología médica más avanzada con un trato humano excepcional para ofrecerte soluciones definitivas en la salud de tus pies y extremidad inferior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contacto"
            className="w-full sm:w-auto bg-primary text-background px-10 py-4 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all text-center"
          >
            Agenda tu cita
          </Link>
          <Link
            href="/servicios"
            className="w-full sm:w-auto border border-outline-variant text-white px-10 py-4 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all text-center"
          >
            Ver servicios
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
}

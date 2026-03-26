"use client";
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-surface-lowest">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        >
          <source
            src="https://podofisioclinic.com/wp-content/uploads/2026/03/5794352_Coll_wavebreak_Physio_1920x1080.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails */}
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
            alt="Clinical background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="relative z-20 text-center max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-6 inline-block"
        >
          <span className="font-headline text-[10px] md:text-xs uppercase tracking-[0.4em] text-secondary font-bold">
            Podología & Fisioterapia de Vanguardia en Terrassa
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
          <Link href="/contacto" className="w-full sm:w-auto bg-primary text-background px-10 py-4 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all text-center">
            Agenda tu cita
          </Link>
          <Link href="/servicios" className="w-full sm:w-auto border border-outline-variant text-white px-10 py-4 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all text-center">
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

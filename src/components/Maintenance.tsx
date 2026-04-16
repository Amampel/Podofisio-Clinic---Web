"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Maintenance() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#131313] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Blur */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-white rounded-full blur-[150px] pointer-events-none" 
      />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="relative px-8 py-4 glass-card rounded-2xl border-white/10">
            <Image
              src="/assets/images/podofisio_logo.png"
              alt="Podofisio Clinic Logo"
              width={220}
              height={60}
              className="h-auto w-auto brightness-0 invert opacity-90"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-6 tracking-tight text-white">
            Nuestra web está en <br />
            <span className="text-gradient text-glow">construcción</span>
          </h1>
          
          <p className="text-[#c6c6cb] text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12 mx-auto">
            Estamos perfeccionando cada detalle para ofrecerte la mejor experiencia en podología y fisioterapia. Volveremos muy pronto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut" 
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            ))}
          </div>
          
          <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
              Terrassa • Próximamente
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Additional subtle floaters */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[15%] w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
}

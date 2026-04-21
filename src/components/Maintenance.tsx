"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Lock, ArrowRight, User } from "lucide-react";

interface MaintenanceProps {
  onLogin?: (password: string) => boolean;
}

export default function Maintenance({ onLogin }: MaintenanceProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin && onLogin(password)) {
      // Success is handled by parent re-rendering
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setPassword("");
    }
  };

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
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {!showLogin ? (
            <motion.div
              key="maintenance-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="mb-12">
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
              </div>

              <div>
                <h1 className="text-4xl md:text-7xl font-headline font-bold mb-6 tracking-tight text-white">
                  Nuestra web está en <br />
                  <span className="text-gradient text-glow">construcción</span>
                </h1>
                
                <p className="text-[#c6c6cb] text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12 mx-auto">
                  Estamos perfeccionando cada detalle para ofrecerte la mejor experiencia en podología y fisioterapia. Volveremos muy pronto.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
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
                
                <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-8">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                    Terrassa • Próximamente
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLogin(true)}
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  <Lock size={14} className="group-hover:rotate-12 transition-transform" />
                  Acceso Cliente
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="login-content"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden backdrop-blur-2xl">
                {/* Visual accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <User size={32} className="text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-headline font-bold text-white mb-2">Acceso Reservado</h2>
                  <p className="text-white/40 text-sm mb-8">Introduce la contraseña de acceso para revisar la web en desarrollo.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        autoFocus
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-all text-center tracking-widest`}
                      />
                      {error && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-2 font-medium"
                        >
                          Contraseña incorrecta. Inténtalo de nuevo.
                        </motion.p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors uppercase tracking-wider text-xs"
                    >
                      Entrar <ArrowRight size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowLogin(false);
                        setError(false);
                        setPassword("");
                      }}
                      className="text-white/30 hover:text-white/60 text-xs transition-colors mt-4 w-full"
                    >
                      Volver atrás
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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


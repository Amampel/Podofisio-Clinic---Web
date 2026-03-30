"use client";
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-[50] flex flex-col gap-4 floating-actions-container">
      <AnimatePresence>
        {/* WhatsApp Button */}
        <motion.a
          key="whatsapp-btn"
          href="https://wa.me/34937000000?text=%C2%A1Hola!%20%F0%9F%91%8B%20He%20visto%20vuestra%20web%20y%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20de%20podolog%C3%ADa%20y%20fisioterapia.%20%C2%BFPodr%C3%ADais%20ayudarme%3F%20Gracias." // Improved message
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 group relative"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-surface-lowest border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </motion.a>

        {/* Phone Button */}
        <motion.a
          key="phone-btn"
          href="tel:+34937000000" // Replace with real number
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-white text-background rounded-full flex items-center justify-center shadow-2xl shadow-white/10 group relative"
          aria-label="Llamar por teléfono"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-surface-lowest border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Llamar ahora
          </span>
        </motion.a>
      </AnimatePresence>
    </div>
  );
}

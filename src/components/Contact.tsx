import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Atención Personalizada</span>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-tight">Conecta con la <span className="text-secondary">Excelencia.</span></h2>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-lg font-light leading-relaxed">
            Estamos ubicados en el corazón de Terrassa, listos para ofrecerte el mejor cuidado para tus pies y extremidad inferior. Reserva tu cita o consúltanos cualquier duda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info & Hours */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl glass-card border border-white/5 space-y-10"
            >
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all">
                  <MapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white mb-2 text-xl">Ubicación</h3>
                  <p className="text-on-surface-variant text-base leading-relaxed font-light">Carrer de la Salut, 42<br />08221 Terrassa, Barcelona</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white mb-2 text-xl">Teléfono</h3>
                  <p className="text-on-surface-variant text-base font-light">+34 937 000 000</p>
                  <p className="text-secondary text-xs font-bold mt-1 uppercase tracking-widest">Atención WhatsApp disponible</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all">
                  <Mail className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white mb-2 text-xl">Email</h3>
                  <p className="text-on-surface-variant text-base font-light">hola@podofisio.clinic</p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl glass-card border border-white/5"
            >
              <h3 className="font-headline font-bold text-white mb-8 text-xl flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Horario de Clínica
              </h3>
              <div className="space-y-4">
                {[
                  { day: 'Lunes - Jueves', hours: '09:00 - 20:00' },
                  { day: 'Viernes', hours: '09:00 - 18:00' },
                  { day: 'Sábado', hours: 'Cerrado' },
                  { day: 'Domingo', hours: 'Cerrado' }
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant font-light">{item.day}</span>
                    <span className="text-white font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[350px] w-full rounded-2xl overflow-hidden glass-card group border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary hover:text-background hover:border-secondary transition-all duration-500"
                >
                  Cómo llegar <MapPin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-12 rounded-2xl glass-card border border-white/5 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary/40 to-transparent" />
              <h3 className="font-headline text-3xl font-bold text-white mb-10">Solicitud de Cita</h3>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Nombre Completo</label>
                    <input type="text" className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-neutral-700 font-light" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-3">
                    <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Teléfono de contacto</label>
                    <input type="tel" className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-neutral-700 font-light" placeholder="Ej. +34 600 000 000" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Correo Electrónico</label>
                  <input type="email" className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-neutral-700 font-light" placeholder="tu@email.com" />
                </div>
                <div className="space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Servicio Requerido</label>
                  <select className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-secondary transition-all py-4 px-0 appearance-none font-light cursor-pointer">
                    <option className="bg-surface">Selecciona una opción</option>
                    <option className="bg-surface">Podología Clínica (Quiropodia)</option>
                    <option className="bg-surface">Fisioterapia Invasiva / Indiba</option>
                    <option className="bg-surface">Estudio Biomecánico / Plantillas</option>
                    <option className="bg-surface">Cirugía del Pie</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Información Adicional</label>
                  <textarea rows={4} className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-neutral-700 font-light resize-none" placeholder="Cuéntanos brevemente el motivo de tu consulta..."></textarea>
                </div>
                <div className="pt-6">
                  <button className="w-full bg-secondary text-background py-5 rounded-xl font-headline font-extrabold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-secondary/10">
                    Confirmar Solicitud <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-on-surface-variant mt-6 text-center font-light">
                    Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos con fines clínicos.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

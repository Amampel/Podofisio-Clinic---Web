import { motion } from 'motion/react';
import { Verified } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block text-on-surface-variant font-label text-xs uppercase tracking-[0.3em] mb-4">Transparencia y Valor</span>
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-white mb-8">Inversión en tu <span className="text-secondary">Bienestar</span></h2>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-lg leading-relaxed font-light">
            En PODOFISIO CLINIC creemos en la claridad absoluta. Nuestras tarifas reflejan la alta especialización de nuestro equipo, el uso de tecnología de vanguardia y el tiempo dedicado a cada paciente para asegurar resultados definitivos.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fisioterapia */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-2xl p-8 md:p-12 flex flex-col justify-between border border-white/5"
          >
            <div>
              <div className="flex justify-between items-center mb-12">
                <h3 className="font-headline text-3xl font-bold text-white tracking-tight">Fisioterapia Avanzada</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">Invasiva & Manual</span>
              </div>
              <div className="space-y-12">
                {[
                  { title: 'Diagnóstico inicial + Tratamiento', price: '70€', desc: 'Valoración inicial exhaustiva, diagnóstico y primer tratamiento manual o tecnológico.' },
                  { title: 'Sesiones de Seguimiento', price: '65€', desc: 'Continuación del plan de tratamiento personalizado. 55 min.' },
                  { title: 'Pack 5 sesiones', price: '300€', perSession: '60€ / SESIÓN', desc: 'Bono de recuperación para procesos de rehabilitación media.' },
                  { title: 'Pack 10 sesiones', price: '550€', perSession: '55€ / SESIÓN', desc: 'Mantenimiento preventivo y optimización a largo plazo.', badge: 'Mejor Valor' }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex justify-between items-end ${idx !== 3 ? 'pb-8 border-b border-white/5' : ''} group`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-medium text-white group-hover:text-secondary transition-colors">{item.title}</h4>
                        {item.badge && <span className="bg-secondary text-background text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{item.badge}</span>}
                      </div>
                      <p className="text-on-surface-variant text-sm max-w-sm font-light">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-headline font-bold text-white">{item.price}</span>
                      {item.perSession && <span className="block text-[10px] font-label text-secondary mt-2 tracking-widest uppercase">{item.perSession}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center text-on-surface-variant text-[10px] font-label uppercase tracking-widest">
              <div className="flex items-center gap-2"><Verified className="w-4 h-4 text-secondary" /> Historia Clínica Digital</div>
              <div className="flex items-center gap-2"><Verified className="w-4 h-4 text-secondary" /> Seguimiento vía App</div>
              <div className="flex items-center gap-2"><Verified className="w-4 h-4 text-secondary" /> Sin Caducidad</div>
            </div>
          </motion.div>

          {/* Podología */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-surface rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col"
          >
            <h3 className="font-headline text-3xl font-bold text-white tracking-tight mb-12">Podología Clínica</h3>
            <div className="space-y-8 flex-grow">
              {[
                { name: 'Visita Podológica', price: '50€', desc: 'Consulta inicial y diagnóstico.' },
                { name: 'Quiropodia', price: '40€', desc: 'Tratamiento integral de piel y uñas.' },
                { name: 'Estudio Biomecánico', price: '60€ / 80€', desc: '60€ con plantillas / 80€ sin plantillas.' },
                { name: 'Plantillas Personalizadas', price: '190€', desc: 'Fabricación con materiales técnicos.' },
                { name: 'PRP (Factores de Crecimiento)', price: '300€', desc: 'Tratamiento biológico regenerativo.' },
                { name: 'Cirugía Ungueal', price: 'Desde 200€', desc: '200€ por canal / 350€ por 2 canales.' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-on-surface text-lg block group-hover:text-secondary transition-colors">{item.name}</span>
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-light">{item.desc}</span>
                    </div>
                    <span className="font-headline font-bold text-white text-xl">{item.price}</span>
                  </div>
                  <div className="h-px w-full bg-linear-to-r from-white/10 to-transparent mt-4" />
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 bg-surface-lowest rounded-xl p-8 border border-white/5"
              >
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light italic">
                  * Los precios de cirugía y ortesis complejas pueden variar según la técnica y materiales. Se entregará presupuesto cerrado tras la valoración.
                </p>
                <Link to="/contacto" className="text-secondary text-xs font-bold uppercase tracking-widest border-b border-secondary/30 hover:border-secondary transition-all pb-1">Solicitar presupuesto personalizado</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-40 max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl font-bold text-white text-center mb-16"
          >
            Preguntas Frecuentes
          </motion.h3>
          <div className="space-y-6">
            {[
              { q: '¿Aceptáis mutuas de salud?', a: 'Trabajamos principalmente de forma privada para asegurar el tiempo y la calidad técnica que cada caso requiere. No obstante, emitimos facturas detalladas para que puedas solicitar el reembolso si tu póliza es de reembolso.' },
              { q: '¿Qué incluye la primera visita?', a: 'Incluye la apertura de historia clínica, exploración física exhaustiva, diagnóstico mediante ecografía si es necesario y propuesta de plan de tratamiento personalizado.' },
              { q: '¿Caducan los bonos de sesiones?', a: 'No, nuestros bonos no tienen fecha de caducidad. Puedes utilizarlos según tus necesidades de recuperación o mantenimiento.' },
              { q: '¿Es necesario pedir cita previa?', a: 'Sí, para garantizar la excelencia en el trato y evitar esperas, funcionamos exclusivamente mediante cita previa.' }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl glass-card border border-white/5"
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                  <span className="text-secondary">?</span> {faq.q}
                </h4>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

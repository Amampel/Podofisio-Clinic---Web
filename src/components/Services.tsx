import { motion, useAnimation } from 'motion/react';
import { ArrowRight, Activity, Zap, Radio, Footprints, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const services = [
  {
    title: 'Ecografía Clínica',
    description: 'Diagnóstico por imagen de alta resolución para identificar patologías musculoesqueléticas en tiempo real, permitiendo tratamientos guiados de máxima precisión.',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'EPI / EPTE Guiada',
    description: 'Electrólisis Percutánea Intratisular para el tratamiento de tendinopatías crónicas y regeneración acelerada de tejidos blandos bajo control ecográfico.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Radiofrecuencia Indiba',
    description: 'Tecnología de transferencia eléctrica capacitiva y resistiva que acelera los mecanismos naturales de reparación del tejido y reduce el dolor.',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Biomecánica Digital',
    description: 'Análisis computerizado de la marcha y la pisada mediante plataformas de presiones y sensores inerciales para optimizar el rendimiento y prevenir lesiones.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Plantillas 3D Élite',
    description: 'Diseño y fabricación aditiva de soportes plantares personalizados utilizando materiales de última generación para una respuesta biomecánica perfecta.',
    icon: Footprints,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Cirugía Ungueal',
    description: 'Procedimientos de cirugía menor ambulatoria para la resolución definitiva de uñas encarnadas y otras patologías dérmicas con mínima recuperación.',
    icon: ArrowRight,
    image: 'https://images.unsplash.com/photo-1579154235602-3c20fa4f597e?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Services() {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      x: [0, -2844],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="py-32 bg-surface-lowest relative">
      <div className="px-8 max-w-7xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant block mb-2">Especialización en Extremidad Inferior</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">Servicios de <span className="text-secondary">Alta Resolución</span></h2>
            <p className="mt-6 text-on-surface-variant font-light text-lg">
              En PODOFISIO CLINIC no solo tratamos síntomas; buscamos el origen biomecánico de tu patología. Nuestra metodología combina la fisioterapia invasiva con la podología deportiva para ofrecerte un abordaje integral 360º.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden py-12 px-8">
        <motion.div 
          drag="x"
          dragConstraints={{ left: -5688, right: 0 }}
          animate={controls}
          onDragStart={() => controls.stop()}
          onDragEnd={() => startAnimation()}
          className="flex gap-6 w-max"
          style={{ cursor: 'grab' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {[...services, ...services, ...services].map((service, index) => (
            <div 
              key={`${service.title}-${index}`}
              className="w-[320px] md:w-[450px] aspect-[4/5] glass-card rounded-xl p-8 flex flex-col justify-between group relative overflow-hidden select-none flex-shrink-0"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-110 grayscale pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />
              
              <div className="relative z-20 flex flex-col justify-between h-full pointer-events-none">
                <div>
                  <div className="w-14 h-14 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-white group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6">{service.title}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed text-base">{service.description}</p>
                </div>
                
                <Link to="/contacto" className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all pointer-events-auto">
                  Solicitar información <ArrowRight className="w-4 h-4 text-secondary" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Technology Section */}
      <div className="max-w-7xl mx-auto px-8 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Technology" 
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-xl border border-secondary/20 max-w-xs">
              <p className="text-secondary font-headline text-4xl font-bold mb-2">+15</p>
              <p className="text-white text-sm font-light">Años de experiencia clínica combinada en el sector.</p>
            </div>
          </motion.div>
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-headline text-3xl font-bold text-white mb-8"
            >
              Nuestra Tecnología
            </motion.h3>
            <div className="space-y-8">
              {[
                { num: '01', title: 'Diagnóstico por Imagen', desc: 'Utilizamos ecógrafos de última generación para una valoración objetiva y precisa de la lesión.' },
                { num: '02', title: 'Terapias Invasivas', desc: 'EPI y EPTE para regenerar tejidos donde las terapias manuales no llegan.' },
                { num: '03', title: 'Laboratorio Biomecánico', desc: 'Sistemas de captura de movimiento y presiones para un análisis dinámico real.' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

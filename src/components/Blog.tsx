"use client";
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    category: 'Podología Avanzada',
    title: 'Fascitis plantar: Guía completa de recuperación y prevención',
    excerpt: 'Entender la inflamación de la fascia plantar es el primer paso para caminar sin dolor. Exploramos desde el diagnóstico ecográfico hasta las terapias de ondas de choque.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
    readTime: '8 min',
    date: '15 Mar 2024'
  },
  {
    category: 'Fisioterapia Deportiva',
    title: 'Tendón de Aquiles: Abordaje clínico en tendinopatías',
    excerpt: 'Analizamos los protocolos de carga progresiva y la importancia del control motor en la rehabilitación de la zona posterior del tobillo.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop',
    readTime: '6 min',
    date: '10 Mar 2024'
  },
  {
    category: 'Anatomía Funcional',
    title: 'Metatarsalgia: Cuando la presión se convierte en patología',
    excerpt: 'El dolor en la almohadilla plantar puede ocultar diversas patologías. Descubre cómo las plantillas personalizadas corrigen la biomecánica.',
    image: 'https://images.unsplash.com/photo-1579154235602-3c20fa4f597e?q=80&w=2070&auto=format&fit=crop',
    readTime: '5 min',
    date: '05 Mar 2024'
  },
  {
    category: 'Tecnología Médica',
    title: 'Beneficios de la Radiofrecuencia Indiba en Fisioterapia',
    excerpt: 'Cómo la hipertermia controlada acelera la regeneración celular y reduce los tiempos de recuperación en lesiones musculares.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    readTime: '7 min',
    date: '01 Mar 2024'
  },
  {
    category: 'Prevención',
    title: 'Calzado Deportivo: Cómo elegir según tu tipo de pisada',
    excerpt: 'No todas las zapatillas son para todos los pies. Te damos las claves para elegir el calzado que mejor protege tu salud biomecánica.',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2070&auto=format&fit=crop',
    readTime: '10 min',
    date: '25 Feb 2024'
  },
  {
    category: 'Casos Clínicos',
    title: 'Recuperación de Esguince de Tobillo Grado II',
    excerpt: 'Estudio de caso sobre el abordaje integral mediante terapia manual, ejercicio terapéutico y neuromodulación.',
    image: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2070&auto=format&fit=crop',
    readTime: '12 min',
    date: '20 Feb 2024'
  }
];

export default function Blog() {
  return (
    <section className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Divulgación Clínica</span>
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-white mb-8 leading-tight">Conocimiento para tu <span className="text-secondary">Bienestar</span>.</h2>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-lg font-light leading-relaxed">
            Explora nuestra biblioteca de recursos clínicos donde compartimos las últimas investigaciones, consejos de prevención y avances tecnológicos en podología y fisioterapia.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={`blog-${index}-${post.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-secondary/20 transition-all duration-500 flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">{post.category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{post.date}</span>
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-6 leading-tight group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white group-hover:text-secondary transition-all">
                    Leer artículo completo <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-40 p-12 md:p-20 rounded-3xl glass-card border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Únete a nuestra <span className="text-secondary">Comunidad Clínica</span>.</h3>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                Recibe mensualmente consejos de salud, ejercicios de prevención y las últimas novedades tecnológicas directamente en tu bandeja de entrada.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all"
              />
              <button className="bg-secondary text-background px-8 py-4 rounded-xl font-headline font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                Suscribirme
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

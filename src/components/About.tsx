import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary block mb-4">Nuestro Equipo</span>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-tight">
            Compromiso, <span className="text-secondary">Cercanía</span> y Rigor.
          </h2>
        </motion.div>

        <div className="space-y-40">
          {/* Eric Herrero Castro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card border border-white/10 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Eric Herrero Castro"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h3 className="font-headline text-4xl font-bold text-white mb-2">Eric Herrero Castro</h3>
              <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-8">Fisioterapeuta y Podólogo</p>
              
              <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed">
                <p>
                  Empecé mi camino en la fisioterapia convencido de una idea muy clara: la medicina es el movimiento. A lo largo de los años he tratado a muchísimos pacientes, y una gran parte de ellos compartían algo en común: los problemas se repetían en la extremidad inferior. Rodilla, tobillo, pie... siempre había algo más detrás del dolor.
                </p>
                <p>
                  Con la experiencia entendí que, para ayudar de verdad, no bastaba con tratar la consecuencia. Había que entender el origen. Por eso decidí dar un paso más y estudiar podología, para comprender la base de muchas patologías y cómo el apoyo del pie condiciona todo el movimiento del cuerpo.
                </p>
                <p>
                  Hoy trabajo desde esa visión conjunta de fisioterapia y podología, analizando cada caso con calma y criterio, buscando soluciones reales y adaptadas a cada persona. No me interesa aplicar protocolos cerrados, sino entender qué necesita cada paciente y acompañarlo en su proceso de recuperación.
                </p>
                <p>
                  Este proyecto nace también con una motivación personal: traer esta forma de trabajar a la ciudad donde crecí. Después de muchos años fuera por motivos profesionales, sentía que era el momento de volver y ofrecer en Terrassa una atención cercana, especializada y honesta, basada en el trato humano y en hacer bien las cosas desde el primer día.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Martina Lupacchini González */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card border border-white/10 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
                  alt="Martina Lupacchini González"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:order-1"
            >
              <h3 className="font-headline text-4xl font-bold text-white mb-2">Martina Lupacchini González</h3>
              <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-8">Podóloga</p>
              
              <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed">
                <p>
                  Desde muy pequeña tuve claro que quería dedicarme al ámbito sanitario. Siempre me ha interesado la vertiente médica, entender el porqué de las cosas y poder ayudar a las personas desde el conocimiento y la precisión. Por eso decidí formarme en podología, una profesión que me permite combinar el trato cercano con el rigor clínico.
                </p>
                <p>
                  Durante mi formación y mi experiencia profesional he tenido la oportunidad de aprender junto a grandes podólogos en Barcelona, rodeándome de profesionales con mucha experiencia y criterio. Desde el principio he sentido un especial interés por la cirugía ungueal y la podología quirúrgica, un área en la que sigo formándome con ganas de aprender y mejorar cada día.
                </p>
                <p>
                  Entiendo la podología como una especialidad que requiere tiempo, escucha y responsabilidad. Me gusta explicar bien cada tratamiento, resolver dudas y acompañar al paciente durante todo el proceso, para que se sienta seguro y en buenas manos.
                </p>
                <p>
                  Podofisio Clinic Terrassa es para mí un proyecto muy especial, donde puedo desarrollar esta forma de trabajar cercana, honesta y comprometida, ofreciendo una atención podológica cuidada y basada en el respeto por cada persona que confía en nosotros.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

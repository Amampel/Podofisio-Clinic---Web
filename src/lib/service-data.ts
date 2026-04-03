export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface SubServiceCard {
  slug: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: ServiceStat[];
  overview: string;
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  conditions: string[];
  faq: ServiceFaq[];
  keywords: string[];
  metaDescription: string;
  relatedServices: string[];
  parentSlug?: string;
  parentTitle?: string;
  subServices?: SubServiceCard[];
}

export const allServices: ServiceData[] = [
  // ─────────────────────────────────────────────────────────────────
  // 01 · ECOGRAFÍA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ecografia',
    number: '01',
    category: 'Diagnóstico',
    title: 'Ecografía',
    subtitle: 'Diagnóstico por imagen en tiempo real',
    description:
      'La ecografía musculoesquelética de alta resolución permite visualizar tendones, ligamentos y estructuras del pie en tiempo real, obteniendo un diagnóstico preciso, sin radiación y en la misma consulta.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Alta resolución', label: 'Imagen diagnóstica' },
      { value: 'Sin radiación', label: 'Seguro al 100%' },
      { value: 'Mismo día', label: 'Diagnóstico inmediato' },
      { value: '+2000 / año', label: 'Ecografías realizadas' },
    ],
    overview:
      'La ecografía musculoesquelética es una de las herramientas diagnósticas más potentes de las que disponemos en Podofisio Clinic Terrassa. A diferencia de la radiografía convencional, permite visualizar tejidos blandos —tendones, ligamentos, músculos, bursas y nervios— con resolución milimétrica y en tiempo real, sin exponer al paciente a ningún tipo de radiación ionizante. Esta capacidad nos permite confirmar o descartar patologías en la misma primera visita, evitando esperas innecesarias y orientando el tratamiento desde el primer minuto. La exploración dinámica —observar la estructura mientras el paciente la moviliza— añade una dimensión diagnóstica imposible de obtener con la resonancia magnética estática. Además, la ecografía es la herramienta de elección para guiar con precisión milimétrica procedimientos terapéuticos como la EPTE, las infiltraciones ecoguiadas o las punciones de PRP, minimizando el riesgo de daño a estructuras adyacentes y garantizando la máxima eficacia del tratamiento. En Podofisio Clinic integramos la ecografía en la práctica podológica y fisioterapéutica diaria, convirtiéndonos en un referente regional en diagnóstico clínico avanzado del pie, tobillo y extremidad inferior en Terrassa y el Vallès Occidental.',
    benefits: [
      {
        title: 'Diagnóstico en tiempo real',
        description:
          'La imagen se genera de forma instantánea mientras el profesional explora la zona, permitiendo observar el comportamiento dinámico de tendones y ligamentos durante el movimiento activo y pasivo.',
      },
      {
        title: 'Guía de procedimientos invasivos',
        description:
          'La ecografía permite dirigir con precisión milimétrica procedimientos como la EPTE, infiltraciones corticoides o punciones de PRP, minimizando riesgos y maximizando la eficacia terapéutica.',
      },
      {
        title: 'Sin radiación ionizante',
        description:
          'Técnica completamente inocua, sin contraindicaciones por exposición a radiación. Puede repetirse cuantas veces sea necesario para monitorizar la evolución del paciente.',
      },
      {
        title: 'Resultado inmediato en consulta',
        description:
          'El diagnóstico se obtiene y se comparte con el paciente en la misma sesión, acelerando el inicio del tratamiento adecuado sin esperar informes externos.',
      },
      {
        title: 'Valoración dinámica y comparativa',
        description:
          'Es posible explorar ambos lados del cuerpo de forma comparativa y valorar la estructura en distintas posiciones funcionales, ofreciendo información clínica de enorme valor.',
      },
      {
        title: 'Control evolutivo del tratamiento',
        description:
          'Permite repetir la exploración a lo largo del proceso terapéutico para verificar objetivamente la cicatrización tisular y la resolución de la lesión, ajustando el plan de tratamiento con datos reales.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Anamnesis y exploración física',
        description:
          'El profesional realiza una historia clínica detallada y una exploración manual de la zona afectada para orientar la exploración ecográfica hacia las estructuras de mayor interés clínico.',
      },
      {
        step: '02',
        title: 'Preparación y posicionamiento',
        description:
          'El paciente se coloca en la posición óptima según la zona a explorar. Se aplica gel conductor sobre la piel para garantizar una imagen de alta calidad sin interferencias.',
      },
      {
        step: '03',
        title: 'Exploración ecográfica',
        description:
          'El transductor de alta frecuencia recorre sistemáticamente la zona de interés en planos longitudinal y transversal. Se realizan maniobras dinámicas para valorar la función de la estructura en movimiento.',
      },
      {
        step: '04',
        title: 'Análisis e interpretación de la imagen',
        description:
          'El especialista analiza en tiempo real las características del tejido —grosor, ecogenicidad, vascularización, integridad estructural— e identifica hallazgos patológicos con precisión.',
      },
      {
        step: '05',
        title: 'Informe y plan de tratamiento',
        description:
          'Se entrega al paciente un informe diagnóstico con imágenes representativas y se explica el hallazgo de forma comprensible. Se diseña el plan terapéutico más adecuado basado en los resultados obtenidos.',
      },
    ],
    conditions: [
      'Fascitis plantar',
      'Tendinopatía de Aquiles',
      'Neuroma de Morton',
      'Bursitis',
      'Rotura muscular',
      'Lesión ligamentosa',
      'Espolón calcáneo',
      'Síndrome del túnel tarsiano',
    ],
    faq: [
      {
        question: '¿Es dolorosa la ecografía?',
        answer:
          'No. La ecografía es una exploración completamente indolora. Únicamente se aplica un gel frío sobre la piel y se desliza el transductor sobre la zona a explorar. No implica ningún tipo de agujas, radiación ni molestias significativas.',
      },
      {
        question: '¿Necesito preparación previa para la ecografía?',
        answer:
          'En la mayoría de los casos no se requiere ninguna preparación especial. Simplemente es recomendable llevar ropa cómoda que permita acceder fácilmente a la zona a explorar (tobillo, pie, pantorrilla). Puede comer y beber con normalidad antes de la cita.',
      },
      {
        question: '¿En qué se diferencia la ecografía de la resonancia magnética?',
        answer:
          'La ecografía permite una exploración dinámica en tiempo real —es decir, observar los tendones y ligamentos mientras el paciente se mueve—, es más accesible económicamente y no requiere tiempo de espera. La resonancia magnética ofrece mayor campo de visión y es superior para valorar estructuras óseas profundas. Ambas técnicas son complementarias y en nuestra clínica orientamos al paciente hacia la más adecuada para cada caso.',
      },
      {
        question: '¿Puedo obtener el diagnóstico el mismo día?',
        answer:
          'Sí. Una de las principales ventajas de la ecografía es que el diagnóstico es inmediato. En la misma consulta el especialista valora la imagen, explica los hallazgos y propone el plan de tratamiento, sin necesidad de esperar días o semanas por un informe externo.',
      },
    ],
    keywords: [
      'ecografía Terrassa',
      'ecografía musculoesquelética Terrassa',
      'diagnóstico pie Terrassa',
      'ecografía tobillo Terrassa',
      'ecografía tendón Aquiles',
      'ecografía fascitis plantar',
      'diagnóstico por imagen podología',
      'ecografía sin radiación Terrassa',
    ],
    metaDescription:
      'Ecografía musculoesquelética de alta resolución en Terrassa. Diagnóstico inmediato del pie y tobillo sin radiación. Reserva tu cita en Podofisio Clinic.',
    relatedServices: ['epte', 'indiba', 'estudio-biomecanico'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 02 · EPTE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'epte',
    number: '02',
    category: 'Fisioterapia Invasiva',
    title: 'EPTE',
    subtitle: 'Electrolisis percutánea terapéutica guiada por ecografía',
    description:
      'La EPTE aplica una microcorriente galvánica de baja intensidad directamente sobre el tejido tendinoso degenerado, desencadenando una respuesta inflamatoria controlada que activa la regeneración natural del tejido sin necesidad de cirugía.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '3-6 sesiones', label: 'Protocolo estándar' },
      { value: '>90% eficacia', label: 'En tendinopatías crónicas' },
      { value: 'Guiada por imagen', label: 'Precisión ecográfica' },
      { value: 'Sin cirugía', label: 'Técnica mínimamente invasiva' },
    ],
    overview:
      'La Electrolisis Percutánea Terapéutica (EPTE) es una técnica de fisioterapia invasiva mínimamente invasiva que ha revolucionado el tratamiento de las tendinopatías crónicas y degenerativas. Consiste en la aplicación de una microcorriente galvánica de baja intensidad a través de una aguja de acupuntura de fino calibre, dirigida de forma precisa hacia el tejido tendinoso dañado bajo guía ecográfica en tiempo real. Esta corriente galvánica genera una electrólisis controlada en el tejido degenerado, destruyendo selectivamente las fibras de colágeno desordenadas y el neovascularización patológica característica de las tendinopatías crónicas, sin afectar al tejido sano circundante. El proceso desencadena una respuesta inflamatoria aguda y controlada que activa los mecanismos naturales de reparación tisular: migración de fibroblastos, síntesis de colágeno tipo I y neovascularización funcional. El resultado es la regeneración del tejido tendinoso con fibras de colágeno bien organizadas, recuperando la resistencia mecánica y eliminando el dolor crónico. La guía ecográfica es esencial en este procedimiento, pues garantiza que la aguja se coloque exactamente en la zona patológica, maximizando la eficacia y minimizando las molestias. En Podofisio Clinic Terrassa aplicamos la EPTE como parte de un protocolo integral que combina la técnica invasiva con ejercicio excéntrico, terapia manual y control biomecánico, obteniendo resultados superiores a los publicados en la literatura científica.',
    benefits: [
      {
        title: 'Resolución de patología crónica',
        description:
          'La EPTE actúa sobre el tejido degenerado que no responde a tratamientos conservadores convencionales, ofreciendo una solución definitiva en tendinopatías de larga evolución resistentes a otros abordajes.',
      },
      {
        title: 'Guía ecográfica en tiempo real',
        description:
          'La aguja se dirige con precisión absoluta hacia la zona patológica bajo control ecográfico continuo, garantizando que la electrólisis actúa exactamente donde es necesaria y evitando estructuras adyacentes.',
      },
      {
        title: 'Mínimamente invasiva y ambulatoria',
        description:
          'El procedimiento se realiza en consulta sin anestesia general, con una aguja de fino calibre. El paciente puede retomar su actividad cotidiana en pocas horas tras cada sesión.',
      },
      {
        title: 'Alternativa real a la cirugía',
        description:
          'En la mayoría de los casos, la EPTE consigue los resultados que antes solo se obtenían con intervención quirúrgica, evitando los riesgos inherentes a la anestesia y la cirugía abierta.',
      },
      {
        title: 'Protocolo corto y eficaz',
        description:
          'Entre 3 y 6 sesiones son habitualmente suficientes para resolver una tendinopatía crónica, frente a los meses de tratamiento convencional sin garantía de resultado.',
      },
      {
        title: 'Compatible con ejercicio terapéutico',
        description:
          'La EPTE se integra de forma óptima con programas de ejercicio excéntrico y carga progresiva, potenciando la remodelación del tejido y previniendo las recaídas a largo plazo.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Evaluación y diagnóstico ecográfico',
        description:
          'Antes de iniciar el tratamiento se realiza una exploración ecográfica de la zona afectada para confirmar el diagnóstico, cuantificar el grado de degeneración y localizar con exactitud el área a tratar.',
      },
      {
        step: '02',
        title: 'Diseño del protocolo personalizado',
        description:
          'Se establece el número de sesiones, la intensidad de corriente y la pauta de ejercicio terapéutico complementario adaptados a las características de la lesión y la actividad del paciente.',
      },
      {
        step: '03',
        title: 'Aplicación de la técnica EPTE',
        description:
          'Bajo guía ecográfica en tiempo real, se introduce la aguja en la zona de tejido degenerado y se aplica la microcorriente galvánica durante el tiempo protocolizado. La sensación durante el procedimiento es mínima gracias al fino calibre de la aguja.',
      },
      {
        step: '04',
        title: 'Tratamiento inmediato post-sesión',
        description:
          'Tras la aplicación, se realizan maniobras de terapia manual y se instruye al paciente en el programa de ejercicio excéntrico y pautas de carga para optimizar la respuesta regenerativa del tejido.',
      },
      {
        step: '05',
        title: 'Seguimiento y alta',
        description:
          'Entre sesiones se monitoriza la evolución clínica y ecográfica. Al finalizar el protocolo se realiza una ecografía de control para objetivar la remodelación tisular y se pautan medidas preventivas de recaída.',
      },
    ],
    conditions: [
      'Tendinopatía de Aquiles',
      'Fascitis plantar crónica',
      'Epicondilitis',
      'Tendinopatía rotuliana',
      'Manguito rotador',
      'Tibial posterior',
      'Bursitis crónica',
    ],
    faq: [
      {
        question: '¿Es dolorosa la sesión de EPTE?',
        answer:
          'La molestia durante la aplicación es moderada y muy tolerable para la gran mayoría de pacientes. La aguja utilizada es de muy fino calibre (similar a la de acupuntura) y la duración de la aplicación es breve. Algunas personas refieren un ligero aumento del dolor en las 24-48 horas posteriores a la sesión, que corresponde a la respuesta inflamatoria terapéutica y remite espontáneamente.',
      },
      {
        question: '¿Cuántas sesiones de EPTE necesitaré?',
        answer:
          'El protocolo habitual oscila entre 3 y 6 sesiones, con una frecuencia de una sesión por semana. El número exacto depende del grado de degeneración tisular, el tiempo de evolución de la lesión y la respuesta individual de cada paciente. En la primera visita el especialista puede orientar sobre el número de sesiones previsto para tu caso.',
      },
      {
        question: '¿Puedo hacer deporte mientras recibo el tratamiento con EPTE?',
        answer:
          'Sí, en la mayoría de los casos es posible mantener cierto nivel de actividad física adaptada durante el tratamiento. De hecho, el ejercicio terapéutico —especialmente el excéntrico— forma parte fundamental del protocolo y es necesario para lograr la correcta remodelación del colágeno. El especialista indicará qué actividades son adecuadas en cada fase del tratamiento.',
      },
      {
        question: '¿La EPTE es definitiva o la lesión puede volver?',
        answer:
          'La EPTE regenera el tejido degenerado de forma efectiva y duradera. Sin embargo, si el factor causante de la tendinopatía —sobrecarga mecánica, alteración biomecánica, calzado inadecuado— no se corrige, la lesión puede reaparecer. Por eso integramos siempre la EPTE con un estudio biomecánico y un programa de ejercicio preventivo para garantizar los resultados a largo plazo.',
      },
    ],
    keywords: [
      'EPTE Terrassa',
      'electrolisis percutánea Terrassa',
      'tendinopatía tratamiento Terrassa',
      'fisioterapia invasiva Terrassa',
      'EPTE tendón Aquiles',
      'EPTE fascitis plantar',
      'electrolisis percutánea terapéutica',
      'tendinopatía crónica tratamiento',
    ],
    metaDescription:
      'EPTE — Electrolisis Percutánea Terapéutica en Terrassa. Tratamiento de tendinopatías crónicas sin cirugía, guiado por ecografía. Podofisio Clinic.',
    relatedServices: ['ecografia', 'indiba', 'estudio-biomecanico'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 03 · RECUPERACIÓN FUNCIONAL
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'recuperacion-funcional',
    number: '03',
    category: 'Fisioterapia',
    title: 'Recuperación Funcional',
    subtitle: 'Rehabilitación integral del movimiento y la función',
    description:
      'Programa de recuperación funcional que combina terapia manual, ejercicio terapéutico y reeducación propioceptiva para restaurar el movimiento, eliminar el dolor y prevenir recaídas de forma duradera.',
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Ejercicio terapéutico', label: 'Base del tratamiento' },
      { value: 'Terapia manual', label: 'Técnicas especializadas' },
      { value: 'Personalizada', label: 'Plan individual' },
      { value: 'Resultados duraderos', label: 'Prevención de recaídas' },
    ],
    overview:
      'La recuperación funcional es el pilar central de la fisioterapia moderna. Lejos de los tratamientos pasivos del pasado, nuestro modelo terapéutico sitúa al paciente en el centro del proceso de recuperación, utilizando el movimiento activo y el ejercicio terapéutico como principal herramienta de curación. En Podofisio Clinic Terrassa aplicamos protocolos basados en la evidencia científica más actualizada, combinando las mejores técnicas de terapia manual —movilización articular, liberación miofascial, punción seca, manipulación— con programas de ejercicio específico diseñados para restaurar la función, la fuerza, la coordinación y la propiocepción de la zona lesionada. Cada programa de recuperación funcional es único y se adapta al diagnóstico, la condición física del paciente, sus objetivos —deportivos o de calidad de vida— y el tiempo disponible para la recuperación. Trabajamos con deportistas de alta competición que necesitan volver al máximo rendimiento en el menor tiempo posible, con pacientes post-quirúrgicos que deben recuperar la funcionalidad perdida, y con personas que sufren dolor crónico que limita su vida diaria. En todos los casos, el objetivo es idéntico: recuperar la función completa, eliminar el dolor y dotar al paciente de las herramientas necesarias para prevenir futuras lesiones.',
    benefits: [
      {
        title: 'Tratamiento personalizado y basado en evidencia',
        description:
          'Cada protocolo se diseña de forma individual tras una evaluación funcional exhaustiva, aplicando las técnicas con mayor evidencia científica disponible para cada tipo de lesión y perfil de paciente.',
      },
      {
        title: 'Terapia manual especializada',
        description:
          'Combinamos movilización articular, técnicas de tejido blando, liberación miofascial y neurodinàmica para normalizar la función articular y muscular, aliviar el dolor y preparar el tejido para el ejercicio activo.',
      },
      {
        title: 'Ejercicio terapéutico progresivo',
        description:
          'El ejercicio activo y progresivo es la herramienta más potente de recuperación. Diseñamos programas de fortalecimiento, movilidad y coordinación que el paciente puede realizar tanto en clínica como en casa.',
      },
      {
        title: 'Reeducación propioceptiva y neuromuscular',
        description:
          'Entrenamos el sistema nervioso para recuperar el control motor, el equilibrio y la respuesta refleja de la musculatura, factores clave para prevenir recaídas especialmente tras esguinces y cirugías.',
      },
      {
        title: 'Recuperación deportiva acelerada',
        description:
          'Para deportistas, diseñamos protocolos de retorno al deporte con criterios objetivos que garantizan una reincorporación segura y libre de riesgo de relesión, minimizando el tiempo fuera de competición.',
      },
      {
        title: 'Educación terapéutica al paciente',
        description:
          'Empoderamos al paciente con conocimiento sobre su lesión, sus factores de riesgo y las estrategias de autocuidado, convirtiéndolo en protagonista activo de su propia recuperación.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Valoración funcional inicial',
        description:
          'Evaluación exhaustiva del movimiento, la fuerza, la postura y la función de la zona afectada mediante tests clínicos validados. Se identifican los déficits funcionales específicos que hay que recuperar.',
      },
      {
        step: '02',
        title: 'Diagnóstico y objetivos terapéuticos',
        description:
          'Se establece el diagnóstico fisioterapéutico, se fijan los objetivos de recuperación en plazos realistas y se explica al paciente el plan de tratamiento en detalle.',
      },
      {
        step: '03',
        title: 'Terapia manual y técnicas pasivas',
        description:
          'En las fases iniciales se aplican técnicas de terapia manual para reducir el dolor, restaurar la movilidad articular y preparar los tejidos para el trabajo activo posterior.',
      },
      {
        step: '04',
        title: 'Ejercicio terapéutico activo y progresivo',
        description:
          'El paciente trabaja activamente con ejercicios de fortalecimiento, movilidad, coordinación y propiocepción de complejidad creciente, supervisados y ajustados por el fisioterapeuta en cada sesión.',
      },
      {
        step: '05',
        title: 'Retorno a la actividad y prevención',
        description:
          'Se guía al paciente en la reincorporación progresiva a su actividad habitual o deportiva, y se diseña un programa de ejercicios de mantenimiento para consolidar la recuperación y prevenir recaídas.',
      },
    ],
    conditions: [
      'Esguince de tobillo',
      'Rotura muscular',
      'Post-cirugía',
      'Dolor lumbar',
      'Cervicalgia',
      'Contractura muscular',
      'Lesión deportiva',
      'Rehabilitación post-fractura',
    ],
    faq: [
      {
        question: '¿Cuántas sesiones necesitaré para recuperarme?',
        answer:
          'El número de sesiones varía considerablemente según el tipo y gravedad de la lesión, el tiempo de evolución, la condición física del paciente y sus objetivos. Un esguince leve puede resolverse en 4-6 sesiones, mientras que una recuperación post-quirúrgica puede requerir varios meses. En la primera visita el fisioterapeuta realizará una estimación personalizada tras la valoración inicial.',
      },
      {
        question: '¿La fisioterapia es compatible con otros tratamientos médicos?',
        answer:
          'Sí, la fisioterapia es completamente compatible y complementaria con los tratamientos médicos convencionales. De hecho, la recuperación funcional es el complemento indispensable de muchas intervenciones quirúrgicas y tratamientos farmacológicos. Trabajamos en coordinación con el equipo médico del paciente cuando es necesario.',
      },
      {
        question: '¿Tengo que hacer ejercicios en casa entre sesiones?',
        answer:
          'El trabajo entre sesiones es fundamental para acelerar la recuperación. El fisioterapeuta te indicará ejercicios específicos adaptados a tu nivel y situación que podrás realizar en casa de forma segura. La constancia con estos ejercicios marca una diferencia enorme en los resultados y en el tiempo total de recuperación.',
      },
      {
        question: '¿Es normal sentir algo de dolor durante las sesiones de fisioterapia?',
        answer:
          'Algunas técnicas de terapia manual pueden generar una molestia tolerable durante su aplicación, que cede inmediatamente al terminar. Sin embargo, el dolor intenso nunca debe ser la norma y siempre comunicamos al paciente qué sensaciones son esperables. El trabajo activo con ejercicio tampoco debería ser doloroso: trabajamos dentro de los límites del dolor para no agravar la lesión.',
      },
    ],
    keywords: [
      'fisioterapia Terrassa',
      'recuperación funcional Terrassa',
      'rehabilitación Terrassa',
      'fisioterapeuta Terrassa',
      'rehabilitación deportiva Terrassa',
      'terapia manual Terrassa',
      'ejercicio terapéutico Terrassa',
      'recuperación lesión Terrassa',
    ],
    metaDescription:
      'Recuperación funcional y fisioterapia en Terrassa. Rehabilitación personalizada con terapia manual y ejercicio terapéutico. Podofisio Clinic.',
    relatedServices: ['epte', 'indiba', 'ecografia'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 04 · INDIBA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'indiba',
    number: '04',
    category: 'Tecnología Médica',
    title: 'Indiba',
    subtitle: 'Radiofrecuencia terapéutica de 448 kHz',
    description:
      'Indiba utiliza la radiofrecuencia de 448 kHz para generar calor terapéutico en tejidos profundos, activando la regeneración celular, acelerando la recuperación y aliviando el dolor crónico de forma completamente indolora.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '448 kHz', label: 'Frecuencia óptima' },
      { value: 'Tejido profundo', label: 'Acción en profundidad' },
      { value: 'Sin dolor', label: 'Sesión confortable' },
      { value: 'Recuperación acelerada', label: 'Resultados rápidos' },
    ],
    overview:
      'Indiba es un sistema de radiofrecuencia terapéutica que opera a la frecuencia característica de 448 kHz, elegida por su capacidad única de interaccionar con la membrana celular y optimizar el metabolismo tisular sin generar efectos negativos sobre el organismo. A diferencia de otras fuentes de calor superficial, la radiofrecuencia de Indiba penetra en tejidos profundos —músculo, tendón, ligamento, cápsula articular— generando un calor interno controlado que activa mecanismos fisiológicos de reparación: estimulación de fibroblastos y condrocitos, aumento del flujo sanguíneo local, incremento del metabolismo celular, reducción del espasmo muscular y modulación de la respuesta inflamatoria. El equipo dispone de dos modos de aplicación: el modo capacitivo, que actúa preferentemente sobre tejidos blandos superficiales como la fascia y la musculatura, y el modo resistivo, que penetra más en profundidad y es de elección para estructuras como ligamentos, tendones y cápsula articular. Esta versatilidad permite tratar de forma eficaz un amplísimo espectro de patologías musculoesqueléticas. En Podofisio Clinic Terrassa utilizamos Indiba como parte de protocolos integrales de recuperación, combinándola con terapia manual y ejercicio terapéutico para potenciar los resultados y acortar los plazos de recuperación.',
    benefits: [
      {
        title: 'Acción en tejidos profundos',
        description:
          'La radiofrecuencia de 448 kHz penetra hasta 5-6 cm de profundidad, llegando a tendones, ligamentos y estructuras articulares que no son accesibles para otras terapias físicas convencionales.',
      },
      {
        title: 'Activación de la regeneración celular',
        description:
          'El calor endógeno generado estimula la producción de colágeno por los fibroblastos, accelera el metabolismo celular y potencia los mecanismos naturales de reparación tisular a nivel microscópico.',
      },
      {
        title: 'Reducción rápida del dolor y la inflamación',
        description:
          'Mejora la circulación local, reduce el edema y modula la respuesta inflamatoria, proporcionando alivio del dolor significativo desde las primeras sesiones en patologías agudas y crónicas.',
      },
      {
        title: 'Aplicación completamente indolora',
        description:
          'La sensación durante la sesión es de un calor profundo muy confortable y relajante. No genera ningún tipo de molestia y el paciente puede retomar su actividad inmediatamente tras la sesión.',
      },
      {
        title: 'Versatilidad terapéutica',
        description:
          'Los dos modos de aplicación —capacitivo y resistivo— permiten adaptar el tratamiento a la profundidad y el tipo de tejido diana, haciendo de Indiba una herramienta válida para un amplio rango de patologías.',
      },
      {
        title: 'Sinergia con otras técnicas',
        description:
          'Indiba potencia los efectos de la terapia manual realizada durante la misma sesión, pues el calor profundo relaja la musculatura y mejora la viscoelasticidad de los tejidos, facilitando las movilizaciones y estiramientos.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Valoración y selección del protocolo',
        description:
          'El fisioterapeuta evalúa la zona afectada y selecciona el protocolo de Indiba más adecuado: modo capacitivo o resistivo, parámetros de intensidad y duración en función del diagnóstico y la fase de la lesión.',
      },
      {
        step: '02',
        title: 'Preparación de la zona de tratamiento',
        description:
          'Se aplica un gel conductor especial sobre la piel que permite el deslizamiento fluido del electrodo y optimiza la transmisión de la radiofrecuencia hacia los tejidos profundos.',
      },
      {
        step: '03',
        title: 'Aplicación de la radiofrecuencia',
        description:
          'El terapeuta desliza el electrodo activo sobre la zona a tratar en movimientos suaves y controlados. El paciente percibe una sensación de calor progresivo y profundo que resulta muy confortable.',
      },
      {
        step: '04',
        title: 'Terapia manual combinada',
        description:
          'Aprovechando el calor tisular generado por Indiba, se realizan técnicas de terapia manual —movilizaciones, estiramientos, liberación miofascial— cuyos efectos se potencian enormemente sobre el tejido calentado.',
      },
      {
        step: '05',
        title: 'Indicaciones post-sesión',
        description:
          'Al finalizar se registra la evolución del paciente y se ajusta el protocolo para la siguiente sesión. Se indica al paciente hidratación adecuada y las actividades recomendadas o a evitar en las horas posteriores.',
      },
    ],
    conditions: [
      'Fascitis plantar',
      'Tendinopatía de Aquiles',
      'Esguince',
      'Contractura',
      'Artrosis',
      'Dolor lumbar',
      'Fibromialgia',
      'Rotura fibrilar',
    ],
    faq: [
      {
        question: '¿Cuántas sesiones de Indiba necesito?',
        answer:
          'El número de sesiones depende del tipo de lesión y su evolución. Para patologías agudas pueden ser suficientes 4-6 sesiones, mientras que procesos crónicos pueden requerir entre 8 y 12. En muchos casos Indiba se combina con otras técnicas como parte de un protocolo integral, y el fisioterapeuta diseña el número óptimo de sesiones tras la valoración inicial.',
      },
      {
        question: '¿Indiba tiene alguna contraindicación?',
        answer:
          'Indiba está contraindicada en embarazo, portadores de marcapasos o implantes electrónicos activos, zonas con prótesis metálicas (relativo), y sobre tejidos con neoplasias activas. El fisioterapeuta revisará tu historial clínico antes de iniciar el tratamiento para verificar la ausencia de contraindicaciones.',
      },
      {
        question: '¿Indiba duele?',
        answer:
          'No. La sesión de Indiba es completamente indolora e incluso muy agradable. La sensación predominante es la de un calor profundo y relajante. Si en algún momento la intensidad resultase molesta, se ajusta inmediatamente el parámetro.',
      },
      {
        question: '¿Puedo combinar Indiba con otros tratamientos?',
        answer:
          'Sí, y de hecho es muy recomendable. Indiba es especialmente sinérgica con la terapia manual, el ejercicio terapéutico, la EPTE y los ultrasonidos. En nuestra clínica la integramos habitualmente en sesiones que combinan varias técnicas para maximizar los resultados y acortar los tiempos de recuperación.',
      },
    ],
    keywords: [
      'Indiba Terrassa',
      'radiofrecuencia Terrassa',
      'fisioterapia Indiba Terrassa',
      'radiofrecuencia terapéutica Terrassa',
      'Indiba fisioterapia',
      '448 kHz terapia',
      'calor profundo fisioterapia Terrassa',
      'recuperación muscular Terrassa',
    ],
    metaDescription:
      'Indiba — Radiofrecuencia terapéutica de 448 kHz en Terrassa. Recuperación acelerada, alivio del dolor profundo y regeneración tisular. Podofisio Clinic.',
    relatedServices: ['epte', 'ecografia', 'recuperacion-funcional'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 05 · QUIROPODÍA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'quiropodia',
    number: '05',
    category: 'Podología',
    title: 'Quiropodía',
    subtitle: 'Cuidado profesional y tratamiento del pie',
    description:
      'La quiropodía comprende el tratamiento profesional de callos, durezas, uñas engrosadas, helomas y otras patologías dérmicas del pie, garantizando la salud cutánea y ungueal con técnicas indoloras y equipos de máxima higiene.',
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Revisión completa', label: 'Del pie y el tobillo' },
      { value: 'Sin dolor', label: 'Técnica indolora' },
      { value: 'Prevención', label: 'Cuidado preventivo' },
      { value: 'Todas las edades', label: 'Pacientes de 0 a 100 años' },
    ],
    overview:
      'La quiropodía es la rama de la podología dedicada al diagnóstico, tratamiento y prevención de las patologías dérmicas y ungueales del pie. En Podofisio Clinic Terrassa realizamos sesiones de quiropodía con el más alto nivel de exigencia técnica e higiénica, utilizando instrumental estéril de un solo uso o esterilizado en autoclave, fresas de podología de última generación y productos dermatológicamente testados. El tratamiento quiropológico abarca desde la eliminación de callosidades y durezas hasta el cuidado de uñas engrosadas o atróficas, el tratamiento de helomas interdigitales, la atención al pie diabético y la eliminación de verrugas plantares. Prestamos especial atención al pie diabético, donde el cuidado podológico regular es fundamental para prevenir úlceras y complicaciones vasculares que pueden derivar en situaciones graves. Durante la visita de quiropodía aprovechamos para realizar una revisión general del estado del pie, detectar alteraciones que requieran valoración más específica —biomecánica, vascular, dermatológica— y dar al paciente consejos personalizados sobre higiene, hidratación y calzado adecuado. La frecuencia recomendada varía de un paciente a otro —generalmente entre 6 semanas y 4 meses— según el tipo de piel, la actividad física y la patología de base.',
    benefits: [
      {
        title: 'Alivio inmediato del dolor',
        description:
          'La eliminación de callosidades y helomas proporciona un alivio del dolor casi inmediato, permitiendo al paciente caminar con mayor comodidad desde el primer momento tras la sesión.',
      },
      {
        title: 'Prevención de complicaciones',
        description:
          'El cuidado podológico regular previene la aparición de úlceras, infecciones y lesiones por fricción, especialmente relevante en pacientes con diabetes, insuficiencia vascular o neuropatía periférica.',
      },
      {
        title: 'Tratamiento de uñas problemáticas',
        description:
          'Tratamos uñas engrosadas (onicogrifosis), uñas micóticas (onicomicosis), uñas involutadas y otras alteraciones ungueales con técnicas seguras, eficaces e indoloras.',
      },
      {
        title: 'Higiene y seguridad certificadas',
        description:
          'Todo el instrumental que entra en contacto con el paciente es de un solo uso o esterilizado en autoclave. Cumplimos estrictamente con los protocolos de bioseguridad vigentes para garantizar la máxima seguridad.',
      },
      {
        title: 'Atención integral al pie diabético',
        description:
          'El paciente diabético recibe una atención podológica especializada que incluye exploración vascular y sensitiva, cuidado preventivo de la piel y las uñas, y asesoramiento sobre calzado y autocuidado.',
      },
      {
        title: 'Consejos personalizados de autocuidado',
        description:
          'Al finalizar cada sesión el podólogo orienta al paciente sobre hidratación, higiene diaria, calzado adecuado y señales de alerta que requieren una consulta urgente, empoderándolo en el cuidado de sus pies.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Anamnesis y exploración general del pie',
        description:
          'Se recoge el historial médico relevante y se realiza una inspección visual y táctil completa de ambos pies, identificando todas las áreas de hiperqueratosis, lesiones ungueales y otras alteraciones presentes.',
      },
      {
        step: '02',
        title: 'Reblandecimiento y preparación del tejido',
        description:
          'Se utiliza agua templada, productos queratolíticos o técnicas mecánicas suaves para preparar la piel y las uñas, facilitando el trabajo posterior y garantizando el máximo confort del paciente.',
      },
      {
        step: '03',
        title: 'Tratamiento de callos y durezas',
        description:
          'Mediante fresa de podología y bisturí de hoja estéril se eliminan con precisión las hiperqueratosis plantares y digitales, los helomas e interdigitales, sin dañar el tejido sano circundante.',
      },
      {
        step: '04',
        title: 'Cuidado ungueal',
        description:
          'Se realiza el corte, limado y fresado de las uñas según su morfología y patología específica. Se tratan las onicogrifosis, onicomicosis y uñas involutadas con las técnicas más adecuadas para cada caso.',
      },
      {
        step: '05',
        title: 'Hidratación y consejos finales',
        description:
          'Se aplica crema hidratante podológica y se orienta al paciente sobre el período hasta la próxima visita, los productos de cuidado domiciliario recomendados y los signos que requieren atención urgente.',
      },
    ],
    conditions: [
      'Callos y durezas',
      'Uñas engrosadas',
      'Helomas interdigitales',
      'Pie diabético',
      'Onicomicosis',
      'Fisuras del talón',
      'Hiperqueratosis plantar',
      'Verrugas plantares',
    ],
    faq: [
      {
        question: '¿Con qué frecuencia debo acudir a quiropodía?',
        answer:
          'La frecuencia óptima varía de un paciente a otro. La media habitual es una visita cada 6-8 semanas en pies con tendencia a formar callos o con patología ungueal recurrente, y cada 3-4 meses para mantenimiento en pies sin problemas significativos. En pacientes diabéticos o con patología vascular se recomienda una revisión mensual como mínimo.',
      },
      {
        question: '¿Duele la quiropodía?',
        answer:
          'En condiciones normales la quiropodía es completamente indolora. El podólogo trabaja con técnica, instrumental de precisión y conocimiento anatómico para eliminar el tejido patológico sin afectar el tejido sano. Algunos helomas muy profundos o enclavados pueden requerir algo más de tiempo y atención, pero el procedimiento se realiza siempre dentro del umbral del confort del paciente.',
      },
      {
        question: '¿Qué diferencia hay entre quiropodía y pedicura?',
        answer:
          'La quiropodía es un acto sanitario realizado por un podólogo titulado universitario, con formación clínica específica para diagnosticar y tratar patologías del pie. La pedicura es un tratamiento estético que no tiene carácter sanitario y no está capacitada para tratar patologías. La diferencia es especialmente importante en pacientes con diabetes, insuficiencia vascular o neuropatía, donde un mal tratamiento puede tener consecuencias graves.',
      },
      {
        question: '¿Tengo que hacer algo antes de la visita de quiropodía?',
        answer:
          'No es necesaria ninguna preparación especial. Puede venir con los pies limpios y con calzado cómodo. No es recomendable aplicar cremas o aceites antes de la visita, ya que dificultan el trabajo sobre la piel. Si tiene alguna patología vascular o nerviosa, o si toma anticoagulantes, es importante que lo comunique al podólogo al inicio de la visita.',
      },
    ],
    keywords: [
      'quiropodía Terrassa',
      'podología Terrassa',
      'quiropodia Terrassa',
      'podólogo Terrassa',
      'callos durezas Terrassa',
      'pie diabético Terrassa',
      'uñas engrosadas Terrassa',
      'cuidado pies Terrassa',
    ],
    metaDescription:
      'Quiropodía profesional en Terrassa. Tratamiento de callos, durezas, uñas y pie diabético. Técnicas indoloras y máxima higiene. Podofisio Clinic.',
    relatedServices: ['cirugia-ungueal', 'estudio-biomecanico', 'ecografia'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 06 · ESTUDIO BIOMECÁNICO
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'estudio-biomecanico',
    number: '06',
    category: 'Biomecánica',
    title: 'Estudio Biomecánico',
    subtitle: 'Análisis computerizado de la pisada y la marcha',
    description:
      'El estudio biomecánico analiza de forma computerizada la pisada, la marcha y la postura del paciente mediante plataformas de presiones y sensores inerciales, identificando alteraciones que provocan dolor y lesiones recurrentes.',
    image:
      'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Análisis 3D', label: 'Cinemática del movimiento' },
      { value: 'Plataforma de presiones', label: 'Distribución plantar' },
      { value: 'Informe detallado', label: 'Con imágenes y datos' },
      { value: '60 minutos', label: 'Estudio completo' },
    ],
    overview:
      'El estudio biomecánico es la exploración más completa y objetiva para entender cómo se mueve el cuerpo de un paciente y por qué desarrolla determinadas lesiones o dolores. En Podofisio Clinic Terrassa realizamos estudios biomecánicos con tecnología de última generación: plataformas de presiones dinámicas que registran la distribución de cargas bajo el pie durante la marcha, escáneres 3D del pie en carga y descarga, sistemas de análisis del ángulo de marcha y de la alineación de los miembros inferiores, y valoración muscular y articular exhaustiva. Esta combinación de datos objetivos nos permite identificar con precisión alteraciones biomecánicas —hiperpronación, supinación, valgo de retropié, antepié varo, discrepancia de miembros— que están en el origen de patologías tan frecuentes como la fascitis plantar, la metatarsalgia, la tendinopatía de Aquiles, el síndrome de la cintilla iliotibial o el dolor de rodilla. El estudio biomecánico es el punto de partida indispensable para prescribir plantillas ortopédicas personalizadas con criterio científico, pero también para orientar el tratamiento fisioterapéutico, recomendar el calzado adecuado y diseñar programas de ejercicio correctivo. Ofrecemos estudios especializados para corredores, deportistas de otros ámbitos, niños en período de desarrollo y adultos con dolor crónico de causa biomecánica.',
    benefits: [
      {
        title: 'Diagnóstico biomecánico objetivo',
        description:
          'Los datos recogidos por la plataforma de presiones y los sistemas de análisis del movimiento son completamente objetivos y cuantificables, eliminando la subjetividad inherente a la exploración clínica manual.',
      },
      {
        title: 'Identificación de la causa raíz',
        description:
          'Muchas lesiones recurrentes tienen un origen biomecánico que no se detecta sin un análisis específico. El estudio biomecánico revela el patrón de movimiento alterado que genera la sobrecarga tisular responsable del dolor.',
      },
      {
        title: 'Prescripción de plantillas con precisión',
        description:
          'Las plantillas diseñadas a partir de un estudio biomecánico son incomparablemente más eficaces que las plantillas estándar, pues se adaptan exactamente a las necesidades correctivas y de descarga de cada pie.',
      },
      {
        title: 'Optimización del rendimiento deportivo',
        description:
          'Para deportistas, el estudio biomecánico permite identificar ineficiencias en la técnica de carrera o de movimiento que aumentan el riesgo de lesión y reducen el rendimiento, permitiendo correcciones específicas.',
      },
      {
        title: 'Seguimiento y control de la evolución',
        description:
          'Repetir el estudio biomecánico tras el tratamiento permite verificar objetivamente si la alteración detectada se ha corregido y si las plantillas o el ejercicio están siendo eficaces.',
      },
      {
        title: 'Informe detallado con imágenes y datos',
        description:
          'El paciente recibe un informe completo con imágenes de la distribución de presiones, los ángulos articulares medidos, las alteraciones detectadas y las recomendaciones terapéuticas, todo explicado de forma comprensible.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Anamnesis y exploración clínica',
        description:
          'Recogida del historial de lesiones, actividad física, calzado habitual y síntomas actuales. Exploración manual de la movilidad articular, la fuerza muscular y los rangos de movimiento de cadera, rodilla, tobillo y pie.',
      },
      {
        step: '02',
        title: 'Análisis de presiones plantares en estático y dinámico',
        description:
          'El paciente pisa sobre la plataforma de presiones en posición estática y camina sobre ella en condiciones naturales. El sistema registra la distribución de cargas, los picos de presión, el área de contacto y la secuencia de apoyo.',
      },
      {
        step: '03',
        title: 'Análisis de la marcha y la alineación',
        description:
          'Se valoran el ángulo de marcha, la alineación de rodillas y pies, el movimiento de la cadera y la pelvis, y los patrones de pronación/supinación durante el ciclo completo de la marcha mediante sistemas ópticos o inerciales.',
      },
      {
        step: '04',
        title: 'Exploración en carrera (opcional deportistas)',
        description:
          'Para corredores y deportistas se realiza el análisis específico en la cinta de correr, evaluando la cadencia, la longitud de zancada, el patrón de aterrizaje y la dinámica del ciclo de carrera.',
      },
      {
        step: '05',
        title: 'Informe, conclusiones y plan de tratamiento',
        description:
          'Se elabora un informe detallado con todos los datos recogidos. El podólogo explica los hallazgos, propone las medidas correctivas —plantillas, ejercicio, calzado, fisioterapia— y establece el plan de seguimiento.',
      },
    ],
    conditions: [
      'Fascitis plantar',
      'Metatarsalgia',
      'Hallux valgus',
      'Rodilla de corredor',
      'Dolor lumbar postural',
      'Tendinopatía de Aquiles',
      'Tibial posterior',
      'Lesiones por sobrecarga',
    ],
    faq: [
      {
        question: '¿En qué consiste exactamente el estudio biomecánico?',
        answer:
          'El estudio biomecánico es una exploración multidisciplinar de aproximadamente 60 minutos en la que se analiza cómo se distribuyen las presiones bajo el pie, cómo se alinean los segmentos del miembro inferior y cuál es el patrón de movimiento durante la marcha. Se utilizan plataformas de presiones, escáneres 3D y sistemas de análisis angular para obtener datos objetivos que permiten identificar las alteraciones biomecánicas responsables del dolor o la lesión.',
      },
      {
        question: '¿Necesito llevar mi calzado habitual al estudio biomecánico?',
        answer:
          'Sí, es muy recomendable traer el calzado que utiliza habitualmente para el deporte y el calzado de calle habitual, así como las plantillas que esté usando en caso de tenerlas. También es útil traer ropa deportiva cómoda que permita observar las rodillas y el movimiento de los miembros inferiores sin dificultad.',
      },
      {
        question: '¿El estudio biomecánico es solo para deportistas?',
        answer:
          'No. El estudio biomecánico es igualmente valioso para personas sedentarias con dolor crónico de origen postural o biomecánico, para niños en edad de desarrollo con alteraciones de la marcha, y para adultos mayores con problemas de equilibrio o dolor articular. Cualquier persona con dolor de pies, rodillas, cadera o espalda de causa desconocida puede beneficiarse de un estudio biomecánico.',
      },
      {
        question: '¿Cuánto tarda en estar listo el informe?',
        answer:
          'El informe está disponible en la misma sesión o en las 24-48 horas siguientes en formato digital, permitiendo al paciente disponer de toda la información para tomar las decisiones terapéuticas oportunas sin demora.',
      },
    ],
    keywords: [
      'estudio biomecánico Terrassa',
      'estudio pisada Terrassa',
      'análisis marcha Terrassa',
      'biomecánica Terrassa',
      'podología biomecánica Terrassa',
      'análisis presiones plantares Terrassa',
      'estudio corredor Terrassa',
      'plataforma presiones Terrassa',
    ],
    metaDescription:
      'Estudio biomecánico de la pisada y la marcha en Terrassa. Análisis computerizado con plataforma de presiones. Diagnóstico preciso y tratamiento personalizado. Podofisio Clinic.',
    relatedServices: ['plantillas', 'prp', 'cirugia-ungueal', 'tratamientos-complementarios'],
    subServices: [
      {
        slug: 'plantillas',
        title: 'Plantillas',
        description: 'Soportes plantares personalizados mediante escáner 3D e impresión aditiva.',
      },
      {
        slug: 'prp',
        title: 'PRP',
        description: 'Plasma Rico en Plaquetas para la regeneración de tejidos crónicamente dañados.',
      },
      {
        slug: 'cirugia-ungueal',
        title: 'Cirugía Ungueal',
        description: 'Resolución definitiva de uñas encarnadas con cirugía menor ambulatoria.',
      },
      {
        slug: 'tratamientos-complementarios',
        title: 'Tratamientos Complementarios',
        description: 'Presoterapia y Cryopush para la recuperación activa y el drenaje linfático.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 07 · PLANTILLAS (sub-servicio de estudio-biomecanico)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'plantillas',
    number: '07',
    category: 'Biomecánica',
    title: 'Plantillas',
    subtitle: 'Soportes plantares personalizados mediante impresión 3D',
    description:
      'Plantillas ortopédicas completamente personalizadas diseñadas a partir del estudio biomecánico individual, fabricadas mediante escáner 3D e impresión aditiva con materiales de alta tecnología para corregir la pisada y eliminar el dolor.',
    image:
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Escáner 3D', label: 'Molde digital preciso' },
      { value: 'Impresión aditiva', label: 'Fabricación personalizada' },
      { value: 'Para deporte y calle', label: 'Modelos específicos' },
      { value: 'Materiales élite', label: 'Tecnología punta' },
    ],
    overview:
      'Las plantillas ortopédicas personalizadas de Podofisio Clinic Terrassa representan el estándar más elevado en corrección biomecánica del pie y la marcha. A diferencia de las plantillas prefabricadas que se venden en farmacias o tiendas deportivas —que ofrecen una corrección genérica válida para nadie en particular—, nuestras plantillas se diseñan de forma individual a partir de los datos objetivos obtenidos en el estudio biomecánico: la distribución de presiones plantares, la morfología tridimensional del pie, los ángulos de alineación articular y las necesidades correctivas específicas de cada paciente. El proceso de fabricación combina el escaneado digital 3D del pie con software de diseño paramétrico y técnicas de impresión aditiva de precisión, que permiten crear una plantilla que replica con exactitud la geometría del pie y aplica las correcciones biomecánicas programadas exactamente donde son necesarias. Los materiales utilizados son polímeros de alta tecnología con propiedades de rigidez, flexibilidad y amortiguación específicamente seleccionados para cada indicación: mayor rigidez para correcciones estructurales en pie plano severo, materiales más blandos y amortiguadores para metatarsalgias y pies con déficit de tejido adiposo plantar, o materiales ligeros y resilientes para aplicaciones deportivas de alto rendimiento. Fabricamos plantillas para deporte —running, ciclismo, fútbol, tenis, esquí— y para uso cotidiano en todo tipo de calzado, incluyendo calzado formal y femenino con tacón.',
    benefits: [
      {
        title: 'Personalización absoluta',
        description:
          'Cada plantilla se diseña y fabrica exclusivamente para el pie del paciente, a partir de los datos objetivos de su estudio biomecánico individual. No existe ninguna solución prefabricada comparable en términos de precisión correctiva.',
      },
      {
        title: 'Corrección biomecánica eficaz',
        description:
          'Las plantillas actúan sobre la causa raíz del dolor y las lesiones por sobrecarga, corrigiendo la alineación del pie, la distribución de presiones y los patrones de movimiento alterados que generan el problema.',
      },
      {
        title: 'Fabricación 3D de alta precisión',
        description:
          'La tecnología de impresión aditiva permite crear geometrías imposibles para los procesos de fresado convencional, logrando una adaptación perfecta al pie y una distribución de las correcciones biomecánicas más precisa y eficaz.',
      },
      {
        title: 'Materiales de alto rendimiento',
        description:
          'Seleccionamos los polímeros y materiales compuestos más avanzados del mercado para cada indicación, garantizando la durabilidad, el confort y la eficacia correctiva de las plantillas a lo largo del tiempo.',
      },
      {
        title: 'Modelos para cada uso',
        description:
          'Fabricamos plantillas específicas para running, ciclismo, deportes de equipo, esquí y uso cotidiano, optimizadas para el tipo de calzado y la demanda biomecánica específica de cada actividad.',
      },
      {
        title: 'Control y seguimiento',
        description:
          'Realizamos revisiones periódicas para verificar el correcto funcionamiento de las plantillas, controlar la adaptación del paciente y realizar los ajustes necesarios a lo largo del tiempo.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Estudio biomecánico previo',
        description:
          'La prescripción de plantillas requiere previamente la realización del estudio biomecánico completo, que aporta los datos objetivos sobre los que se fundamenta el diseño de la plantilla.',
      },
      {
        step: '02',
        title: 'Escaneado 3D del pie',
        description:
          'Se realiza el escáner tridimensional del pie en carga y en descarga para capturar con precisión milimétrica la geometría real del pie, incluyendo el arco plantar, el talón y la morfología de los dedos.',
      },
      {
        step: '03',
        title: 'Diseño paramétrico de la plantilla',
        description:
          'El podólogo utiliza software especializado de diseño biomecánico para programar las correcciones necesarias —cuñas, alzas, elementos de descarga, soporte del arco— sobre el modelo 3D del pie del paciente.',
      },
      {
        step: '04',
        title: 'Fabricación por impresión aditiva',
        description:
          'El archivo de diseño se envía a la impresora 3D de alta resolución donde se fabrica la plantilla capa a capa con los materiales seleccionados, con una precisión de décimas de milímetro.',
      },
      {
        step: '05',
        title: 'Entrega, adaptación y seguimiento',
        description:
          'Se entrega la plantilla al paciente y se guía el proceso de adaptación progresiva. Se programa una revisión a las 4-6 semanas para verificar la tolerancia, el ajuste y la eficacia correctiva.',
      },
    ],
    conditions: [
      'Fascitis plantar',
      'Metatarsalgia',
      'Hallux valgus',
      'Espolón calcáneo',
      'Tendinopatía de Aquiles',
      'Dolor de rodilla',
      'Dolor lumbar',
      'Pie plano / pie cavo',
    ],
    faq: [
      {
        question: '¿Cuánto duran las plantillas personalizadas?',
        answer:
          'La durabilidad depende del material seleccionado, la actividad del paciente y el tipo de calzado. Las plantillas de materiales rígidos o semirrígidos para uso cotidiano tienen una vida media de 2-4 años. Las de running, sometidas a mayor impacto, suelen renovarse cada 12-18 meses o cada 800-1000 km. Revisamos periódicamente el estado de las plantillas y avisamos cuando es necesaria una renovación.',
      },
      {
        question: '¿Las plantillas personalizadas caben en cualquier calzado?',
        answer:
          'Fabricamos modelos específicos para diferentes tipos de calzado: deportivo, casual, formal, de tacón y de seguridad. Es importante traer los distintos tipos de calzado que habitualmente usa para que el podólogo pueda valorar cuál es el más adecuado para cada modelo y adaptar el grosor y la morfología de la plantilla.',
      },
      {
        question: '¿Cuánto tiempo tardaré en adaptarme a las plantillas?',
        answer:
          'El período de adaptación es progresivo y dura entre 2 y 4 semanas en la mayoría de los casos. Se recomienda comenzar usándolas 1-2 horas al día la primera semana e ir aumentando gradualmente hasta su uso continuado. Algunas personas sienten molestias leves durante la adaptación, que son normales y desaparecen en los primeros días.',
      },
      {
        question: '¿Necesito plantillas personalizadas o con unas de farmacia es suficiente?',
        answer:
          'Las plantillas prefabricadas de farmacia están diseñadas para el pie medio estadístico y pueden proporcionar cierto alivio sintomático en casos muy leves, pero no corrigen las alteraciones biomecánicas individuales. Para patologías diagnosticadas —fascitis, metatarsalgia, hallux valgus— o para deportistas que necesitan una corrección precisa, las plantillas personalizadas son incomparablemente más eficaces y seguras.',
      },
    ],
    keywords: [
      'plantillas ortopédicas Terrassa',
      'plantillas personalizadas Terrassa',
      'plantillas 3D Terrassa',
      'plantillas running Terrassa',
      'plantillas biomecánicas Terrassa',
      'ortesis plantares Terrassa',
      'plantillas pie plano Terrassa',
      'plantillas fascitis plantar',
    ],
    metaDescription:
      'Plantillas ortopédicas personalizadas en Terrassa. Diseño biomecánico individual y fabricación 3D de precisión para deporte y uso cotidiano. Podofisio Clinic.',
    relatedServices: ['estudio-biomecanico', 'ecografia', 'quiropodia'],
    parentSlug: 'estudio-biomecanico',
    parentTitle: 'Estudio Biomecánico',
  },

  // ─────────────────────────────────────────────────────────────────
  // 08 · PRP (sub-servicio de estudio-biomecanico)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'prp',
    number: '08',
    category: 'Medicina Regenerativa',
    title: 'PRP',
    subtitle: 'Plasma Rico en Plaquetas para la regeneración tisular',
    description:
      'El PRP utiliza la propia sangre del paciente, concentrada en factores de crecimiento plaquetarios, para estimular la regeneración natural de tejidos dañados como tendones, ligamentos y cartílago, con resultados duraderos y sin rechazo.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    stats: [
      { value: 'Sangre propia', label: 'Sin riesgo de rechazo' },
      { value: 'Concentración x5', label: 'Respecto a sangre normal' },
      { value: 'Guiado por imagen', label: 'Precisión ecográfica' },
      { value: '1-3 sesiones', label: 'Protocolo eficaz' },
    ],
    overview:
      'El Plasma Rico en Plaquetas (PRP) es una terapia de medicina regenerativa que aprovecha la capacidad natural de curación del propio organismo para tratar lesiones crónicas y degenerativas que no responden a los tratamientos convencionales. El procedimiento consiste en extraer una pequeña cantidad de sangre del propio paciente, someterla a un proceso de centrifugación que concentra las plaquetas y los factores de crecimiento hasta 5 veces su concentración sanguínea normal, y reintroducir este concentrado plaquetario directamente en la zona lesionada mediante inyección ecoguiada. Las plaquetas son células sanguíneas que contienen una enorme cantidad de factores de crecimiento —PDGF, TGF-β, IGF-1, VEGF, EGF— que actúan como señales moleculares que activan y aceleran los mecanismos naturales de reparación tisular: proliferación de fibroblastos, síntesis de colágeno, angiogénesis y modulación de la respuesta inflamatoria. Al tratarse de sangre del propio paciente, el riesgo de rechazo o reacción adversa es prácticamente nulo. La guía ecográfica es fundamental para garantizar que el concentrado plaquetario se deposita exactamente en la zona de tejido dañado, maximizando el efecto regenerador y minimizando la incomodidad del procedimiento. En Podofisio Clinic Terrassa el PRP se utiliza para el tratamiento de tendinopatías crónicas refractarias, fascitis plantar resistente, artrosis de tobillo y articulaciones del pie, y lesiones ligamentosas de larga evolución que no han respondido a otros tratamientos.',
    benefits: [
      {
        title: 'Regeneración real del tejido dañado',
        description:
          'A diferencia de los antiinflamatorios o los corticoides, que solo alivian el síntoma, el PRP actúa sobre la causa estimulando la producción de colágeno y la reparación tisular, con efectos duraderos.',
      },
      {
        title: 'Procedimiento autólogo y seguro',
        description:
          'Al utilizarse la propia sangre del paciente, no existe riesgo de rechazo inmunológico ni de transmisión de enfermedades. Es una de las terapias regenerativas más seguras disponibles en la actualidad.',
      },
      {
        title: 'Alta concentración de factores de crecimiento',
        description:
          'La centrifugación controlada genera una concentración de plaquetas 4-6 veces superior a la de la sangre periférica normal, lo que significa una mayor disponibilidad de señales moleculares que activan la regeneración.',
      },
      {
        title: 'Aplicación ecoguiada de precisión',
        description:
          'La inyección se realiza bajo control ecográfico en tiempo real, garantizando que el concentrado plaquetario llega exactamente a la zona de tejido dañado y no a las estructuras adyacentes sanas.',
      },
      {
        title: 'Alternativa a la cirugía en patologías crónicas',
        description:
          'Para tendinopatías y lesiones crónicas que no responden a fisioterapia ni a infiltraciones convencionales, el PRP ofrece frecuentemente la solución definitiva sin necesidad de intervención quirúrgica.',
      },
      {
        title: 'Protocolo breve y ambulatorio',
        description:
          'El procedimiento completo dura aproximadamente 30-45 minutos y se realiza en consulta. El paciente puede marcharse a pie por su propio pie tras la sesión y reanudar su actividad habitual en 24-48 horas.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Evaluación clínica y ecográfica',
        description:
          'Se valora la indicación de PRP mediante la historia clínica y una ecografía de la zona afectada. Se verifica que no existen contraindicaciones y se informa al paciente sobre el procedimiento, los beneficios esperados y las molestias normales post-inyección.',
      },
      {
        step: '02',
        title: 'Extracción de sangre',
        description:
          'Se extrae una pequeña muestra de sangre venosa del paciente (habitualmente 15-30 ml, según el protocolo) mediante punción venosa convencional, con el mismo procedimiento que un análisis rutinario.',
      },
      {
        step: '03',
        title: 'Centrifugación y obtención del PRP',
        description:
          'La sangre se procesa en una centrífuga calibrada que separa sus componentes. Se recoge la fracción concentrada en plaquetas y factores de crecimiento, descartando el resto, y se prepara para la inyección.',
      },
      {
        step: '04',
        title: 'Inyección ecoguiada',
        description:
          'Bajo guía ecográfica en tiempo real y tras la desinfección de la zona, se introduce el PRP directamente en el tejido dañado —tendón, ligamento, articulación— con una aguja fina, verificando en todo momento la posición exacta del depósito.',
      },
      {
        step: '05',
        title: 'Pauta post-infiltración y seguimiento',
        description:
          'Se entrega al paciente una pauta de reposo relativo y actividad progresiva para las 48-72 horas posteriores. Se programa el seguimiento clínico a las 2-4 semanas para valorar la respuesta y, en su caso, planificar una segunda sesión.',
      },
    ],
    conditions: [
      'Tendinopatía crónica',
      'Fascitis plantar resistente',
      'Artrosis de tobillo',
      'Lesión ligamentosa',
      'Degeneración articular',
      'Neuroma de Morton',
    ],
    faq: [
      {
        question: '¿El PRP es doloroso?',
        answer:
          'La extracción de sangre es idéntica a la de cualquier análisis rutinario. La inyección del PRP puede provocar una molestia moderada durante el procedimiento y las 24-72 horas siguientes puede haber una respuesta inflamatoria local —dolor, calor, leve hinchazón— que es completamente normal y forma parte del proceso regenerador. Esta fase inflamatoria inicial suele ceder en 3-5 días.',
      },
      {
        question: '¿Cuándo notaré la mejoría tras el PRP?',
        answer:
          'Los efectos del PRP son progresivos, ya que actúan sobre el proceso de regeneración tisular, que es lento por naturaleza. La mayoría de pacientes comienzan a notar mejoría entre 4 y 8 semanas después de la primera sesión, con una mejoría que continúa durante 3-6 meses. Algunos casos requieren 2-3 sesiones espaciadas 4-6 semanas para obtener el resultado óptimo.',
      },
      {
        question: '¿El PRP tiene contraindicaciones?',
        answer:
          'El PRP está contraindicado en pacientes con trastornos de la coagulación, plaquetopenia severa, tratamiento con anticoagulantes que no puedan suspenderse, infección activa en la zona a tratar o neoplasia activa. La toma de antiinflamatorios no esteroideos (AINEs) debe interrumpirse al menos una semana antes del procedimiento, ya que reducen la eficacia plaquetaria. El especialista revisará su medicación antes de la sesión.',
      },
      {
        question: '¿En qué se diferencia el PRP de una infiltración de cortisona?',
        answer:
          'Las infiltraciones de corticoides tienen un efecto antiinflamatorio rápido y eficaz a corto plazo, pero su uso repetido puede dañar el tendón y no actúan sobre la causa de la degeneración. El PRP, en cambio, actúa sobre los mecanismos de reparación tisular, regenerando el tejido dañado con efectos más duraderos. Son tratamientos complementarios con indicaciones diferentes, y en algunos casos pueden combinarse de forma estratégica.',
      },
    ],
    keywords: [
      'PRP Terrassa',
      'plasma rico en plaquetas Terrassa',
      'medicina regenerativa Terrassa',
      'PRP tendón Terrassa',
      'infiltración PRP Terrassa',
      'regeneración tisular Terrassa',
      'PRP fascitis plantar',
      'PRP tendinopatía Terrassa',
    ],
    metaDescription:
      'PRP — Plasma Rico en Plaquetas en Terrassa. Medicina regenerativa para tendinopatías crónicas y lesiones del pie y tobillo. Guiado por ecografía. Podofisio Clinic.',
    relatedServices: ['ecografia', 'epte', 'estudio-biomecanico'],
    parentSlug: 'estudio-biomecanico',
    parentTitle: 'Estudio Biomecánico',
  },

  // ─────────────────────────────────────────────────────────────────
  // 09 · CIRUGÍA UNGUEAL (sub-servicio de estudio-biomecanico)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'cirugia-ungueal',
    number: '09',
    category: 'Cirugía Menor',
    title: 'Cirugía Ungueal',
    subtitle: 'Resolución definitiva de patologías ungueales',
    description:
      'Cirugía ungueal ambulatoria con anestesia local para la resolución definitiva de uñas encarnadas, onicocriptosis recidivante y otras patologías ungueales, con alta el mismo día y una tasa de éxito superior al 95%.',
    image:
      'https://images.unsplash.com/photo-1579154235602-3c20fa4f597e?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Ambulatoria', label: 'Sin ingreso hospitalario' },
      { value: 'Anestesia local', label: 'Sin sedación general' },
      { value: 'Alta el mismo día', label: 'Vuelta a casa en horas' },
      { value: '>95% éxito', label: 'Tasa de resolución definitiva' },
    ],
    overview:
      'La cirugía ungueal en podología comprende un conjunto de procedimientos de cirugía menor ambulatoria destinados a resolver de forma definitiva las patologías ungueales que no responden al tratamiento conservador o que presentan un carácter recidivante. La indicación más frecuente es la onicocriptosis —uña encarnada— en sus diferentes grados de severidad, desde la simple encarnación sin infección hasta los casos complicados con granuloma periungueal, infección recurrente y deformidad del surco lateral. El procedimiento se realiza en la propia consulta podológica, bajo anestesia local con bloqueo digital del dedo afectado, de forma que el paciente no siente ningún dolor durante la intervención. Tras la exéresis de la porción ungueal encarnada, se aplica ácido fenol o se realiza una matrixectomía mecánica para destruir selectivamente las células de la matriz ungueal responsables del crecimiento del fragmento que provoca el problema, evitando así la recurrencia en más del 95% de los casos. La recuperación es rápida: el paciente puede caminar y retomar su actividad cotidiana el mismo día de la intervención, con un calzado amplio y cómodo. Las curas postoperatorias son sencillas, indoloras y se realizan en casa o en la clínica según las necesidades del paciente. En Podofisio Clinic Terrassa realizamos cirugía ungueal con los máximos estándares de asepsia y con técnica depurada que minimiza el tiempo de intervención, las molestias postoperatorias y el período de curación.',
    benefits: [
      {
        title: 'Resolución definitiva sin recurrencia',
        description:
          'La matrixectomía química o mecánica elimina las células responsables del crecimiento de la porción ungueal problemática, consiguiendo una tasa de resolución definitiva superior al 95% y evitando las recidivas.',
      },
      {
        title: 'Procedimiento indoloro con anestesia local',
        description:
          'El bloqueo digital con anestesia local garantiza que el paciente no sienta ningún dolor durante toda la intervención. La inyección del anestésico es la única molestia del proceso y dura apenas unos segundos.',
      },
      {
        title: 'Ambulatoria y sin ingreso',
        description:
          'La cirugía se realiza íntegramente en la consulta podológica, sin necesidad de quirófano hospitalario, anestesia general ni ingreso. El paciente llega andando y se va andando el mismo día.',
      },
      {
        title: 'Recuperación rápida',
        description:
          'Las curas postoperatorias son sencillas y se realizan en casa en pocos minutos. La mayor parte de los pacientes puede retomar el trabajo y las actividades cotidianas en 24-48 horas tras la intervención.',
      },
      {
        title: 'Intervención breve y precisa',
        description:
          'El procedimiento dura entre 20 y 40 minutos en total. La técnica refinada del equipo de Podofisio Clinic minimiza el daño al tejido sano, reduce las molestias postoperatorias y favorece una cicatrización rápida y limpia.',
      },
      {
        title: 'Tratamiento también de la infección asociada',
        description:
          'En los casos con granuloma periungueal o infección activa, el procedimiento quirúrgico se complementa con el tratamiento adecuado de la infección, resolviendo el problema de forma integral en una sola intervención.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Valoración preoperatoria',
        description:
          'Exploración de la uña y el surco periungeal, valoración del grado de encarnamiento, presencia de infección o granuloma, y verificación de la ausencia de contraindicaciones para la anestesia local y la cirugía menor.',
      },
      {
        step: '02',
        title: 'Preparación del campo quirúrgico',
        description:
          'Limpieza y desinfección exhaustiva del dedo y la zona periungeal. Aplicación de un torniquete digital para lograr un campo exangüe que mejore la visibilidad y la seguridad del procedimiento.',
      },
      {
        step: '03',
        title: 'Anestesia local',
        description:
          'Bloqueo digital completo del dedo mediante inyección de anestésico local en la base del dedo. Se espera a que el bloqueo sea completo —habitualmente 3-5 minutos— antes de proceder a la intervención.',
      },
      {
        step: '04',
        title: 'Exéresis y matrixectomía',
        description:
          'Se extirpa la porción ungueal encarnada y se trata la matriz ungueal correspondiente con ácido fenol o mediante curetaje mecánico, destruyendo selectivamente las células que generarían la recurrencia.',
      },
      {
        step: '05',
        title: 'Cura y pautas postoperatorias',
        description:
          'Se realiza la primera cura postoperatoria, se entrega al paciente el protocolo de curas domiciliarias, se pauta la medicación analgésica si es necesaria y se programa la revisión a los 7 días.',
      },
    ],
    conditions: [
      'Uña encarnada (onicocriptosis)',
      'Uña encarnada recidivante',
      'Infección periungueal',
      'Deformidades ungueales',
      'Granuloma periungueal',
      'Onicocriptosis bilateral',
    ],
    faq: [
      {
        question: '¿Puedo caminar después de la cirugía ungueal?',
        answer:
          'Sí. El paciente puede caminar inmediatamente después de la intervención, aunque se recomienda utilizar calzado amplio y cómodo —tipo sandalia abierta o zapatilla deportiva holgada— que no presione el dedo intervenido. La actividad deportiva intensa debe posponerse entre 2 y 4 semanas según la evolución.',
      },
      {
        question: '¿Cuánto tiempo tardan en cicatrizar las curas postoperatorias?',
        answer:
          'La herida postoperatoria suele cicatrizar completamente en 3-5 semanas. Durante este período se realizan curas cada 2-3 días con suero fisiológico y un apósito limpio. Las curas son rápidas, sencillas e indoloras, y el especialista enseña al paciente a realizarlas en casa de forma autónoma.',
      },
      {
        question: '¿La uña volverá a crecer después de la cirugía?',
        answer:
          'En las matrixectomías parciales —las más frecuentes— solo se destruye la porción lateral de la matriz responsable del crecimiento del fragmento problemático. El resto de la uña continúa creciendo con normalidad, de forma que el resultado estético final es muy satisfactorio: la uña tiene un aspecto normal pero con el borde lateral eliminado permanentemente.',
      },
      {
        question: '¿Hay riesgo de infección tras la cirugía ungueal?',
        answer:
          'La cirugía se realiza en condiciones de máxima asepsia para minimizar el riesgo infeccioso. En algunos casos —especialmente si había infección previa— el médico puede pautar antibiótico profiláctico. La correcta realización de las curas domiciliarias según las instrucciones es la medida más importante para prevenir complicaciones infecciosas.',
      },
    ],
    keywords: [
      'cirugía ungueal Terrassa',
      'uña encarnada Terrassa',
      'onicocriptosis Terrassa',
      'podólogo cirugía Terrassa',
      'matrixectomía Terrassa',
      'uña encarnada tratamiento definitivo',
      'cirugía menor podología Terrassa',
      'granuloma periungueal Terrassa',
    ],
    metaDescription:
      'Cirugía ungueal en Terrassa. Resolución definitiva de uñas encarnadas y onicocriptosis con anestesia local, sin ingreso y alta el mismo día. Podofisio Clinic.',
    relatedServices: ['quiropodia', 'ecografia', 'estudio-biomecanico'],
    parentSlug: 'estudio-biomecanico',
    parentTitle: 'Estudio Biomecánico',
  },

  // ─────────────────────────────────────────────────────────────────
  // 10 · TRATAMIENTOS COMPLEMENTARIOS (sub-servicio de estudio-biomecanico)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'tratamientos-complementarios',
    number: '10',
    category: 'Tratamientos Complementarios',
    title: 'Tratamientos Complementarios',
    subtitle: 'Presoterapia y Cryopush para la recuperación y el bienestar',
    description:
      'La presoterapia y el Cryopush son dos tecnologías complementarias que aceleran la recuperación muscular, mejoran el drenaje linfático y alivian la sensación de piernas pesadas mediante compresión neumática secuencial y crioterapia localizada.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Presoterapia', label: 'Drenaje linfático mecánico' },
      { value: 'Cryopush', label: 'Crioterapia de recuperación' },
      { value: 'Sin dolor', label: 'Sesión completamente confortable' },
      { value: 'Recuperación activa', label: 'Resultados desde la primera sesión' },
    ],
    overview:
      'Los tratamientos complementarios de Podofisio Clinic Terrassa integran dos tecnologías diferenciadas y sinérgicas: la presoterapia por compresión neumática secuencial y el Cryopush de crioterapia localizada, que juntas forman un arsenal terapéutico de primer nivel para la recuperación activa, el tratamiento del sistema linfático y la reducción de la inflamación musculoesquelética. La presoterapia utiliza una bota o prenda de compresión multi-cámara conectada a un equipo electrónico que infla y desinfla las cámaras de forma secuencial, desde las zonas distales hacia las proximales, imitando y potenciando el mecanismo natural del drenaje linfático. Esta compresión neumática progresiva moviliza el líquido linfático estancado, reduce el edema, mejora el retorno venoso y proporciona una sensación inmediata de alivio y ligereza en las piernas. Es un tratamiento especialmente indicado para pacientes con insuficiencia venosa, linfedema, retención de líquidos, piernas cansadas y recuperación deportiva post-esfuerzo. El Cryopush es un sistema de crioterapia de aplicación localizada que utiliza gas frío a temperaturas controladas para reducir de forma inmediata la temperatura superficial y profunda del tejido, provocando vasoconstricción, reducción de la inflamación, analgesia rápida y disminución del espasmo muscular. Es la herramienta de elección para la recuperación inmediata post-competición, el tratamiento de lesiones agudas con componente inflamatorio intenso y el alivio de contracturas musculares. La combinación de ambas técnicas en el mismo protocolo potencia sus efectos individuales y ofrece una recuperación activa completa y eficaz.',
    benefits: [
      {
        title: 'Drenaje linfático eficaz y sin esfuerzo',
        description:
          'La presoterapia moviliza el líquido linfático de forma mecánica y progresiva, descomprimiendo los tejidos, reduciendo el edema y proporcionando alivio inmediato en casos de linfedema, insuficiencia venosa y piernas cansadas.',
      },
      {
        title: 'Recuperación deportiva acelerada',
        description:
          'La combinación de presoterapia y Cryopush post-esfuerzo acelera la eliminación de metabolitos del ejercicio, reduce el daño muscular inducido por el entrenamiento y acorta el tiempo de recuperación entre sesiones o competiciones.',
      },
      {
        title: 'Reducción rápida de la inflamación con Cryopush',
        description:
          'El gas frío del Cryopush penetra más rápido y más profundo que el hielo tradicional, actuando de forma más eficaz sobre la inflamación aguda, el dolor y el espasmo muscular, sin el riesgo de quemaduras cutáneas por contacto.',
      },
      {
        title: 'Mejora del retorno venoso',
        description:
          'La compresión neumática secuencial de la presoterapia potencia el trabajo de las válvulas venosas de los miembros inferiores, mejorando el retorno venoso y reduciendo la presión hidrostática responsable del edema vespertino.',
      },
      {
        title: 'Tratamientos completamente pasivos y relajantes',
        description:
          'Ambos tratamientos son pasivos: el paciente simplemente permanece recostado mientras la tecnología trabaja. La sesión es muy confortable y relajante, sin esfuerzo ni molestias para el paciente.',
      },
      {
        title: 'Complemento ideal de otros tratamientos',
        description:
          'La presoterapia y el Cryopush potencian los efectos de la fisioterapia, el ejercicio terapéutico, el Indiba y los tratamientos invasivos, integrándose de forma natural en los protocolos de recuperación integral de la clínica.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Valoración y selección del protocolo',
        description:
          'El especialista evalúa el objetivo del tratamiento —recuperación deportiva, linfedema, piernas cansadas, inflamación aguda— y selecciona la combinación de presoterapia y/o Cryopush más adecuada, así como los parámetros de presión, tiempo y temperatura.',
      },
      {
        step: '02',
        title: 'Preparación y posicionamiento',
        description:
          'El paciente se coloca en posición cómoda de decúbito supino o semisupino. Se colocan las botas o prendas de presoterapia sobre los miembros inferiores y se ajustan los parámetros del equipo según el protocolo establecido.',
      },
      {
        step: '03',
        title: 'Sesión de presoterapia',
        description:
          'El equipo inicia la secuencia de compresión-descompresión progresiva de las cámaras de la bota, de distal a proximal, con la presión y el tiempo de ciclo seleccionados. El paciente percibe una sensación de masaje envolvente y progresivo muy agradable.',
      },
      {
        step: '04',
        title: 'Aplicación de Cryopush (si indicado)',
        description:
          'Tras la presoterapia o de forma combinada, se aplica el Cryopush sobre las zonas específicas de mayor inflamación, dolor o contractura. El terapeuta dirige el gas frío en movimientos controlados sobre la piel durante el tiempo protocolizado.',
      },
      {
        step: '05',
        title: 'Evaluación post-sesión y pautas',
        description:
          'Se registra la respuesta del paciente, se evalúan los cambios observados —reducción del edema, alivio del dolor, sensación subjetiva de recuperación— y se programa la siguiente sesión y las recomendaciones de actividad.',
      },
    ],
    conditions: [
      'Insuficiencia venosa',
      'Linfedema leve',
      'Piernas cansadas',
      'Retención de líquidos',
      'Recuperación deportiva',
      'Contracturas musculares',
      'Post-cirugía ortopédica',
      'Celulitis',
    ],
    faq: [
      {
        question: '¿Cuántas sesiones de presoterapia necesito?',
        answer:
          'Para la recuperación deportiva puntual puede ser suficiente una única sesión post-esfuerzo. Para patologías como el linfedema o la insuficiencia venosa se recomienda un ciclo inicial de 8-12 sesiones en días alternos, seguido de sesiones de mantenimiento mensuales. El especialista diseñará el protocolo óptimo para tu situación.',
      },
      {
        question: '¿El Cryopush es lo mismo que aplicar hielo?',
        answer:
          'No. El Cryopush utiliza gas frío (CO₂ o nitrógeno) que se proyecta sobre la piel a una temperatura y caudal controlados, consiguiendo un enfriamiento más rápido, profundo y uniforme que el hielo. Además, elimina el riesgo de quemadura cutánea por contacto que tiene el hielo aplicado directamente, y permite tratar zonas más extensas en menos tiempo.',
      },
      {
        question: '¿La presoterapia tiene contraindicaciones?',
        answer:
          'La presoterapia está contraindicada en casos de insuficiencia cardíaca descompensada, trombosis venosa profunda activa o sospechada, infección aguda en la zona a tratar, heridas abiertas, y algunas patologías oncológicas. El especialista revisará su historial antes de iniciar el tratamiento.',
      },
      {
        question: '¿Puedo hacer presoterapia y Cryopush el mismo día que entreno?',
        answer:
          'Sí, y es de hecho la situación ideal para la recuperación deportiva. Aplicar presoterapia y Cryopush en las 2-4 horas siguientes al entrenamiento intenso o la competición maximiza los efectos regeneradores y antiinflamatorios, acelerando la recuperación para la siguiente sesión de entrenamiento.',
      },
    ],
    keywords: [
      'presoterapia Terrassa',
      'cryopush Terrassa',
      'drenaje linfático Terrassa',
      'crioterapia Terrassa',
      'recuperación deportiva Terrassa',
      'linfedema tratamiento Terrassa',
      'piernas cansadas tratamiento Terrassa',
      'compresión neumática Terrassa',
    ],
    metaDescription:
      'Presoterapia y Cryopush en Terrassa. Drenaje linfático, recuperación deportiva y reducción del edema. Tratamientos complementarios en Podofisio Clinic.',
    relatedServices: ['indiba', 'recuperacion-funcional', 'estudio-biomecanico'],
    parentSlug: 'estudio-biomecanico',
    parentTitle: 'Estudio Biomecánico',
  },
];

// Derived exports
export const mainServices: ServiceData[] = allServices.filter((s) => !s.parentSlug);

export function getService(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getSubServices(parentSlug: string): ServiceData[] {
  return allServices.filter((s) => s.parentSlug === parentSlug);
}

// Backward compatibility alias
export const services = allServices;

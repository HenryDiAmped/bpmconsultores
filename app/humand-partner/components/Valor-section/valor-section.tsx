'use client';

import { motion } from 'framer-motion';

// --- BASE DE DATOS DE CARACTERÍSTICAS Y RUTAS DE ICONOS ---
const CATEGORIAS_COLUMNA_1 = [
  {
    titulo: 'Cultura Empresarial',
    items: [
      { nombre: 'Programa de referidos', icon: '/ICONOS/4 CULTURA EMPRESARIAL/1-PROGRAMA-DE-REFERIDOS.webp' },
      { nombre: 'People Experience', icon: '/ICONOS/4 CULTURA EMPRESARIAL/2-PEOPLE-EXPERIENCE.webp' },
      { nombre: 'Cumpleaños y Aniversarios', icon: '/ICONOS/4 CULTURA EMPRESARIAL/3-CUMPLEAÑOS-Y-ANIVERSARIOS.webp' },
      { nombre: 'Marketplace', icon: '/ICONOS/4 CULTURA EMPRESARIAL/4-MARKETPLACE.webp' },
      { nombre: 'Eventos', icon: '/ICONOS/4 CULTURA EMPRESARIAL/5-EVENTOS.webp' },
      { nombre: 'Reconocimientos', icon: '/ICONOS/4 CULTURA EMPRESARIAL/6-RECONOCIMIENTOS.webp' },
    ]
  },
  {
    titulo: 'Comunicación Interna',
    items: [
      { nombre: 'Chat', icon: '/ICONOS/2 COMUNICACION INTERNA/1-CHAT.webp' },
      { nombre: 'Red Social Interna', icon: '/ICONOS/2 COMUNICACION INTERNA/2-RED-SOCIAL-INTERNA.webp' },
      { nombre: 'Live Streaming', icon: '/ICONOS/2 COMUNICACION INTERNA/3-LIVE-STREAMING.webp' },
      { nombre: 'Noticias', icon: '/ICONOS/2 COMUNICACION INTERNA/4-NOTICIAS.webp' },
      { nombre: 'Organigrama', icon: '/ICONOS/2 COMUNICACION INTERNA/5-ORGANIGRAMA.webp' },
      { nombre: 'Biblioteca de Recursos', icon: '/ICONOS/2 COMUNICACION INTERNA/6-BIBLIOTECA-DE-RECURSOS.webp' },
      { nombre: 'Beneficios', icon: '/ICONOS/2 COMUNICACION INTERNA/7-BENEFICIOS.webp' },
    ]
  },
  {
    titulo: 'Operaciones',
    items: [
      { nombre: 'Formularios, trámites y aprobaciones', icon: '/ICONOS/5 OPERACIONES/2-FORMULARIOS-TRÁMITES-Y-OPERACIONES.webp' },
      { nombre: 'Gestión de Servicios', icon: '/ICONOS/5 OPERACIONES/1-GESTIÓN-DE-SERVICIOS.webp' },
      { nombre: 'Control de Asistencia', icon: '/ICONOS/5 OPERACIONES/3-CONTROL-DE-ASISTENCIA.webp' },
    ]
  }
];

const CATEGORIAS_COLUMNA_2 = [
  {
    titulo: 'Desarrollo de Talento',
    items: [
      { nombre: 'Encuestas', icon: '/ICONOS/1 DESARROLLO DE TALENTO/1-ENCUESTAS.webp' },
      { nombre: 'Evaluación de desempeño', icon: '/ICONOS/1 DESARROLLO DE TALENTO/2-EVALUACION-DE-DESEMPEÑO.webp' },
      { nombre: 'Objetivos y Resultados Clave', icon: '/ICONOS/1 DESARROLLO DE TALENTO/3-OBJETIVOS-Y-RESULTADOS-CLAVES.webp' },
      { nombre: 'Aprendizaje', icon: '/ICONOS/1 DESARROLLO DE TALENTO/4-APRENDIZAJE.webp' },
      { nombre: 'Plan de carrera', icon: '/ICONOS/1 DESARROLLO DE TALENTO/5-PLAN-DE-CARRERA.webp' },
      { nombre: 'Búsquedas internas', icon: '/ICONOS/1 DESARROLLO DE TALENTO/6-BUSQUEDAS-INTERNAS.webp' },
    ]
  },
  {
    titulo: 'Gestión de RR. HH.',
    items: [
      { nombre: 'Documentos', icon: '/ICONOS/3 GESTIÓN DE RR. HH/1-DOCUMENTOS.webp' },
      { nombre: 'Onboarding', icon: '/ICONOS/3 GESTIÓN DE RR. HH/2-ONBOARDING.webp' },
      { nombre: 'Vacaciones y Permisos', icon: '/ICONOS/3 GESTIÓN DE RR. HH/3-VACACIONES-Y-PERMISOS.webp' },
      { nombre: 'Expediente digital del colaborador', icon: '/ICONOS/3 GESTIÓN DE RR. HH/4-EXPEDIENTE-DIGITAL-DEL-COLABORADOR.webp' }, // Nota: El nombre en la imagen se corta pero sigue este patrón
      { nombre: 'Archivos', icon: '/ICONOS/3 GESTIÓN DE RR. HH/5-ARCHIVOS.webp' },
      { nombre: 'Reserva de espacios', icon: '/ICONOS/3 GESTIÓN DE RR. HH/6-RESERVA-DE-ESPACIOS.webp' },
      { nombre: 'Accesos Rápidos', icon: '/ICONOS/3 GESTIÓN DE RR. HH/7-ACCESOS-RAPIDOS.webp' },
      { nombre: 'Políticas', icon: '/ICONOS/3 GESTIÓN DE RR. HH/8-POLÍTICAS.webp' },
    ]
  }
];

export function ValorSection() {
  // --- VARIANTES DE ANIMACIÓN ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const tagsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } }
  };

  // --- COMPONENTE TARJETA ---
  const CategoriaCard = ({ data, className = "" }: { data: any, className?: string }) => (
    <motion.div 
      variants={cardVariants as any}
      whileHover={{ scale: 1.01, y: -2 }} 
      // Se eliminó el h-full obligatorio para que la altura se adapte al contenido de forma natural como en la imagen
      className={`bg-transparent border-[3px] border-[#4466F2] rounded-[2.5rem] p-7 flex flex-col w-full h-fit transition-all duration-300 ${className}`}
    >
      <h3 className="text-slate-600 font-semibold text-[1.15rem] mb-5">{data.titulo}</h3>
      
      <motion.div 
        variants={tagsContainerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3" // Mayor gap para igualar la imagen
      >
        {data.items.map((item: any, i: number) => (
          <motion.div 
            key={i} 
            variants={tagVariants as any}
            whileHover={{ scale: 1.03 }}
            // Ajuste de sombras y colores para que el botón parezca "flotar" en blanco puro
            className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-2xl text-[13px] md:text-sm text-slate-800 font-medium shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default transition-all"
          >
            {item.icon && (
              <img 
                src={item.icon} 
                alt={`Icono de ${item.nombre}`} 
                className="w-4 h-4 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <span>{item.nombre}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="w-full bg-[#F8F9FA] py-20 md:py-32 overflow-hidden flex flex-col items-center">
      <div className="mx-auto px-6 lg:px-8 max-w-[1500px] w-full">
        
        {/* TÍTULO SUPERIOR */}
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 md:mb-16 text-center lg:text-left"
        >
          Con la <span className="text-[#4466F2]">tecnología</span> de Humand tienes acceso a
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-stretch">
          
          {/* BLOQUE DE TARJETAS (Toma el 65% del ancho y usa Grid interno) */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
            
            {/* LADO IZQUIERDO: COLUMNA 1 (3 TARJETAS) */}
            <motion.div 
              variants={containerVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {CATEGORIAS_COLUMNA_1.map((cat, index) => (
                <CategoriaCard 
                  key={`col1-${index}`} 
                  data={cat} 
                  // Eliminado el lg:max-h-[189px] para que los tags se acomoden libremente
                />
              ))}
            </motion.div>

            {/* LADO DERECHO: COLUMNA 2 (2 TARJETAS) */}
            <motion.div 
              variants={containerVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {CATEGORIAS_COLUMNA_2.map((cat, index) => (
                <CategoriaCard key={`col2-${index}`} data={cat} />
              ))}
            </motion.div>
          </div>

          {/* TEXTO DE IMPACTO (Toma el 35% restante del ancho) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="w-full lg:w-[35%] flex flex-col justify-center lg:pl-4 mt-10 lg:mt-0"
          >
            <p className="text-2xl md:text-3xl lg:text-[2.2rem] leading-snug text-slate-800 text-center lg:text-left font-light">
              Gestiona <span className="font-bold">nómina, capacitaciones, comunicación interna en <span className="underline decoration-[#4466F2] decoration-4 underline-offset-4">tiempo real</span></span> y muchos más, <br className="hidden lg:block"/>
              <span className="text-[#4466F2] font-normal italic mt-4 block">para una organización siempre alineada.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

// 1. Icono SVG Personalizado
const SharpArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L22 12L2 22L7.5 12Z" />
  </svg>
);

export default function VideoDobleSection() {
  const t = useTranslations('videoDoble');
  // 2. Referencias para el scroll suave
  const bloque1Ref = useRef<HTMLDivElement>(null);
  const bloque2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Variantes de animación
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const textReverseVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const mediaVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, // Cambiado a Y para igualar la entrada vertical de Soluciones
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const accentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    // --- FONDO ACTUALIZADO A bg-slate-50 ---
    <section className="w-full bg-slate-50 py-24 overflow-hidden border-t border-gray-200">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] flex flex-col gap-32">
        
        {/* ========================================== */}
        {/* BLOQUE 1: Texto Izquierda - Video Derecha */}
        {/* ========================================== */}
        <div ref={bloque1Ref} className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24">
          
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            {/* ETIQUETA: Color azul para mantener consistencia con Soluciones */}
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#002EC3] uppercase mb-4 block">
              {t('b1.phase')}
            </span>
            
            {/* TÍTULO: font-bold y tracking-tight */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2] mb-6">
              {t('b1.t1')} <span className="text-[#002EC3]">{t('b1.t2')}</span>
            </h2>
            
            {/* DESCRIPCIÓN: text-gray-800 y font-medium para legibilidad perfecta */}
            <p className="text-gray-800 font-medium text-lg leading-relaxed mb-10 max-w-lg">
              {t('b1.desc')}
            </p>
            
            {/* BOTÓN: Estilo de botón interactivo unificado */}
            <button 
              onClick={() => scrollToSection(bloque2Ref)}
              className="group flex items-center justify-center p-4 -ml-4 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 rounded-full transition-all duration-300 cursor-pointer"
              aria-label={t('aria.next')}
            >
              <SharpArrow className="w-8 h-8 text-[#002EC3] transform group-hover:translate-x-2 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>

          <motion.div 
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* ACENTO AZUL: Añadido rounded-sm */}
            <motion.div variants={accentVariants} className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-2/3 h-full bg-[#002EC3] z-0 rounded-sm" />
            
            {/* CONTENEDOR VIDEO: Añadido rounded-sm */}
            <div className="relative z-10 w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] shadow-2xl overflow-hidden rounded-sm bg-black">
              <video
                src="https://res.cloudinary.com/dmgufgga4/video/upload/v1773353856/SOLUCIONES_2_vapriy.webm"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out opacity-90 hover:opacity-100"
              />
            </div>
          </motion.div>
        </div>


        {/* ========================================== */}
        {/* BLOQUE 2: Video Izquierda - Texto Derecha */}
        {/* ========================================== */}
        <div ref={bloque2Ref} className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24">
          
          <motion.div 
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* ACENTO AZUL: Añadido rounded-sm */}
            <motion.div variants={accentVariants} className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-2/3 h-full bg-[#002EC3] z-0 rounded-sm" />
            
            {/* CONTENEDOR VIDEO: Añadido rounded-sm */}
            <div className="relative z-10 w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] shadow-2xl overflow-hidden rounded-sm bg-black">
              <video
                src="https://res.cloudinary.com/dmgufgga4/video/upload/v1773353471/SOLUCIONES_2_nbgkib.webm"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out opacity-90 hover:opacity-100"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={textReverseVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col items-start lg:pl-8"
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#002EC3] uppercase mb-4 block">
              {t('b2.phase')}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2] mb-6">
              {t('b2.t1')} <span className="text-[#002EC3]">{t('b2.t2')}</span>
            </h2>
            
            <p className="text-gray-800 font-medium text-lg leading-relaxed mb-10 max-w-lg">
              {t('b2.desc')}
            </p>
            
            <button 
              onClick={() => scrollToSection(bloque1Ref)}
              className="group flex items-center justify-center p-4 -ml-4 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 rounded-full transition-all duration-300 cursor-pointer"
              aria-label={t('aria.prev')}
            >
              <SharpArrow className="w-8 h-8 text-[#002EC3] transform rotate-180 group-hover:-translate-x-2 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
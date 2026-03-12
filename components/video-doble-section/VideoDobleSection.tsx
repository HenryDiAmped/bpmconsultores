'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';

// 1. Icono SVG Personalizado (Basado en tu imagen)
const SharpArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L22 12L2 22L7.5 12Z" />
  </svg>
);

export default function VideoDobleSection() {
  // 2. Referencias para el scroll suave (el bucle)
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const accentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: -20, y: 20 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="w-full bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] flex flex-col gap-32">
        
        {/* BLOQUE 1: Texto Izquierda - Video Derecha */}
        <div ref={bloque1Ref} className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24">
          
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              Fase Inicial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.2] mb-6">
              Iniciamos cada proyecto con un <span className="text-[#002EC3] font-normal">diagnóstico gratuito.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              Analizamos a profundidad tus procesos actuales, identificamos cuellos de botella y trazamos una hoja de ruta sin ningún costo inicial para tu empresa.
            </p>
            
            {/* Botón Icono hacia Derecha -> Redirige al Bloque 2 */}
            <button 
              onClick={() => scrollToSection(bloque2Ref)}
              className="group flex items-center justify-center p-4 -ml-4 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              aria-label="Ir a la siguiente fase"
            >
              <SharpArrow className="w-8 h-8 text-[#002EC3] transform group-hover:translate-x-3 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>

          <motion.div 
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div variants={accentVariants} className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-2/3 h-full bg-[#002EC3] z-0" />
            <div className="relative z-10 w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] shadow-2xl overflow-hidden">
              <video
                src="https://cdn.midjourney.com/video/15b95eec-20b9-43f7-a0d8-47ba6963760d/0.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>
        </div>


        {/* BLOQUE 2: Video Izquierda - Texto Derecha */}
        <div ref={bloque2Ref} className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24">
          
          <motion.div 
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div variants={accentVariants} className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-2/3 h-full bg-[#002EC3] z-0" />
            <div className="relative z-10 w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] shadow-2xl overflow-hidden">
              <video
                src="https://cdn.midjourney.com/video/efeefaab-c593-4e11-923b-27ebdfea5194/0.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
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
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              Garantía de Éxito
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.2] mb-6">
              Brindamos un año de <span className="text-[#002EC3] font-normal">soporte incluido.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              Sabemos que la transformación toma tiempo. Por eso, acompañamos a tu equipo durante todo un año para asegurar la adopción organizacional.
            </p>
            
            {/* Botón Icono hacia Izquierda -> Redirige al Bloque 1 */}
            <button 
              onClick={() => scrollToSection(bloque1Ref)}
              className="group flex items-center justify-center p-4 -ml-4 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              aria-label="Ir a la fase anterior"
            >
              <SharpArrow className="w-8 h-8 text-[#002EC3] transform rotate-180 group-hover:-translate-x-3 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
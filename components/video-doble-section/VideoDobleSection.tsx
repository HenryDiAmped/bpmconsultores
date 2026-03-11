'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function VideoDobleSection() {
  
  // Variantes de animación para el texto
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const textReverseVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Variantes para el contenedor del video
  const mediaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Variantes para el acento azul (el cuadrado que va por detrás)
  const accentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: -20, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="w-full bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] flex flex-col gap-32">
        
        {/* BLOQUE 1: Texto Izquierda - Video Derecha */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Contenido (Izquierda) */}
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
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Analizamos a profundidad tus procesos actuales, identificamos cuellos de botella y trazamos una hoja de ruta sin ningún costo inicial para tu empresa.
            </p>
            <Button className="bg-[#002EC3] hover:bg-blue-800 text-white px-8 py-6 rounded-none font-medium transition-all flex items-center gap-3 group">
              Explorar proceso
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Video (Derecha) */}
          <motion.div 
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Cuadrado Azul de Fondo */}
            <motion.div 
              variants={accentVariants}
              className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-2/3 h-full bg-[#002EC3] z-0" 
            />
            
            {/* Contenedor del Video */}
            <div className="relative z-10 w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] shadow-2xl overflow-hidden">
              <video
                src="https://cdn.midjourney.com/video/15b95eec-20b9-43f7-a0d8-47ba6963760d/0.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>
        </div>


        {/* BLOQUE 2: Video Izquierda - Texto Derecha (Alternado) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Video (Izquierda) */}
          <motion.div 
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Cuadrado Azul de Fondo (Ahora a la izquierda y abajo) */}
            <motion.div 
              variants={accentVariants}
              className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-2/3 h-full bg-[#002EC3] z-0" 
            />
            
            {/* Contenedor del Video */}
            <div className="relative z-10 w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] shadow-2xl overflow-hidden">
              <video
                src="https://cdn.midjourney.com/video/efeefaab-c593-4e11-923b-27ebdfea5194/0.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>

          {/* Contenido (Derecha) */}
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
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Sabemos que la transformación toma tiempo. Por eso, acompañamos a tu equipo durante todo un año para asegurar la adopción organizacional.
            </p>
            <Button className="bg-[#002EC3] hover:bg-blue-800 text-white px-8 py-6 rounded-none font-medium transition-all flex items-center gap-3 group">
              Conocer garantía
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
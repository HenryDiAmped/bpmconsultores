'use client';

import { motion } from 'framer-motion';

export function PartnerHero() {
  return (
    <section className="relative h-screen w-full flex flex-col bg-[#F8F9FA] overflow-hidden">
      
      {/* 1. SECCIÓN SUPERIOR: TEXTO Y LOGO */}
      <div className="pt-24 pb-8 md:pb-12 flex flex-col justify-center items-center text-center px-6 lg:px-8 max-w-[1320px] mx-auto w-full z-10 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 leading-[1.2]">
            BPM Consultores +
            <img 
              src="https://humandcdn.b-cdn.net/wp-content/uploads/2024/10/logo-humand-blue.svg" 
              alt="Humand Logo" 
              className="h-10 md:h-14 object-contain mt-2 md:mt-0"
            />
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#002EC3] max-w-4xl leading-relaxed"
          >
            Digitaliza la experiencia de tus colaboradores.
          </motion.h2>
        </motion.div>
      </div>

      {/* 2. SECCIÓN MEDIA: VIDEO FULL WIDTH */}
      {/* Usamos flex-1 para que ocupe todo el espacio restante entre el header y el footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex-1 w-full relative bg-black"
      >
        {/* Placeholder del video */}
        <video
          src="https://cdn.midjourney.com/video/15b95eec-20b9-43f7-a0d8-47ba6963760d/0.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Degradado superior e inferior en el video para que la transición hacia el blanco no sea tan dura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/20 via-transparent to-[#F8F9FA]/20 z-10 pointer-events-none" />
      </motion.div>

      {/* 3. SECCIÓN INFERIOR: TEXTO DE CIERRE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-6 md:py-8 px-6 text-center z-10 flex-shrink-0"
      >
        <p className="text-sm md:text-base lg:text-lg font-medium text-slate-700 max-w-4xl mx-auto">
          Implementación experta, configuración de flujos y capacitación garantizada.
        </p>
      </motion.div>

    </section>
  );
}
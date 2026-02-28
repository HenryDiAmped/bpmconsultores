"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// 1. Importamos motion
import { motion } from "framer-motion";

// 2. Definimos una animación base para reutilizar (Fade in + Subir)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 }, // Estado inicial: invisible y 30px abajo
  visible: { opacity: 1, y: 0 },   // Estado final: visible y en su lugar
};

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    // Mantenemos un margen negativo para subir todo el contenido visualmente
    <section className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center -mt-4 md:-mt-8">

      {/* --- 3. Animamos el Logo (Entrada inmediata) --- */}
      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: "easeOut" }} // Duración estándar
      >
        <Image 
          src="/parnet-bpm+humand.svg"
          alt="BPM Consultores + Humand"
          width={400} 
          height={100} 
          className="h-20 md:h-28 w-auto drop-shadow-sm relative z-20"
          priority 
        />
      </motion.div>

      {/* --- 4. Animamos el Botón Partner (Pequeño retraso) --- */}
      <motion.button 
        className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-gray-400/50 text-sm text-gray-700 font-medium mb-10 hover:bg-gray-200/50 transition-colors relative z-20"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        // Agregamos un delay de 0.1s respecto al anterior
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} 
      >
        {t('hero.partnerButton')} <ArrowRight className="w-4 h-4" />
      </motion.button>

      {/* --- 5. Animamos el Título H1 (Más retraso) --- */}
      {/* Subimos un poco más (y: 40) para darle más énfasis */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight text-black max-w-4xl mb-6 leading-[1.1] relative z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        // Delay de 0.2s
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {t('hero.title')}<br />
        {t('hero.titleBreak')}
      </motion.h1>
      
      {/* --- 6. Animamos el Subtítulo P (Sigue la cascada) --- */}
      <motion.p 
        className="text-base md:text-lg text-gray-800 max-w-2xl mb-6 font-medium relative z-20"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        // Delay de 0.3s
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        {t('hero.subtitle')}
      </motion.p>

      {/* === 7. Animamos el Contenedor del CTA (Último en aparecer) === */}
      {/* Ajustamos el padding (pt-12 pb-4) para dejar espacio limpio hacia abajo */}
      <motion.div 
        className="relative flex items-center justify-center w-full pt-12 pb-4"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        // Delay de 0.4s. Es el final de la cascada.
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {/* Mantenemos tu hover:scale nativo de Tailwind, no interfiere */}
        <Button className="bg-[#002EC3] hover:bg-[#002EC3]/90 text-white rounded-lg px-14 py-8 text-base shadow-lg transition-transform hover:scale-105 font-medium relative z-20">
          {t('hero.cta')}
        </Button>
      </motion.div>

    </section>
  );
}
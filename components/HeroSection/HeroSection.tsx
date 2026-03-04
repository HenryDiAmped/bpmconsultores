"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";

export default function HeroSection() {
  const { t } = useTranslation();
  const animConfig = useAnimationConfig();

  // Definimos variantes dinámicas basadas en la configuración
  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: animConfig.isMobile ? 20 : 30 // Menos movimiento en móvil
    },
    visible: { 
      opacity: 1, 
      y: 0 
    },
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center -mt-4 md:-mt-8">

      {/* Logo - Animación optimizada */}
      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ 
          duration: animConfig.duration.normal, 
          ease: "easeOut" 
        }}
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

      {/* Botón Partner - Con delay optimizado */}
      <motion.button 
        className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-gray-400/50 text-sm text-gray-700 font-medium mb-10 hover:bg-gray-200/50 transition-colors relative z-20"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ 
          duration: animConfig.duration.normal, 
          ease: "easeOut", 
          delay: animConfig.delay.short 
        }}
      >
        {t('hero.partnerButton')} <ArrowRight className="w-4 h-4" />
      </motion.button>

      {/* Título H1 - Animación más pronunciada */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight text-black max-w-4xl mb-6 leading-[1.1] relative z-20"
        initial={{ 
          opacity: 0, 
          y: animConfig.isMobile ? 25 : 40 
        }}
        animate={{ 
          opacity: 1, 
          y: 0 
        }}
        transition={{ 
          duration: animConfig.duration.slow, 
          ease: "easeOut", 
          delay: animConfig.delay.medium 
        }}
      >
        {t('hero.title')}<br />
        {t('hero.titleBreak')}
      </motion.h1>
      
      {/* Subtítulo P */}
      <motion.p 
        className="text-base md:text-lg text-gray-800 max-w-2xl mb-6 font-medium relative z-20"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ 
          duration: animConfig.duration.normal, 
          ease: "easeOut", 
          delay: animConfig.isMobile ? animConfig.delay.short : 0.3 
        }}
      >
        {t('hero.subtitle')}
      </motion.p>

      {/* CTA Button - Último elemento */}
      <motion.div 
        className="relative flex items-center justify-center w-full pt-12 pb-4"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ 
          duration: animConfig.duration.normal, 
          ease: "easeOut", 
          delay: animConfig.isMobile ? animConfig.delay.medium : 0.4 
        }}
      >
        <Button className="bg-[#002EC3] hover:bg-[#002EC3]/90 text-white rounded-lg px-14 py-8 text-base shadow-lg transition-transform hover:scale-105 font-medium relative z-20">
          {t('hero.cta')}
        </Button>
      </motion.div>

    </section>
  );
}
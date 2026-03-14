'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export function PartnerHero() {
  const t = useTranslations('humandPartner.hero');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => [
    "https://res.cloudinary.com/dmgufgga4/image/upload/v1773466546/P%C3%81GINA_INTERNA__HUMAND_PARTNER_PERSONA_ilt3bn.webp",
    "https://res.cloudinary.com/dmgufgga4/image/upload/v1773466969/P%C3%81GINA_INTERNA_HUMAND_PARTNER_MANO_to6les.webp"
  ], []);

  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-start pt-24 lg:pt-32 bg-gradient-to-b from-[#F8F9FA] to-white overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#002EC3]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[#002EC3]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-8 z-10 flex flex-col items-center flex-grow">
        
        {/* 1. Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 w-full flex flex-col items-center"
        >
          <h1 className="flex flex-wrap justify-center items-center gap-3 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6">
            <span>{t('title_main')}</span>
            <span className="flex items-center gap-3 text-3xl md:text-5xl text-slate-400 font-light">
              + 
              <img 
                src="https://humandcdn.b-cdn.net/wp-content/uploads/2024/10/logo-humand-blue.svg" 
                alt="Humand Logo" 
                className="h-8 md:h-12 lg:h-14 object-contain translate-y-1"
              />
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#002EC3] font-semibold">{t('subtitle_part1')}</span> {t('subtitle_part2')}
          </p>
        </motion.div>

        {/* 2. Animation Section (Imágenes más grandes) */}
        <div className="relative w-full max-w-7xl aspect-[4/3] sm:aspect-[16/11] md:aspect-[21/9] flex items-end justify-center mt-4 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-end justify-center"
            >
              <Image
                src={images[currentIndex]}
                alt="Humand Partner Showcase"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Indicadores de carrusel */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#002EC3] w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3. Footer Section (Beneficios restaurados con estilo limpio) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 mb-16 text-center z-20 relative"
        >
          <div className="inline-flex items-center justify-center text-base md:text-xl lg:text-2xl font-medium text-slate-700 bg-white/70 backdrop-blur-md px-8 py-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 ring-1 ring-slate-900/5">
            <span className="relative">
              {t('benefits')}
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#002EC3]/30 to-transparent rounded-full" />
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
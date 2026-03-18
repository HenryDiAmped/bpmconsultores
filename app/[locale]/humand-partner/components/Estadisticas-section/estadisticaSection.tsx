'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function EstadisticaSection() {
  const t = useTranslations('humandPartner.stats');

  const STATS = [
    { percent: '18%', label: t('items.s1') },
    { percent: '25%', label: t('items.s2') },
    { percent: '25%', label: t('items.s3') },
    { percent: '34%', label: t('items.s4') },
    { percent: '30%', label: t('items.s5') },
    { percent: '82%', label: t('items.s6') },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STATS.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % STATS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + STATS.length) % STATS.length);

  const visibleStats = [
    { ...STATS[(currentIndex) % STATS.length], id: (currentIndex) % STATS.length },
    { ...STATS[(currentIndex + 1) % STATS.length], id: (currentIndex + 1) % STATS.length },
    { ...STATS[(currentIndex + 2) % STATS.length], id: (currentIndex + 2) % STATS.length },
    { ...STATS[(currentIndex + 3) % STATS.length], id: (currentIndex + 3) % STATS.length },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] flex flex-col relative border-t border-white/5 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] py-16 md:py-24 lg:py-32 w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 text-white text-center lg:text-left"
          >
            {/* --- CAMBIO: font-bold, tracking-tight, y énfasis en blue-400 --- */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-white">
              {t('title_part1')} <br className="hidden md:block"/>
              <span className="text-blue-400">{t('title_span')}</span> {t('title_part2')} <br className="hidden md:block"/>
              {/* --- CAMBIO: text-white/95, font-medium y leading-relaxed --- */}
              <span className="text-white/95 font-medium text-xl md:text-2xl lg:text-[2rem] mt-6 block leading-relaxed">
                {t('title_sub')}
              </span>
            </h2>
          </motion.div>

          <div className="lg:w-7/12 w-full flex flex-col gap-6">
            {/* --- CAMBIO: rounded-sm y hover más pulido --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-white/10 hover:border-white/30 bg-white/5 transition-all duration-500 rounded-sm p-8 md:p-10 backdrop-blur-sm group"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-300 transition-colors duration-500">{t('companies.title')}</h3>
              {/* --- CAMBIO: font-normal y text-white/90 --- */}
              <p className="text-white/90 text-base md:text-xl font-normal leading-relaxed">
                {t('companies.desc')}
              </p>
            </motion.div>

            {/* --- CAMBIO: rounded-sm y hover más pulido --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-white/10 hover:border-white/30 bg-white/5 transition-all duration-500 rounded-sm p-8 md:p-10 backdrop-blur-sm group"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-300 transition-colors duration-500">{t('industries.title')}</h3>
              {/* --- CAMBIO: font-normal y text-white/90 --- */}
              <p className="text-white/90 text-base md:text-xl font-normal leading-relaxed">
                {t('industries.desc')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- CAMBIO: bg-slate-950/80 y rounded-sm para el contenedor del carrusel --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-slate-950/80 border border-white/5 rounded-sm p-6 md:p-12 flex items-center shadow-2xl relative overflow-hidden backdrop-blur-lg"
        >
          {/* --- CAMBIO: text-blue-400 para mejor contraste --- */}
          <button onClick={prevSlide} className="hidden lg:flex items-center justify-center pl-2 pr-4 z-20 hover:scale-110 transition-transform cursor-pointer">
            <ChevronLeft className="w-12 h-12 text-blue-400 hover:text-white transition-colors" strokeWidth={2} />
          </button>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 relative min-h-[160px] md:min-h-[140px]">
            <AnimatePresence mode="popLayout">
              {visibleStats.map((stat) => (
                <motion.div 
                  key={stat.id}
                  layout
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center text-center px-2 justify-center h-full"
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tighter">
                    {stat.percent}
                  </span>
                  {/* --- CAMBIO: text-gray-300 y font-medium en lugar de font-light --- */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-[180px] font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* --- CAMBIO: text-blue-400 para mejor contraste --- */}
          <button onClick={nextSlide} className="hidden lg:flex items-center justify-center pr-2 pl-4 z-20 hover:scale-110 transition-transform cursor-pointer">
            <ChevronRight className="w-12 h-12 text-blue-400 hover:text-white transition-colors" strokeWidth={2} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
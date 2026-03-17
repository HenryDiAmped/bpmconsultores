'use client';

import { motion, Variants } from 'framer-motion';
import { Puzzle, UserPlus, Eye, Sprout } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ImplementacionSection() {
  const t = useTranslations('humandPartner.implementacion');

  const BENEFICIOS = [
    { icon: Puzzle, text: t('b1') },
    { icon: UserPlus, text: t('b2') },
    { icon: Eye, text: t('b3') },
    { icon: Sprout, text: t('b4') },
  ];

  // --- CAMBIO: Tipado correcto con Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    // --- CAMBIO: Se eliminaron py-20 y md:py-32 ---
    <section className="w-full bg-[#F8F9FA]  md:py-12 overflow-hidden flex flex-col items-center">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] w-full">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 md:mb-16 text-center leading-tight"
        >
          {t('title')} <span className="text-[#002EC3]">{t('title_span')}</span>, <br className="hidden md:block" /> {t('title_end')}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {BENEFICIOS.map((beneficio, index) => {
            const Icon = beneficio.icon;
            
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="flex flex-col items-center text-center border-[3px] border-[#8da3f6] hover:border-[#4466F2] rounded-[2.5rem] p-8 md:p-10 transition-colors duration-300 bg-transparent h-full shadow-sm hover:shadow-[0_10px_30px_rgba(68,102,242,0.1)]"
              >
                <div className="mb-6 text-[#002EC3]">
                  <Icon strokeWidth={1.5} className="w-16 h-16 md:w-20 md:h-20" />
                </div>
                <p className="text-[#002EC3] text-lg md:text-[1.15rem] font-medium leading-snug">
                  {beneficio.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function TrayectoriaSection() {
  const t = useTranslations('humandPartner.trayectoria');

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.3, staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#002EC3] py-16 md:py-24 lg:py-32 px-6 lg:px-8 flex justify-center items-center overflow-hidden">
      <motion.div
        variants={containerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-[1320px] bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col relative shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <motion.p variants={itemVariants as any} className="text-xl md:text-2xl lg:text-3xl leading-snug text-slate-800 font-light">
              {t('p1')} <span className="font-bold text-[#002EC3]">{t('p1_span')}</span> {t('p1_end')}
            </motion.p>
            <motion.p variants={itemVariants as any} className="text-base md:text-lg text-slate-600 leading-relaxed">
              {t('p2')} <span className="font-semibold text-slate-800">{t('p2_span1')}</span> {t('p2_mid')} <span className="font-semibold text-slate-800">{t('p2_span2')}</span>{t('p2_end')}
            </motion.p>
          </div>

          <motion.div variants={itemVariants as any} className="w-full lg:w-1/2">
            <div className="w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-slate-100">
              <img 
                src="https://res.cloudinary.com/dmgufgga4/image/upload/v1773367920/trayectoria_BPM_consultores_ovc945.avif" 
                alt="Equipo de consultores" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants as any} className="flex justify-center lg:justify-start">
          <a 
            href="#contacto"
            className="bg-[#002EC3] hover:bg-[#112CA0] text-white text-base md:text-lg font-semibold py-4 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            {t('cta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
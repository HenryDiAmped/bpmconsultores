'use client';

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Lightbulb } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NosotrosPage() {
  const t = useTranslations('nosotros');

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#002EC3] selection:text-white">

      {/* SECCIÓN 1: CABECERA */}
      <section className="pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#002EC3] mb-6">
              {t('hero.tag')}
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight lg:leading-[1.2]">
              {t('hero.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2: ENFOQUE Y EXPERIENCIA */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-[#002EC3] mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">{t('enfoque.p1')}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-gray-300 mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">{t('enfoque.p2')}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-gray-300 mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">{t('enfoque.p3')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3: TRES PILARES */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('pilares.title')}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002EC3] flex items-center justify-center mb-6">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('pilares.p1.title')}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{t('pilares.p1.desc')}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002EC3] flex items-center justify-center mb-6">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('pilares.p2.title')}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{t('pilares.p2.desc')}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002EC3] flex items-center justify-center mb-6">
                <Lightbulb size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('pilares.p3.title')}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{t('pilares.p3.desc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 4: CIERRE */}
      <section className="py-24 bg-[#002EC3] text-white px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed">{t('cierre.quote')}</p>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
            <p className="text-lg md:text-xl font-light text-blue-100 leading-relaxed">{t('cierre.desc')}</p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

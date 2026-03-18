'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react'; // Añadido para estandarizar el botón

export function TrayectoriaSection() {
  const t = useTranslations('humandPartner.trayectoria');

  // --- CAMBIO: Tipado correcto de Variants para evitar el uso de 'as any' ---
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.3, staggerChildren: 0.2 } }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#002EC3] py-16 md:py-24 lg:py-32 px-6 lg:px-8 flex justify-center items-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        // --- CAMBIO: rounded-sm en lugar de rounded-[2rem] md:rounded-[3rem] ---
        className="w-full max-w-[1320px] bg-white rounded-sm p-8 md:p-12 lg:p-16 flex flex-col relative shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* --- CAMBIO: text-gray-900 y font-medium en lugar de font-light --- */}
            <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl leading-snug text-gray-900 font-medium tracking-tight">
              {t('p1')} <span className="font-bold text-[#002EC3]">{t('p1_span')}</span> {t('p1_end')}
            </motion.p>
            {/* --- CAMBIO: text-gray-800 y font-normal en lugar de text-slate-600 --- */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-800 leading-relaxed font-normal">
              {t('p2')} <span className="font-bold text-gray-900">{t('p2_span1')}</span> {t('p2_mid')} <span className="font-bold text-gray-900">{t('p2_span2')}</span>{t('p2_end')}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            {/* --- CAMBIO: rounded-sm en lugar de rounded-[1.5rem] md:rounded-[2rem] --- */}
            <div className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="https://res.cloudinary.com/dmgufgga4/image/upload/v1773367920/trayectoria_BPM_consultores_ovc945.avif" 
                alt="Equipo de consultores" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
          {/* --- CAMBIO: Botón unificado con hover oscuro, bordes rectos y flecha --- */}
          <a 
            href="#contacto"
            className="group bg-[#002EC3] hover:bg-slate-900 text-white text-base md:text-lg font-medium py-4 px-8 md:px-10 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 w-fit"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
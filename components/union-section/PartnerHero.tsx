"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};

export default function PartnerHero() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#fafafa] py-24 font-sans flex justify-center">
      <motion.div
        className="mx-auto w-full max-w-[1250px] px-4 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* 1. Contenedor de Logos y Conector */}
        <motion.div variants={itemVariants} className="flex items-center mb-10">
          
          <div className="flex h-16 w-16 items-center justify-center rounded-[14px] border border-gray-200 bg-white shadow-sm z-10">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="#0033CC" />
              <path d="M2 7L12 12L22 7" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative w-24 flex items-center justify-center">
             <motion.div 
               className="absolute w-full border-t border-gray-300"
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" as const }}
               style={{ originX: 0 }} 
               viewport={{ once: true }}
             />
             <motion.div 
                className="h-1.5 w-1.5 rounded-full bg-gray-300 z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
             />
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-[14px] border border-gray-200 bg-white shadow-sm z-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033CC] text-white font-medium text-sm tracking-tighter">
              hu
            </div>
          </div>
        </motion.div>

        {/* 2. Título Principal (Sin restricción de max-w) */}
        <motion.div variants={itemVariants} className="w-full">
          <h2 className="text-3xl md:text-[38px] font-medium text-black leading-snug tracking-wide mb-6 w-full">
            {t('partner.title')}
          </h2>
        </motion.div>

        {/* 3. Párrafo Descriptivo (Sin restricción de max-w) */}
        <motion.div variants={itemVariants} className="w-full">
          <p className="text-[15px] text-gray-600 leading-relaxed mb-10 font-normal w-full">
            {t('partner.description')}
          </p>
        </motion.div>

        {/* 4. Botones */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <button className="inline-flex h-12 items-center justify-center rounded-md bg-[#0044FF] px-8 text-[14px] font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
            {t('partner.ctaPrimary')}
          </button>
          
          <button className="inline-flex h-12 items-center justify-center rounded-md border border-[#0044FF] bg-white px-8 text-[14px] font-medium text-[#0044FF] transition-all hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
            {t('partner.ctaSecondary')}
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
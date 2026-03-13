'use client';

import { motion } from 'framer-motion';
import { Plus, Equal } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function FusionSection() {
  const t = useTranslations('humandPartner.fusion');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } }
  };

  const resultVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] relative py-16 md:py-24 lg:py-32 overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t('title')} <span className="text-blue-400">{t('title_span')}</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10"
        >
          <motion.div variants={itemVariants as any} whileHover={{ scale: 1.05 }} className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-blue-400/50 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] group">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-300 group-hover:text-white transition-colors">{t('item1')}</h3>
          </motion.div>

          <motion.div variants={itemVariants as any} className="text-white/70">
            <Plus strokeWidth={2} className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>

          <motion.div variants={itemVariants as any} whileHover={{ scale: 1.05 }} className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
            <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-blue-200 transition-colors">{t('item2')}</h3>
          </motion.div>

          <motion.div variants={itemVariants as any} className="text-white/70 rotate-90 lg:rotate-0">
            <Equal strokeWidth={2} className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>

          <motion.div variants={resultVariants as any} className="relative mt-4 lg:mt-0">
            <motion.div animate={{ boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 60px rgba(59, 130, 246, 0.4)", "0px 0px 0px rgba(59, 130, 246, 0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-blue-500 bg-blue-600/10 backdrop-blur-xl flex flex-col items-center justify-center text-center px-6 relative z-20">
              <div className="absolute inset-2 rounded-full border border-blue-400/30 border-dashed animate-[spin_20s_linear_infinite]" />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight relative z-10">
                {t('result1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mt-1">{t('resultspan')}</span>
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
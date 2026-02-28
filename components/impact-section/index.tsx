'use client';

import { StatItem, StatItemProps } from '@/components/ui/statItem';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ImpactSection() {
  const { t } = useTranslation();

  // Movemos la data fuera del componente (o a un archivo de constantes) 
  // para mantener la vista limpia y fácil de editar.
  const statsData: StatItemProps[] = [
    {
      category: t('impact.stats.stat1.category'),
      value: t('impact.stats.stat1.value'),
      description: t('impact.stats.stat1.description'),
    },
    {
      category: t('impact.stats.stat2.category'),
      value: t('impact.stats.stat2.value'),
      description: t('impact.stats.stat2.description'),
    },
    {
      category: t('impact.stats.stat3.category'),
      value: t('impact.stats.stat3.value'),
      description: t('impact.stats.stat3.description'),
    },
  ];

  return (
    // Se usa un color de fondo genérico. Si en Figma tiene un gris muy clarito, 
    // podrías usar bg-slate-50 o bg-zinc-50 en lugar de bg-background.
    <section className="w-full pt-16 md:pt-24 pb-8 md:pb-12 bg-[#F7F7F7]">
      <div className="w-full max-w-[1250px] mx-auto px-4 md:px-6">

        {/* Título Principal */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center mb-16 md:mb-24 text-foreground"
        >
          {t('impact.title')}
        </motion.h2>

        {/* Contenedor Grid para las 3 estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
            >
              <StatItem
                category={stat.category}
                value={stat.value}
                description={stat.description}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
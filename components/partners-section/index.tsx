'use client';

import { PartnerLogo, PartnerLogoProps } from '@/components/ui/partner-logo';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Data mockeada (falsa)
const partnersData: PartnerLogoProps[] = [
  { id: 1, name: 'Empresa 1', imageUrl: '/logos/emp1.png' },
  { id: 2, name: 'Empresa 2', imageUrl: '/logos/emp2.png' },
  { id: 3, name: 'Empresa 3', imageUrl: '/logos/emp3.png' },
  { id: 4, name: 'Empresa 4', imageUrl: '/logos/emp4.png' },
  { id: 5, name: 'Empresa 5', imageUrl: '/logos/emp5.png' },
  { id: 6, name: 'Empresa 6', imageUrl: '/logos/emp6.png' },
];

export default function PartnersSection() {
  const { t } = useTranslation();

  return (
    // EL CAMBIO PRINCIPAL ESTÁ AQUÍ 👇
    // Agregamos 'relative' a la sección principal para que los gradientes se posicionen respecto a ella.
    <section className="w-full  pb-8 md:pb-12 bg-[#f7f7f7] overflow-hidden flex flex-col items-center relative">

      {/* 1. Título (Alineado con la caja de 1020px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1250px] px-4 text-center mb-10 md:mb-14 relative z-10"
      >
        <h2 className="text-xl md:text-[26px] lg:text-[28px] leading-tight font-medium text-foreground">
          {t('partners.title')} <br className="hidden md:block" />
          {t('partners.subtitle')} <span className="text-[#002EC3] font-semibold">{t('partners.highlight')}</span>
        </h2>
      </motion.div>

      {/* 2. Contenedor del Carrusel (Ancho máximo 1280px) */}
      <div className="w-full max-w-[1280px] mx-auto flex items-center relative z-0">

        {/* 3. Pista animada (Marquee) */}
        <div className="flex animate-marquee w-max">

          {/* Grupo 1 */}
          <div className="flex items-center gap-[50px] pr-[50px]">
            {partnersData.map((partner) => (
              <PartnerLogo key={`group1-${partner.id}`} {...partner} />
            ))}
          </div>

          {/* Grupo 2 (Duplicado para el bucle) */}
          <div className="flex items-center gap-[50px] pr-[50px]" aria-hidden="true">
            {partnersData.map((partner) => (
              <PartnerLogo key={`group2-${partner.id}`} {...partner} />
            ))}
          </div>

        </div>
      </div>

      {/* LOS DIFUMINADOS AHORA ESTÁN FUERA DEL CONTENEDOR DEL CARRUSEL 👇 */}
      {/* Difuminado izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      {/* Difuminado derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* 4. Estilos para la animación */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
}
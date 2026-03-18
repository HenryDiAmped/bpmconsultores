'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // Cambiamos los iconos sin uso por la flecha estandarizada
import { useTranslations } from 'next-intl';

export default function HumandSection() {
  const t = useTranslations('humand');
  
  return (
    // --- CAMBIO: Fondo bg-slate-50 para consistencia ---
    <section className="relative w-full bg-slate-50 overflow-hidden py-16 lg:py-24 border-t border-gray-200">
      
      {/* --- FONDOS Y EFECTOS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-[#002EC3]/10 blur-[100px] rounded-full opacity-60 mix-blend-multiply" />
      </div>

      {/* --- CAMBIO: max-w-[1320px] para alinear con las demás secciones --- */}
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] relative z-10">
        
        {/* --- CABECERA --- */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 gap-y-2 text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-gray-900 tracking-tight leading-tight mb-6 w-full"
          >
            <span className="whitespace-nowrap md:whitespace-normal">
              {t('title.t1')}
            </span>
            <img 
              src="https://humandcdn.b-cdn.net/wp-content/uploads/2024/10/logo-humand-blue.svg" 
              alt="Humand Logo" 
              className="h-8 md:h-10 lg:h-[3rem] w-auto object-contain shrink-0 -translate-y-1 -md:translate-y-2"
            />
          </motion.h2>

          {/* --- CAMBIO: text-gray-800 y font-medium para legibilidad perfecta --- */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-800 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            {t('desc.p1')} <strong className="text-[#002EC3] font-bold">{t('desc.p2')}</strong>{t('desc.p3')}
          </motion.p>
        </div>
        
        {/* --- GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* --- TARJETA CTA --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            // --- CAMBIO: rounded-sm en lugar de rounded-[1.2rem] ---
            className="border-2 border-[#002EC3] rounded-sm bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-10 md:py-12 flex flex-col items-center text-center justify-center shadow-md hover:shadow-xl transition-shadow duration-500"
          >
            {/* --- CAMBIO: font-medium en lugar de font-light --- */}
            <p className="text-base sm:text-lg md:text-xl text-[#002EC3] font-medium leading-relaxed mb-4">
              {t('cta_card.p1')} <br className="hidden sm:block" />
              {t('cta_card.br')}
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#002EC3] font-bold mb-8 whitespace-nowrap">
              {t('cta_card.p2')}
            </p>

            <Link href="/humand-partner">
              {/* --- CAMBIO: Botón estilo Hero (cuadrado, hover invertido y con flecha) --- */}
              <Button className="bg-[#002EC3] hover:bg-white hover:text-[#002EC3] text-white font-medium text-base md:text-lg px-8 py-6 rounded-sm transition-all duration-300 border border-[#002EC3] shadow-md group flex items-center gap-3">
                {t('cta_card.btn')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Contenedor del video estático (ahora con animación de entrada) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-20 w-full flex justify-center lg:justify-end"
          >
            <video
              src="https://res.cloudinary.com/dmgufgga4/video/upload/v1773354037/HUMAND_PARTNER_nisp0v.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[500px] lg:max-w-[600px] h-auto mix-blend-multiply object-contain" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
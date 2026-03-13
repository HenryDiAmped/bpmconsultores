'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
  { src: '/LOGO_CHILIS-01.svg', url: 'https://chilis.pe', alt: 'Chilis' },
  { src: '/LOGO_SIEMENS.svg', url: 'https://www.siemens.com', alt: 'Siemens' },
  { src: '/SWISS_MEDICAL.svg', url: 'https://www.swissmedical.com.ar', alt: 'Swiss Medical' },
  { src: '/LOGO_MINISO.svg', url: 'https://www.miniso.pe', alt: 'Miniso' },
  { src: '/LOGO_OXXO.svg', url: 'https://www.oxxo.pe', alt: 'Oxxo' },
  { src: '/LOGO_SODEXO.svg', url: 'https://www.sodexo.pe', alt: 'Sodexo' },
  { src: '/LOGO_SEIDOR.webp', url: 'https://www.seidor.com', alt: 'Seidor' },
  { src: '/LOGO_DOMINOS.svg', url: 'https://www.dominos.com.pe', alt: 'Dominos' },
  { src: '/LOGO_GRUPOWERTHEN.svg', url: 'https://www.grupowerthein.com', alt: 'Grupo Werthein' }
];

export function PresenciaSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden relative">

      {/* Estilos actualizados con la regla de pausa en hover */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 flex flex-col items-center">

        {/* 1. TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-[#002EC3] mb-12 md:mb-16 text-center"
        >
          Humand está presente en
        </motion.h2>

        {/* 2. CARRUSEL DE LOGOS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          // Se retiró la clase 'group' de aquí para mantenerlo limpio
          className="w-full relative py-10 mb-12 md:mb-20 flex items-center"
        >
          {/* Se retiró la clase de Tailwind arbitraria, la pausa la maneja el CSS puro */}
          <div className="flex w-max items-center gap-12 md:gap-20 pr-12 md:pr-20 animate-scroll-left">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[140px] md:w-[180px] h-[70px] md:h-[90px]"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* 3. VIDEO INCRUSTADO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          className="w-full max-w-[1000px] rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black aspect-video relative border border-gray-100"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/RgrcSqdC5v8?rel=0&showinfo=0&modestbranding=1"
            title="Caso de éxito Humand - Siemens"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
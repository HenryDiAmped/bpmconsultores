"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewsCarousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = t('reviews.companies', { returnObjects: true }) as Array<{
    id: number;
    name: string;
    description: string;
    url: string;
    videoId: string;
  }>;

  return (
    <section className="w-full bg-[#f7f7f7] pb-16 md:pb-24 font-sans overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 flex flex-col items-center">
        
{/* TÍTULO ELEGANTE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1250px] px-4 text-center mb-10 md:mb-14 relative z-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium text-foreground">
            {t('reviews.title')} <br className="hidden md:block" />
            <span className="text-[#002EC3] font-semibold">{t('reviews.subtitle')}</span>
          </h2>
        </motion.div>

{/* CONTENEDOR DEL ACORDEÓN HORIZONTAL (Alto reducido a 450px en Desktop y 500px en Móvil) */}
        <div className="flex flex-col md:flex-row h-[500px] md:h-[450px] w-full gap-3 md:gap-4">
          {reviews.map((review, index) => {
            const isActive = activeIndex === index;
            const indexNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={review.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => {
                   if (window.innerWidth >= 768) setActiveIndex(index);
                }}
                className={cn(
                  "group relative flex cursor-pointer flex-col overflow-hidden rounded-[2rem] transition-all duration-700 ease-out bg-zinc-900",
                  isActive
                    ? "flex-[5_5_0%] h-full shadow-2xl ring-1 ring-black/10" 
                    : "flex-[1_1_0%] h-[80px] md:h-full shadow-md hover:shadow-xl" // Reduje el alto inactivo en móvil a 80px para compensar
                )}
              >
                {/* 1. IMAGEN DE FONDO */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-cover bg-center transition-all duration-1000",
                    isActive 
                      ? "scale-100 opacity-100" 
                      : "scale-110 opacity-60 grayscale hover:opacity-80 hover:grayscale-0"
                  )}
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${review.videoId}/maxresdefault.jpg)`
                  }}
                />

                {/* 2. VIDEO AUTOPLAY */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${review.videoId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
                        title={review.name}
                        allow="autoplay; encrypted-media"
                        className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-100"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3. GRADIENTE SUTIL */}
                <div className={cn(
                  "absolute inset-0 z-10 transition-all duration-500",
                  isActive ? "bg-black/20" : "bg-black/40 group-hover:bg-black/20" 
                )} />

                {/* 4. CONTENIDO INTERNO (Ajuste de paddings para compensar el nuevo alto) */}
                <div className={cn(
                  "relative z-20 flex h-full w-full flex-col transition-all duration-500 p-3 md:p-5", // Reduje el padding general
                  isActive ? "justify-end" : "justify-end md:justify-end items-start md:items-center"
                )}>
                  
                  {/* Número superior */}
                  <div className={cn(
                    "font-mono text-sm tracking-widest transition-all duration-500",
                    isActive ? "hidden" : "text-white/60 md:absolute md:top-6 md:opacity-100 opacity-0"
                  )}>
                    {indexNumber}
                  </div>

                  {/* Título en estado inactivo */}
                  <h3 className={cn(
                    "text-white font-medium tracking-tight transition-all duration-500 whitespace-nowrap",
                    isActive 
                      ? "hidden" 
                      : "text-base md:text-lg md:-rotate-90 md:-translate-y-[60px] md:origin-bottom-left" // Subí un poco el texto vertical
                  )}>
                    {review.name}
                  </h3>

                  {/* TARJETA GLASSMORPHISM (Paddings y márgenes optimizados) */}
                  <div className={cn(
                    "w-full transition-all duration-700 delay-100 transform origin-bottom",
                    isActive ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none hidden"
                  )}>
                    {/* Se redujo de p-8 a p-5/p-6 para que no ahogue el video */}
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-[1.5rem] flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-start md:items-center w-full shadow-2xl">
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-mono text-xs font-bold tracking-widest text-white/50 bg-white/10 px-2 py-1 rounded-md">
                            {indexNumber}
                          </span>
                          <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight">
                            {review.name}
                          </h3>
                        </div>
                        {/* Se ajustó el line-clamp si el texto es muy largo para que no desborde */}
                        <p className="text-sm text-gray-200/90 leading-relaxed font-light mt-2 max-w-2xl line-clamp-2 md:line-clamp-3">
                          {review.description}
                        </p>
                      </div>
                      
                      {/* Botón interactivo (Mantiene su tamaño para no perder área de clic) */}
                      <div className="relative flex shrink-0 items-center justify-center self-end md:self-auto">
                        <span 
                          className="absolute h-full w-full rounded-full bg-white/20 animate-ping opacity-70 pointer-events-none" 
                          style={{ animationDuration: '3s' }} 
                        />
                        <a 
                          href={review.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative flex h-12 md:h-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition-all duration-500 hover:bg-[#002EC3] hover:text-white hover:px-5 w-12 md:w-14 hover:w-32 md:hover:w-36 overflow-hidden z-10"
                        >
                          <Play className="h-4 w-4 md:h-5 md:w-5 fill-current shrink-0 transition-transform duration-500 group-hover/btn:scale-110 ml-1 group-hover/btn:ml-0" /> 
                          <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-500 group-hover/btn:max-w-[100px] group-hover/btn:opacity-100 group-hover/btn:ml-2 whitespace-nowrap font-bold text-[14px] md:text-[15px] tracking-wide">
                            Ver video
                          </span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
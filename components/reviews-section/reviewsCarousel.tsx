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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#002EC3] font-medium max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* CONTENEDOR DEL ACORDEÓN HORIZONTAL */}
        <div className="flex flex-col md:flex-row h-[600px] md:h-[500px] w-full gap-3 md:gap-4">
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
                  "group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-slate-100",
                  isActive
                    ? "flex-[5_5_0%] h-full shadow-2xl ring-1 ring-black/5" 
                    : "flex-[1_1_0%] h-[100px] md:h-full shadow-md hover:shadow-lg"
                )}
              >
                {/* 1. IMAGEN DE FONDO */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-cover bg-center transition-transform duration-1000",
                    isActive ? "scale-100" : "scale-105 group-hover:scale-110"
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
                        src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${review.videoId}&playsinline=1`}
                        title={review.name}
                        allow="autoplay; encrypted-media"
                        className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-90"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3. GRADIENTES OVERLAY */}
                <div className={cn(
                  "absolute inset-0 z-10 transition-all duration-500",
                  isActive 
                    ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent" 
                    : "bg-black/40 group-hover:bg-black/20" 
                )} />

                {/* 4. CONTENIDO INTERNO */}
                <div className={cn(
                  "relative z-20 flex h-full w-full flex-col transition-all duration-500 p-6",
                  isActive ? "justify-between" : "justify-end md:justify-end items-start md:items-center"
                )}>
                  
                  {/* Número superior */}
                  <div className={cn(
                    "font-mono text-sm tracking-widest transition-all duration-500",
                    isActive ? "text-white/80 opacity-100" : "text-white/60 md:absolute md:top-6 md:opacity-100 opacity-0"
                  )}>
                    {indexNumber}
                  </div>

                  {/* Textos y Botón */}
                  <div className={cn(
                    "flex flex-col w-full transition-all duration-700 delay-100",
                    isActive ? "translate-y-0 opacity-100" : "md:absolute md:bottom-8"
                  )}>
                    
                    {/* Título */}
                    <h3 className={cn(
                      "text-white font-bold tracking-tight transition-all duration-500 origin-bottom-left whitespace-nowrap",
                      isActive 
                        ? "text-3xl md:text-4xl mb-4" 
                        : "text-xl md:text-2xl md:-rotate-90 md:translate-y-[-100px] md:-translate-x-4 mb-0"
                    )}>
                      {review.name}
                    </h3>

                    {/* Caja de descripción y Botón interactivo */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-500 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end w-full",
                      isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {/* Flex-1 asegura que el texto ocupe el espacio disponible sin saltar cuando el botón crece */}
                      <p className="flex-1 pr-4 text-sm md:text-base text-gray-200/90 leading-relaxed font-light">
                        {review.description}
                      </p>
                      
                      {/* === NUEVO BOTÓN: Píldora expansible con efecto pulso === */}
                      <div className="relative flex shrink-0 items-center justify-center">
                        {/* Efecto de sonar/latido detrás del botón */}
                        <span 
                          className="absolute h-full w-full rounded-full bg-white/40 animate-ping opacity-70 pointer-events-none" 
                          style={{ animationDuration: '3s' }} 
                        />
                        
                        {/* Botón interactivo */}
                        <a 
                          href={review.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative flex h-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all duration-500 hover:bg-white hover:text-[#002EC3] hover:px-5 w-14 hover:w-36 overflow-hidden z-10"
                        >
                          <Play className="h-5 w-5 fill-current shrink-0 transition-transform duration-500 group-hover/btn:scale-110 ml-1 group-hover/btn:ml-0" /> 
                          
                          {/* Texto oculto que se desliza al expandir */}
                          <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-500 group-hover/btn:max-w-[100px] group-hover/btn:opacity-100 group-hover/btn:ml-2 whitespace-nowrap font-bold text-[15px] tracking-wide">
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
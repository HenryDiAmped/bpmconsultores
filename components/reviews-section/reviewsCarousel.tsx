"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ReviewsCarousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Obtenemos el array de companies del JSON
  const reviews = t('reviews.companies', { returnObjects: true }) as Array<{
    id: number;
    name: string;
    description: string;
    url: string;
    videoId: string;
  }>;

  return (
    <section className="w-full bg-[#f7f7f7] py-16 font-sans">
      <div className="mx-auto w-full max-w-[1250px] px-4 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-6xl font-medium text-gray-900"
        >
          {t('reviews.title')} <br /> {t('reviews.subtitle')}
        </motion.h2>

        <div className="flex h-[320px] w-full gap-4">
          {reviews.map((review, index) => {
            const isActive = activeIndex === index;

            return (
              <Link
                key={review.id}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
                  isActive
                    ? "flex-[3_3_0%] shadow-xl" 
                    : "flex-[1_1_0%] shadow-md"
                )}
              >
                {/* 1. Imagen estática de fondo (Se muestra mientras el iframe carga o si no está activo) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${review.videoId}/maxresdefault.jpg)`
                  }}
                />

                {/* 2. Reproductor de YouTube (Solo se renderiza y reproduce cuando la tarjeta está activa) */}
                {isActive && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <iframe
                      src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${review.videoId}&playsinline=1`}
                      title={review.name}
                      allow="autoplay; encrypted-media"
                      className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-1000"
                    />
                  </div>
                )}

                {/* 3. Overlay oscuro para garantizar que el texto blanco siempre se lea bien sobre el video */}
                <div 
                  className={cn(
                    "absolute inset-0 z-10 transition-colors duration-500",
                    isActive ? "bg-black/40" : "bg-black/60" 
                  )} 
                />

                {/* 4. Contenedor de Textos y Botón (z-index mayor para estar sobre el video y el overlay) */}
                <div
                  className={cn(
                    "relative z-20 flex h-full w-full flex-col transition-all duration-500",
                    isActive ? "justify-between p-8" : "justify-center items-center p-6"
                  )}
                >
                  <h3
                    className={cn(
                      "text-white transition-all duration-300 drop-shadow-md",
                      isActive ? "text-2xl font-medium text-left w-full" : "text-xl font-medium text-center"
                    )}
                  >
                    {review.name}
                  </h3>

                  <div
                    className={cn(
                      "flex w-full items-end justify-between transition-all duration-500",
                      isActive
                        ? "translate-y-0 opacity-100 delay-150"
                        : "pointer-events-none absolute bottom-8 translate-y-8 opacity-0"
                    )}
                  >
                    <p className="max-w-[70%] text-left text-base text-gray-100 drop-shadow-md">
                      {review.description}
                    </p>
                    
                    <button className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0056D2] shadow-lg transition-transform hover:scale-110 pointer-events-auto">
                      <Play className="h-6 w-6 fill-current ml-1" /> 
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
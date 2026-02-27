"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AUTO_PLAY_DURATION = 5000;

export default function BlueFeatureSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Obtenemos el array de features del JSON
  const features = t('hero.blueSection.features', { returnObjects: true }) as Array<{
    title: string;
    content: string;
  }>;

  useEffect(() => {
    const updateInterval = 50;
    const step = (updateInterval / AUTO_PLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, updateInterval);

    return () => clearInterval(timer);
  }, [activeIndex]);

  useEffect(() => {
    if (progress >= 100) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveIndex((current) => (current + 1) % features.length);
      setProgress(0);
    }
  }, [progress, features.length]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="relative z-10 w-full px-4 pb-0 bg-[#F7F7F7]">
      <div className="max-w-[1250px] mx-auto min-h-[300px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full relative">

          {/* === TÍTULO (Fila 1) === */}
          {/* CORRECCIÓN VISUAL: Añadido lg:rounded-br-[0.8rem] para la esquina superior derecha del hueco */}
          <div className="col-span-1 lg:col-span-12 bg-[#002EC3] rounded-t-[0.8rem] lg:rounded-bl-none lg:rounded-br-[0.8rem] p-6 md:p-10 lg:pt-12 lg:px-12 lg:pb-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-white leading-tight lg:w-[65%]">
              {t('hero.blueSection.mainTitle')}
            </h2>
          </div>

          {/* === ACORDEONES (Fila 2, Izquierda) === */}
          {/* CORRECCIÓN VISUAL: Añadido h-full para igualar alturas */}
          <div className="col-span-1 lg:col-span-6 bg-[#002EC3] rounded-b-[0.8rem] lg:rounded-t-none lg:rounded-bl-[0.8rem] lg:rounded-br-[0.8rem] p-6 md:p-10 lg:pl-12 lg:pr-6 lg:pb-12 lg:pt-0 flex flex-col gap-8 h-full">
            <p className="text-white/90 text-sm md:text-base leading-relaxed pr-4">
              {t('hero.blueSection.description')}
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className="flex gap-4 cursor-pointer group"
                    onClick={() => handleItemClick(index)}
                  >
                    <div className="relative w-[3px] bg-white/30 rounded-full shrink-0 overflow-hidden"
                      style={{ minHeight: isActive ? '100%' : '36px' }}>
                      {isActive && (
                        <motion.div
                          className="absolute top-0 left-0 w-full bg-white rounded-full"
                          initial={{ height: "0%" }}
                          animate={{ height: `${progress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      )}
                    </div>

                    <div className={`flex flex-col justify-start pb-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                      <h3 className="text-white font-semibold text-[15px] leading-snug mb-2">
                        {feature.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/80 text-sm leading-relaxed pr-4 pt-1 pb-2">
                              {feature.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === CAJA CELESTE E IMAGEN (Fila 2, Derecha) === */}
          {/* CORRECCIÓN VISUAL: flex y h-full en el contenedor padre para que herede la altura del grid */}
          <div className="col-span-1 lg:col-span-6 relative p-6 pb-0 md:p-10 md:pb-0 lg:pr-0 lg:pl-4 lg:pt-4 lg:pb-0 flex flex-col h-full mt-8 lg:mt-0">

            <svg
              className="hidden lg:block absolute top-0 left-0 w-[0.8rem] h-[0.8rem] pointer-events-none"
              viewBox="0 0 100 100"
              fill="#002EC3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0 H100 A100 100 0 0 0 0 100 V0 Z" />
            </svg>

            {/* CORRECCIÓN VISUAL: flex-grow empuja la caja hasta el fondo para nivelarse con el contenedor izquierdo */}
            <div className="w-full h-full flex-grow min-h-[250px] lg:min-h-[300px] bg-[#AEC0F5] rounded-[0.8rem] relative shadow-inner overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/2d/c1/61/2dc1612f332ae062dd3436067b30e896.jpg"
                alt="Descripción de la imagen"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
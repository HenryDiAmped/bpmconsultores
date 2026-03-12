'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react'; 
import Link from 'next/link';

const SLIDES = [
  {
    video: 'https://cdn.midjourney.com/video/15b95eec-20b9-43f7-a0d8-47ba6963760d/0.mp4',
    title: 'Eficiencia Organizacional',
  },
  {
    video: 'https://cdn.midjourney.com/video/efeefaab-c593-4e11-923b-27ebdfea5194/0.mp4',
    title: 'Gestión de Personas',
  },
  {
    video: 'https://cdn.midjourney.com/video/759adac2-af5b-4b0e-97f7-7217d9b01a73/0.mp4',
    title: 'Capacidad de Escalar',
  },
];

const INTERVAL_MS = 3000;

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. CONTENEDOR DE VIDEOS */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <video
            key={slide.video}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-6 lg:px-8 max-w-[1320px] mx-auto">

        <AnimatePresence mode="wait">
          {/* H1: Reducido a text-5xl máximo y con saltos de línea forzados en desktop */}
          <motion.h1 
            key="h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] max-w-4xl mb-6 mx-auto text-center"
          >
            Transformamos los procesos de <br className="hidden md:block" />
            Recursos Humanos en un motor de <br className="hidden md:block" />
            <span className="text-white/90 font-light italic">eficiencia organizacional</span>
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {/* H2: Reducido a text-base máximo, max-w-3xl para que quepa bien en 2 líneas */}
          <motion.h2 
            key="h2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-200 font-normal mb-8 md:mb-10 max-w-3xl leading-relaxed text-center mx-auto"
          >
            Diseñamos, estandarizamos y digitalizamos los procesos de gestión de personas para <br className="hidden md:block" />
            que tu organización opere con mayor productividad, control y capacidad de escalar.
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full"
          >
            <Link href="/#contacto">
              <Button 
                className="bg-[#002EC3] hover:bg-white hover:text-[#002EC3] text-white font-medium px-8 py-6 rounded-none text-base transition-all duration-300 flex items-center gap-3 group border border-[#002EC3] hover:border-white"
              >
                Conversa con un especialista
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. BARRA INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-40 pb-4 md:pb-8">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-8">
          
          <div className="w-full flex-1 flex items-stretch gap-3 sm:gap-8 max-w-3xl">
            {SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div 
                  key={index} 
                  className="flex-1 cursor-pointer group flex flex-col justify-end"
                  onClick={() => setCurrentIndex(index)}
                >
                  <p className={`text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 mb-2 md:mb-3 text-left ${
                    isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                  }`}>
                    {slide.title}
                  </p>
                  
                  <div className="h-[2px] w-full bg-white/20 relative overflow-hidden">
                    {isActive && (
                      <motion.div
                        key={currentIndex} 
                        className="absolute top-0 left-0 h-full bg-[#002EC3]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div 
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 cursor-pointer group pb-2 md:pb-0"
          >
            <span className="hidden md:block text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
              Scroll
            </span>
            <div className="w-10 h-10 md:rounded-full md:border border-white/20 flex items-center justify-center group-hover:border-white transition-colors overflow-hidden">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-6 h-6 md:w-4 md:h-4 text-white/80 group-hover:text-white transition-colors" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
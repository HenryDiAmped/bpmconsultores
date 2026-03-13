'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATOS COMPLETOS DE LAS ESTADÍSTICAS ---
const STATS = [
  { percent: '18%', label: 'Reducción de hrs. hombre de capacitación y entrenamiento' },
  { percent: '25%', label: 'Reducción de costos de comunicación' },
  { percent: '25%', label: 'Reducción de costos de IT' },
  { percent: '34%', label: 'Reducción de esperas en la comunicación' },
  { percent: '30%', label: 'Reducción de correos electrónicos' },
  { percent: '82%', label: 'Tasa de adopción promedio' },
];

export function EstadisticaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-reproducción del carrusel cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STATS.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  // Funciones para los botones manuales
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % STATS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + STATS.length) % STATS.length);

  // Extraemos siempre 4 elementos consecutivos usando el operador módulo (%) para que el ciclo sea infinito
  const visibleStats = [
    { ...STATS[(currentIndex) % STATS.length], id: (currentIndex) % STATS.length },
    { ...STATS[(currentIndex + 1) % STATS.length], id: (currentIndex + 1) % STATS.length },
    { ...STATS[(currentIndex + 2) % STATS.length], id: (currentIndex + 2) % STATS.length },
    { ...STATS[(currentIndex + 3) % STATS.length], id: (currentIndex + 3) % STATS.length },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] flex flex-col relative border-t border-white/5 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] py-20 md:py-28 w-full">
        
        {/* --- 1. SECCIÓN SUPERIOR: TEXTO Y TARJETAS --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.3] tracking-tight">
              Humand es la plataforma <br className="hidden md:block"/>
              <span className="font-bold">todo en uno</span> que <br className="hidden md:block"/>
              centraliza: <br className="hidden md:block"/>
              <span className="text-white/90 text-2xl md:text-3xl lg:text-[2rem] mt-4 block leading-snug">
                comunicaciones, capacitaciones, nóminas y mucho más, en una sola App.
              </span>
            </h2>
          </motion.div>

          <div className="lg:w-7/12 w-full flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-white hover:bg-white/5 transition-colors duration-300 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">+1.500 empresas</h3>
              <p className="text-white/90 text-lg md:text-xl font-light">
                Usan Humand, conectando a 1.6 millones de colaboradores alrededor del mundo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-white hover:bg-white/5 transition-colors duration-300 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">+40 industrias</h3>
              <p className="text-white/90 text-lg md:text-xl font-light">
                Transformadas a nivel global, con soluciones probadas en todos los sectores y mercados.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- 2. SECCIÓN INFERIOR: CARRUSEL NEGRO DE ESTADÍSTICAS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:py-12 md:px-6 flex items-center shadow-2xl relative overflow-hidden"
        >
          {/* Botón Anterior */}
          <button 
            onClick={prevSlide}
            className="hidden lg:flex items-center justify-center pl-4 pr-2 z-20 hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronLeft className="w-16 h-16 text-[#002EC3] hover:text-white transition-colors" strokeWidth={2} />
          </button>

          {/* Grid de Métricas Animadas */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 px-2 relative h-[140px] md:h-[120px]">
            <AnimatePresence mode="popLayout">
              {visibleStats.map((stat) => (
                <motion.div 
                  key={stat.id}
                  layout
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center text-center px-2 justify-center h-full"
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tighter">
                    {stat.percent}
                  </span>
                  <p className="text-gray-300 text-xs md:text-sm leading-snug max-w-[200px] font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Botón Siguiente */}
          <button 
            onClick={nextSlide}
            className="hidden lg:flex items-center justify-center pr-4 pl-2 z-20 hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronRight className="w-16 h-16 text-[#002EC3] hover:text-white transition-colors" strokeWidth={2} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
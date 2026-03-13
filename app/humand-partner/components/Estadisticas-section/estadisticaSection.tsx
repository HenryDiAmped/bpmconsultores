'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STATS.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % STATS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + STATS.length) % STATS.length);

  const visibleStats = [
    { ...STATS[(currentIndex) % STATS.length], id: (currentIndex) % STATS.length },
    { ...STATS[(currentIndex + 1) % STATS.length], id: (currentIndex + 1) % STATS.length },
    { ...STATS[(currentIndex + 2) % STATS.length], id: (currentIndex + 2) % STATS.length },
    { ...STATS[(currentIndex + 3) % STATS.length], id: (currentIndex + 3) % STATS.length },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] flex flex-col relative border-t border-white/5 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] py-16 md:py-24 lg:py-32 w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 text-white text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight">
              Humand es la plataforma <br className="hidden md:block"/>
              <span className="font-bold">todo en uno</span> que <br className="hidden md:block"/>
              centraliza: <br className="hidden md:block"/>
              <span className="text-white/90 text-xl md:text-2xl lg:text-[2rem] mt-4 block leading-snug">
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
              className="border border-white/20 hover:border-white/50 bg-white/5 transition-all duration-300 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">+1.500 empresas</h3>
              <p className="text-white/80 text-base md:text-xl font-light">
                Usan Humand, conectando a 1.6 millones de colaboradores alrededor del mundo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-white/20 hover:border-white/50 bg-white/5 transition-all duration-300 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">+40 industrias</h3>
              <p className="text-white/80 text-base md:text-xl font-light">
                Transformadas a nivel global, con soluciones probadas en todos los sectores y mercados.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-black/80 rounded-[2rem] p-6 md:p-12 flex items-center shadow-2xl relative overflow-hidden backdrop-blur-lg"
        >
          <button onClick={prevSlide} className="hidden lg:flex items-center justify-center pl-2 pr-4 z-20 hover:scale-110 transition-transform cursor-pointer">
            <ChevronLeft className="w-12 h-12 text-[#002EC3] hover:text-white transition-colors" strokeWidth={2} />
          </button>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 relative min-h-[160px] md:min-h-[140px]">
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
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tighter">
                    {stat.percent}
                  </span>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug max-w-[180px] font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button onClick={nextSlide} className="hidden lg:flex items-center justify-center pr-2 pl-4 z-20 hover:scale-110 transition-transform cursor-pointer">
            <ChevronRight className="w-12 h-12 text-[#002EC3] hover:text-white transition-colors" strokeWidth={2} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
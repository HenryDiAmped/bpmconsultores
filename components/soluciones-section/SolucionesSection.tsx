'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  RefreshCcw, 
  Cpu, 
  Check, 
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- DATOS DE LAS TARJETAS ---
const SOLUCIONES = [
  {
    id: 1,
    title: 'Diagnóstico y Optimización de Procesos',
    desc: 'Identificamos brechas y rediseñamos procesos clave para eliminar cuellos de botella.',
    icon: Search,
    details: [
      'Mapeo y análisis de procesos',
      'Identificación de cuellos de botella',
      'Rediseño de procesos críticos',
      'Quick Wins'
    ]
  },
  {
    id: 2,
    title: 'Modelos de Gestión y KPIs',
    desc: 'Diseñamos indicadores y tableros para una toma de decisiones basada en datos.',
    icon: BarChart3,
    details: [
      'Diseño de KPIs estratégicos',
      'Dashboards en tiempo real',
      'Roles y responsabilidades',
      'Ciclos de mejora continua'
    ]
  },
  {
    id: 3,
    title: 'Transformación Organizacional',
    desc: 'Alineamos tu estructura y estrategia para fortalecer la ejecución y el cambio.',
    icon: RefreshCcw,
    details: [
      'Diseño organizacional',
      'Gestión del cambio',
      'Alineamiento cultural',
      'Capacitación de líderes'
    ]
  },
  {
    id: 4,
    title: 'Digitalización y Automatización',
    desc: 'Integramos herramientas digitales y flujos automáticos para acelerar tu trazabilidad.',
    icon: Cpu,
    details: [
      'Automatización de flujos',
      'Integración de sistemas',
      'Implementación BPM',
      'Digitalización de RRHH'
    ]
  }
];

export default function SolucionesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Bloquear scroll al abrir el modal
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  // Controles del carrusel
  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % SOLUCIONES.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + SOLUCIONES.length) % SOLUCIONES.length);
    }
  };

  // Animaciones del Header
  const tituloText = "Soluciones de consultoría en gestión por procesos";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-slate-50 relative overflow-hidden flex flex-col border-t border-gray-200">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] py-24 w-full">
        
        {/* HEADER SECTION (Alineado a la Izquierda) */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6"
          >
            {tituloText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl"
          >
            En BPM Consultores ayudamos a las organizaciones a transformar su operatividad. Maximizamos la eficiencia y preparamos su estructura para un crecimiento sostenible.
          </motion.p>
        </div>

        {/* TARJETAS GRID INICIALES (AZULES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUCIONES.map((solucion, index) => {
            const Icon = solucion.icon;
            return (
              <motion.div
                key={solucion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onClick={() => setSelectedIndex(index)}
                className="group bg-[#002EC3] hover:bg-slate-950 p-8 border border-transparent rounded-sm transition-all duration-500 flex flex-col h-full cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="mt-1 text-white bg-white/10 p-2.5 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors duration-500">
                    <Icon strokeWidth={1.5} size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight relative z-10">
                  {solucion.title}
                </h3>

                <p className="text-blue-100/80 group-hover:text-gray-400 text-sm mb-8 flex-grow transition-colors duration-500 font-light relative z-10">
                  {solucion.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-white/20 group-hover:border-white/10 flex items-center justify-between text-white font-medium text-xs uppercase tracking-widest transition-colors duration-500 relative z-10">
                  Conocer más
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================= */}
      {/* MODAL CARRUSEL (EXPERIENCIA 3D COVERFLOW) */}
      {/* ========================================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)} // <- Cierra al hacer clic en el fondo oscuro
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm overflow-hidden"
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 bg-white/5 hover:bg-white/10 p-3 rounded-full"
            >
              <X strokeWidth={1.5} size={28} />
            </button>

            {/* Contenedor del Carrusel 3D */}
            <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px]">
              
              {SOLUCIONES.map((solucion, index) => {
                const isActive = index === selectedIndex;
                const isLeft = index === (selectedIndex - 1 + SOLUCIONES.length) % SOLUCIONES.length;
                const isRight = index === (selectedIndex + 1) % SOLUCIONES.length;

                // Definimos la animación de cada tarjeta según su posición
                let animateProps = { x: "0%", scale: 0.7, opacity: 0, zIndex: 0 };
                
                if (isActive) {
                  animateProps = { x: "0%", scale: 1, opacity: 1, zIndex: 50 };
                } else if (isLeft) {
                  animateProps = { x: "-105%", scale: 0.85, opacity: 0.4, zIndex: 40 };
                } else if (isRight) {
                  animateProps = { x: "105%", scale: 0.85, opacity: 0.4, zIndex: 40 };
                }

                return (
                  <motion.div
                    key={solucion.id}
                    animate={animateProps}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => {
                      e.stopPropagation(); // <- Evita que al dar clic en la tarjeta se cierre el fondo
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                    // Dimensiones estilizadas para modo "portrait"
                    className={`absolute w-full max-w-[360px] h-[540px] rounded-sm shadow-2xl overflow-hidden cursor-pointer flex flex-col ${
                      isActive ? 'bg-white' : 'bg-[#002EC3]'
                    }`}
                  >
                    
                    {isActive ? (
                      /* --- TARJETA ACTIVA (BLANCA) --- */
                      <>
                        <div className="h-1.5 w-full bg-[#002EC3]" />
                        <div className="p-8 flex flex-col h-full">
                          
                          <div className="flex items-center justify-between mb-8">
                            <div className="bg-blue-50 text-[#002EC3] p-3 rounded-lg">
                              <solucion.icon strokeWidth={1.5} size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              {String(index + 1).padStart(2, '0')} / {String(SOLUCIONES.length).padStart(2, '0')}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                            {solucion.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-10 leading-relaxed">
                            {solucion.desc}
                          </p>

                          <div className="mb-auto">
                            <span className="text-[10px] font-bold text-[#002EC3] uppercase tracking-widest block mb-5">
                              Incluye:
                            </span>
                            <div className="flex flex-col gap-4">
                              {solucion.details.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <Check strokeWidth={2.5} className="w-4 h-4 text-[#002EC3] shrink-0 mt-[2px]" />
                                  <span className="text-sm font-medium text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                        </div>
                      </>
                    ) : (
                      /* --- TARJETAS INACTIVAS LATERALES (AZULES) --- */
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#002EC3] relative">
                         {/* Efecto de cristal oscuro sobre las tarjetas inactivas */}
                         <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply pointer-events-none" />
                         <solucion.icon strokeWidth={1} size={64} className="text-white/30 mb-6 relative z-10" />
                         <h3 className="text-xl font-bold text-white/50 relative z-10">
                           {solucion.title}
                         </h3>
                      </div>
                    )}

                  </motion.div>
                );
              })}
            </div>

            {/* Controles inferiores manuales con stopPropagation */}
            <div className="flex items-center gap-6 mt-8 z-50">
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }} 
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
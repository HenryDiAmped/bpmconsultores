'use client';

import { motion } from 'framer-motion';
import { Award, Users, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- DATOS DEL VALOR AÑADIDO ---
const VALORES = [
  {
    num: '01',
    title: 'Excelencia metodológica',
    desc: 'Aplicamos marcos de referencia internacionales en procesos, talento y transformación organizacional, adaptados a la realidad de cada empresa.',
    icon: Award,
  },
  {
    num: '02',
    title: 'Acompañamiento experto',
    desc: 'Nuestro equipo combina experiencia ejecutiva, visión estratégica y dominio técnico para asegurar implementaciones exitosas.',
    icon: Users,
  },
  {
    num: '03',
    title: 'Innovación aplicada',
    desc: 'Incorporamos herramientas digitales y soluciones como HUMAND para potenciar la gestión del talento y la toma de decisiones basada en datos.',
    icon: Lightbulb,
  }
];

// --- DATOS TRUST BAR ---
const TRUST_ITEMS = [
  "Metodología Comprobada",
  "Acompañamiento Estratégico",
  "Resultados Sostenibles",
  "Transformación Digital",
  "Eficiencia Operativa"
];

export default function ValorSection() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] flex flex-col relative border-t border-white/5">
      
      {/* 1. TRUST BAR (MARQUEE INFINITO) */}
      <div className="w-full bg-black/40 backdrop-blur-sm py-4 overflow-hidden flex whitespace-nowrap border-b border-white/10">
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Duplicamos el array 3 veces para asegurar un scroll continuo sin cortes */}
          {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-white/90 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-none rotate-45" /> 
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. EL VALOR AÑADIDO (DISEÑO EDITORIAL OSCURO CORREGIDO) */}
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] py-24 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda (Sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="overflow-hidden mb-6">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]"
              >
                El Valor Añadido de <br />
                <span className="text-blue-300">BPM Consultores</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-blue-100/70 font-light leading-relaxed"
            >
              No solo entregamos un diagnóstico; nos aseguramos de que los resultados perduren a través del tiempo, creando bases sólidas para tu escalabilidad.
            </motion.p>
          </div>

          {/* Columna Derecha (Lista Editorial sin intención de clic) */}
          <div className="lg:w-2/3 w-full flex flex-col">
            <Separator className="bg-white/10" />
            
            {VALORES.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative flex gap-8 md:gap-12 py-10" // Quitamos cursor-pointer y reordenamos flex
                >
                  {/* Fondo sutil que aparece en hover para indicar enfoque */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 -mx-6 px-6 rounded-sm" />

                  {/* Número grande a la izquierda */}
                  <div className="text-4xl md:text-5xl font-light text-white/10 group-hover:text-white transition-colors duration-500 font-mono w-16 shrink-0 pt-1">
                    {valor.num}
                  </div>

                  {/* Contenido (Icono + Texto) */}
                  <div className="flex-1 flex gap-6 items-start">
                    <div className="shrink-0 pt-2 hidden md:block">
                      <Icon strokeWidth={1} className="text-blue-400 group-hover:text-white w-7 h-7 transition-colors" />
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-500 leading-tight">
                        {valor.title}
                      </h3>
                      <p className="text-blue-100/60 text-sm leading-relaxed transition-colors duration-500">
                        {valor.desc}
                      </p>
                    </div>
                  </div>

                  {/* Línea inferior animada (se pinta de blanco en hover) */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
                    <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
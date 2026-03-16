'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Lightbulb } from 'lucide-react';

export default function NosotrosPage() {
  // Animaciones suaves de entrada
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#002EC3] selection:text-white">
      
      {/* --- SECCIÓN 1: CABECERA Y DECLARACIÓN PRINCIPAL --- */}
      <section className="pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#002EC3] mb-6">
              Descripción Corporativa – BPM Consultores {/* [cite: 1] */}
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight lg:leading-[1.2]">
              BPM Consultores es una firma especializada en consultoría empresarial que acompaña a organizaciones en la optimización de sus procesos, la gestión estratégica del talento y la adopción de soluciones digitales que impulsan eficiencia, control y crecimiento sostenible. {/* [cite: 2] */}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN 2: NUESTRO ENFOQUE Y EXPERIENCIA --- */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-[#002EC3] mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Nuestro enfoque combina metodologías de clase mundial, análisis profundo del negocio y una ejecución cercana que garantiza resultados medibles en el corto y largo plazo. {/* [cite: 3] */}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-gray-300 mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Con más de una década de experiencia en sectores altamente competitivos, BPM Consultores se ha consolidado como un aliado estratégico para empresas que buscan transformar su operación, fortalecer sus capacidades internas y acelerar su madurez organizacional. {/* [cite: 4] */}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-gray-300 mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Nuestro trabajo integra consultoría, tecnología y gestión del cambio, permitiendo que cada cliente avance hacia modelos de operación más ágiles, eficientes y orientados a valor. {/* [cite: 5] */}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN 3: LOS TRES PILARES --- */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestra propuesta se sustenta en tres pilares: {/* [cite: 6] */}
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16"
          >
            {/* Pilar 1 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002EC3] flex items-center justify-center mb-6">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excelencia metodológica:</h3> {/* [cite: 7] */}
              <p className="text-gray-600 font-light leading-relaxed">
                aplicamos marcos de referencia internacionales en procesos, talento y transformación organizacional, adaptados a la realidad de cada empresa. {/* [cite: 7] */}
              </p>
            </motion.div>

            {/* Pilar 2 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002EC3] flex items-center justify-center mb-6">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acompañamiento experto:</h3> {/* [cite: 8] */}
              <p className="text-gray-600 font-light leading-relaxed">
                nuestro equipo combina experiencia ejecutiva, visión estratégica y dominio técnico para asegurar implementaciones exitosas. {/* [cite: 8] */}
              </p>
            </motion.div>

            {/* Pilar 3 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002EC3] flex items-center justify-center mb-6">
                <Lightbulb size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovación aplicada:</h3> {/* [cite: 9] */}
              <p className="text-gray-600 font-light leading-relaxed">
                incorporamos herramientas digitales y soluciones como HUMAND para potenciar la gestión del talento y la toma de decisiones basada en datos. {/* [cite: 9] */}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN 4: CIERRE Y VISIÓN (BANNER DESTACADO) --- */}
      <section className="py-24 bg-[#002EC3] text-white px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              "En BPM Consultores creemos en relaciones de largo plazo, construidas sobre confianza, transparencia y resultados." {/* [cite: 10] */}
            </p>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
            <p className="text-lg md:text-xl font-light text-blue-100 leading-relaxed">
              Cada proyecto es una oportunidad para elevar el desempeño de nuestros clientes y fortalecer su capacidad de competir en mercados dinámicos y exigentes. {/* [cite: 11] */}
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
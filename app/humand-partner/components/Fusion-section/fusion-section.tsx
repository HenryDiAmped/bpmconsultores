'use client';

import { motion } from 'framer-motion';
import { Plus, Equal } from 'lucide-react';

export function FusionSection() {
  // Contenedor principal: controla que los hijos aparezcan uno tras otro (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Tiempo de espera entre cada elemento de izquierda a derecha
        delayChildren: 0.2,
      }
    }
  };

  // Animación base: Ahora entran desde la izquierda (x: -50) hacia su posición original
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  // Animación del resultado: Hereda el flujo de izquierda a derecha pero añade un ligero efecto de escala
  const resultVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      // Al no poner 'delay' aquí, respeta el turno exacto del staggerChildren (será el último en entrar)
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] relative border-t border-white/5 py-24 md:py-32 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Elementos decorativos de fondo para darle profundidad */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] w-full relative z-10">
        
        {/* Título de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            La fórmula de nuestro <span className="font-bold text-blue-400">éxito</span>
          </h2>
        </motion.div>

        {/* CONTENEDOR DE LA ECUACIÓN (Activa la secuencia de izquierda a derecha) */}
        <motion.div 
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12"
        >
          
          {/* 1. TECNOLOGÍA */}
          <motion.div 
            variants={itemVariants as any}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-blue-400/50 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] group cursor-pointer"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 group-hover:text-white transition-colors duration-300">
              Tecnología
            </h3>
          </motion.div>

          {/* SÍMBOLO MÁS */}
          <motion.div variants={itemVariants as any} className="text-white/70">
            <Plus strokeWidth={2} className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>

          {/* 2. CONSULTORÍA */}
          <motion.div 
            variants={itemVariants as any}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group cursor-pointer"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-blue-200 transition-colors duration-300">
              Consultoría
            </h3>
          </motion.div>

          {/* SÍMBOLO IGUAL */}
          <motion.div variants={itemVariants as any} className="text-white/70 rotate-90 lg:rotate-0">
            <Equal strokeWidth={2} className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>

          {/* 3. ESTRATEGIA Y RESULTADOS (EL GRAN RESULTADO) */}
          <motion.div 
            variants={resultVariants as any}
            className="relative"
          >
            {/* Separé la animación continua del "brillo" en un contenedor interno 
              para que no interfiera con la animación de entrada (variantes) 
            */}
            <motion.div
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 60px rgba(59, 130, 246, 0.4)", "0px 0px 0px rgba(59, 130, 246, 0)"] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-blue-500 bg-blue-600/10 backdrop-blur-xl flex flex-col items-center justify-center text-center px-8 relative z-20 mt-4 lg:mt-0"
            >
              {/* Círculo interno decorativo punteado */}
              <div className="absolute inset-2 rounded-full border border-blue-400/30 border-dashed animate-[spin_20s_linear_infinite]" />
              
              <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight relative z-10">
                Estrategia y
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mt-1">
                  resultados
                </span>
              </h3>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
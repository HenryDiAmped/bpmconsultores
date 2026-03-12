'use client';

import { motion } from 'framer-motion';

export function TrayectoriaSection() {
  // --- VARIANTES DE ANIMACIÓN ---
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.3, 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    // Contenedor principal con el fondo azul oscuro
    <section className="w-full bg-[#002EC3] py-20 md:py-32 px-6 lg:px-8 flex justify-center items-center overflow-hidden">
      
      {/* Tarjeta interior clara */}
      <motion.div
        variants={containerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-[1200px] bg-[#F8F9FA] rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-12 md:mb-14">
          
          {/* LADO IZQUIERDO: Textos */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            <motion.p variants={itemVariants as any} className="text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-[#002EC3]">
              Contamos con una <span className="font-bold">trayectoria de más de 7 años</span> impulsando la transformación y el talento en las organizaciones.
            </motion.p>
            
            <motion.p variants={itemVariants as any} className="text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-[#002EC3]">
              En lugar de soluciones genéricas, nos enfocamos en <span className="font-bold">obtener resultados medibles</span> a través de un acompañamiento estratégico que nunca pierde de vista el <span className="font-bold">factor humano</span>, asegurando que cada cambio sea adoptado con éxito por toda la organización.
            </motion.p>
          </div>

          {/* LADO DERECHO: Imagen */}
          <motion.div 
            variants={itemVariants as any}
            className="w-full lg:w-1/2"
          >
            {/* Nota: Asegúrate de colocar la imagen correcta en la ruta o cambiar el src */}
            <div className="w-full aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-md">
              <img 
                src="/equipo-consultores.jpg" 
                alt="Equipo de consultores trabajando" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

        {/* BOTÓN INFERIOR */}
        <motion.div 
          variants={itemVariants as any}
          className="flex justify-center"
        >
          <a 
            href="#contacto" // Cambia este enlace a donde necesites que vaya el botón
            className="bg-[#1A41D3] hover:bg-[#112CA0] text-white text-base md:text-lg font-semibold py-4 px-8 md:px-12 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            Solicita una Demo guiada por nuestros consultores
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';

export function PartnerHero() {
  const partners = [
    { src: "https://humandcdn.b-cdn.net/wp-content/uploads/2023/05/YC.png", alt: "Y Combinator", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { src: "https://humandcdn.b-cdn.net/wp-content/uploads/2023/05/Amazon.png", alt: "Amazon", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
    { src: "https://humandcdn.b-cdn.net/wp-content/uploads/2023/05/IBM.png", alt: "IBM", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { src: "https://humandcdn.b-cdn.net/wp-content/uploads/2023/05/Microsoft.png", alt: "Microsoft", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" }
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-[#F8F9FA] overflow-hidden py-20">
      
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#002EC3]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-8 z-10 flex flex-col items-center">
        
        {/* 1. TEXTOS CENTRADOS POR ENCIMA */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24 w-full"
        >

          <h1 className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-3 text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            <span className="whitespace-nowrap">BPM Consultores</span>
            <span className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-slate-400 font-normal">
              + 
              <img 
                src="https://humandcdn.b-cdn.net/wp-content/uploads/2024/10/logo-humand-blue.svg" 
                alt="Humand" 
                className="h-8 md:h-10 lg:h-11 object-contain"
              />
            </span>
          </h1>

          {/* Textos integrados y optimizados para UX */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              <span className="text-[#002EC3] font-semibold">Digitaliza la experiencia</span> de tus colaboradores y transforma la comunicación de tu equipo.
            </p>
            
            <div className="flex items-center gap-2 text-base md:text-lg font-medium text-slate-800">
              <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Implementación experta, configuración de flujos y capacitación garantizada.</span>
            </div>
          </div>
        </motion.div>

        {/* 2. DOS COLUMNAS: MOCKUP Y ESPIRAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 w-full items-center justify-items-center">
          
          {/* Columna Izquierda: Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center items-center w-full relative"
          >
            {/* Resplandor azul sutil detrás del teléfono */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[500px] bg-[#002EC3]/15 rounded-full blur-[60px] -z-10"></div>
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[260px] h-[520px] bg-slate-950 rounded-[2.8rem] p-3 shadow-[0_0_50px_-12px_rgba(0,46,195,0.3)] ring-1 ring-slate-800"
            >
              <div className="relative w-full h-full bg-white overflow-hidden rounded-[2.2rem]">
                <img
                  src="https://res.cloudinary.com/dmgufgga4/image/upload/v1773382968/apps_ju0lef.jpg"
                  alt="App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 inset-x-0 h-6 w-24 bg-slate-950 rounded-b-2xl mx-auto z-20"></div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Espiral Orbital Ajustada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center items-center w-full"
          >
            <div className="relative flex items-center justify-center w-[260px] h-[260px] md:w-[320px] md:h-[320px] mt-12 md:mt-0">
              
              {/* Nodo Central (Solo texto tipográfico) */}
              <div className="absolute z-20 text-center flex items-center justify-center">
                <span className="text-[14px] md:text-base font-extrabold text-[#002EC3] uppercase tracking-[0.4em] drop-shadow-sm">
                  Partners
                </span>
              </div>

              {/* Anillo decorativo interior */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border border-[#002EC3]/20 border-dashed"
              />

              {/* Anillo Principal */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-2 border-[#002EC3]/15 border-dashed"
              >
                {partners.map((partner, idx) => (
                  <div key={idx} className={`absolute ${partner.pos}`}>
                    
                    {/* Burbujas de Logos SIN FONDO y GRANDES */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center p-2 group cursor-pointer"
                    >
                      <img 
                        src={partner.src} 
                        alt={partner.alt} 
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_15px_25px_rgba(0,46,195,0.15)] group-hover:drop-shadow-[0_20px_35px_rgba(0,46,195,0.3)]" 
                      />
                    </motion.div>

                  </div>
                ))}
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
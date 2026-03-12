'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap } from 'lucide-react';

export default function HumandSection() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden py-16 lg:py-24 border-t border-gray-200">
      
      {/* --- FONDOS Y EFECTOS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-[#002EC3]/10 blur-[100px] rounded-full opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto px-6 lg:px-8 max-w-[1200px] relative z-10">
{/* --- CABECERA --- */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 gap-y-2 text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-gray-900 tracking-tight leading-tight mb-6 w-full"
          >
            <span className="whitespace-nowrap md:whitespace-normal">
              Transformación Digital con
            </span>
            <img 
              src="https://humandcdn.b-cdn.net/wp-content/uploads/2024/10/logo-humand-blue.svg" 
              alt="Humand Logo" 
              className="h-8 md:h-10 lg:h-[3rem] w-auto object-contain shrink-0 -translate-y-1 -md:translate-y-2"
            />
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Como <strong className="text-[#002EC3] font-semibold">Partners e Implementadores Oficiales</strong>, integramos la plataforma líder para conectar a tu equipo y automatizar tu cultura organizacional.
          </motion.p>
        </div>
        {/* --- GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* --- TARJETA CTA --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-2 border-[#002EC3] rounded-[1.2rem] bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-8 md:py-10 flex flex-col items-center text-center justify-center shadow-sm"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#002EC3] font-light leading-relaxed mb-4">
              Llevamos tus procesos optimizados a la <br className="hidden sm:block" />
              palma de la mano de tus colaboradores.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#002EC3] font-bold mb-6 whitespace-nowrap">
              Menos burocracia, más comunicación.
            </p>

            <Link href="/humand-partner">
              <Button className="bg-[#1D4ED8] hover:bg-blue-800 text-white font-semibold text-base md:text-lg px-8 py-5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                Descubrir Humand
              </Button>
            </Link>
          </motion.div>

          {/* --- MOCKUP DERECHO REDUCIDO --- */}
          <div className="relative h-[340px] lg:h-[420px] flex items-center justify-center">
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] border border-gray-200 rounded-full flex items-center justify-center"
            >
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] border border-[#002EC3]/10 rounded-full bg-[#002EC3]/5" />
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full max-w-[200px] md:max-w-[230px] drop-shadow-2xl"
            >
              <div className="relative aspect-[1/2] w-full rounded-[1.6rem] border-[5px] border-slate-900 bg-white overflow-hidden shadow-2xl">
                
                {/* <Image
                  src="/humand-mockup.png"
                  alt="App Humand Interface"
                  fill
                  className="object-cover"
                /> */}

                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                  <span className="text-gray-400 text-[10px] font-medium text-center px-4">
                    Espacio para la imagen de Humand
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/70 pointer-events-none mix-blend-overlay" />
              </div>

              {/* Tarjeta flotante 1 */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-5 top-14 bg-white/90 backdrop-blur-md border border-gray-100 p-2.5 rounded-xl shadow-lg flex items-center gap-2"
              >
                <div className="bg-blue-50 p-1.5 rounded-lg text-[#002EC3]">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-gray-900 text-[10px] font-bold">App Móvil</p>
                  <p className="text-gray-500 text-[8px]">100% Accesible</p>
                </div>
              </motion.div>

              {/* Tarjeta flotante 2 */}
              <motion.div 
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-6 bottom-20 bg-white/90 backdrop-blur-md border border-gray-100 p-2.5 rounded-xl shadow-lg flex items-center gap-2"
              >
                <div className="bg-[#002EC3] p-1.5 rounded-lg text-white">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-gray-900 text-[10px] font-bold">Procesos Ágiles</p>
                  <p className="text-[#002EC3] text-[8px] font-medium">Automatizados</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
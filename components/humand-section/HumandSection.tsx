'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// import Image from 'next/image'; // Descomentar cuando tengas la imagen
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Zap, ShieldCheck } from 'lucide-react';

export default function HumandSection() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden py-16 lg:py-24 border-t border-gray-200">
      
      {/* --- FONDOS Y EFECTOS (Versión Clara) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Resplandor azul suave */}
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-[#002EC3]/10 blur-[100px] rounded-full opacity-60 mix-blend-multiply" />
        
        {/* Patrón de cuadrícula muy sutil para dar toque técnico en fondo claro */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto px-6 lg:px-8 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* --- COLUMNA IZQUIERDA: CONTENIDO TEXTUAL --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <ShieldCheck className="w-4 h-4 text-[#002EC3]" />
              <span className="text-[#002EC3] font-bold tracking-widest text-[10px] md:text-xs uppercase">
                Partners e Implementadores Oficiales
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-5"
            >
              Transformación Digital <br />
              con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002EC3] to-blue-500">Humand</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-4 max-w-lg"
            >
              Integramos la plataforma líder para conectar a tu equipo y automatizar tu cultura organizacional.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-500 max-w-md mb-8"
            >
              Llevamos tus procesos optimizados a la palma de la mano de tus colaboradores. Menos burocracia, más comunicación y trazabilidad en tiempo real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/humand-partner">
                <Button className="bg-[#002EC3] hover:bg-black hover:text-white text-white font-semibold px-6 py-5 rounded-none text-sm transition-all duration-300 flex items-center gap-2 group border border-[#002EC3] hover:border-black shadow-md hover:shadow-lg">
                  Descubrir Humand
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* --- COLUMNA DERECHA: IMAGEN / MOCKUP --- */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] flex items-center justify-center">
            
            {/* Círculo decorativo detrás del móvil */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-gray-200 rounded-full flex items-center justify-center"
            >
              <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] border border-[#002EC3]/10 rounded-full bg-[#002EC3]/5" />
            </motion.div>

            {/* Mockup Principal Flotante (Tamaño Reducido) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full max-w-[240px] md:max-w-[280px] drop-shadow-2xl"
            >
              <div className="relative aspect-[1/2] w-full rounded-[2rem] border-[6px] border-slate-900 bg-white overflow-hidden shadow-2xl">
                
                {/* CUANDO TENGAS LA IMAGEN:
                  1. Descomenta el import de Image arriba.
                  2. Descomenta este bloque y borra el div temporal de abajo.
                */}
                {/* <Image
                  src="/humand-mockup.png" 
                  alt="App Humand Interface"
                  fill
                  className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                /> */}
                
                {/* Fondo temporal para evitar el error 404 */}
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                   <span className="text-gray-400 text-xs font-medium text-center px-4">Espacio para la imagen de Humand</span>
                </div>

                {/* Brillo sobre el cristal de la pantalla */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/70 pointer-events-none mix-blend-overlay" />
              </div>

              {/* Tarjeta flotante superpuesta 1 (Estilo Claro) */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-16 bg-white/90 backdrop-blur-md border border-gray-100 p-3 rounded-xl shadow-lg flex items-center gap-2.5"
              >
                <div className="bg-blue-50 p-1.5 rounded-lg text-[#002EC3]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-900 text-[11px] font-bold">App Móvil</p>
                  <p className="text-gray-500 text-[9px]">100% Accesible</p>
                </div>
              </motion.div>

              {/* Tarjeta flotante superpuesta 2 (Estilo Claro) */}
              <motion.div 
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-8 bottom-24 bg-white/90 backdrop-blur-md border border-gray-100 p-3 rounded-xl shadow-lg flex items-center gap-2.5"
              >
                <div className="bg-[#002EC3] p-1.5 rounded-lg text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-900 text-[11px] font-bold">Procesos Ágiles</p>
                  <p className="text-[#002EC3] text-[9px] font-medium">Automatizados</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
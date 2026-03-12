'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Mail, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";

// --- ANIMACIONES ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 relative overflow-hidden border-t border-white/10 pt-20 lg:pt-28 pb-8">
      
      {/* --- EFECTOS DE FONDO (Del diseño oscuro original) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Brillo superior sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#002EC3]/50 to-transparent" />
        {/* Resplandor radial de fondo */}
        <div className="absolute -top-[200px] right-[-10%] w-[600px] h-[600px] bg-[#002EC3] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center mb-16"
        >
          
          {/* ========================================= */}
          {/* COLUMNA 1: CONTÁCTANOS                    */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight">Contáctanos</h2>
            
            <div className="flex flex-col space-y-5 text-[15px] font-light text-gray-300">
              
              {/* WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#002EC3] group-hover:border-[#002EC3] transition-all duration-300 shrink-0">
                  <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <a href="tel:+51999999999" className="hover:text-white transition-colors">
                  Whatsapp: +51 999 999 999
                </a>
              </div>

              {/* Correos */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#002EC3] group-hover:border-[#002EC3] transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col leading-relaxed mt-1">
                  <span className="text-gray-500 mb-1 font-medium text-sm uppercase tracking-wider">Correo</span>
                  <a href="mailto:informes@bpmconsultores.com" className="hover:text-white transition-colors">
                    informes@bpmconsultores.com
                  </a>
                  <a href="mailto:humand@bpmconsultores.com" className="hover:text-white transition-colors mt-0.5">
                    humand@bpmconsultores.com
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 2: LOGO CENTRAL                   */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex justify-center items-center py-10 md:py-0 border-y md:border-y-0 md:border-x border-white/10">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-500">
              <Image 
                src="/logo.png" 
                alt="BPM Consultores Logo" 
                width={220} 
                height={70} 
                className="w-auto h-16 md:h-20 brightness-0 invert object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 3: REDES SOCIALES Y UBICACIÓN     */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col items-start md:items-end text-left md:text-right">
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-5 text-white leading-tight">
                Síguenos en nuestras<br />redes sociales:
              </h3>
              <div className="flex items-center justify-start md:justify-end gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-white">Ubicación:</h3>
              <p className="text-[15px] font-light text-gray-400">Lima, Perú</p>
            </div>

          </motion.div>

        </motion.div>

        {/* ========================================= */}
        {/* SECCIÓN INFERIOR: Copyright               */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 font-light tracking-wide">
            &copy; {currentYear} BPM Consultores, Inc. Todos los derechos reservados.
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
}